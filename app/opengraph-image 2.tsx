import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          background: "#0a1045",
          color: "#fffce8",
          padding: "56px",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,252,232,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,252,232,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            opacity: 0.22,
            maskImage:
              "radial-gradient(circle at center, black 42%, transparent 88%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 72,
            right: 96,
            width: 220,
            height: 220,
            borderRadius: 999,
            background: "rgba(255,252,232,0.08)",
            filter: "blur(52px)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,252,232,0.12)",
            borderRadius: 32,
            padding: "44px",
            background: "rgba(255,252,232,0.04)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 18,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              opacity: 0.74,
            }}
          >
            <span>AGENTEC</span>
            <span>Brisbane</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 82,
                lineHeight: 0.95,
                fontWeight: 600,
                letterSpacing: "-0.06em",
                maxWidth: 760,
              }}
            >
              Operational AI agents for Australian SMEs.
            </div>
            <div
              style={{
                fontSize: 28,
                lineHeight: 1.5,
                maxWidth: 760,
                opacity: 0.76,
              }}
            >
              Strategy, solutions, and managed implementation for businesses
              adopting AI agents properly.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {["OpenAI Codex", "Claude Managed Agents", "ChatGPT Workspace Agents"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(255,252,232,0.12)",
                    borderRadius: 999,
                    padding: "12px 18px",
                    fontSize: 18,
                    opacity: 0.72,
                  }}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
