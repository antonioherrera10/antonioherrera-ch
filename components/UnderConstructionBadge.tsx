"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Mail,
  Copy,
  Check,
  Calendar,
  Compass,
  ArrowRight,
  Info,
} from "lucide-react";
import { GOOGLE_CALENDAR_LINK } from "@/lib/content";

const CONTACT_EMAIL = "contact@antonioherrera.ch";

export default function UnderConstructionBadge() {
  // Modal is open by default as soon as the page loads (desktop & mobile)
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Open on load
    setIsOpen(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom event listener so mobile navigation or buttons can trigger the popup
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("open-under-construction-modal", handleOpenEvent);
    return () => window.removeEventListener("open-under-construction-modal", handleOpenEvent);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      {/* FLOATING BADGE ACROSS THE TOP HEADER (OPTIMIZED FOR DESKTOP & MOBILE) */}
      <aside
        aria-label="Website status announcement"
        className={`fixed left-1/2 -translate-x-1/2 z-40 transition-all duration-300 pointer-events-auto max-w-[96vw] sm:max-w-[94vw] ${
          isScrolled ? "top-[86px] sm:top-[88px]" : "top-[108px] sm:top-[112px]"
        }`}
      >
        <AnimatePresence mode="wait">
          {!isMinimized ? (
            <motion.div
              key="full-badge"
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-1.5 sm:gap-2.5 pl-3 pr-2 py-1.5 sm:py-2 rounded-full bg-black/90 backdrop-blur-md border border-white/20 hover:border-brand-orange/70 shadow-[0_8px_30px_rgb(0,0,0,0.6)] transition-colors duration-200 group"
            >
              {/* Interactive trigger to open info modal */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none active:scale-[0.98] transition-transform"
                aria-label="Website under construction - tap for contact info and details"
              >
                {/* Pulsing Status Dot */}
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange" />
                </span>

                {/* Main Label */}
                <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase font-syne text-white group-hover:text-brand-orange transition-colors whitespace-nowrap">
                  Website under construction
                </span>

                {/* Subtext on Desktop */}
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-brand-grey group-hover:text-white transition-colors border-l border-white/20 pl-2 tracking-widest uppercase">
                  <span>Browse freely &bull; Inquiries</span>
                  <ArrowRight className="w-3 h-3 text-brand-orange group-hover:translate-x-0.5 transition-transform" />
                </span>

                {/* Mobile tap indicator */}
                <span className="md:hidden text-brand-orange text-[10px] sm:text-xs font-semibold pl-0.5">
                  &bull; Tap info
                </span>
              </button>

              {/* Minimize button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMinimized(true);
                }}
                className="p-1 sm:p-1 rounded-full text-brand-grey hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none ml-1"
                aria-label="Minimize construction badge"
                title="Minimize banner"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ) : (
            <motion.button
              key="minimized-pill"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-brand-orange/40 hover:border-brand-orange active:scale-[0.98] shadow-lg text-white group focus:outline-none"
              aria-label="Website under construction - tap to expand"
              title="Website under construction - tap for info"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="text-[10px] font-bold tracking-widest uppercase font-syne text-brand-orange">
                Under Construction
              </span>
              <Info className="w-3 h-3 text-brand-grey group-hover:text-white transition-colors" />
            </motion.button>
          )}
        </AnimatePresence>
      </aside>

      {/* INTERACTIVE MODAL (FULLY RESPONSIVE & MOBILE TOUCH OPTIMIZED) */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-construction-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-10 text-white max-h-[92dvh] sm:max-h-[90vh] flex flex-col"
            >
              {/* Top 5-stripe signature accent bar */}
              <div className="flex w-full h-[4px] shrink-0">
                <div className="flex-1 bg-brand-red" />
                <div className="flex-1 bg-brand-orange" />
                <div className="flex-1 bg-brand-rosa" />
                <div className="flex-1 bg-brand-lightblue" />
                <div className="flex-1 bg-brand-blue" />
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-2 rounded-full text-brand-grey hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors focus:outline-none z-20"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable Container for Mobile Viewports */}
              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain">
                {/* Status Header */}
                <div className="space-y-2 pr-6">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-[10px] tracking-[0.2em] uppercase font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span>In Active Development</span>
                  </div>

                  <h2
                    id="modal-construction-title"
                    className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight uppercase font-syne leading-tight"
                  >
                    Website Under Construction
                  </h2>

                  <p className="text-xs sm:text-sm text-brand-grey leading-relaxed">
                    Antonio Herrera&apos;s digital space and portfolio are
                    currently being refined and expanded. You are welcome to
                    freely explore and browse all live pages, music releases, and
                    design work.
                  </p>
                </div>

                {/* Free Browsing Reassurance */}
                <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/80">
                  <Compass className="w-4 h-4 text-brand-lightblue shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong className="text-white font-semibold">
                      Full browsing available:
                    </strong>{" "}
                    Navigate between Design, Music, and About anytime via the top
                    navigation menu.
                  </p>
                </div>

                {/* Direct Contact Card */}
                <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-brand-grey font-bold">
                      Direct Inquiries &amp; Bookings
                    </span>
                    <span className="text-[10px] font-mono text-brand-orange">
                      Zurich &bull; Global
                    </span>
                  </div>

                  {/* Email Box */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg bg-black/60 border border-white/10">
                    <div className="flex items-center gap-2 min-w-0">
                      <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                      <span className="font-mono text-xs sm:text-sm text-white select-all truncate">
                        {CONTACT_EMAIL}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded bg-white/10 hover:bg-white/20 active:bg-white/30 text-xs font-semibold tracking-wider uppercase transition-colors min-h-[38px] sm:min-h-0"
                        title="Copy email to clipboard"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-brand-grey" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`mailto:${CONTACT_EMAIL}?subject=Inquiry%20via%20Website`}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-2 sm:py-1.5 rounded bg-brand-orange hover:bg-white hover:text-black active:bg-brand-white text-black text-xs font-bold tracking-wider uppercase transition-colors min-h-[38px] sm:min-h-0"
                      >
                        <span>Send</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Discovery Call Link */}
                  <div className="pt-0.5">
                    <a
                      href={GOOGLE_CALENDAR_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 active:bg-white/20 border border-white/10 text-xs font-bold uppercase tracking-wider text-white transition-colors min-h-[44px]"
                    >
                      <Calendar className="w-4 h-4 text-brand-rosa shrink-0" />
                      <span className="truncate">Book Discovery Call (Google Calendar)</span>
                    </a>
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-1 sm:pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                  <span className="text-[10px] sm:text-[11px] text-brand-grey text-center sm:text-left">
                    Click outside or tap below to explore
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black hover:bg-brand-grey active:bg-white/80 text-xs font-bold uppercase tracking-wider transition-colors min-h-[44px] flex items-center justify-center"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
