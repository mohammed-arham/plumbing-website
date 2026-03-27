export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-slate-200 bg-white px-4 py-3 text-sm shadow-[0_-6px_20px_rgba(15,23,42,0.18)] md:hidden">
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Quick help in Dehradun
        </span>
        <a href="tel:+918859430800" className="text-base font-bold text-blue-900">
          +91 88594 30800
        </a>
      </div>
      <div className="flex flex-1 justify-end gap-2">
        <a
          href="https://wa.me/918859430800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-emerald-500 px-3 py-2 text-xs font-semibold text-white shadow-md"
        >
          WhatsApp
        </a>
        <a
          href="tel:+918859430800"
          className="flex flex-1 items-center justify-center rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold text-white shadow-md"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}

