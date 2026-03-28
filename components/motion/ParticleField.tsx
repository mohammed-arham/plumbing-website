"use client";

import { useMotionValueEvent, type MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  bx: number;
  by: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
  pulse: number;
};

const MAX_DPR = 2;
const CONNECT_DIST = 105;
const LINE_ALPHA = 0.04;
const MOUSE_LERP = 0.045;

type ParticleFieldProps = {
  strength: MotionValue<number>;
  active: boolean;
};

function buildParticles(cw: number, ch: number, count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const s = ((i * 9301 + 49297) % 233280) / 233280;
    const t = ((i * 4567 + 12345) % 175000) / 175000;
    const baseX = (s * cw + i * 19) % Math.max(cw, 1);
    const baseY = (t * ch + i * 31) % Math.max(ch, 1);
    return {
      x: baseX,
      y: baseY,
      bx: baseX,
      by: baseY,
      vx: (s - 0.5) * 0.24,
      vy: (t - 0.5) * 0.2,
      r: 0.5 + s * 1.4,
      a: 0.1 + t * 0.28,
      pulse: s * Math.PI * 2,
    };
  });
}

export function ParticleField({ strength, active }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strengthRef = useRef(1);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0.5, y: 0.5, mx: 0, my: 0 });
  const rafRef = useRef(0);
  const wRef = useRef(0);
  const hRef = useRef(0);
  const countRef = useRef(0);

  useEffect(() => {
    strengthRef.current = strength.get();
  }, [strength]);

  useMotionValueEvent(strength, "change", (v) => {
    strengthRef.current = Math.min(1, Math.max(0, v));
  });

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const pickCount = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 58;
      if (w >= 768) return 38;
      return 0;
    };

    if (prefersReduced) {
      const clearOnly = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
      };
      clearOnly();
      window.addEventListener("resize", clearOnly);
      return () => window.removeEventListener("resize", clearOnly);
    }

    const onPointer = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX / Math.max(window.innerWidth, 1);
      mouseRef.current.y = e.clientY / Math.max(window.innerHeight, 1);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const w = window.innerWidth;
      const h = window.innerHeight;
      wRef.current = w;
      hRef.current = h;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = pickCount();
      countRef.current = n;
      particlesRef.current = n > 0 ? buildParticles(w, h, n) : [];
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });

    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(40, now - last);
      last = now;

      const w = wRef.current;
      const h = hRef.current;
      const str = strengthRef.current;
      const { x: mnx, y: mny } = mouseRef.current;

      const targetMx = (mnx - 0.5) * 42;
      const targetMy = (mny - 0.5) * 32;
      mouseRef.current.mx += (targetMx - mouseRef.current.mx) * MOUSE_LERP;
      mouseRef.current.my += (targetMy - mouseRef.current.my) * MOUSE_LERP;

      ctx.clearRect(0, 0, w, h);

      const parts = particlesRef.current;
      if (parts.length === 0 || str < 0.015) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const dtScale = dt / 16.67;
      const mx = mouseRef.current.mx * str;
      const my = mouseRef.current.my * str;

      for (const p of parts) {
        p.bx += p.vx * dtScale;
        p.by += p.vy * dtScale;
        if (p.bx < -50) p.bx = w + 50;
        if (p.bx > w + 50) p.bx = -50;
        if (p.by < -50) p.by = h + 50;
        if (p.by > h + 50) p.by = -50;

        p.pulse += 0.011 * dtScale;
        const wobble = Math.sin(p.pulse) * 0.48;
        p.x = p.bx + mx * (0.38 + p.r * 0.07) + wobble;
        p.y = p.by + my * (0.38 + p.r * 0.07) + Math.cos(p.pulse * 0.88) * 0.32;
      }

      ctx.lineWidth = 0.55;
      const n = parts.length;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = parts[i];
          const b = parts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < CONNECT_DIST && d > 0.5) {
            const t = (1 - d / CONNECT_DIST) * str;
            ctx.strokeStyle = `rgba(56,189,248,${LINE_ALPHA * t})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of parts) {
        const fa = p.a * str;
        const fr = p.r * (0.9 + 0.1 * Math.sin(p.pulse)) * (0.82 + 0.18 * str);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, fr * 3.2);
        g.addColorStop(0, `rgba(224,242,254,${fa * 0.85})`);
        g.addColorStop(0.4, `rgba(56,189,248,${fa * 0.32})`);
        g.addColorStop(1, "rgba(56,189,248,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, fr * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    const onVis = () => {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(rafRef.current);
      } else {
        last = performance.now();
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    document.addEventListener("visibilitychange", onVis);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [active, strength]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-[0.65] mix-blend-screen md:opacity-[0.78]"
      aria-hidden
    />
  );
}
