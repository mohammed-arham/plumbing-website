export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row lg:px-8">
        <p>
          © {new Date().getFullYear()} Plumbing Master, Dehradun. All rights reserved. Phone:{" "}
          <a href="tel:+918859430800" className="font-semibold text-blue-700">
            +91 88594 30800
          </a>
        </p>
        <div className="flex items-center gap-5">
          <a href="#services" className="transition hover:text-blue-700">
            Services
          </a>
          <a href="#about" className="transition hover:text-blue-700">
            About
          </a>
          <a href="#contact" className="transition hover:text-blue-700">
            Contact
          </a>
          <span className="hidden text-slate-500 md:inline">
            Serving Dehradun and nearby areas
          </span>
        </div>
      </div>
    </footer>
  );
}
