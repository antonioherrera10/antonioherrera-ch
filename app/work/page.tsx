import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import CloudinaryImage from "@/components/CloudinaryImage";
import { getAllProjects } from "@/lib/work";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A curated overview of premium strategic design frameworks and performing arts projects by Antonio Herrera.",
};

export default async function WorkPage() {
  const allProjects = await getAllProjects();
  const projects = allProjects.filter((project) => {
    const disp = (project.discipline || "").toLowerCase();
    return !disp.includes("music") && !disp.includes("performing") && !disp.includes("performance");
  });

  return (
    <div className="w-full">
      {/* Exactly one H1 per page */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-brand-white mb-4">
          Selected Work
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono mb-12">
          Pentagram Grid Portfolio
        </p>
      </div>

      {/* Selected Work Grid (2 columns desktop, 1 mobile) */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24">
        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-brand-white/10 rounded-2xl">
            <p className="text-brand-grey text-sm">No projects loaded from MDX files yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative aspect-[4/3] w-full overflow-hidden bg-brand-white/5 rounded-3xl block border border-brand-white/10"
              >
                {/* Full-bleed Cover Image */}
                <CloudinaryImage
                  folder="work"
                  filename={project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.9]"
                />

                {/* Overlaid Title and Discipline */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent p-8 flex flex-col justify-end transition-opacity duration-300">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-semibold font-mono">
                      {project.discipline}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-white group-hover:text-brand-red transition-colors">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
