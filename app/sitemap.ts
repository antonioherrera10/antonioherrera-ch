import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/work";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://antonioherrera.ch";
  const staticRoutes = ["", "design", "music", "work", "about", "management", "terms", "privacy", "imprint"];

  const staticSitemaps = staticRoutes.map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, ""),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  try {
    const projects = await getAllProjects();
    const projectSitemaps = projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticSitemaps, ...projectSitemaps];
  } catch (error) {
    console.error("Error creating sitemap:", error);
    return staticSitemaps;
  }
}
