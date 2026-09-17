import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CloudinaryImage from "@/components/CloudinaryImage";
import { getAllProjects } from "@/lib/work";
import { GOOGLE_CALENDAR_LINK, CONTENT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "A curated overview of premium strategic design frameworks by Antonio Herrera.",
};

export default async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <div className="w-full bg-black text-white selection:bg-brand-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-[85vh] md:min-h-[90vh] flex items-end px-6 md:px-12 pb-16 md:pb-24 border-b border-white/10 overflow-hidden"
      >
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <CloudinaryImage
            src="https://res.cloudinary.com/df6nnksd2/image/upload/v1779395158/ah/hero/antonio-herrera-hero-1.jpg"
            alt="Antonio Herrera"
            fill
            eager
            className="object-cover object-top sm:object-center w-full h-full opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 pointer-events-none" />
        </div>

        <div className="max-w-4xl text-left space-y-6 relative z-10 w-full">
          {/* Eyebrow Badge (Pill Tag) */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-black/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-grey font-bold font-mono">
              Portfolio Architecture
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="ah-hero-headline font-extrabold tracking-tight leading-[1.08] font-syne text-white">
            Selected work
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-brand-grey max-w-2xl leading-relaxed">
            Calibrated visual systems and responsive physical-digital blueprints engineered with Swiss typographic precision.
          </p>

          {/* Primary CTA button, Secondary CTA Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-xs font-bold rounded-xl hover:bg-brand-grey hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3 font-mono uppercase tracking-widest min-h-[44px]"
            >
              <span>PRIMARY CTA BUTTON</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white/5 border border-white/15 text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 font-mono uppercase tracking-widest min-h-[44px]"
            >
              <span>SECONDARY CTA BUTTON</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Project Grid */}
      <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24 md:py-32">
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
                  <h2 className="ah-card-heading font-bold tracking-tight text-white group-hover:text-brand-red transition-colors duration-300 font-syne">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* 3. Final CTA */}
      <section className="bg-[#0a0a0a] py-32 text-white text-center px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="ah-banner-heading font-extrabold tracking-tight font-syne leading-tight text-white">
            Interested in these frameworks?
          </h2>
          <p className="text-sm md:text-base font-normal tracking-wide font-mono max-w-xl mx-auto text-brand-grey">
            Let's design a high-performance system for your corporate operations.
          </p>
          <div className="pt-4">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black hover:bg-brand-grey hover:text-black transition-all duration-500 text-xs font-bold rounded-xl uppercase tracking-widest min-h-[44px] min-w-[44px]"
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
