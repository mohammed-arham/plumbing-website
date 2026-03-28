export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/70 py-10 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-6 text-sm text-slate-500 md:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} Plumbing Master, Dehradun. All rights reserved. Phone:{" "}
          <a href="tel:+918859430800" className="font-semibold text-cyan-300/90 transition hover:text-cyan-200">
            +91 88594 30800
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a href="#services" className="transition hover:text-slate-200">
            Services
          </a>
          <a href="#about" className="transition hover:text-slate-200">
            About
          </a>
          <a href="#contact" className="transition hover:text-slate-200">
            Contact
          </a>
          <span className="hidden text-slate-600 md:inline">Serving Dehradun and nearby areas</span>
        </div>
      </div>
    </footer>
  );
}
