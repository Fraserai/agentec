import { ImageResponse } from "next/og";

export const runtime = "edge";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a1045",
          color: "#fffce8",
          padding: "64px 72px",
          fontFamily:
            '"Avenir Next", "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          AI Agent Firm — Brisbane
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 94,
              lineHeight: 0.95,
              fontWeight: 700,
              letterSpacing: -4,
              maxWidth: 920,
            }}
          >
            Operational AI agents for Australian businesses.
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              maxWidth: 920,
              opacity: 0.82,
            }}
          >
            Strategy, implementation, and managed AI agent solutions for
            Australian SMEs.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <div style={{ fontWeight: 700, fontStyle: "italic" }}>AGENTEC</div>
          <div style={{ opacity: 0.72 }}>agentec.com.au</div>
        </div>
      </div>
    ),
    size,
  );
}
