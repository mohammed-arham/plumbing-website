"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { ParticleField } from "@/components/motion/ParticleField";

export function PageBackdrop() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [narrow, setNarrow] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const u = () => setNarrow(mq.matches);
    u();
    mq.addEventListener("change", u);
    return () => mq.removeEventListener("change", u);
  }, []);

  const isNarrow = narrow !== false;
  const px = reduce ? 0 : isNarrow ? 0.26 : 1;

  /** Softer blob parallax deep in the page; hero stays the most dynamic */
  const blobMul = (v: number) => Math.max(0.5, 1 - v / 5200);

  const y1 = useTransform(scrollY, (v) => v * 0.21 * px * blobMul(v));
  const y2 = useTransform(scrollY, (v) => v * -0.13 * px * blobMul(v));
  const y3 = useTransform(scrollY, (v) => v * 0.095 * px * blobMul(v));
  const y4 = useTransform(scrollY, (v) => v * -0.067 * px * blobMul(v));
  const y5 = useTransform(scrollY, (v) => v * 0.048 * px * blobMul(v));

  const x1 = useTransform(scrollY, (v) => v * 0.048 * px * blobMul(v));
  const x2 = useTransform(scrollY, (v) => v * -0.036 * px * blobMul(v));
  const x3 = useTransform(scrollY, (v) => v * 0.022 * px * blobMul(v));
  const x4 = useTransform(scrollY, (v) => v * -0.015 * px * blobMul(v));

  const rotMax = reduce ? 0 : isNarrow ? 2.2 : 6;
  const rot1 = useTransform(scrollY, (v) =>
    Math.min(v / 3400, 1) * rotMax * blobMul(v),
  );
  const rot2 = useTransform(scrollY, (v) =>
    Math.min(v / 3400, 1) * -rotMax * 0.75 * blobMul(v),
  );

  const meshEase = (v: number) => Math.max(0.42, 1 - v / 6000);
  const meshX = useTransform(scrollY, (v) => v * 0.07 * px * meshEase(v));
  const meshY = useTransform(scrollY, (v) => -v * 0.052 * px * meshEase(v));
  const meshPos = useMotionTemplate`${meshX}px ${meshY}px`;

  const gridY = useTransform(scrollY, (v) => v * 0.028 * px * meshEase(v));

  const particleStrength = useTransform(scrollY, (v) => {
    if (reduce || isNarrow) return 0;
    return Math.max(0.07, 1 - (v / 2600) * 0.68);
  });

  const particlesOn = !reduce && narrow === false;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030712]"
      aria-hidden
    >
      {/* Subtle moving mesh — tied to scroll */}
      <motion.div
        className="absolute inset-[-35%] opacity-[0.42] md:opacity-[0.5]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 85% 65% at 25% 15%, rgba(59,130,246,0.55), transparent 58%),
            radial-gradient(ellipse 70% 55% at 78% 72%, rgba(34,211,238,0.22), transparent 55%),
            radial-gradient(ellipse 50% 45% at 55% 40%, rgba(99,102,241,0.18), transparent 50%)
          `,
          backgroundSize: "130% 130%",
          backgroundPosition: meshPos,
        }}
      />

      {/* Fine parallax grid */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.028] motion-reduce:opacity-0 md:opacity-[0.045] bg-[linear-gradient(rgba(148,163,184,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.28)_1px,transparent_1px)] bg-[length:44px_44px] md:animate-[grid-pan_90s_linear_infinite] motion-reduce:animate-none"
      />

      <ParticleField strength={particleStrength} active={particlesOn} />

      {/* Floating blobs — multi-layer parallax + idle drift */}
      <motion.div
        style={{ y: y1, x: x1, rotate: rot1 }}
        className="absolute -left-[18%] top-[6%] h-[min(560px,58vw)] w-[min(560px,58vw)] rounded-full bg-blue-600/[0.2] blur-[110px] md:animate-[backdrop-blob_24s_ease-in-out_infinite] motion-reduce:animate-none"
      />
      <motion.div
        style={{ y: y2, x: x2, rotate: rot2 }}
        className="absolute -right-[14%] top-[22%] h-[min(500px,52vw)] w-[min(500px,52vw)] rounded-full bg-cyan-400/[0.14] blur-[105px] md:animate-[backdrop-blob_28s_ease-in-out_infinite] motion-reduce:animate-none [animation-delay:-7s]"
      />
      <motion.div
        style={{ y: y3, x: x3 }}
        className="absolute bottom-[8%] left-[12%] h-[min(420px,46vw)] w-[min(420px,46vw)] rounded-full bg-indigo-500/[0.14] blur-[95px] md:animate-[backdrop-blob_32s_ease-in-out_infinite] motion-reduce:animate-none [animation-delay:-5s]"
      />
      <motion.div
        style={{ y: y4, x: x4 }}
        className="absolute left-[38%] top-[48%] h-[min(280px,32vw)] w-[min(280px,32vw)] rounded-full bg-sky-400/[0.1] blur-[80px] md:animate-[backdrop-blob_20s_ease-in-out_infinite_reverse] motion-reduce:animate-none [animation-delay:-3s]"
      />
      <motion.div
        style={{ y: y5, x: x2 }}
        className="absolute -right-[8%] bottom-[18%] h-[min(340px,38vw)] w-[min(340px,38vw)] rounded-full bg-blue-500/[0.12] blur-[90px] md:animate-[backdrop-blob_26s_ease-in-out_infinite] motion-reduce:animate-none [animation-delay:-11s]"
      />

      {/* Bottom vignette for long-page readability */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] bg-gradient-to-t from-[#030712] via-[#030712]/55 to-transparent" />
    </div>
  );
}
