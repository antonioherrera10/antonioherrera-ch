import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://antonioherrera.ch";
  const staticRoutes = ["", "design", "music", "about", "management", "terms", "privacy", "imprint"];

  const staticSitemaps = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  return staticSitemaps;
}
