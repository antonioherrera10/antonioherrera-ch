"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Calendar,
  ArrowRight,
  Sparkles,
  BookOpen,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import {
  EDUCATION_CV,
  PRACTICE_HIGHLIGHTS,
  CREDENTIALS,
  GOOGLE_CALENDAR_LINK,
} from "@/lib/content";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Testimonials from "@/components/Testimonials";

export default function AboutPageClient() {
  return (
    <div className="w-full bg-black text-white selection:bg-ah-red selection:text-white">
      
      {/* 1. HERO SECTION (full-width portrait image + h1 "About" & name lockup) */}
      <section id="hero" className="relative h-[80vh] md:h-[90vh] flex items-end px-6 pb-16 md:pb-24 border-b border-white/10 overflow-hidden">
        {/* Full-bleed portrait placeholder */}
        <div className="absolute inset-0 z-0">
          <MediaPlaceholder
            aspect="4/5"
            label="PORTRAIT IN PRODUCTION"
            className="w-full h-full !rounded-none !border-0 bg-neutral-950/80"
          />
          {/* Bottom gradient overlay to transition smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-black/60 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-ah-grey font-bold">
              The Portrait &amp; Identity
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-2"
          >
            {/* H1 "About" with name lockup */}
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-none font-syne">
              About
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm uppercase tracking-[0.3em] font-mono text-ah-red font-bold">
              <span>ANTONIO HERRERA</span>
              <span className="hidden sm:inline text-white/20">|</span>
              <span className="text-white">Designer &amp; Performing Artist</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BIO SECTION (evocative first-person biography) */}
      <section id="bio" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.005]">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-mono block">
              01. The Narrative
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne text-white">
              My conviction &amp; path
            </h2>
          </div>

          <div className="space-y-8 text-base md:text-lg text-ah-grey/90 leading-relaxed font-light font-syne">
            <p>
              I have spent over a decade standing at the intersection of two seemingly distinct worlds: the quiet discipline of Swiss geometric design and the raw, electric energy of live vocal performance. Based in Zurich, Switzerland, my work is driven by a single guiding conviction—that form and system must always align with true human intent. Whether I am mapping out a corporate brand architecture with modular typographic precision or curating a live acoustic resonance circle, my goal is to reject the formulaic in favor of absolute clarity and profound warmth.
            </p>
            <p>
              My path as a Strategic Designer was forged through rigorous training at the Zurich University of the Arts (ZHdK) and postgraduate design explorations at the Royal College of Art (RCA) <span className="text-ah-red font-mono text-[10px] bg-white/5 px-1.5 py-0.5 rounded border border-white/5">TODO: Owner to confirm graduation years</span>. I founded HERR Design Collective to build tailored digital pipelines, high-performance responsive web environments, and bespoke physical layout frameworks. For me, design is not a decorative overlay; it is a structural blueprint that commands market authority, speed, and immediate cognitive focus.
            </p>
            <p>
              As a Performing Artist, I step onto the stage to curate immersive vocal sets, acoustic soundscapes, and celebratory gatherings across more than 20 countries. I believe that modern professional life often drains us through empty, repetitive routines and constant performance under pressure. Through custom acoustic curations and zero-judgment physical circles, I create temporary sanctuaries where high-stakes leaders and creative collectives can step past safe behaviors and remember the joy of pure, active participation.
            </p>
            <p>
              Today, I divide my time between private corporate design audits, bespoke web developments, and curated musical events. Every brand portfolio I touch and every song I sing is a direct commitment to meticulous craftsmanship, absolute responsive speed, and uncompromised visual-acoustic consistency. Let us work together to align your core digital assets and live experiences with a presence that truly endures.
            </p>
          </div>

          <div className="pt-6 text-center">
            <blockquote className="font-syne italic text-lg md:text-2xl text-ah-rosa font-medium max-w-2xl mx-auto leading-relaxed">
              &ldquo;True digital distinction isn&apos;t achieved through noisy widgets, but through disciplined, intentional space and alignment.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* 3. CV SECTION (structured list) */}
      <section id="cv" className="py-24 md:py-32 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-mono">
              02. Curriculum Vitae
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Professional biography &amp; record
            </h2>
            <p className="text-sm text-ah-grey font-light">
              A curated timeline mapping educational milestones, active design/performance practices, and professional capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
            
            {/* Education column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <GraduationCap className="w-5 h-5 text-ah-orange" />
                <h3 className="text-xl font-bold tracking-wide font-syne text-white">
                  Academic credentials
                </h3>
              </div>

              <div className="space-y-6">
                {EDUCATION_CV.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border border-white/5 rounded-2xl bg-white/[0.002] hover:border-white/10 transition-colors space-y-3"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ah-orange font-mono bg-ah-orange/10 px-2 py-0.5 rounded border border-ah-orange/20">
                        {item.yearOrPeriod}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-md font-bold tracking-tight text-white font-syne">
                        {item.title}
                      </h4>
                      <p className="text-xs text-ah-grey font-mono mt-1">
                        {item.institutionOrContext}
                      </p>
                    </div>
                    {item.details && (
                      <p className="text-xs text-ah-grey/70 leading-relaxed font-light pt-2 border-t border-white/5">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Highlights column */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Briefcase className="w-5 h-5 text-ah-red" />
                <h3 className="text-xl font-bold tracking-wide font-syne text-white">
                  Practice highlights
                </h3>
              </div>

              <div className="space-y-6">
                {PRACTICE_HIGHLIGHTS.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 border border-white/5 rounded-2xl bg-white/[0.002] hover:border-white/10 transition-colors space-y-3"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-ah-red font-mono bg-ah-red/10 px-2 py-0.5 rounded border border-ah-red/20">
                        {item.yearOrPeriod}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-md font-bold tracking-tight text-white font-syne">
                        {item.title}
                      </h4>
                      <p className="text-xs text-ah-grey font-mono mt-1">
                        {item.institutionOrContext}
                      </p>
                    </div>
                    {item.details && (
                      <p className="text-xs text-ah-grey/70 leading-relaxed font-light pt-2 border-t border-white/5">
                        {item.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Core Credentials list */}
          <div className="max-w-4xl mx-auto pt-8 border-t border-white/10 space-y-8">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-ah-rosa" />
              <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                Core specializations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CREDENTIALS.map((cred, index) => (
                <div
                  key={index}
                  className="p-5 border border-white/5 rounded-xl bg-white/[0.005] hover:border-ah-rosa/20 transition-all flex items-start gap-3"
                >
                  <Sparkles className="w-4 h-4 text-ah-rosa mt-0.5 shrink-0" />
                  <span className="text-xs text-ah-grey leading-relaxed">
                    {cred}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION (shared, empty array or curated) */}
      <section id="testimonials" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-mono">
              03. Endorsements
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Curated alliances
            </h2>
          </div>

          {/* Testimonials shared component: empty array for future owner curation */}
          <Testimonials ids={[]} />
        </div>
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-ah-red text-black py-24 md:py-32 border-b-4 border-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-syne">
            Align your trajectory.
          </h2>
          <p className="text-base md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Let us design uncompromised visual systems and construct profound musical experiences starting today.
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 font-mono cursor-none uppercase tracking-widest"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
