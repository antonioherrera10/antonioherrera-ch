"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const BRAND_COLORS = ["#ff3333", "#ff6600", "#ff99cc", "#75cafa", "#0000ff"];

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverColor, setHoverColor] = useState(BRAND_COLORS[0]);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Detect touch-only / mobile pointers
    const touchQuery = window.matchMedia("(hover: none) or (pointer: coarse)");
    setIsTouchDevice(touchQuery.matches);

    // Detect reduced motion preferences
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const touchListener = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    touchQuery.addEventListener("change", touchListener);
    motionQuery.addEventListener("change", motionListener);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isInteractive && !isHovering) {
        setIsHovering(true);
        setHoverColor(BRAND_COLORS[Math.floor(Math.random() * BRAND_COLORS.length)]);
      } else if (!isInteractive && isHovering) {
        setIsHovering(false);
      }
    };

    // Track clicks for click effects
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setClicks((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setClicks((prev) => prev.filter((c) => c.id !== id));
      }, 1000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      touchQuery.removeEventListener("change", touchListener);
      motionQuery.removeEventListener("change", motionListener);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isHovering]);

  if (!mounted || isTouchDevice || prefersReducedMotion) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] border border-white/60 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        animate={{
          x: mousePos.x - (isHovering ? 20 : 8),
          y: mousePos.y - (isHovering ? 20 : 8),
          width: isHovering ? 40 : 16,
          height: isHovering ? 40 : 16,
          backgroundColor: isHovering ? hoverColor : "#ff3333",
          opacity: isHovering ? 0.3 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 400,
          mass: 0.5,
          backgroundColor: { duration: 0.2 },
        }}
      />

      {/* Explosion Particles */}
      <AnimatePresence>
        {clicks.map((click) => (
          <div key={click.id} className="fixed top-0 left-0 pointer-events-none z-[9998]">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: click.x,
                  y: click.y,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x: click.x + Math.cos(i * 30 * (Math.PI / 180)) * 80,
                  y: click.y + Math.sin(i * 30 * (Math.PI / 180)) * 80,
                  scale: 0,
                  opacity: 0,
                  rotate: 360,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-2 h-2 rounded-full"
                style={{ backgroundColor: BRAND_COLORS[i % BRAND_COLORS.length] }}
              />
            ))}
            <motion.div
              initial={{ x: click.x, y: click.y, scale: 0, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute w-6 h-6 border-2 border-brand-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </AnimatePresence>
    </>
  );
}
