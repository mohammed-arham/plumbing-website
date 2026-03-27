const navItems = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight text-blue-900">
          Plumbing Master
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-blue-700 px-4 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-700 hover:text-white md:inline-flex"
          >
            Get a Quote
          </a>
          <a
            href="tel:+918859430800"
            className="rounded-full bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
}
