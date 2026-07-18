"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Mail, Calendar, Play, Music, ArrowRight, ShieldCheck } from "lucide-react";
import { CONTENT, SOCIAL_LINKS, MUSIC_PROJECTS, GOOGLE_CALENDAR_LINK } from "@/lib/content";
import TrustedBy from "@/components/TrustedBy";
import MuxVideo from "@/components/MuxVideo";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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

  const partnerships = [
    {
      title: "Design Partnership",
      desc: "Co-create spatial and brand sensory experiences blending audio-visual aesthetics.",
      subject: "Design Partnership Proposal",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "Brand Ambassador",
      desc: "Partner with Antonio Herrera for premium lifestyle, fashion, and art brand alignment.",
      subject: "Brand Ambassador Inquiry",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "Strategic Partnership",
      desc: "Join forces on high-end art installations, residency initiatives, and premium curations.",
      subject: "Strategic Partnership Proposal",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "General Booking",
      desc: "Book direct live vocal and acoustic performances for high-profile public or private events.",
      subject: "General Booking Inquiry",
      email: SOCIAL_LINKS.bookingEmail || "booking@antonioherrera.com",
    },
    {
      title: "Event Experience Co-Creation",
      desc: "Collaborate to design and direct unforgettable custom music and acoustic journeys.",
      subject: "Event Experience Co-Creation",
      email: SOCIAL_LINKS.contactEmail,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-ah-red selection:text-black">
      {/* 1. HERO SECTION */}
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
            <h1 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tight font-syne leading-none">
              {CONTENT.musicHeroTitle}
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-ah-grey max-w-3xl mx-auto leading-relaxed font-light"
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
              className="px-8 py-4 bg-ah-red text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-4 h-4" />
              <span>{CONTENT.cta}</span>
            </a>

            {/* Ghost Watch the Showreel anchor */}
            <a
              href="#showreel"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch the showreel</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <TrustedBy />

      {/* 3. SHOWREEL SECTION */}
      <section id="showreel" className="py-24 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">02. {CONTENT.showreelTitle}</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Live Energy &amp; Motion
            </h2>
            <p className="text-sm text-ah-grey leading-relaxed">
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

      {/* 4. MUSIC WORK SECTION */}
      {MUSIC_PROJECTS && MUSIC_PROJECTS.length > 0 && (
        <section id="music-work" className="py-24 border-b border-white/10 bg-white/[0.005]">
          <div className="max-w-7xl mx-auto px-6 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">03. Selected Work</span>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
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
                  <div className="space-y-6">
                    <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-ah-grey font-mono">
                      <span>{project.discipline}</span>
                      <span>{project.year}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold uppercase tracking-wide group-hover:text-ah-red transition-colors font-syne">
                        {project.title}
                      </h3>
                      <p className="text-xs text-ah-grey leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  {project.venue && (
                    <div className="border-t border-white/5 pt-4 mt-6 text-[10px] uppercase tracking-widest text-white/40">
                      📍 {project.venue}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">04. Resonance</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
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

      {/* 6. COLLABORATION PARTNERSHIPS */}
      <section id="partnerships" className="py-24 border-b border-white/10 bg-white/[0.005]">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">05. Collaboration</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Partnerships &amp; Bookings
            </h2>
            <p className="text-sm text-ah-grey leading-relaxed">
              Explore opportunities to bring Antonio’s musical and acoustic artistry to your next venture or elite showcase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {partnerships.map((p, index) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-white/10 bg-black rounded-2xl flex flex-col justify-between hover:border-ah-red/30 transition-all duration-300 group"
              >
                <div className="space-y-4 mb-8">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-ah-grey group-hover:bg-ah-red/10 group-hover:text-ah-red transition-all">
                    <Music className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-ah-grey leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                
                <a
                  href={`mailto:${p.email}?subject=${encodeURIComponent(p.subject)}`}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-ah-red transition-colors"
                >
                  <span>Propose</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MANAGEMENT BOOKING */}
      <section id="management" className="py-24 border-b border-white/10 relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">06. Booking Agent</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Direct Representation
            </h2>
            <p className="text-sm text-ah-grey max-w-2xl mx-auto leading-relaxed">
              Professional scheduling, contract negotiations, and private performance arrangements are managed directly by representation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto pt-6">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] transition-colors text-center space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-ah-grey block">General Booking</span>
              <a
                href={`mailto:${SOCIAL_LINKS.bookingEmail}`}
                className="text-base md:text-lg font-bold text-white hover:text-ah-red transition-colors font-mono underline block"
              >
                {SOCIAL_LINKS.bookingEmail}
              </a>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.01] hover:bg-white/[0.02] transition-colors text-center space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-ah-grey block">Management</span>
              <a
                href={`mailto:${SOCIAL_LINKS.managementEmail}`}
                className="text-base md:text-lg font-bold text-white hover:text-ah-red transition-colors font-mono underline block"
              >
                {SOCIAL_LINKS.managementEmail}
              </a>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/management"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              <span>View Full Management Information &amp; Rider</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. MAGNET LEAD RECORDINGS */}
      <section id="magnet" className="py-24 border-b border-white/10 bg-white/[0.005]">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-10">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey">07. Premium Audio</span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight font-syne">
              Acoustic Sessions &amp; Unreleased Tracks
            </h2>
            <p className="text-sm text-ah-grey max-w-xl mx-auto leading-relaxed">
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
                <p className="text-sm font-bold uppercase tracking-wider text-white">Registry Confirmed</p>
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
                  className="flex-1 px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-ah-red transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-4 bg-white text-black hover:bg-ah-red hover:text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300"
                >
                  Join Registry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section id="final-cta" className="bg-ah-red text-black py-24 md:py-32 border-b-4 border-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase tracking-tighter leading-none font-syne">
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
