import React from "react";
import { CONTENT, PARTNER_LOGOS } from "@/lib/content";
import CloudinaryImage from "./CloudinaryImage";

export default function TrustedBy() {
  return (
    <section id="trusted-by" className="py-16 border-b border-white/10 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.4em] text-ah-grey/60 mb-10">
          {CONTENT.partnersTitle}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-10 items-center justify-items-center">
          {PARTNER_LOGOS.map((partner, index) => {
            if (partner.logoUrl || partner.logoSrc) {
              return (
                <div
                  key={index}
                  className={`relative w-28 sm:w-32 md:w-36 h-10 sm:h-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 ${
                    partner.name === "ZZZ" ? "mix-blend-screen" : ""
                  } ${partner.invert ? "invert" : ""}`}
                  title={partner.name}
                >
                  <CloudinaryImage
                    src={partner.logoUrl}
                    folder={partner.logoUrl ? undefined : "company-logos"}
                    filename={partner.logoUrl ? undefined : partner.logoSrc}
                    alt={partner.name}
                    className="object-contain max-h-full max-w-full"
                    fill
                  />
                </div>
              );
            }
            return (
              <span
                key={index}
                className="text-xs md:text-sm font-bold tracking-wider text-center text-white/60 hover:text-white transition-all duration-300"
              >
                {partner.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
