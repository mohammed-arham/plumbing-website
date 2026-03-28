"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingButtons() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none fixed bottom-24 right-6 z-50 hidden flex-col gap-3 md:pointer-events-auto md:flex">
      <motion.a
        href="tel:+918859430800"
        className="pointer-events-auto rounded-full border border-white/15 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(37,99,235,0.5)] backdrop-blur-md transition hover:border-cyan-400/35 hover:shadow-[0_16px_44px_-8px_rgba(34,211,238,0.25)]"
        whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
      >
        Call now
      </motion.a>
      <motion.a
        href="https://wa.me/918859430800"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto rounded-full border border-emerald-400/25 bg-emerald-600/90 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_40px_-10px_rgba(16,185,129,0.45)] backdrop-blur-md transition hover:bg-emerald-500"
        whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
      >
        WhatsApp
      </motion.a>
    </div>
  );
}
