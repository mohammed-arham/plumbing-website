import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/** Intrinsic ratio from logo.svg viewBox (1061×988) */
const LOGO_RATIO = 1061 / 988;

export function Navbar() {
  const logoH = 52;
  const logoW = Math.round(logoH * LOGO_RATIO);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-slate-950/65 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-3 lg:px-8 lg:py-4">
        <Link
          href="/"
          className="group flex min-w-0 shrink items-center gap-2.5 rounded-lg outline-none transition-[opacity,transform] duration-200 hover:opacity-[0.92] focus-visible:ring-2 focus-visible:ring-cyan-400/55 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 md:gap-3"
          aria-label="Plumbing Master — Home"
        >
          <span className="relative block shrink-0 origin-left scale-100 transition-transform duration-200 ease-out group-hover:scale-[1.03] group-active:scale-[0.98]">
            <Image
              src="/plumbingimages/logo.webp"
              alt="Plumbing Master Logo"
              width={140}
              height={60}
              priority
              className="h-10 w-auto object-contain drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)] md:h-[52px]"
              sizes="(max-width: 768px) 120px, 150px"
            />
          </span>
          <span className="truncate text-sm font-semibold tracking-tight text-white md:text-lg">
            Plumbing Master
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white md:inline-flex"
          >
            Get a quote
          </a>
          <a
            href="tel:+918859430800"
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_28px_-8px_rgba(34,211,238,0.45)] transition hover:brightness-110"
          >
            Call now
          </a>
        </div>
      </div>
    </header>
  );
}
