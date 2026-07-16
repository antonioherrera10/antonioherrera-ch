import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CloudinaryImage from "@/components/CloudinaryImage";
import MuxVideo from "@/components/MuxVideo";
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
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [
        {
          url: `https://res.cloudinary.com/df6nnksd2/image/upload/f_auto,q_auto/ah/work/${project.cover}`,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  // Fetch adjacent projects for prev/next navigation
  const allProjects = await getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="w-full">
      {/* 1. Cover Hero */}
      <section className="relative w-full h-[60vh] md:h-[80vh] bg-brand-black overflow-hidden">
        <CloudinaryImage
          folder="work"
          filename={project.cover}
          alt={`${project.title} cover image`}
          eager={true}
          className="w-full h-full object-cover object-center filter brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
      </section>

      {/* 2. Title + Summary Block */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center md:text-left">
        <span className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono block mb-4">
          Project Case Study
        </span>
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-brand-grey leading-relaxed">
          {project.summary}
        </p>
      </section>

      {/* 3. Meta Row */}
      <section className="max-w-4xl mx-auto px-6 py-8 border-y border-brand-white/10 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-semibold block mb-1">
              Discipline
            </span>
            <span className="text-sm font-medium text-brand-white">{project.discipline}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-semibold block mb-1">
              Year
            </span>
            <span className="text-sm font-medium text-brand-white">{project.year}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey font-semibold block mb-1">
              Client
            </span>
            <span className="text-sm font-medium text-brand-white">{project.client}</span>
          </div>
        </div>
      </section>

      {/* 4. Optional Mux Video */}
      {project.muxId && (
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="aspect-video bg-brand-black rounded-3xl overflow-hidden border border-brand-white/10">
            <MuxVideo playbackId={project.muxId} title={project.title} />
          </div>
        </section>
      )}

      {/* 5. Project Body Content (Optional MDX markdown text) */}
      {project.content && (
        <section className="max-w-3xl mx-auto px-6 py-12 prose prose-invert">
          <div className="text-brand-grey text-base md:text-lg leading-relaxed whitespace-pre-line">
            {project.content}
          </div>
        </section>
      )}

      {/* 6. Gallery Showcase (Full-width images) */}
      {project.gallery.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
          {project.gallery.map((image, index) => (
            <div key={index} className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-brand-white/5 border border-brand-white/10">
              <CloudinaryImage
                folder="work"
                filename={image}
                alt={`${project.title} gallery image ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </section>
      )}

      {/* 7. Previous/Next Project Links */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-brand-white/10 flex justify-between items-center">
        {prevProject ? (
          <Link
            href={`/work/${prevProject.slug}`}
            className="flex flex-col text-left group hover:text-brand-red transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1">Previous</span>
            <span className="text-lg font-bold uppercase tracking-tight font-mono">&larr; {prevProject.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/work/${nextProject.slug}`}
            className="flex flex-col text-right group hover:text-brand-red transition-colors"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mb-1">Next Project</span>
            <span className="text-lg font-bold uppercase tracking-tight font-mono">{nextProject.title} &rarr;</span>
          </Link>
        ) : (
          <div />
        )}
      </section>

      {/* 8. Final Red CTA Section */}
      <section className="bg-brand-red py-32 text-brand-black text-center px-6 border-t-4 border-brand-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-12 leading-tight">
            Interested in this framework?
          </h2>
          <a
            href={GOOGLE_CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-brand-black text-brand-white hover:bg-brand-white hover:text-brand-black transition-all duration-500 text-sm font-bold tracking-widest uppercase rounded-xl"
          >
            {CONTENT.cta}
          </a>
        </div>
      </section>
    </article>
  );
}
