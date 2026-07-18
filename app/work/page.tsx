import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { getAllProjects } from "@/lib/work";
import { GOOGLE_CALENDAR_LINK, CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A curated overview of premium strategic design frameworks by Antonio Herrera.",
};

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="w-full">
      {/* 1. Page Header */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-16 text-center md:text-left space-y-4">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey font-bold">
          PORTFOLIO ARCHITECTURE
        </span>
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white font-syne uppercase">
          Selected work
        </h1>
        <p className="text-xs md:text-sm text-brand-grey max-w-2xl font-mono uppercase tracking-[0.25em] leading-relaxed">
          Calibrated visual systems and responsive physical-digital blueprints.
        </p>
      </section>

      {/* 2. Project Grid (3 columns lg, 2 columns sm/md, 1 column xs) */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-32">
        {projects.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl">
            <p className="text-brand-grey text-sm">No projects loaded from content directory.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex flex-col gap-5 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-3xl p-2 hover:bg-white/[0.01] transition-all duration-300"
              >
                {/* Cover Placeholder using MediaPlaceholder */}
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-950 transition-all duration-500 group-hover:scale-[1.02] active:scale-[0.98] group-hover:border-white/20">
                  <MediaPlaceholder
                    aspect="3/2"
                    label={project.title.toUpperCase()}
                    className="!border-0"
                  />
                </div>

                {/* Title and Discipline */}
                <div className="px-2 space-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-bold font-mono">
                    {project.discipline}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-red transition-colors duration-300">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* 3. Final CTA */}
      <section className="bg-brand-red py-32 text-brand-black text-center px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight uppercase font-syne leading-tight">
            Interested in these frameworks?
          </h2>
          <p className="text-sm md:text-base font-bold tracking-widest uppercase font-mono max-w-xl mx-auto opacity-80">
            Let's design a high-performance system for your corporate operations.
          </p>
          <div className="pt-4">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-brand-black text-white hover:bg-white hover:text-black transition-all duration-500 text-xs font-bold rounded-xl uppercase tracking-widest min-h-[44px] min-w-[44px]"
            >
              <span>{CONTENT.cta.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
