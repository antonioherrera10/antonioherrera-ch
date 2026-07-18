"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  Calendar,
  Play,
  Music,
  ArrowRight,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";
import {
  CONTENT,
  SOCIAL_LINKS,
  MUSIC_PROJECTS,
  GOOGLE_CALENDAR_LINK,
  VIDEO_TESTIMONIALS,
} from "@/lib/content";
import TrustedBy from "@/components/TrustedBy";
import MuxVideo from "@/components/MuxVideo";
import Testimonials from "@/components/Testimonials";
import MediaPlaceholder from "@/components/MediaPlaceholder";

// TODO: Move these music-specific copy keys to /lib/content.ts in a future iteration
const TODO_MUSIC_COPY = {
  stakesLabel: "01. THE STAKES",
  stakesText: "FORGETTABLE LIVE MUSIC AND REPETITIVE EVENT PLATFORMS COST MORE THAN SPECTATOR ENGAGEMENT. THEY SILENTLY DRAIN AUTHENTIC ENERGY, MEMORABLE REPUTATION, AND GENUINE COMMUNITY CONNECTION.",
  vpLabel: "02. VALUE PROPOSITION",
  vpTitle: "PROFOUND ACOUSTIC RESONANCE",
  vpText: "We systemize custom live vocal set curations and acoustic space alignments to restore absolute event presence, pure warmth, and electric human connection.",
  empathyLabel: "03. EMPATHY",
  empathyText: "I understand the heavy fatigue of empty, formulaic gatherings—where predictable background playlists and static structures slowly disconnect us. Real memory is built when we step past safe routines and choose to actively participate in the live resonance of music.",
  empathyAccent: "“You deserve vocal environments and musical moments that evoke pure, unforgettable vitality.”",
  guideLabel: "04. THE GUIDE",
  guideTitle: "ANTONIO HERRERA",
  guideP1Label: "Pillar One",
  guideP1Title: "The Strategic Designer",
  guideP1Text: "Redesigning physical layouts, custom client portfolios, and digital interfaces. We merge Swiss typographic alignment with high-performance responsive code to focus your digital presence.",
  guideP2Label: "Pillar Two",
  guideP2Title: "The Performing Artist",
  guideP2Text: "Curating live vocal sets, ambient resonance systems, and celebratory gatherings. We establish electric, zero-judgment circles where high-stakes leaders remember the power of genuine music.",
  metric1Val: "10+",
  metric1Label: "Years Performing",
  metric1Desc: "Curating custom acoustics, high-stakes vocals, and zero-judgment physical gatherings with professional precision.",
  metric2Val: "50+",
  metric2Label: "Live Showcases",
  metric2Desc: "Interactive concerts, collaborative acoustic circles, and elite artistic gatherings led worldwide.",
  metric3Val: "20+",
  metric3Label: "Countries Visited",
  metric3Desc: "Bringing raw vocal energy, Swiss design alignments, and memorable human resonance across boundaries.",
};

