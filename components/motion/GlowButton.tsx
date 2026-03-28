"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type GlowButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const base =
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-semibold transition-shadow duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400/80";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 shadow-[0_0_0_1px_rgba(251,191,36,0.4),0_12px_40px_-8px_rgba(251,191,36,0.55)] hover:shadow-[0_0_0_1px_rgba(253,230,138,0.55),0_16px_48px_-6px_rgba(251,191,36,0.65)]",
  secondary:
    "border border-white/25 bg-white/10 text-white shadow-[0_8px_32px_-8px_rgba(15,23,42,0.6)] backdrop-blur-md hover:border-white/40 hover:bg-white/[0.14] hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.2)]",
};

export function GlowButton({
  href,
  children,
  variant = "primary",
  className = "",
}: GlowButtonProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={reduce ? undefined : { scale: 1.02, y: -1 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 380, damping: 24 }}
    >
      {!reduce && variant === "primary" ? (
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-white/25 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      ) : null}
      <span className="relative z-[1]">{children}</span>
    </motion.a>
  );
}
