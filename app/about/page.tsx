import React from "react";
import { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Antonio Herrera, Strategic Designer and Performing Artist based in Zurich, Switzerland.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Exactly one H1 per page */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-brand-white mb-4">
          About Antonio Herrera
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono">
          Biography, CV, &amp; Testimonials
        </p>
      </div>

      {/* Biography Scaffold */}
      <section id="biography" className="py-20 border-b border-brand-white/10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-6">The Designer &amp; Performing Artist</h2>
        <p className="text-brand-grey text-lg leading-relaxed mb-6">
          More than 10 years of cross-disciplinary experience merging high-end spatial branding and live stage performances across 20 countries.
        </p>
      </section>

      {/* CV / Experience Metrics Scaffold */}
      <section id="experience-metrics" className="py-20 border-b border-brand-white/10 max-w-4xl mx-auto text-center">
        <h2 className="text-xs uppercase tracking-[0.4em] text-brand-grey mb-12">Curriculum Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="p-8 border border-brand-white/10 rounded-2xl bg-brand-white/5">
            <div className="text-3xl font-bold uppercase tracking-tight text-brand-red">10+ Years</div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-grey mt-2">Active Experience</div>
          </div>
          <div className="p-8 border border-brand-white/10 rounded-2xl bg-brand-white/5">
            <div className="text-3xl font-bold uppercase tracking-tight text-brand-orange">50+ Projects</div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-grey mt-2">Successful Engagements</div>
          </div>
          <div className="p-8 border border-brand-white/10 rounded-2xl bg-brand-white/5">
            <div className="text-3xl font-bold uppercase tracking-tight text-brand-rosa">20+ Countries</div>
            <div className="text-xs uppercase tracking-[0.2em] text-brand-grey mt-2">Visited &amp; Worked</div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section id="testimonials-overview" className="py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-brand-white">Endorsements</h2>
          <p className="text-brand-grey text-sm mb-8">
            Curated reviews from brand strategy consultants, creative technologists, and event producers.
          </p>
        </div>
        <Testimonials ids={["isabel-a", "toni-ann-o", "donika-p"]} />
      </section>
    </div>
  );
}
