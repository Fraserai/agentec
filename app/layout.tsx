import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://agentec.com.au"),
  title: "AGENTEC | AI Agent Firm for Australian SMEs",
  description:
    "Agentec helps Australian SMEs design, build, and manage AI agents through strategy, solutions, and advocacy.",
  applicationName: "AGENTEC",
  keywords: [
    "AGENTEC",
    "AI agent firm",
    "AI agents Australia",
    "AI agent strategy",
    "AI agent implementation",
    "Brisbane AI agency",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AGENTEC | AI Agent Firm for Australian SMEs",
    description:
      "Agentec helps Australian SMEs design, build, and manage AI agents through strategy, solutions, and advocacy.",
    url: "https://agentec.com.au",
    siteName: "AGENTEC",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "AGENTEC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGENTEC | AI Agent Firm for Australian SMEs",
    description:
      "Agentec helps Australian SMEs design, build, and manage AI agents through strategy, solutions, and advocacy.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1045",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
