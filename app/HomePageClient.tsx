"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Project } from "@/lib/work";
import { CONTENT, GOOGLE_CALENDAR_LINK, SOCIAL_LINKS } from "@/lib/content";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CloudinaryImage from "@/components/CloudinaryImage";
import MediaPlaceholder from "@/components/MediaPlaceholder";

interface HomePageClientProps {
  projects: Project[];
}

export default function HomePageClient({ projects }: HomePageClientProps) {
  // Filter for design-only projects (exclude music/performance)
  const designProjects = projects
    .filter((p) => {
      const disciplineLower = p.discipline.toLowerCase();
      return (
        !disciplineLower.includes("music") &&
        !disciplineLower.includes("performing") &&
        !disciplineLower.includes("performance")
      );
    })
    .slice(0, 4);

  return (
    <div className="w-full bg-black text-white selection:bg-brand-red selection:text-white">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 md:px-12 py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,51,0.03)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl text-center space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-grey font-bold">
              Designer & Performing Artist
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none font-syne"
          >
            {CONTENT.heroTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-brand-grey max-w-2xl mx-auto leading-relaxed"
          >
            {CONTENT.heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ah-button ah-button-primary w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-transform uppercase tracking-widest text-xs font-bold"
            >
              SCHEDULE A CONSULTATION
            </a>
            <Link
              href="/work"
              className="ah-button ah-button-outline w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-transform uppercase tracking-widest text-xs font-bold"
            >
              EXPLORE SELECTED WORK
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <TrustedBy />

      {/* 3. STAKES SECTION */}
      <section id="stakes" className="relative bg-brand-red text-black py-24 md:py-32 w-full overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 font-bold font-mono">
            01. The Stakes
          </span>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-syne leading-tight text-black">
            Forgettable design and event experiences cost more than attention. They cost you authentic vitality, reputation, and genuine connection.
          </p>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION SECTION */}
      <section id="value-proposition" className="py-24 md:py-32 border-b border-white/10 text-center bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-bold font-mono">
            02. Value Proposition
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne text-white">
            Profound sensory systems
          </h2>
          <p className="text-lg md:text-xl text-brand-grey max-w-2xl mx-auto leading-relaxed font-syne">
            We systemize physical layouts and live voice performance acoustics to restore ultimate brand presence, rapid speed, and unforgettable human connection.
          </p>
        </div>
      </section>

      {/* 5. EMPATHY SECTION */}
      <section id="empathy" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-rosa font-bold font-mono">
            03. Empathy
          </span>
          <p className="text-lg md:text-xl text-brand-grey leading-relaxed font-syne">
            I understand the intense pressure of constant performance—where corporate roles and empty, repeated routines slowly silence your genuine voice. Real alignment starts when we stop merely surviving safe habits and choose to actively participate in the art of living.
          </p>
          <p className="font-syne italic text-xl md:text-3xl text-brand-rosa mt-6 font-medium">
            &ldquo;You deserve visual environments and performance moments that evoke pure, unforgettable vitality.&rdquo;
          </p>
        </div>
      </section>

      {/* 6. GUIDE (DESIGNER / PERFORMING ARTIST FILTER MOMENT) SECTION */}
      <section id="guide" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey font-bold">
              04. THE GUIDE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-widest font-syne mt-2 uppercase">
              ANTONIO HERRERA
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Pillar One: Designer */}
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-lightblue/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lightblue font-bold font-mono">
                  Pillar One
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-lightblue transition-colors">
                  The strategic designer
                </h3>
                <p className="text-brand-grey leading-relaxed text-sm md:text-base mb-8">
                  Redesigning physical layouts, custom client portfolios, and digital interfaces. We merge Swiss typographic alignment with high-performance responsive code to focus your digital presence.
                </p>
              </div>
              <Link
                href="/design"
                className="ah-button ah-button-outline w-full py-3 text-xs mt-4 tracking-widest uppercase font-bold"
              >
                EXPLORE DESIGN SERVICES &rarr;
              </Link>
            </div>

            {/* Pillar Two: Performing Artist */}
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold font-mono">
                  Pillar Two
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-red transition-colors">
                  The performing artist
                </h3>
                <p className="text-brand-grey leading-relaxed text-sm md:text-base mb-8">
                  Curating live vocal sets, ambient resonance systems, and celebratory gatherings. We establish electric, zero-judgment circles where high-stakes leaders remember the power of genuine music.
                </p>
              </div>
              <Link
                href="/music"
                className="ah-button ah-button-outline w-full py-3 text-xs mt-4 tracking-widest uppercase font-bold"
              >
                EXPLORE MUSIC EXPERIENCES &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION (Empty renders nothing) */}
      <Testimonials ids={[]} />

      {/* 8. SERVICE METRICS SECTION */}
      <section id="metrics" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-brand-red/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-brand-red font-syne tracking-tight">
                10+
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mt-4 font-bold">
                Years Experience
              </h4>
              <p className="text-xs text-brand-grey/60 mt-2">{CONTENT.exp1}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-brand-orange/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-brand-orange font-syne tracking-tight">
                50+
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mt-4 font-bold">
                Live Engagements
              </h4>
              <p className="text-xs text-brand-grey/60 mt-2">{CONTENT.exp2}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-brand-rosa/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-brand-rosa font-syne tracking-tight">
                20+
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-grey mt-4 font-bold">
                Countries Visited
              </h4>
              <p className="text-xs text-brand-grey/60 mt-2">{CONTENT.exp3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey">
              05. Offerings
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 font-syne">
              Elite collaborations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-lightblue/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-3xl font-extrabold font-syne text-brand-lightblue">
                  01
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-syne mt-4 mb-4">
                  Spatial &amp; identity advisory
                </h3>
                <p className="text-brand-grey text-sm leading-relaxed mb-6">
                  Premium digital systems and architectural frameworks built with modular Swiss grids, custom typography alignment, and clean visual flow.
                </p>
              </div>
              <Link
                href="/design"
                className="text-xs tracking-widest uppercase text-brand-lightblue hover:underline font-bold self-start"
              >
                EXPLORE DESIGN SOLUTIONS &rarr;
              </Link>
            </div>

            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-3xl font-extrabold font-syne text-brand-red">
                  02
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-syne mt-4 mb-4">
                  Live acoustic curation
                </h3>
                <p className="text-brand-grey text-sm leading-relaxed mb-6">
                  Tailored live vocal sets, ambient soundscape designs, and collaborative acoustic gatherings to establish joyous, memorable connections.
                </p>
              </div>
              <Link
                href="/music"
                className="text-xs tracking-widest uppercase text-brand-red hover:underline font-bold self-start"
              >
                EXPLORE MUSIC EXPERIENCES &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SELECTED WORK SECTION */}
      <section id="selected-work" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey">
                06. Portfolios
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 font-syne">
                Selected work
              </h2>
            </div>
            <Link
              href="/work"
              className="text-xs tracking-widest uppercase text-brand-red hover:underline font-bold"
            >
              VIEW ALL WORK &rarr;
            </Link>
          </div>

          {designProjects.length === 0 ? (
            <p className="text-brand-grey text-sm italic">
              No design projects found.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designProjects.map((p) => (
                <Link
                  href={`/work/${p.slug}`}
                  key={p.slug}
                  className="group block border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
                >
                  <div className="aspect-[16/10] bg-zinc-900 relative">
                    <MediaPlaceholder
                      aspect="16/9"
                      label="MEDIA IN PRODUCTION"
                      className="!border-0 w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                      <span className="text-[10px] uppercase tracking-widest text-brand-grey bg-white/5 px-2 py-1 rounded self-start border border-white/10 font-mono">
                        {p.discipline}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-3 text-white group-hover:text-brand-red transition-colors font-syne">
                        {p.title}
                      </h3>
                      <p className="text-xs text-brand-grey mt-2 line-clamp-1 font-syne">
                        {p.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 11. PLAN SECTION */}
      <section id="plan" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey">
              07. Framework
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 font-syne">
              {CONTENT.howTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-2xl bg-black text-center space-y-4 hover:border-brand-red/20 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono">
                Step 01
              </span>
              <h3 className="text-xl font-extrabold font-syne">
                Discover &amp; audit
              </h3>
              <p className="text-xs text-brand-grey leading-relaxed font-syne">
                Initiate contact and register through our calendar. We evaluate visual patterns, typography alignment, and spatial trajectory.
              </p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black text-center space-y-4 hover:border-brand-orange/20 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange font-mono">
                Step 02
              </span>
              <h3 className="text-xl font-extrabold font-syne">
                Systemize &amp; blueprint
              </h3>
              <p className="text-xs text-brand-grey leading-relaxed font-syne">
                Construct high-contrast layouts, custom specs, and spatial guidelines designed for real structural consistency.
              </p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black text-center space-y-4 hover:border-brand-rosa/20 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-rosa font-mono">
                Step 03
              </span>
              <h3 className="text-xl font-extrabold font-syne">
                Deploy &amp; resonate
              </h3>
              <p className="text-xs text-brand-grey leading-relaxed font-syne">
                Launch your modular next-gen digital systems or gather for electric acoustic resonance sessions that foster true connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EXPLANATORY PARAGRAPH SECTION */}
      <section id="explanatory" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey block mb-6 font-bold font-mono">
            08. About The Studio
          </span>
          <p className="text-base md:text-xl text-brand-grey leading-relaxed text-left md:text-center max-w-3xl mx-auto font-syne">
            Based in Zurich, Switzerland, Antonio Herrera operates a boutique strategic design agency and acoustic curation service. By integrating high-contrast typography, Swiss architectural layout systems, and raw vocal energy, we reject off-the-shelf templates in favor of authentic sensory design. From local Swiss enterprises seeking refined brand identity and modern Next.js development to international organizers requesting premier live vocal performances, our work focuses on absolute structural clarity and memorable human connection. We are committed to craft, meticulous alignment, and visual consistency, making sure every digital asset and physical performance speaks directly to your target audience. As a strategic advisor, we believe that every project deserves a meticulous hand-crafted signature that inspires and delivers enduring commercial value.
          </p>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-brand-red text-black py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-syne">
            {CONTENT.unlockTitle}
          </h2>
          <p className="text-base md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
            {CONTENT.promoSub}
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 font-mono uppercase tracking-widest"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
