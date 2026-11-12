import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://agentec.com.au",
      lastModified: new Date("2026-04-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
