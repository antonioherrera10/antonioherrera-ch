"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Layers,
  Monitor,
  HelpCircle,
} from "lucide-react";
import { CONTENT, GOOGLE_CALENDAR_LINK } from "@/lib/content";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CloudinaryImage from "@/components/CloudinaryImage";
import MediaPlaceholder from "@/components/MediaPlaceholder";

// TODO: Move these design-specific copy keys to /lib/content.ts in a future iteration
const TODO_DESIGN_COPY = {
  stakesLabel: "01. THE STAKES",
  stakesText: "A weak brand identity and an empty, repetitive web system cost more than leads. They silently drain your authentic authority, reputation, and professional alignment.",
  vpLabel: "02. VALUE PROPOSITION",
  vpTitle: "Calibrated visual systems",
  vpText: "We rebuild custom corporate design assets and responsive web systems with modern Swiss geometric precision, giving high-stakes leaders unmatched market authority.",
  empathyLabel: "03. EMPATHY",
  empathyText: "Many leaders face the frustration of slow, bloated templates and cookie-cutter designs that fail to reflect their true standard of work. True digital distinction isn't achieved through noisy widgets or complex animations, but through disciplined, intentional space and alignment.",
  empathyAccent: "“Your professional brand is your digital sanctuary—it should command absolute clarity, speed, and focus.”",
  guideLabel: "04. THE GUIDE",
  guideTitle: "ANTONIO HERRERA",
  guideP1Label: "Pillar One",
  guideP1Title: "The Strategic Designer",
  guideP1Text: "Redesigning physical layouts, custom client portfolios, and digital interfaces. We merge Swiss typographic alignment with high-performance responsive code to focus your digital presence.",
  guideP2Label: "Pillar Two",
  guideP2Title: "The Performing Artist",
  guideP2Text: "Curating live vocal sets, ambient resonance systems, and celebratory gatherings. We establish electric, zero-judgment circles where high-stakes leaders remember the power of genuine music.",
  metric1Val: "10+",
  metric1Label: "Years Experience",
  metric1Desc: "Custom systems, brand architectures, and high-contrast layouts built with timeless Swiss design standards.",
  metric2Val: "50+",
  metric2Label: "Projects Deployed",
  metric2Desc: "Next-gen web applications, corporate portfolios, and physical spacing systems implemented worldwide.",
  metric3Val: "100%",
  metric3Label: "Meticulous Craft",
  metric3Desc: "Bespoke digital typography pairings, responsive layouts, and lightning-fast page speed performance.",
};

interface Project {
  title: string;
  slug: string;
  discipline: string;
  year: string;
  client: string;
  summary: string;
  cover: string;
}

interface DesignPageClientProps {
  initialProjects: Project[];
}

