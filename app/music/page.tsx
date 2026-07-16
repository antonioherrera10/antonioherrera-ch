import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Offer",
  description: "Connect through music. Live performances and event curation by performing artist Antonio Herrera.",
};

export default function MusicPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Exactly one H1 per page */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-brand-white mb-4">
          Music Offer
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono">
          Performing Arts &amp; Event Curation
        </p>
      </div>

      {/* Main Music Offer Scaffold */}
      <section id="music-overview" className="py-20 border-b border-brand-white/10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">Connect Through Music</h2>
        <p className="text-brand-grey text-lg leading-relaxed mb-8">
          Transforming events into joyous, high-energy live experiences that foster genuine connections through voice, rhythm, and light.
        </p>
      </section>

      {/* Recordings Magnet Lead Scaffold */}
      <section id="recordings-lead" className="py-20 text-center max-w-3xl mx-auto">
        <h3 className="text-xl font-bold uppercase tracking-wide mb-6">Selected Recordings Magnet</h3>
        <p className="text-brand-grey mb-8">
          Under construction: Authentic acoustic recordings and streaming session playlists are being compiled.
        </p>
        <div className="inline-block px-8 py-4 bg-brand-white/5 border border-brand-white/10 rounded-xl text-xs font-bold uppercase tracking-widest text-brand-grey">
          Listen to Preview Recordings
        </div>
      </section>
    </div>
  );
}
