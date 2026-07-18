"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Mail,
  Download,
  ArrowRight,
  Briefcase,
  Music,
  FileText,
  Calendar,
} from "lucide-react";
import { SOCIAL_LINKS, GOOGLE_CALENDAR_LINK } from "@/lib/content";

export default function ManagementPageClient() {
  // Construct email links with subjects
  const managementMailto = `mailto:${SOCIAL_LINKS.managementEmail}?subject=Management%20Inquiry%20-%20Antonio%20Herrera`;
  const bookingMailto = `mailto:${SOCIAL_LINKS.bookingEmail}?subject=Booking%20Request%20-%20Antonio%20Herrera`;
  const pressMailto = `mailto:${SOCIAL_LINKS.pressEmail}?subject=Press%20%26%20Media%20Inquiry%20-%20Antonio%20Herrera`;

  const partnerships = [
    {
      title: "Design partnership",
      desc: "Co-create spatial and brand sensory experiences blending audio-visual aesthetics.",
      subject: "Design Partnership Proposal",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "Brand ambassador",
      desc: "Partner with Antonio Herrera for premium lifestyle, fashion, and art brand alignment.",
      subject: "Brand Ambassador Inquiry",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "Strategic partnership",
      desc: "Join forces on high-end art installations, residency initiatives, and premium curations.",
      subject: "Strategic Partnership Proposal",
      email: SOCIAL_LINKS.contactEmail,
    },
    {
      title: "General booking",
      desc: "Book direct live vocal and acoustic performances for high-profile public or private events.",
      subject: "General Booking Inquiry",
      email: SOCIAL_LINKS.bookingEmail || "booking@antonioherrera.com",
    },
    {
      title: "Event experience co-creation",
      desc: "Collaborate to design and direct unforgettable custom music and acoustic journeys.",
      subject: "Event Experience Co-Creation",
      email: SOCIAL_LINKS.contactEmail,
    },
  ];

  const contactCards = [
    {
      id: "contact", // For id="contact"
      title: "Management",
      email: SOCIAL_LINKS.managementEmail,
      mailto: managementMailto,
      description: "For corporate consultations, advisory partnerships, strategic brand alignments, and high-level project administration.",
      icon: Briefcase,
      color: "text-ah-orange border-ah-orange/10 bg-ah-orange/5",
      btnText: "CONTACT MANAGEMENT",
    },
    {
      id: "book", // For id="book"
      title: "Booking",
      email: SOCIAL_LINKS.bookingEmail,
      mailto: bookingMailto,
      description: "For live vocal concerts, private acoustic ceremonies, custom sound structures, and performance curations globally.",
      icon: Music,
      color: "text-ah-red border-ah-red/10 bg-ah-red/5",
      btnText: "REQUEST BOOKING",
    },
    {
      id: "press",
      title: "Press",
      email: SOCIAL_LINKS.pressEmail,
      mailto: pressMailto,
      description: "For high-resolution photography requests, editorial interviews, press releases, and digital brand asset permissions.",
      icon: FileText,
      color: "text-ah-rosa border-ah-rosa/10 bg-ah-rosa/5",
      btnText: "INQUIRE PRESS",
    },
  ];

  return (
    <div className="w-full bg-black text-white selection:bg-ah-red selection:text-white">
      
      {/* 1. HEADER BLOCK */}
      <section
        id="header-block"
        className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-12 border-b border-white/10 text-center"
      >
        <div className="space-y-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/[0.02]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-ah-red" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-ah-grey font-bold font-mono">
              Management
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-none font-syne text-white"
          >
            Professional contact
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-md uppercase tracking-[0.15em] font-mono text-ah-grey font-light max-w-2xl mx-auto"
          >
            Booking, management and press for Antonio Herrera.
          </motion.p>
        </div>
      </section>

      {/* 2. COLLABORATION & PARTNERSHIPS */}
      <section id="collaborate" className="py-24 border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-grey font-bold">COLLABORATION</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-syne">
              Partnerships &amp; bookings
            </h2>
            <p className="text-sm text-ah-grey leading-relaxed font-light">
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
                  <h3 className="text-sm font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-ah-grey leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
                
                <a
                  href={`mailto:${p.email}?subject=${encodeURIComponent(p.subject)}`}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-ah-red transition-colors font-mono"
                >
                  <span>PROPOSE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT CARDS SECTION */}
      <section
        id="contact-channels"
        className="max-w-7xl mx-auto px-6 py-24 border-b border-white/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                id={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="group border border-white/5 rounded-2xl bg-white/[0.002] p-8 hover:border-white/15 hover:bg-white/[0.01] transition-all flex flex-col justify-between min-h-[360px]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl border ${card.color}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-ah-grey/50">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white font-syne">
                      {card.title}
                    </h3>
                    <p className="text-xs text-ah-red font-mono tracking-wider font-semibold select-all">
                      {card.email}
                    </p>
                    <p className="text-xs md:text-sm text-ah-grey/80 leading-relaxed font-light pt-2">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <a
                    href={card.mailto}
                    className="w-full py-4 bg-white text-black text-xs font-bold rounded-xl hover:bg-ah-red hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 font-mono uppercase tracking-widest"
                  >
                    <span>{card.btnText}</span>
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. MEDIA KIT SECTION */}
      <section
        id="media-kit"
        className="max-w-7xl mx-auto px-6 py-20 border-b border-white/10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 border border-white/10 rounded-3xl bg-white/[0.005] hover:border-white/15 transition-all flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="space-y-4 text-center md:text-left max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.4em] text-ah-rosa font-mono block font-bold">
              PRESS ASSETS
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-syne">
              Official media kit
            </h2>
            <p className="text-xs md:text-sm text-ah-grey font-light leading-relaxed">
              Access high-resolution branding portraits, bio sheets, performance audio fragments, and Swiss graphic layouts curated for digital and print publishers.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href={SOCIAL_LINKS.mediaKit}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-4 border border-white/20 text-white text-xs font-bold rounded-xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 inline-flex items-center justify-center gap-3 font-mono uppercase tracking-widest"
            >
              <span>DOWNLOAD MEDIA KIT</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 5. FINAL CTA */}
      <section
        id="final-cta"
        className="bg-white text-black py-24 md:py-32 border-b-4 border-ah-red relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight leading-none font-syne"
          >
            Construct extraordinary experiences.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-xl text-black/70 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Schedule a high-stakes corporate alignment session or private artistic presentation directly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-6"
          >
            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-xs font-bold rounded-xl hover:bg-ah-red hover:text-white transition-all duration-300 inline-flex items-center gap-3 font-mono uppercase tracking-widest"
            >
              <span>BOOK CALENDAR CONSULTATION</span>
              <Calendar className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
