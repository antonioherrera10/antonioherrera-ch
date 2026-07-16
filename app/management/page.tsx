import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Management",
  description: "Get in touch for bookings, corporate collaborations, design consulting, and management inquiries.",
};

export default function ManagementPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Exactly one H1 per page */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-brand-white mb-4">
          Management &amp; Bookings
        </h1>
        <p className="text-xs uppercase tracking-[0.4em] text-brand-grey font-mono">
          Corporate &amp; Art Contact
        </p>
      </div>

      {/* Main Management Contacts Scaffold */}
      <section id="contact-channels" className="py-20 border-b border-brand-white/10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold uppercase tracking-wide mb-12">Contact Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-8 border border-brand-white/10 rounded-2xl bg-brand-white/5 flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">General Bookings</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Propose live performance bookings, event curations, or private showcases.
              </p>
            </div>
            <a
              href="mailto:contact@herrdesigncollective.com"
              className="mt-6 inline-block w-full py-3 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-red hover:text-brand-black transition-colors"
            >
              Email Management
            </a>
          </div>

          <div className="p-8 border border-brand-white/10 rounded-2xl bg-brand-white/5 flex flex-col justify-between min-h-[220px]">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Strategic Collaboration</h3>
              <p className="text-sm text-brand-grey leading-relaxed">
                Connect directly with Antonio Herrera for brand advisory, high-level life coaching, and space branding.
              </p>
            </div>
            <a
              href="mailto:antonio.herrera@herrdesigncollective.com?subject=Collaboration%20Proposal"
              className="mt-6 inline-block w-full py-3 bg-brand-white/10 border border-brand-white/20 text-brand-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-white hover:text-brand-black transition-colors"
            >
              Direct Conversation
            </a>
          </div>
        </div>
      </section>

      {/* Legal Agent Segment Scaffold */}
      <section id="legal-representation" className="py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.4em] text-brand-grey mb-4">Strategic Representation</h2>
        <p className="text-sm text-brand-grey max-w-lg mx-auto">
          Antonio Herrera is represented globally by HERR Design Collective GmbH, Zurich, Switzerland. Registered firm UID: CHE-346.401.551.
        </p>
      </section>
    </div>
  );
}