export default function DesignPageClient({ initialProjects }: DesignPageClientProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const offerDetails = [
    {
      title: "Brand Design",
      desc: "TODO: Define full scope of corporate identity, typography pairings, color systems, and brand assets.",
      icon: <Layers className="w-5 h-5 text-ah-red" />,
    },
    {
      title: "Web Design",
      desc: "TODO: Define next-gen web systems, App Router migrations, performance metrics, and fluid web layouts.",
      icon: <Monitor className="w-5 h-5 text-ah-orange" />,
    },
    {
      title: "Design Consultation",
      desc: "TODO: Define private physical and digital audit details, session hours, and strategic delivery roadmaps.",
      icon: <HelpCircle className="w-5 h-5 text-ah-rosa" />,
    },
  ];

  // Restrict to 3-4 cards for the WorkSlider
  const displayProjects = initialProjects ? initialProjects.slice(0, 4) : [];

  return (
    <div className="w-full bg-black text-white selection:bg-ah-red selection:text-white">
      
      {/* 1. HERO SECTION (design offer) */}
      <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ah-orange/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ah-orange animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-ah-grey font-bold">
              Bespoke Design Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none font-syne"
          >
            Brand, web &amp; design consultation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base md:text-lg text-ah-grey max-w-2xl mx-auto leading-relaxed"
          >
            Form and system aligned with intent. We construct highly calibrated brand frameworks, digital pipelines, and bespoke websites designed to amplify identity and drive clear conversion.
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
              className="ah-button ah-button-primary w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-transform inline-flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold"
            >
              <Calendar className="w-4 h-4" />
              <span>SCHEDULE A CONSULTATION</span>
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

      {/* 3. STAKES SECTION (design framing: the cost of a weak brand and web presence) */}
      <section id="stakes" className="relative bg-ah-red text-black py-24 md:py-32 w-full overflow-hidden border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-black/60 font-bold font-mono">
            {TODO_DESIGN_COPY.stakesLabel}
          </span>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-syne leading-tight text-black">
            {TODO_DESIGN_COPY.stakesText}
          </p>
        </div>
      </section>

      {/* 4. VALUE PROPOSITION SECTION (design) */}
      <section id="value-proposition" className="py-24 md:py-32 border-b border-white/10 text-center bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ah-orange font-bold font-mono">
            {TODO_DESIGN_COPY.vpLabel}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne text-white">
            {TODO_DESIGN_COPY.vpTitle}
          </h2>
          <p className="text-lg md:text-xl text-ah-grey max-w-2xl mx-auto leading-relaxed font-syne">
            {TODO_DESIGN_COPY.vpText}
          </p>
        </div>
      </section>

      {/* 5. EMPATHY SECTION */}
      <section id="empathy" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-ah-rosa font-bold font-mono">
            {TODO_DESIGN_COPY.empathyLabel}
          </span>
          <p className="text-lg md:text-xl text-ah-grey leading-relaxed font-syne">
            {TODO_DESIGN_COPY.empathyText}
          </p>
          <p className="font-syne italic text-xl md:text-3xl text-ah-rosa mt-6 font-medium">
            {TODO_DESIGN_COPY.empathyAccent}
          </p>
        </div>
      </section>

      {/* 6. GUIDE SECTION: Designer */}
      <section id="guide" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">
              {TODO_DESIGN_COPY.guideLabel}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne mt-2">
              {TODO_DESIGN_COPY.guideTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            {/* Pillar One: Designer */}
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-lightblue/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-lightblue font-bold font-mono">
                  {TODO_DESIGN_COPY.guideP1Label}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-lightblue transition-colors">
                  {TODO_DESIGN_COPY.guideP1Title}
                </h3>
                <p className="text-ah-grey leading-relaxed text-sm md:text-base mb-8">
                  {TODO_DESIGN_COPY.guideP1Text}
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
                  {TODO_DESIGN_COPY.guideP2Label}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-red transition-colors">
                  {TODO_DESIGN_COPY.guideP2Title}
                </h3>
                <p className="text-ah-grey leading-relaxed text-sm md:text-base mb-8">
                  {TODO_DESIGN_COPY.guideP2Text}
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

      {/* 7. TESTIMONIALS SECTION (shared, ids: [], empty renders nothing) */}
      <Testimonials ids={[]} />

      {/* 8. SERVICE METRICS SECTION */}
      <section id="metrics" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-red/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-red font-syne tracking-tight">
                {TODO_DESIGN_COPY.metric1Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">
                {TODO_DESIGN_COPY.metric1Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2">{TODO_DESIGN_COPY.metric1Desc}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-orange/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-orange font-syne tracking-tight">
                {TODO_DESIGN_COPY.metric2Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">
                {TODO_DESIGN_COPY.metric2Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2">{TODO_DESIGN_COPY.metric2Desc}</p>
            </div>
            <div className="p-8 border border-white/5 rounded-2xl bg-black hover:border-ah-rosa/20 transition-all">
              <span className="text-5xl md:text-7xl font-extrabold text-ah-rosa font-syne tracking-tight">
                {TODO_DESIGN_COPY.metric3Val}
              </span>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-ah-grey mt-4 font-bold">
                {TODO_DESIGN_COPY.metric3Label}
              </h4>
              <p className="text-xs text-ah-grey/60 mt-2">{TODO_DESIGN_COPY.metric3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SERVICES: Brand Design · Web Design · Design Consultation (the existing OfferDetail blocks) */}
      <section id="offer-detail" className="py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">05. CAPABILITIES</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Design offers &amp; frameworks
            </h2>
            <p className="text-sm text-ah-grey leading-relaxed font-light">
              We focus on absolute clarity, raw execution, and structural integrity. Explore our three primary services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerDetails.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-white/10 bg-white/[0.005] rounded-2xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                    {offer.icon}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold tracking-wide group-hover:text-ah-red transition-colors font-syne">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-ah-grey leading-relaxed">
                      {offer.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={GOOGLE_CALENDAR_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white/10 text-white text-[10px] font-bold rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center gap-2 uppercase tracking-widest"
                  >
                    <span>BOOK CONSULTATION</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WORK SLIDER (3-4 design cards → /work/{slug}, "All work" → /work, touch-swipeable) */}
      {displayProjects.length > 0 && (
        <section id="work-slider" className="py-24 border-b border-white/10 bg-black">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">06. SELECTED CASES</span>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
                  Case studies &amp; blueprints
                </h2>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => scrollSlider("left")}
                  className="p-3 rounded-full border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors cursor-none"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  className="p-3 rounded-full border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors cursor-none"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Horizontal Scroll Slider with Snap */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-none pb-4 scroll-smooth"
            >
              {displayProjects.map((project) => (
                <div
                  key={project.slug}
                  className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-[32%]"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative aspect-[4/3] w-full overflow-hidden bg-white/5 rounded-3xl block border border-white/10"
                  >
                    {/* Full-bleed Cover Image Placeholder */}
                    <MediaPlaceholder
                      aspect="4/5"
                      label="MEDIA IN PRODUCTION"
                      className="!border-0 w-full h-full"
                    />

                    {/* Overlaid Title and Discipline */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-ah-grey font-semibold font-mono">
                          {project.discipline}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-ah-red transition-colors font-syne">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center pt-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ah-grey hover:text-white transition-colors"
              >
                <span>ALL WORK</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 11. PLAN SECTION */}
      <section id="plan" className="py-24 border-b border-white/10 bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">07. ENGAGEMENT PROCESS</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Three-step delivery plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-red/10 border border-ah-red/20 flex items-center justify-center font-mono text-xs font-bold text-ah-red">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Discover &amp; audit
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  We deep dive into your existing visual presence, platform metrics, and structural assets. This initial audit uncovers gaps and defines precise roadmap scopes.
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-orange/10 border border-ah-orange/20 flex items-center justify-center font-mono text-xs font-bold text-ah-orange">
                02
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Systemize &amp; blueprint
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  We draft custom design specifications, responsive typographic guidelines, and component design patterns. The entire architectural system is mapped out in high fidelity.
                </p>
              </div>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-rosa/10 border border-ah-rosa/20 flex items-center justify-center font-mono text-xs font-bold text-ah-rosa">
                03
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold tracking-wide font-syne text-white">
                  Implement &amp; launch
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  We build highly responsive front-end codes using Next.js, and deploy customized system parameters. Everything is thoroughly tested for raw speed and responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. EXPLANATORY PARAGRAPH SECTION */}
      <section id="explanatory" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-mono mb-8">
            SEO &amp; Service Standards
          </p>
          <p className="text-sm md:text-base text-ah-grey/80 leading-relaxed font-light text-left md:text-center max-w-3xl mx-auto font-syne">
            Based in Zurich, Switzerland, Antonio Herrera operates a boutique strategic design agency specializing in premium corporate identity, digital transformation, and professional web development. By rejecting mass-market templates in favor of bespoke typography pairings, high-contrast layouts, and intuitive Swiss structural geometry, we forge memorable brand systems. From local Zurich businesses requiring refined brand consulting to international portfolios looking to establish a prestigious web presence, we focus on delivering raw speed, strict visual consistency, and absolute clarity.
          </p>
        </div>
      </section>

      {/* 13. MAGNET LEAD DIAGNOSTIC SECTION */}
      <section id="diagnostic" className="py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">08. EVALUATION</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              The strategic design diagnostic
            </h2>
            <p className="text-sm text-ah-grey max-w-xl mx-auto leading-relaxed">
              Unlock our professional digital system and brand readiness evaluation. Understand how your layout, alignment, and site metrics stack up.
            </p>
          </div>

          <div className="max-w-md mx-auto pt-4">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 border border-ah-orange/30 bg-ah-orange/5 rounded-2xl flex flex-col items-center gap-3"
              >
                <ShieldCheck className="w-8 h-8 text-ah-orange" />
                <p className="text-sm font-bold tracking-wider text-white">Diagnostic registry received</p>
                <p className="text-xs text-ah-grey">We have logged your request. Our system will generate your custom assessment metrics shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ah-orange transition-all font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-white text-black hover:bg-ah-orange hover:text-black text-xs font-bold rounded-xl transition-all duration-300 cursor-none uppercase tracking-widest"
                >
                  REQUEST DIAGNOSTIC
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 14. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-ah-orange text-black py-24 md:py-32 border-b-4 border-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-syne">
            Elevate your core expression.
          </h2>
          <p className="text-base md:text-xl text-black/80 max-w-2xl mx-auto leading-relaxed font-medium">
            We build precise, premium, and meaningful frameworks. Let us align your physical and digital assets starting today.
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 cursor-none uppercase tracking-widest"
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
