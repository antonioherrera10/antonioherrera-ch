"use client";

import React from "react";

interface MediaPlaceholderProps {
  aspect?: "16/9" | "4/5" | "3/2" | "1/1" | string;
  label?: string;
  className?: string;
}

export default function MediaPlaceholder({
  aspect = "16/9",
  label = "MEDIA IN PRODUCTION",
  className = "",
}: MediaPlaceholderProps) {
  // Map specific aspect ratio values to tailwind classes
  let aspectClass = "aspect-[16/9]";
  if (aspect === "16/9") {
    aspectClass = "aspect-[16/9]";
  } else if (aspect === "4/5") {
    aspectClass = "aspect-[4/5]";
  } else if (aspect === "3/2") {
    aspectClass = "aspect-[3/2]";
  } else if (aspect === "1/1") {
    aspectClass = "aspect-square";
  } else if (aspect.includes("/")) {
    aspectClass = `aspect-[${aspect}]`;
  }

  return (
    <div
      className={`relative w-full overflow-hidden bg-white/[0.03] border border-white/10 rounded-xl flex flex-col items-center justify-center p-6 text-center select-none group transition-colors duration-300 hover:border-white/20 ${aspectClass} ${className}`}
    >
      {/* Subtle Architectural Crosshairs Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px]" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white -translate-x-1/2" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-white -translate-y-1/2" />
      </div>

      {/* Elegant minimalist AH logo watermark / mark in top left */}
      <div className="absolute top-4 left-5 flex items-center gap-1.5 text-[8px] font-mono tracking-widest text-white/30 uppercase">
        <span className="w-1 h-1 rounded-full bg-brand-red" />
        <span>AH // PORTFOLIO</span>
      </div>

      <div className="absolute bottom-4 right-5 text-[8px] font-mono tracking-widest text-white/20">
        <span>{aspect.toUpperCase()}</span>
      </div>

      {/* Centered label in 10px tracked uppercase style + AH Monogram */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        {/* Simple elegant AH monogram */}
        <div className="text-[10px] font-bold tracking-[0.2em] text-brand-red font-mono border border-brand-red/20 px-2 py-0.5 rounded bg-brand-red/5">
          AH
        </div>
        <span className="text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-brand-grey font-bold font-mono">
          {label}
        </span>
      </div>
    </div>
  );
}
