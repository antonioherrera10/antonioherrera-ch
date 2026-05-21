import { motion } from "motion/react";
import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

interface DesignViewProps {
  key?: string;
  lang: "EN" | "DE" | "ES";
  t: any;
  onBackToHome: () => void;
}

export default function DesignView({ lang, t, onBackToHome }: DesignViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-brand-black text-brand-white pt-24 pb-12 overflow-hidden relative"
    >
      {/* Blueprint Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px"
        }}
      />

      {/* Aesthetic glowing background shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-12">
        {/* Back Button */}
        <motion.button
          onClick={onBackToHome}
          whileHover={{ x: -8 }}
          className="flex items-center gap-3 text-brand-grey hover:text-brand-white text-xs font-mono font-bold tracking-widest uppercase mb-16 cursor-pointer focus:outline-none focus:ring-0"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.designBackCta}
        </motion.button>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-brand-white/10 rounded-full bg-brand-white/5 backdrop-blur-md mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-rosa" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-brand-grey">
              {lang === "ES" ? "Vuelve pronto" : "Revisit soon"}
            </span>
          </motion.div>

          {/* Under Construction Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] uppercase select-none"
          >
            {t.designTitle.split(" ").map((word: string, i: number) => (
              <span key={i} className="inline-block mr-[0.2em] last:mr-0">
                {word}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-brand-grey leading-relaxed max-w-2xl mx-auto mb-12"
          >
            {t.designSubtitle}
          </motion.p>
        </div>

        {/* 5 Horizontal Stripes Accent */}
        <div className="flex w-full h-[5px] max-w-lg mx-auto mb-20 rounded-full overflow-hidden opacity-85">
          <div className="flex-1 bg-brand-red" />
          <div className="flex-1 bg-brand-orange" />
          <div className="flex-1 bg-brand-rosa" />
          <div className="flex-1 bg-brand-lightblue" />
          <div className="flex-1 bg-brand-blue" />
        </div>
      </div>
    </motion.div>
  );
}
