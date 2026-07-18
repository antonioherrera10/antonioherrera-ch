import React from "react";
import { TESTIMONIALS } from "@/lib/content";

interface TestimonialsProps {
  ids?: string[];
}

export default function Testimonials({ ids }: TestimonialsProps) {
  if (!ids || ids.length === 0) return null;

  // Map of border hover colors for variety based on testimonial ID
  const borderColors: Record<string, string> = {
    "isabel-a": "hover:border-ah-red/40",
    "toni-ann-o": "hover:border-ah-orange/40",
    "donika-p": "hover:border-ah-rosa/40",
    "clifford-l": "hover:border-ah-lightblue/40",
    "paulina-z": "hover:border-ah-blue/40",
    "sarah-o": "hover:border-ah-red/40",
    "stefan-k": "hover:border-ah-orange/40",
    "thiago-z": "hover:border-ah-rosa/40",
    "andreas-s": "hover:border-ah-red/40",
    "isabel-g": "hover:border-ah-blue/40",
  };

  // Filter valid testimonials from the main pool
  const selectedTestimonials = ids
    .map((id) => {
      const t = TESTIMONIALS.find((item) => item.id === id);
      if (!t) return null;
      return {
        ...t,
        border: borderColors[id] || "hover:border-ah-red/40",
      };
    })
    .filter((t): t is NonNullable<typeof t> => t !== null);

  if (selectedTestimonials.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {selectedTestimonials.map((t) => (
        <div
          key={t.id}
          className={`p-8 border border-white/10 bg-white/[0.01] rounded-2xl transition-all duration-300 flex flex-col justify-between ${t.border}`}
        >
          <p className="text-sm text-ah-grey italic leading-relaxed mb-6">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="border-t border-white/10 pt-4 flex justify-between items-center">
            <div>
              <h4 className="text-xs font-bold text-white">{t.name}</h4>
              <p className="text-[10px] text-ah-grey tracking-[0.2em] uppercase mt-1">{t.role}</p>
            </div>
            <span className="text-[10px] uppercase text-white/20 select-none">#AH</span>
          </div>
        </div>
      ))}
    </div>
  );
}
