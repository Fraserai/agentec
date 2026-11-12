export const inquiryProjectTypes = [
  "AI agent strategy",
  "Agent implementation",
  "Managed agent support",
  "Not sure yet",
] as const;

export type InquiryProjectType = (typeof inquiryProjectTypes)[number];

export type InquiryPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: InquiryProjectType | "";
  message: string;
  consent: boolean;
  website?: string;
};

export type ValidInquiry = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  projectType: InquiryProjectType;
  message: string;
  consent: true;
};

export type InquiryField = keyof InquiryPayload;
export type InquiryErrors = Partial<Record<InquiryField, string>>;

type InquiryValidationResult =
  | {
      success: true;
      data: ValidInquiry;
      errors: InquiryErrors;
    }
  | {
      success: false;
      data: null;
      errors: InquiryErrors;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emptyInquiry: InquiryPayload = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  message: "",
  consent: false,
  website: "",
};

export function isLikelySpamInquiry(payload: unknown) {
  if (!isRecord(payload)) {
    return false;
  }

  return toStringValue(payload.website).trim().length > 0;
}

export function validateInquiryPayload(
  payload: unknown,
): InquiryValidationResult {
  const source = isRecord(payload) ? payload : {};
  const name = normalizeWhitespace(toStringValue(source.name));
  const email = toStringValue(source.email).trim().toLowerCase();
  const company = normalizeWhitespace(toStringValue(source.company));
  const phone = normalizeWhitespace(toStringValue(source.phone));
  const message = normalizeWhitespace(toStringValue(source.message));
  const projectType = toStringValue(source.projectType);
  const consent = source.consent === true || source.consent === "true";
  const errors: InquiryErrors = {};

  if (name.length < 2) {
    errors.name = "Enter your name.";
  } else if (name.length > 80) {
    errors.name = "Use 80 characters or fewer.";
  }

  if (!email) {
    errors.email = "Enter your email address.";
  } else if (email.length > 160 || !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (company.length > 120) {
    errors.company = "Use 120 characters or fewer.";
  }

  if (phone.length > 40) {
    errors.phone = "Use 40 characters or fewer.";
  }

  if (!isInquiryProjectType(projectType)) {
    errors.projectType = "Choose the closest fit.";
  }

  if (message.length < 20) {
    errors.message = "Share a little more about what you need.";
  } else if (message.length > 1200) {
    errors.message = "Use 1,200 characters or fewer.";
  }

  if (!consent) {
    errors.consent = "Confirm AGENTEC can respond to your inquiry.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      data: null,
      errors,
    };
  }

  return {
    success: true,
    data: {
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      projectType,
      message,
      consent: true,
    },
    errors: {},
  };
}

function isInquiryProjectType(value: string): value is InquiryProjectType {
  return inquiryProjectTypes.includes(value as InquiryProjectType);
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
