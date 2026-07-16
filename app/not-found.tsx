import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h2 className="text-3xl font-bold uppercase tracking-wider text-brand-white mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-brand-grey text-sm mb-8 max-w-sm">
        The spatial or sonic coordinate you requested does not exist in this archive.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-white text-brand-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:bg-brand-grey transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
}