export default function MusicPageClient() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-ah-red selection:text-black">
      
      {/* 1. HERO SECTION (music offer) */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ah-red/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] text-ah-red font-bold font-mono">
              Performing Artist &amp; Event Curation
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight font-syne leading-none">
              {CONTENT.musicHeroTitle}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-ah-grey max-w-3xl mx-auto leading-relaxed font-light font-syne"
          >
            {CONTENT.musicHeroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            {/* Consultation CTA */}
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ah-red text-black text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center font-mono uppercase tracking-widest"
            >
              <Calendar className="w-4 h-4" />
              <span>{CONTENT.cta.toUpperCase()}</span>
            </a>

            {/* Ghost Watch the Showreel anchor */}
            <a
              href="#showreel"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center font-mono uppercase tracking-widest"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>WATCH THE SHOWREEL</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <TrustedBy />

      {/* 3. SHOWREEL SECTION (existing MUX embed) */}
      <section id="showreel" className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">02. {CONTENT.showreelTitle}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Live Energy &amp; Motion
            </h2>
            <p className="text-sm text-ah-grey leading-relaxed font-light">
              {CONTENT.showreelSub}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video"
          >
            <MuxVideo
              playbackId="zC4Dxc015iYBWPPtB92XqYXm5yrYKFYElE01HM6sPuKeA"
              title="Antonio Herrera Live Showreel"
            />
          </motion.div>
        </div>
      </section>

      {/* 4. STAKES SECTION (music framing) */}
      <section id="stakes" className="relative bg-ah-red text-black py-24 md:py-32 w-full overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 font-bold font-mono">
            {TODO_MUSIC_COPY.stakesLabel}
          </span>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-syne leading-tight text-black">
            {TODO_MUSIC_COPY.stakesText}
          </p>
        </div>
      </section>

      {/* 5. VALUE PROPOSITION SECTION (music) */}
      <section id="value-proposition" className="py-24 md:py-32 border-b border-white/10 text-center bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ah-red font-bold font-mono">
            {TODO_MUSIC_COPY.vpLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne text-white">
            {TODO_MUSIC_COPY.vpTitle}
          </h2>
          <p className="text-lg md:text-xl text-ah-grey max-w-2xl mx-auto leading-relaxed font-syne">
            {TODO_MUSIC_COPY.vpText}
          </p>
        </div>
      </section>

      {/* 6. EMPATHY SECTION */}
      <section id="empathy" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ah-rosa font-bold font-mono">
            {TODO_MUSIC_COPY.empathyLabel}
          </span>
          <p className="text-lg md:text-xl text-ah-grey leading-relaxed font-syne">
            {TODO_MUSIC_COPY.empathyText}
          </p>
          <p className="font-syne italic text-xl md:text-3xl text-brand-rosa mt-6 font-medium">
            {TODO_MUSIC_COPY.empathyAccent}
          </p>
        </div>
      </section>

      {/* 7. GUIDE: Performing Artist */}
      <section id="guide" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">
              {TODO_MUSIC_COPY.guideLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne mt-2">
              {TODO_MUSIC_COPY.guideTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Pillar One: Designer */}
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-lightblue/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lightblue font-bold font-mono">
                  {TODO_MUSIC_COPY.guideP1Label}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-lightblue transition-colors">
                  {TODO_MUSIC_COPY.guideP1Title}
                </h3>
                <p className="text-ah-grey leading-relaxed text-sm md:text-base mb-8 font-light">
                  {TODO_MUSIC_COPY.guideP1Text}
                </p>
              </div>
              <Link
                href="/design"
                className="ah-button ah-button-outline w-full py-3 text-xs mt-4 tracking-widest uppercase font-bold font-mono text-center"
              >
                EXPLORE DESIGN SERVICES &rarr;
              </Link>
            </div>

            {/* Pillar Two: Performing Artist */}
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold font-mono">
                  {TODO_MUSIC_COPY.guideP2Label}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-red transition-colors">
                  {TODO_MUSIC_COPY.guideP2Title}
                </h3>
                <p className="text-ah-grey leading-relaxed text-sm md:text-base mb-8 font-light">
                  {TODO_MUSIC_COPY.guideP2Text}
                </p>
              </div>
              <Link
                href="/music"
                className="ah-button ah-button-outline w-full py-3 text-xs mt-4 tracking-widest uppercase font-bold font-mono text-center"
              >
                EXPLORE MUSIC EXPERIENCES &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VIDEO TESTIMONIALS */}
      {VIDEO_TESTIMONIALS && VIDEO_TESTIMONIALS.length > 0 && (
        <section id="video-testimonials" className="py-24 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">08. VIDEO REVIEWS</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
                Acoustic Reflections
              </h2>
              <p className="text-sm text-ah-grey leading-relaxed font-light">
                Watch brief reactions and reflections from guests at past gatherings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {VIDEO_TESTIMONIALS.map((vt) => (
                <div
                  key={vt.title}
                  className="group relative aspect-video bg-white/[0.02] border border-white/10 rounded-2xl flex flex-col justify-between p-6 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {vt.playbackSrc ? (
                    <video
                      src={vt.playbackSrc}
                      className="absolute inset-0 w-full h-full object-cover brightness-[0.5] group-hover:brightness-[0.7] transition-all"
                      controls
                    />
                  ) : (
                    <MediaPlaceholder
                      aspect="16/9"
                      label="TESTIMONIAL VIDEO IN PRODUCTION"
                      className="absolute inset-0 w-full h-full !border-0 !rounded-none"
                    />
                  )}
                  
                  {/* Info Overlay at Bottom */}
                  <div className="mt-auto relative z-20">
                    <span className="text-[9px] uppercase tracking-widest text-white/40 font-mono bg-black/40 px-2 py-0.5 rounded border border-white/5 inline-block mb-3">
                      Acoustic Reflection
                    </span>
                    <h3 className="text-sm font-bold text-white tracking-wide font-syne">
                      {vt.title}
                    </h3>
                    <p className="text-[10px] text-ah-grey">
                      {vt.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. WRITTEN TESTIMONIALS */}
      <section id="written-testimonials" className="py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">09. WRITTEN RESONANCE</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Audience &amp; Partner Voices
            </h2>
          </div>

          <Testimonials
            ids={[
              "isabel-a",
              "toni-ann-o",
              "donika-p",
              "clifford-l",
              "paulina-z",
              "andreas-s"
            ]}
          />
        </div>
      </section>

      {/* 10. SERVICE METRICS SECTION */}
      <section id="metrics" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-red/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-red font-syne tracking-tight">
                {TODO_MUSIC_COPY.metric1Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold font-mono">
                {TODO_MUSIC_COPY.metric1Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2 font-light">{TODO_MUSIC_COPY.metric1Desc}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-red/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-red font-syne tracking-tight">
                {TODO_MUSIC_COPY.metric2Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold font-mono">
                {TODO_MUSIC_COPY.metric2Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2 font-light">{TODO_MUSIC_COPY.metric2Desc}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-red/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-red font-syne tracking-tight">
                {TODO_MUSIC_COPY.metric3Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold font-mono">
                {TODO_MUSIC_COPY.metric3Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2 font-light">{TODO_MUSIC_COPY.metric3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">
              11. LIVE EXPERIENCES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne mt-2">
              Performance Formats
            </h2>
            <p className="text-sm text-ah-grey font-light">
              Crafting premium visual-acoustic environments designed for authentic connection and absolute emotional resonance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-ah-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-red">
                  01
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-syne mt-4 mb-4">
                  Solo Performance
                </h3>
                <p className="text-ah-grey text-sm leading-relaxed mb-6 font-light">
                  TODO: Define full scope of intimate solo acoustic sets, live vocal looping, and custom ambient resonance sessions.
                </p>
              </div>
              <a
                href={GOOGLE_CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-ah-red hover:underline font-bold font-mono"
              >
                INQUIRE &rarr;
              </a>
            </div>

            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-ah-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-red">
                  02
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-syne mt-4 mb-4">
                  Band Experience
                </h3>
                <p className="text-ah-grey text-sm leading-relaxed mb-6 font-light">
                  TODO: Define full scope of collaborative multi-instrumental bands, live electric energy, and high-tempo dance sets.
                </p>
              </div>
              <a
                href={GOOGLE_CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-ah-red hover:underline font-bold font-mono"
              >
                INQUIRE &rarr;
              </a>
            </div>

            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-ah-red/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-3xl font-extrabold font-syne text-ah-red">
                  03
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight font-syne mt-4 mb-4">
                  Event Co-Creation
                </h3>
                <p className="text-ah-grey text-sm leading-relaxed mb-6 font-light">
                  TODO: Define full scope of custom creative direction, curated sound design, and bespoke high-stakes gatherings.
                </p>
              </div>
              <a
                href={GOOGLE_CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase text-ah-red hover:underline font-bold font-mono"
              >
                INQUIRE &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SELECTED MUSIC WORK */}
      {MUSIC_PROJECTS && MUSIC_PROJECTS.length > 0 && (
        <section id="selected-music-work" className="py-24 border-b border-white/10 bg-white/[0.005]">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">13. SELECTED CASE TAPES</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
                Performances &amp; Audio Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {MUSIC_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-white/10 bg-black/40 rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="space-y-6 w-full">
                    {/* Music Work Entry Media Placeholder */}
                    <MediaPlaceholder
                      aspect="16/9"
                      label="AUDIO IN PRODUCTION"
                      className="!border-0 mb-4"
                    />
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-ah-grey font-mono">
                      <span>{project.discipline}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold tracking-wide group-hover:text-ah-red transition-colors font-syne">
                        {project.title}
                      </h3>
                      <p className="text-xs text-ah-grey leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {project.venue && (
                    <div className="border-t border-white/5 pt-4 mt-6 text-[10px] uppercase tracking-widest text-white/40 font-mono">
                      📍 {project.venue}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 14. PLAN SECTION */}
      <section id="plan" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">14. ENGAGEMENT PROCESS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Three-step engagement plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-red/10 border border-ah-red/20 flex items-center justify-center font-mono text-xs font-bold text-ah-red">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Discover &amp; scope
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed font-light">
                  Initiate contact and register through our calendar. We evaluate venue acoustics, site energy, architectural dynamics, and core performance layout.
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-red/10 border border-ah-red/20 flex items-center justify-center font-mono text-xs font-bold text-ah-red">
                02
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Design &amp; rehearse
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed font-light">
                  We design customized acoustic resonance parameters, live vocal set lists, visual projections, and interactive audience-guideline Blueprints.
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-red/10 border border-ah-red/20 flex items-center justify-center font-mono text-xs font-bold text-ah-red">
                03
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Direct &amp; resonate
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed font-light">
                  Launch your custom music experience and gather for electric, zero-judgment live acoustic sessions that foster genuine, memorable human connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. EXPLANATORY PARAGRAPH SECTION */}
      <section id="explanatory" className="py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-mono mb-8">
            SEO &amp; Performance Standards
          </p>
          <p className="text-sm md:text-base text-ah-grey/80 leading-relaxed font-light text-left md:text-center max-w-3xl mx-auto font-syne">
            Based in Zurich, Switzerland, Antonio Herrera operates a boutique acoustic curation service and strategic performing arts advisory. By integrating raw vocal energy, physical resonance systems, and Swiss geometric design principles, we reject uninspired templates in favor of authentic sensory designs. From local Swiss organizations seeking exclusive acoustic layouts to international partners requesting elite live vocal sets, our work focuses on absolute performance clarity and unforgettable human connection. We are committed to hand-crafted quality and visual-acoustic consistency across every single physical showcase.
          </p>
        </div>
      </section>

      {/* 16. MAGNET LEAD RECORDINGS */}
      <section id="magnet" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">16. PREMIUM AUDIO</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Acoustic sessions &amp; unreleased tracks
            </h2>
            <p className="text-sm text-ah-grey max-w-xl mx-auto leading-relaxed font-light">
              Gain exclusive registry access to raw, unedited live performance tapes, vocal tracks, and future concert ticket pre-sales.
            </p>
          </div>

          <div className="max-w-md mx-auto pt-4">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 border border-ah-red/30 bg-ah-red/5 rounded-2xl flex flex-col items-center gap-3"
              >
                <ShieldCheck className="w-8 h-8 text-ah-red" />
                <p className="text-sm font-bold tracking-wider text-white">Registry confirmed</p>
                <p className="text-xs text-ah-grey">We have queued your session access. Look out for unreleased recordings shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ah-red transition-all font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-white text-black hover:bg-ah-red hover:text-black text-xs font-bold rounded-xl transition-all duration-300 font-mono uppercase tracking-widest"
                >
                  JOIN REGISTRY
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 17. FINAL CTA */}
      <section id="final-cta" className="bg-ah-red text-black py-24 md:py-32 border-b-4 border-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-syne">
            {CONTENT.unlockTitle}
          </h2>
          <p className="text-base md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
            Let music transform your space, capture your audience, and build genuine human rhythm.
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 font-mono uppercase tracking-widest"
            >
              <span>{CONTENT.cta.toUpperCase()}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="pt-8 text-xs font-mono text-black/60">
            For partnerships, bookings, and corporate management, please view our{" "}
            <Link
              href="/management"
              className="underline font-bold hover:text-black transition-colors"
            >
              management page
            </Link>
            .
          </div>
        </div>
      </section>

    </div>
  );
}
