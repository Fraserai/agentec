import { NextResponse } from "next/server";
import {
  isLikelySpamInquiry,
  validateInquiryPayload,
  type InquiryErrors,
  type ValidInquiry,
} from "@/lib/inquiry";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const maxBodyBytes = 64 * 1024;
const rateLimitWindowMs = 60 * 1000;
const maxRequestsPerWindow = 5;
const successMessage =
  "Thanks. Your inquiry has been received and AGENTEC will respond shortly.";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type InquiryApiResponse = {
  ok: boolean;
  message: string;
  errors?: InquiryErrors;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return json(
      {
        ok: false,
        message: "This inquiry could not be accepted from that origin.",
      },
      403,
    );
  }

  const rateLimit = checkRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return json(
      {
        ok: false,
        message: "Too many inquiry attempts. Please try again in a minute.",
      },
      429,
      {
        "Retry-After": String(Math.ceil(rateLimit.retryAfterMs / 1000)),
      },
    );
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return json(
      {
        ok: false,
        message: "Send inquiry data as JSON.",
      },
      415,
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return json(
      {
        ok: false,
        message: "Inquiry data is too large.",
      },
      413,
    );
  }

  let payload: unknown;

  try {
    const text = await request.text();
    if (text.length > maxBodyBytes) {
      return json(
        {
          ok: false,
          message: "Inquiry data is too large.",
        },
        413,
      );
    }

    payload = JSON.parse(text);
  } catch {
    return json(
      {
        ok: false,
        message: "Inquiry data could not be read.",
      },
      400,
    );
  }

  if (isLikelySpamInquiry(payload)) {
    return json(
      {
        ok: true,
        message: successMessage,
      },
      202,
    );
  }

  const validation = validateInquiryPayload(payload);
  if (!validation.success) {
    return json(
      {
        ok: false,
        message: "Please check the highlighted fields.",
        errors: validation.errors,
      },
      400,
    );
  }

  try {
    await deliverInquiry(validation.data, request);
  } catch (error) {
    console.error("AGENTEC inquiry delivery failed", error);

    return json(
      {
        ok: false,
        message:
          "The inquiry could not be sent right now. Please try again shortly.",
      },
      502,
    );
  }

  return json(
    {
      ok: true,
      message: successMessage,
    },
    201,
  );
}

function json(
  body: InquiryApiResponse,
  status: number,
  headers?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers,
  });
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "local";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    });

    cleanupRateLimitStore(now);

    return {
      allowed: true,
      retryAfterMs: 0,
    };
  }

  if (existing.count >= maxRequestsPerWindow) {
    return {
      allowed: false,
      retryAfterMs: existing.resetAt - now,
    };
  }

  existing.count += 1;

  return {
    allowed: true,
    retryAfterMs: 0,
  };
}

function cleanupRateLimitStore(now: number) {
  if (rateLimitStore.size < 1000) {
    return;
  }

  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetAt <= now) {
      rateLimitStore.delete(key);
    }
  }
}

async function deliverInquiry(inquiry: ValidInquiry, request: Request) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  const payload = {
    ...inquiry,
    source: "agentec.com.au",
    submittedAt: new Date().toISOString(),
    pageUrl: request.headers.get("referer"),
    userAgent: request.headers.get("user-agent"),
  };

  if (!webhookUrl) {
    console.info("AGENTEC inquiry received", payload);
    return;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (process.env.INQUIRY_WEBHOOK_SECRET) {
    headers.Authorization = `Bearer ${process.env.INQUIRY_WEBHOOK_SECRET}`;
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Inquiry webhook responded with ${response.status}`);
  }
}
