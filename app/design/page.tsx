import React from "react";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/work";
import DesignPageClient from "./DesignPageClient";

export const metadata: Metadata = {
  title: "Design",
  description: "Brand, Web & Design Consultation",
};

export default async function DesignPage() {
  const allProjects = await getAllProjects();
  // Filter for design projects (exclude music-tagged or performing arts)
  const designProjects = allProjects.filter((project) => {
    const disp = (project.discipline || "").toLowerCase();
    return !disp.includes("music") && !disp.includes("performing") && !disp.includes("performance");
  });

  return <DesignPageClient initialProjects={designProjects} />;
}
