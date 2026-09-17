"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
  Layout,
  Compass,
  Sun,
} from "lucide-react";
import { Project } from "@/lib/work";
import { CONTENT, GOOGLE_CALENDAR_LINK } from "@/lib/content";
import CloudinaryImage from "@/components/CloudinaryImage";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";

interface HomePageClientProps {
  projects?: Project[];
}

const valuePropositions = [
  {
    id: "identity",
    title: "Authentic identity",
    desc: "Align your inner truth with external expression to live with unshakable clarity and poise.",
    icon: Sparkles,
    bg: "bg-ah-red/[0.04] hover:bg-ah-red/[0.09]",
    border: "border-ah-red/20 hover:border-ah-red/40",
    iconStyle: "bg-ah-red/10 border-ah-red/25 text-ah-red",
    badge: "01",
  },
  {
    id: "relationships",
    title: "Harmonious relationships",
    desc: "Cultivate transparent, respectful connections that dissolve unsaid friction into lasting trust.",
    icon: Users,
    bg: "bg-ah-orange/[0.04] hover:bg-ah-orange/[0.09]",
    border: "border-ah-orange/20 hover:border-ah-orange/40",
    iconStyle: "bg-ah-orange/10 border-ah-orange/25 text-ah-orange",
    badge: "02",
  },
  {
    id: "work",
    title: "Purposeful work",
    desc: "Channel your creative energy into high-impact endeavors without losing health or peace of mind.",
    icon: Briefcase,
    bg: "bg-ah-lightblue/[0.04] hover:bg-ah-lightblue/[0.09]",
    border: "border-ah-lightblue/20 hover:border-ah-lightblue/40",
    iconStyle: "bg-ah-lightblue/10 border-ah-lightblue/25 text-ah-lightblue",
    badge: "03",
  },
  {
    id: "spaces",
    title: "Inspiring spaces",
    desc: "Craft physical and sensory surroundings that actively elevate your daily focus and emotional ease.",
    icon: Layout,
    bg: "bg-ah-rosa/[0.04] hover:bg-ah-rosa/[0.09]",
    border: "border-ah-rosa/20 hover:border-ah-rosa/40",
    iconStyle: "bg-ah-rosa/10 border-ah-rosa/25 text-ah-rosa",
    badge: "04",
  },
  {
    id: "leadership",
    title: "Empowered leadership",
    desc: "Lead through calm presence and genuine inspiration rather than exhausting command and control.",
    icon: Compass,
    bg: "bg-ah-blue/[0.05] hover:bg-ah-blue/[0.10]",
    border: "border-ah-blue/25 hover:border-ah-blue/50",
    iconStyle: "bg-ah-blue/15 border-ah-blue/30 text-[#7598ff]",
    badge: "05",
  },
  {
    id: "happiness",
    title: "Genuine happiness",
    desc: "Rediscover the daily joy of unburdened movement, lighthearted laughter, and pure presence.",
    icon: Sun,
    bg: "bg-amber-400/[0.04] hover:bg-amber-400/[0.09]",
    border: "border-amber-400/20 hover:border-amber-400/40",
    iconStyle: "bg-amber-400/10 border-amber-400/25 text-amber-400",
    badge: "06",
  },
];

interface LifeDimension {
  id: string;
  name: string;
  image: string;
  alt: string;
  activeColor: string;
  activeBg: string;
  activeBorder: string;
  badge: string;
  tagline: string;
}

const lifeDimensions: LifeDimension[] = [
  {
    id: "identity",
    name: "Identity",
    image: "/images/dim-identity.jpg",
    alt: "Identity - Authentic self-alignment",
    activeColor: "text-ah-red",
    activeBg: "bg-ah-red/10",
    activeBorder: "border-ah-red/30",
    badge: "01",
    tagline: "Align inner truth with outward presence.",
  },
  {
    id: "relationships",
    name: "Relationships",
    image: "/images/dim-relationships.jpg",
    alt: "Relationships - Meaningful human connection",
    activeColor: "text-ah-orange",
    activeBg: "bg-ah-orange/10",
    activeBorder: "border-ah-orange/30",
    badge: "02",
    tagline: "Cultivate transparent, respectful connections.",
  },
  {
    id: "work",
    name: "Work",
    image: "/images/dim-work.jpg",
    alt: "Work - Purposeful focus and high impact",
    activeColor: "text-ah-lightblue",
    activeBg: "bg-ah-lightblue/10",
    activeBorder: "border-ah-lightblue/30",
    badge: "03",
    tagline: "Channel creative energy into high-impact craft.",
  },
  {
    id: "spaces",
    name: "Spaces",
    image: "/images/dim-spaces.jpg",
    alt: "Spaces - Inspiring physical environments",
    activeColor: "text-ah-rosa",
    activeBg: "bg-ah-rosa/10",
    activeBorder: "border-ah-rosa/30",
    badge: "04",
    tagline: "Surroundings that actively elevate focus and calm.",
  },
  {
    id: "leadership",
    name: "Leadership",
    image: "/images/dim-leadership.jpg",
    alt: "Leadership - Empowered presence and vision",
    activeColor: "text-[#7598ff]",
    activeBg: "bg-ah-blue/15",
    activeBorder: "border-ah-blue/30",
    badge: "05",
    tagline: "Lead through calm presence and genuine inspiration.",
  },
];

