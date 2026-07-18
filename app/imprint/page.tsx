import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Imprint / Impressum for antonioherrera.ch.",
};

export default function ImprintPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {/* Exactly one H1 per page */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
        Imprint / Impressum
      </h1>
      <div className="prose prose-invert text-brand-grey leading-relaxed space-y-6">
        <h2 className="text-lg font-bold text-brand-white tracking-wider pt-4">Company details</h2>
        <p>
          HERR Design Collective GmbH<br />
          Zurich, Switzerland<br />
          Email: contact@herrdesigncollective.com
        </p>

        <h2 className="text-lg font-bold text-brand-white tracking-wider pt-4">Commercial registry</h2>
        <p>
          Registered name: HERR Design Collective GmbH<br />
          UID / Corporate Identification: CHE-346.401.551
        </p>

        <h2 className="text-lg font-bold text-brand-white tracking-wider pt-4">Authorised representative</h2>
        <p>
          Antonio Herrera, Managing Director
        </p>
      </div>
    </div>
  );
}
