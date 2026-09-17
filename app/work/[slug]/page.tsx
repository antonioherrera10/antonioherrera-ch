import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { getAllProjects, getProjectBySlug } from "@/lib/work";
import { GOOGLE_CALENDAR_LINK, CONTENT } from "@/lib/content";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  // Fetch adjacent projects with perfect round-robin cycling so it never dead-ends
  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  
  const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
  const nextIndex = (currentIndex + 1) % allProjects.length;
  
  const prevProject = allProjects[prevIndex];
  const nextProject = allProjects[nextIndex];

  // Parse markdown body text paragraphs
  const paragraphs = project.content
    ? project.content
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const p1 = paragraphs[0] || "We build robust layouts designed to optimize conversion and command authority.";
  const p2 = paragraphs[1] || "Every asset is delivered under modern Swiss grid alignment principles to ensure absolute operational clarity.";

  return (
    <article className="w-full">
      {/* 1. Cover Hero (MediaPlaceholder) */}
      <section className="relative w-full bg-neutral-950 overflow-hidden">
        <MediaPlaceholder
          aspect="16/9"
          label={`${project.title.toUpperCase()} // COVER HERO`}
          className="!border-0 !rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none" />
      </section>

      {/* 2. Title + Summary Block */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center md:text-left space-y-6">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono block">
          PROJECT CASE STUDY
        </span>
        <h1 className="ah-hero-headline font-extrabold tracking-tight text-white font-syne">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-brand-grey leading-relaxed max-w-3xl">
          {project.summary}
        </p>
      </section>

      {/* 3. Meta Row */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-y border-white/10 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-bold block mb-1">
              DISCIPLINE
            </span>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">{project.discipline}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-bold block mb-1">
              YEAR
            </span>
            <span className="text-sm font-semibold text-white tracking-widest">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-bold block mb-1">
              CLIENT
            </span>
            <span className="text-sm font-semibold text-white uppercase tracking-wider">{project.client}</span>
          </div>
        </div>
      </section>

      {/* 4. Interleaved Gallery and Body Blocks */}
      <section className="w-full max-w-5xl mx-auto px-6 py-12 flex flex-col gap-12 md:gap-16">
        {/* Gallery 01 */}
        {project.gallery[0] && (
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-950 transition-colors duration-300 hover:border-white/20">
            <MediaPlaceholder
              aspect="16/9"
              label={`${project.title.toUpperCase()} // DETAIL I`}
              className="!border-0"
            />
          </div>
        )}

        {/* Paragraph 1 */}
        <div className="max-w-3xl mx-auto text-brand-grey text-base md:text-lg leading-relaxed font-mono py-6 px-6 md:px-10 border-l-2 border-brand-red bg-white/[0.01] rounded-r-2xl">
          <p>{p1}</p>
        </div>

        {/* Gallery 02 */}
        {project.gallery[1] && (
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-950 transition-colors duration-300 hover:border-white/20">
            <MediaPlaceholder
              aspect="16/9"
              label={`${project.title.toUpperCase()} // DETAIL II`}
              className="!border-0"
            />
          </div>
        )}

        {/* Paragraph 2 */}
        <div className="max-w-3xl mx-auto text-brand-grey text-base md:text-lg leading-relaxed font-mono py-6 px-6 md:px-10 border-l-2 border-brand-red bg-white/[0.01] rounded-r-2xl">
          <p>{p2}</p>
        </div>

        {/* Gallery 03 */}
        {project.gallery[2] && (
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-neutral-950 transition-colors duration-300 hover:border-white/20">
            <MediaPlaceholder
              aspect="16/9"
              label={`${project.title.toUpperCase()} // DETAIL III`}
              className="!border-0"
            />
          </div>
        )}
      </section>

      {/* 5. Previous/Next Project Links (Infinite Wrap-around Loop) */}
      <section className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10 flex justify-between items-center gap-6">
        <Link
          href={`/work/${prevProject.slug}`}
          className="flex flex-col text-left group hover:text-brand-red transition-colors max-w-[45%]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1 font-bold flex items-center gap-1">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS</span>
          </span>
          <span className="text-sm md:text-lg font-bold tracking-tight font-mono truncate uppercase">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="flex flex-col text-right group hover:text-brand-red transition-colors max-w-[45%]"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1 font-bold flex items-center justify-end gap-1">
            <span>NEXT PROJECT</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-sm md:text-lg font-bold tracking-tight font-mono truncate uppercase">
            {nextProject.title}
          </span>
        </Link>
      </section>

      {/* 6. Final CTA Section */}
      <section className="bg-[#0a0a0a] py-32 text-white text-center px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="ah-banner-heading font-extrabold tracking-tight font-syne leading-tight text-white">
            Interested in this framework?
          </h2>
          <p className="text-sm md:text-base font-medium tracking-normal font-mono max-w-xl mx-auto text-brand-grey">
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
              <Calendar className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
