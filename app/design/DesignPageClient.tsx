"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Layers, Monitor, HelpCircle } from "lucide-react";
import { CONTENT, SOCIAL_LINKS, GOOGLE_CALENDAR_LINK } from "@/lib/content";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import CloudinaryImage from "@/components/CloudinaryImage";
import Footer from "@/components/Footer";

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

  return (
    <div className="min-h-screen bg-black text-white selection:bg-ah-red selection:text-black">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 border-b border-white/10 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ah-orange/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[11px] uppercase tracking-[0.5em] text-ah-orange font-bold font-mono">
              Bespoke Design Agency
            </span>
            <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tight font-syne leading-none">
              Brand, Web &amp; Design Consultation
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-ah-grey max-w-3xl mx-auto leading-relaxed font-light"
          >
            Form and system aligned with intent. We construct highly calibrated brand frameworks, digital pipelines, and bespoke websites designed to amplify identity and drive clear conversion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center pt-8"
          >
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ah-red text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-4 h-4" />
              <span>{CONTENT.cta}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <TrustedBy />

      {/* 3. OFFER DETAIL SECTION */}
      <section id="offer-detail" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">02. Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Design Offers &amp; Frameworks
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
                    <h3 className="text-xl font-bold uppercase tracking-wide group-hover:text-ah-red transition-colors font-syne">
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
                    className="px-6 py-3 border border-white/10 text-white text-[10px] uppercase tracking-widest font-bold rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WORK SLIDER SECTION */}
      {initialProjects && initialProjects.length > 0 && (
        <section id="work-slider" className="py-24 border-b border-white/10 bg-white/[0.005]">
          <div className="max-w-7xl mx-auto px-6 space-y-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">03. Selected Cases</span>
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
                  Case Studies &amp; Blueprints
                </h2>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => scrollSlider("left")}
                  className="p-3 rounded-full border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollSlider("right")}
                  className="p-3 rounded-full border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors"
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
              {initialProjects.map((project) => (
                <div
                  key={project.slug}
                  className="snap-start shrink-0 w-[85%] sm:w-[48%] md:w-[32%]"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group relative aspect-[4/3] w-full overflow-hidden bg-white/5 rounded-3xl block border border-white/10"
                  >
                    {/* Full-bleed Cover Image */}
                    <CloudinaryImage
                      folder="work"
                      filename={project.cover}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.7] group-hover:brightness-[0.9]"
                    />

                    {/* Overlaid Title and Discipline */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-ah-grey font-semibold font-mono">
                          {project.discipline}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-ah-red transition-colors font-syne">
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
                <span>All work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 5. TESTIMONIALS SECTION */}
      <Testimonials ids={[]} />

      {/* 6. PLAN SECTION */}
      <section id="plan" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">04. Engagement Process</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Three-Step Delivery Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.002] space-y-6">
              <div className="w-10 h-10 rounded-full bg-ah-red/10 border border-ah-red/20 flex items-center justify-center font-mono text-xs font-bold text-ah-red">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold uppercase tracking-wide font-syne text-white">
                  Discover &amp; Audit
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
                <h3 className="text-lg font-bold uppercase tracking-wide font-syne text-white">
                  Systemize &amp; Blueprint
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
                <h3 className="text-lg font-bold uppercase tracking-wide font-syne text-white">
                  Implement &amp; Launch
                </h3>
                <p className="text-xs text-ah-grey leading-relaxed">
                  We build highly responsive front-end codes using Next.js, and deploy customized system parameters. Everything is thoroughly tested for raw speed and responsive design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. EXPLANATORY PARAGRAPH SECTION */}
      <section id="explanatory" className="py-24 border-b border-white/10 bg-white/[0.002]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-ah-grey font-mono mb-8">
            SEO &amp; Service Standards
          </p>
          <p className="text-sm md:text-base text-ah-grey/80 leading-relaxed font-light">
            Based in Zurich, Switzerland, Antonio Herrera operates a boutique strategic design agency specializing in premium corporate identity, digital transformation, and professional web development. By rejecting mass-market templates in favor of bespoke typography pairings, high-contrast layouts, and intuitive Swiss structural geometry, we forge memorable brand systems. From local Zurich businesses requiring refined brand consulting to international portfolios looking to establish a prestigious web presence, we focus on delivering raw speed, strict visual consistency, and absolute clarity.
          </p>
        </div>
      </section>

      {/* 8. MAGNET LEAD DIAGNOSTIC SECTION */}
      <section id="diagnostic" className="py-24 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">05. Evaluation</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              The Strategic Design Diagnostic
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
                <p className="text-sm font-bold uppercase tracking-wider text-white">Diagnostic Registry Received</p>
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
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ah-orange transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-white text-black hover:bg-ah-orange hover:text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300"
                >
                  Request Diagnostic
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-ah-orange text-black py-24 md:py-32 border-b-4 border-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none font-syne">
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
              className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3"
            >
              <span>{CONTENT.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <Footer />
    </div>
  );
}
