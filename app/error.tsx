"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h2 className="text-3xl font-bold uppercase tracking-wider text-brand-red mb-4">
        Interface Interrupted
      </h2>
      <p className="text-brand-grey text-sm mb-8 max-w-sm">
        An unexpected interruption occurred during the render cycle.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-brand-white text-brand-black font-semibold text-xs uppercase tracking-widest rounded-lg hover:bg-brand-grey transition-colors"
      >
        Re-initialize View
      </button>
    </div>
  );
}
