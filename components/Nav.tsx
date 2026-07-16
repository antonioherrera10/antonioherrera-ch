"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CONTENT, GOOGLE_CALENDAR_LINK, SOCIAL_LINKS } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lang, setLang] = useState<"EN" | "DE">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tighter uppercase cursor-pointer hover:text-brand-grey transition-colors"
          >
            ANTONIO HERRERA
          </Link>
        </div>

        {/* Centered Desktop Navigation (Design · Selected Work · Music · Boutique · About) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link
            href="/design"
            className={`text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none ${
              pathname === "/design" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
            }`}
          >
            Design
          </Link>
          <Link
            href="/work"
            className={`text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none ${
              pathname === "/work" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
            }`}
          >
            Selected Work
          </Link>
          <Link
            href="/music"
            className={`text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none ${
              pathname === "/music" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
            }`}
          >
            Music
          </Link>
          <a
            href={SOCIAL_LINKS.boutique}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-widest uppercase text-brand-grey hover:text-brand-white transition-colors"
          >
            Boutique
          </a>
          <Link
            href="/about"
            className={`text-xs font-bold tracking-widest uppercase transition-colors focus:outline-none ${
              pathname === "/about" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
            }`}
          >
            About
          </Link>
        </nav>

        {/* Desktop Right (Language Toggle + primary CTA button) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Toggle EN/DE */}
          <div className="flex items-center gap-1 border border-brand-white/10 rounded-lg p-1 bg-brand-white/5">
            <button
              onClick={() => setLang("EN")}
              aria-pressed={lang === "EN"}
              className={`px-2 py-1 text-[10px] font-bold tracking-wider rounded transition-colors ${
                lang === "EN"
                  ? "bg-brand-white text-brand-black"
                  : "text-brand-grey hover:text-brand-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("DE")}
              aria-pressed={lang === "DE"}
              className={`px-2 py-1 text-[10px] font-bold tracking-wider rounded transition-colors ${
                lang === "DE"
                  ? "bg-brand-white text-brand-black"
                  : "text-brand-grey hover:text-brand-white"
              }`}
            >
              DE
            </button>
          </div>

          <a
            href={GOOGLE_CALENDAR_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-brand-white text-brand-black font-semibold text-xs hover:bg-brand-grey transition-colors rounded-lg uppercase tracking-wider font-mono text-center"
          >
            {CONTENT.cta}
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center md:hidden">
          <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-brand-black px-6 py-8 flex flex-col gap-6 border-b border-brand-white/10"
          >
            <div className="flex flex-col items-center gap-6 py-4 border-b border-brand-white/10">
              <Link
                href="/design"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === "/design" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
                }`}
              >
                Design
              </Link>
              <Link
                href="/work"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === "/work" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
                }`}
              >
                Selected Work
              </Link>
              <Link
                href="/music"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === "/music" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
                }`}
              >
                Music
              </Link>
              <a
                href={SOCIAL_LINKS.boutique}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-bold tracking-widest uppercase text-brand-grey hover:text-brand-white transition-colors"
              >
                Boutique
              </a>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                  pathname === "/about" ? "text-brand-white font-semibold" : "text-brand-grey hover:text-brand-white"
                }`}
              >
                About
              </Link>

              {/* Language toggle in mobile */}
              <div className="flex items-center gap-1 border border-brand-white/10 rounded-lg p-1 bg-brand-white/5 mt-2">
                <button
                  onClick={() => setLang("EN")}
                  aria-pressed={lang === "EN"}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wider rounded transition-colors ${
                    lang === "EN"
                      ? "bg-brand-white text-brand-black"
                      : "text-brand-grey hover:text-brand-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("DE")}
                  aria-pressed={lang === "DE"}
                  className={`px-3 py-1.5 text-xs font-bold tracking-wider rounded transition-colors ${
                    lang === "DE"
                      ? "bg-brand-white text-brand-black"
                      : "text-brand-grey hover:text-brand-white"
                  }`}
                >
                  DE
                </button>
              </div>
            </div>

            <div className="text-center text-[10px] tracking-[0.3em] uppercase text-brand-grey font-medium py-2">
              Designer | Performing Artist
            </div>

            <a
              href={GOOGLE_CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 bg-brand-white text-brand-black font-semibold text-center rounded-lg uppercase tracking-wider text-sm font-mono"
            >
              {CONTENT.cta}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5 Horizontal Stripes (25px total, hiding when scrolled) */}
      <div
        className={`flex flex-col w-full transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-0 opacity-0" : "h-[25px] opacity-100"
        }`}
      >
        <div className="h-[5px] w-full bg-brand-red" />
        <div className="h-[5px] w-full bg-brand-orange" />
        <div className="h-[5px] w-full bg-brand-rosa" />
        <div className="h-[5px] w-full bg-brand-lightblue" />
        <div className="h-[5px] w-full bg-brand-blue" />
      </div>
    </header>
  );
}
