export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t border-white/[0.1] bg-slate-950/85 px-4 py-3 text-sm shadow-[0_-12px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden">
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          Quick help in Dehradun
        </span>
        <a href="tel:+918859430800" className="text-base font-bold text-white">
          +91 88594 30800
        </a>
      </div>
      <div className="flex flex-1 justify-end gap-2">
        <a
          href="https://wa.me/918859430800"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-600 px-3 py-2 text-xs font-semibold text-white"
        >
          WhatsApp
        </a>
        <a
          href="tel:+918859430800"
          className="flex flex-1 items-center justify-center rounded-full border border-orange-400/35 bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-2 text-xs font-semibold text-slate-950"
        >
          Call now
        </a>
      </div>
    </div>
  );
}