export default function HomePageClient({ projects = [] }: HomePageClientProps) {
  const [activeDimension, setActiveDimension] = React.useState<string>("identity");

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
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-black/60 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-grey font-bold font-mono">
              Creating Happiness
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="ah-hero-headline font-extrabold tracking-tight leading-[1.08] font-syne text-white"
          >
            {CONTENT.heroTitle}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-brand-grey max-w-2xl leading-relaxed"
          >
            {CONTENT.heroSub}
          </motion.p>

          {/* Primary CTA button, Secondary CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
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
              href="#value-proposition"
              className="px-8 py-4 bg-white/5 border border-white/15 text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 font-mono uppercase tracking-widest min-h-[44px]"
            >
              <span>SECONDARY CTA BUTTON</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <TrustedBy />

      {/* 3. VALUE PROPOSITION SECTION */}
      <section id="value-proposition" className="py-24 md:py-32 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-bold font-mono">
              01. Value proposition
            </span>
            <h2 className="ah-section-heading font-extrabold tracking-tight font-syne text-white">
              Experience your empowerment
            </h2>
            <p className="text-base md:text-lg text-ah-grey max-w-2xl mx-auto leading-relaxed">
              Feel happy about your identity, relationships, work spaces and leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {valuePropositions.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`vp-card-${item.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`group p-8 rounded-2xl border ${item.border} ${item.bg} backdrop-blur-sm transition-all duration-300`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-xl border ${item.iconStyle} transition-transform group-hover:scale-110 duration-300`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-mono text-white/40 group-hover:text-white/70 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="ah-card-heading font-bold text-white font-syne group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-ah-grey/90 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STAKES SECTION */}
      <section
        id="stakes"
        className="relative w-full overflow-hidden border-y border-white/10 min-h-[620px] md:min-h-[720px] lg:min-h-[800px] flex items-center justify-center"
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stakes-bg.jpg"
            alt="Life architecture background"
            fill
            className="object-cover object-center w-full h-full"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
        </div>

        {/* Headline and Subline Content */}
        <div className="max-w-4xl mx-auto px-6 py-28 md:py-36 lg:py-44 text-center space-y-6 relative z-10 w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full bg-black/60 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-grey font-bold font-mono">
              02. The stakes
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ah-section-heading font-extrabold tracking-tight font-syne leading-tight text-white max-w-3xl mx-auto"
          >
            Transform every area of your life
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Turn any challenge into an opportunity to design a new life architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex justify-center"
          >
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-xs font-bold rounded-xl hover:bg-brand-grey hover:text-black transition-all duration-300 inline-flex items-center justify-center gap-3 font-mono uppercase tracking-widest min-h-[44px] shadow-2xl"
            >
              <span>PRIMARY CTA BUTTON</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 5. DIMENSIONS OF A HAPPY LIFE (LIFE ARCHITECTURE) SECTION */}
      <section
        id="life-architecture"
        className="py-24 md:py-32 border-b border-white/10 bg-black overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Eyebrow + Title + 5 Stacked Words */}
            <div className="lg:col-span-6 space-y-8 md:space-y-10">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.35em] text-brand-grey font-mono font-bold">
                    03. Life architecture
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-syne font-extrabold text-white tracking-tight leading-tight">
                  Dimensions of a happy life.{" "}
                  <span className="text-white/40 block sm:inline">
                    Your life architecture.
                  </span>
                </h2>
              </div>

              {/* 5 words stacked one on top of each other */}
              <div className="flex flex-col space-y-2 sm:space-y-3">
                {lifeDimensions.map((item) => {
                  const isActive = activeDimension === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onMouseEnter={() => setActiveDimension(item.id)}
                      onFocus={() => setActiveDimension(item.id)}
                      onClick={() => setActiveDimension(item.id)}
                      className={`group w-full text-left transition-all duration-300 rounded-2xl py-3 px-4 -ml-4 flex items-center justify-between cursor-pointer ${
                        isActive
                          ? `${item.activeBg} border ${item.activeBorder}`
                          : "hover:bg-white/[0.03] border border-transparent"
                      }`}
                    >
                      <span
                        className={`font-syne font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] transition-colors duration-300 leading-none ${
                          isActive
                            ? `${item.activeColor}`
                            : "text-white/25 group-hover:text-white/70"
                        }`}
                      >
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-md transition-all duration-300 ${
                          isActive
                            ? `${item.activeBg} ${item.activeColor} border ${item.activeBorder} opacity-100`
                            : "opacity-0"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Image Card with Crossfade on Hover */}
            <div className="lg:col-span-6">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-white/15 bg-white/[0.02] shadow-2xl">
                {lifeDimensions.map((item) => {
                  const isActive = activeDimension === item.id;
                  return (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100 z-10 pointer-events-auto"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover object-center w-full h-full"
                        priority={item.id === "identity"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                      {/* Floating Caption inside the card */}
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 z-20">
                        <div className="space-y-1">
                          <span className={`text-[10px] uppercase font-mono tracking-widest font-bold ${item.activeColor}`}>
                            {item.badge} &mdash; {item.name}
                          </span>
                          <p className="text-xs sm:text-sm text-white/90 font-light font-syne line-clamp-2">
                            {item.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GUIDE (DESIGNER / PERFORMING ARTIST FILTER MOMENT) SECTION */}
      <section id="guide" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey font-bold">
              04. THE GUIDE
            </span>
            <h2 className="ah-section-heading font-extrabold tracking-widest font-syne mt-2 uppercase">
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
                <h3 className="ah-card-heading-lg font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-lightblue transition-colors">
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
                <h3 className="ah-card-heading-lg font-extrabold tracking-tight font-syne mt-4 mb-4 group-hover:text-brand-red transition-colors">
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
            <h2 className="ah-section-heading font-extrabold tracking-tight mt-2 font-syne">
              Elite collaborations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 border border-white/10 rounded-2xl bg-black hover:border-brand-lightblue/30 transition-all flex flex-col justify-between group">
              <div>
                <span className="text-2xl font-extrabold font-syne text-brand-lightblue">
                  01
                </span>
                <h3 className="ah-card-heading font-extrabold tracking-tight font-syne mt-4 mb-4">
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
                <span className="text-2xl font-extrabold font-syne text-brand-red">
                  02
                </span>
                <h3 className="ah-card-heading font-extrabold tracking-tight font-syne mt-4 mb-4">
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

      {/* 10. PLAN SECTION */}
      <section id="plan" className="py-24 md:py-32 border-b border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey">
              06. Framework
            </span>
            <h2 className="ah-section-heading font-extrabold tracking-tight mt-2 font-syne">
              {CONTENT.howTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/5 rounded-2xl bg-black text-center space-y-4 hover:border-brand-red/20 transition-all">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red font-mono">
                Step 01
              </span>
              <h3 className="ah-card-heading font-extrabold font-syne">
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
              <h3 className="ah-card-heading font-extrabold font-syne">
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
              <h3 className="ah-card-heading font-extrabold font-syne">
                Deploy &amp; resonate
              </h3>
              <p className="text-xs text-brand-grey leading-relaxed font-syne">
                Launch your modular next-gen digital systems or gather for electric acoustic resonance sessions that foster true connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. EXPLANATORY PARAGRAPH SECTION */}
      <section id="explanatory" className="py-24 md:py-32 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-grey block mb-6 font-bold font-mono">
            07. About The Studio
          </span>
          <p className="text-base md:text-xl text-brand-grey leading-relaxed text-left md:text-center max-w-3xl mx-auto font-syne">
            Based in Zurich, Switzerland, Antonio Herrera operates a boutique strategic design agency and acoustic curation service. By integrating high-contrast typography, Swiss architectural layout systems, and raw vocal energy, we reject off-the-shelf templates in favor of authentic sensory design. From local Swiss enterprises seeking refined brand identity and modern Next.js development to international organizers requesting premier live vocal performances, our work focuses on absolute structural clarity and memorable human connection. We are committed to craft, meticulous alignment, and visual consistency, making sure every digital asset and physical performance speaks directly to your target audience. As a strategic advisor, we believe that every project deserves a meticulous hand-crafted signature that inspires and delivers enduring commercial value.
          </p>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION */}
      <section id="final-cta" className="bg-[#0a0a0a] text-white py-24 md:py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="ah-banner-heading font-extrabold tracking-tight leading-none font-syne text-white">
            {CONTENT.unlockTitle}
          </h2>
          <p className="text-base md:text-xl text-brand-grey max-w-2xl mx-auto leading-relaxed font-medium">
            {CONTENT.promoSub}
          </p>
          <div className="pt-6">
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black text-xs font-bold rounded-xl hover:bg-brand-grey hover:text-black transition-all duration-300 inline-flex items-center gap-3 font-mono uppercase tracking-widest"
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
