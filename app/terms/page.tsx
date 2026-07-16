import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for antonioherrera.ch.",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Exactly one H1 per page */}
      <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12">
        Terms of Service
      </h1>
      <div className="prose prose-invert text-brand-grey leading-relaxed space-y-6">
        <p>
          Welcome to the digital properties of Antonio Herrera (antonioherrera.ch). By accessing or using our website, services, and digital offerings, you agree to be bound by these Terms of Service.
        </p>
        <h2 className="text-lg font-bold text-brand-white uppercase tracking-wider pt-6">1. Scope of Application</h2>
        <p>
          These terms apply globally to all interactions, advisory sessions, design consultancies, and digital registrations initiated through this platform.
        </p>
        <h2 className="text-lg font-bold text-brand-white uppercase tracking-wider pt-6">2. Intellectal Property</h2>
        <p>
          All creative designs, audio recordings, text, concepts, and media displayed on this site are the exclusive property of Antonio Herrera and HERR Design Collective GmbH, protected under Swiss and international copyright laws.
        </p>
        <p className="text-xs text-brand-grey/60 pt-12">
          Last updated: July 2026
        </p>
      </div>
    </div>
  );
}
