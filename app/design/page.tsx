import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Offer",
  description: "Explore Strategic Design & Life Architecture offerings by Antonio Herrera.",
};

export default function DesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Exactly one H1 per page */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-brand-white mb-4">
          Design Offer
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono">
          Strategic Design &amp; Life Architecture
        </p>
      </div>

      {/* Main Offer Scaffold */}
      <section id="offer-overview" className="py-20 border-b border-brand-white/10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Strategic Design Overview</h2>
        <p className="text-brand-grey text-lg leading-relaxed mb-8">
          Restructuring environments, daily structures, and professional systems to realign with core individual identities.
        </p>
      </section>

      {/* Diagnostic Magnet Lead Scaffold */}
      <section id="diagnostic-lead" className="py-20 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-wide mb-6">The Diagnostic Magnet Lead</h3>
        <p className="text-brand-grey mb-8">
          Under construction: A premium diagnostic questionnaire is being crafted to assess structural life blockages.
        </p>
        <div className="inline-block px-8 py-4 bg-brand-white/5 border border-brand-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-brand-grey">
          Diagnostic Waitlist
        </div>
      </section>
    </div>
  );
}
