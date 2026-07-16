import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  title: string;
  slug: string;
  discipline: string;
  year: string;
  client: string;
  summary: string;
  cover: string;
  gallery: string[];
  muxId?: string;
  order: number;
  content: string;
}

const workDirectory = path.join(process.cwd(), "content/work");

export async function getAllProjects(): Promise<Project[]> {
  // Ensure the directory exists
  if (!fs.existsSync(workDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(workDirectory);
  const mdxFiles = filenames.filter((fn) => fn.endsWith(".mdx"));

  const projects = mdxFiles.map((filename) => {
    const filePath = path.join(workDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "",
      slug: data.slug || filename.replace(/\.mdx$/, ""),
      discipline: data.discipline || "",
      year: data.year?.toString() || "",
      client: data.client || "",
      summary: data.summary || "",
      cover: data.cover || "",
      gallery: Array.isArray(data.gallery) ? data.gallery : [],
      muxId: data.muxId || undefined,
      order: Number(data.order) || 99,
      content,
    } as Project;
  });

  // Sort by order ascending
  return projects.sort((a, b) => a.order - b.order);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(workDirectory, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "",
      slug,
      discipline: data.discipline || "",
      year: data.year?.toString() || "",
      client: data.client || "",
      summary: data.summary || "",
      cover: data.cover || "",
      gallery: Array.isArray(data.gallery) ? data.gallery : [],
      muxId: data.muxId || undefined,
      order: Number(data.order) || 99,
      content,
    } as Project;
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}
