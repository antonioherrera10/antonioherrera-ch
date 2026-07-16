import React from "react";
import Link from "next/link";
import { Instagram, Youtube } from "lucide-react";
import { CONTENT, SOCIAL_LINKS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-24 pb-12 border-t-4 border-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-bold tracking-tighter uppercase">
              ANTONIO HERRERA
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-brand-grey font-medium leading-relaxed">
              Designer | Performing Artist
            </p>

            <div className="flex flex-col gap-4 mt-4">
              <span className="text-[10px] font-bold tracking-widest uppercase text-brand-grey">
                {CONTENT.footerFollow}
              </span>
              <div className="flex gap-4">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-red hover:border-brand-red transition-all duration-300 text-brand-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-rosa hover:border-brand-rosa transition-all duration-300 text-brand-white"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-white/5 border border-brand-white/10 rounded-full hover:bg-brand-lightblue hover:border-brand-lightblue transition-all duration-300 text-brand-white"
                  aria-label="Spotify"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.13-10.561-1.17-.411.09-.827-.16-.917-.57-.091-.41.16-.827.57-.917 4.62-1.05 8.52-.6 11.67 1.35.36.24.48.66.24 1.021zm1.44-3.3c-.3.48-.9.63-1.38.33-3.21-1.98-8.13-2.58-11.94-1.41-.54.15-1.11-.15-1.26-.69-.15-.54.15-1.11.69-1.26 4.35-1.32 9.78-.63 13.5 1.65.48.3.63.9.33 1.38zm.12-3.42c-3.87-2.31-10.32-2.52-14.07-1.38-.63.18-1.29-.15-1.47-.78-.18-.63.15-1.29.78-1.47 4.26-1.29 11.4-1.02 15.87 1.62.57.33.75 1.08.42 1.65-.33.57-1.08.75-1.65.42z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-3 gap-12 lg:gap-24">
            {/* Boutique Shop */}
            <div className="flex flex-col gap-8">
              <a
                href={SOCIAL_LINKS.boutique}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold tracking-widest uppercase hover:text-brand-red transition-colors"
              >
                {CONTENT.footerShop}
              </a>
              <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                <li>
                  <a
                    href="https://antonioherrera.shop/collections"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    {CONTENT.footerCollections}
                  </a>
                </li>
                <li>
                  <a
                    href="https://antonioherrera.shop/collections/the-new-royal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    {CONTENT.footerNewRoyal}
                  </a>
                </li>
                <li>
                  <a
                    href="https://antonioherrera.shop/collections/frontpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    {CONTENT.footerChangingEmotions}
                  </a>
                </li>
                <li>
                  <a
                    href="https://zigzagzurich.com/products/artist-bedding-soft-royal-by-antonio-herrera/?srsltid=AfmBOopGXi-WRvKEhWIiJdKsopCa0oKQPhGfJo_klOeazaj757uaaCzR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    {CONTENT.footerSoftRoyal}
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Column: Design · Selected Work · Music · About · Management · Boutique */}
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold tracking-widest uppercase text-brand-white">
                Pages
              </span>
              <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                <li>
                  <Link href="/design" className="hover:text-brand-white transition-colors">
                    Design
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-brand-white transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/music" className="hover:text-brand-white transition-colors">
                    Music
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-brand-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/management" className="hover:text-brand-white transition-colors">
                    Management
                  </Link>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.boutique}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-white transition-colors"
                  >
                    Boutique
                  </a>
                </li>
              </ul>
            </div>

            {/* Booking Column */}
            <div className="flex flex-col gap-8">
              <span className="text-sm font-bold tracking-widest uppercase text-brand-white">
                {CONTENT.footerBooking}
              </span>
              <ul className="flex flex-col gap-4 text-xs text-brand-grey tracking-widest uppercase">
                <li>
                  <Link href="/management" className="hover:text-brand-white transition-colors block leading-relaxed">
                    Booking &amp; Management
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${SOCIAL_LINKS.contactEmail}`}
                    className="hover:text-brand-white transition-colors block leading-relaxed"
                  >
                    {CONTENT.footerContact}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SOCIAL_LINKS.collaborationEmail}`}
                    className="hover:text-brand-white transition-colors block leading-relaxed"
                  >
                    {CONTENT.footerBookConversation}
                  </a>
                </li>
                <li>
                  <span className="block leading-relaxed normal-case text-brand-lightblue font-medium">
                    Management by HERR Design Collective GmbH
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.2em] uppercase text-brand-grey">
          <div className="text-center md:text-left flex flex-col gap-2">
            <p>&copy; 2026 Antonio Herrera | HERR Design Collective GmbH. All rights reserved.</p>
            <p className="text-brand-grey/60">
              Strategic Design &amp; Website by{" "}
              <a
                href="https://herrdesigncollective.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-white transition-colors underline decoration-brand-white/10"
              >
                HERR Design Collective
              </a>
              , ANTONIO HERRERA
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-brand-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-brand-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="hover:text-brand-white transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
