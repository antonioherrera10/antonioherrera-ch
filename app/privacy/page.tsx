import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for antonioherrera.ch.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Exactly one H1 per page */}
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
        Privacy Policy
      </h1>
      <div className="prose prose-invert text-brand-grey leading-relaxed space-y-6">
        <p>
          We respect your privacy and are committed to protecting any personal data processed in connection with our services.
        </p>
        <h2 className="text-lg font-bold text-brand-white uppercase tracking-wider pt-6">1. Information We Collect</h2>
        <p>
          If you send us an email or submit waitlist details, we store your contact info (name, email) solely to process your requests and manage communication.
        </p>
        <h2 className="text-lg font-bold text-brand-white uppercase tracking-wider pt-6">2. Data Security &amp; Sharing</h2>
        <p>
          We never sell, rent, or lease your private data. All details are stored securely in encrypted nodes hosted inside Switzerland or the EEA.
        </p>
        <p className="text-xs text-brand-grey/60 pt-12">
          Last updated: July 2026
        </p>
      </div>
    </div>
  );
}
