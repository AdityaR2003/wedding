import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home",     label: "Home" },
  { id: "story",   label: "Our Story" },

  { id: "family",  label: "Family" },
  { id: "haldi",   label: "Haldi" },
  { id: "mehendi", label: "Mehendi" },
  { id: "sangeet", label: "Sangeet" },
  { id: "wedding", label: "Wedding" },
  { id: "reception",label: "Reception" },
  { id: "venue",   label: "Venue" },
  { id: "countdown",label: "Countdown" },
  { id: "accept",  label: "Join Us" },
  { id: "wishes",  label: "Wishes" },
  { id: "blessings",label: "Blessings" },
];

export function SectionNav({ visible }: { visible: boolean }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [visible]);

  if (!visible) return null;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop nav — horizontally scrollable pill */}
      <nav className="fixed left-1/2 top-3 z-40 hidden -translate-x-1/2 md:flex"
           style={{ maxWidth: "calc(100vw - 2rem)" }}>
        <div className="flex items-center gap-0.5 overflow-x-auto rounded-full border border-gold/40 bg-maroon-deep/80 px-2 py-1.5 backdrop-blur-md"
             style={{ scrollbarWidth: "none" }}>
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`shrink-0 rounded-full px-2.5 py-1 font-display text-[9px] tracking-[0.15em] transition ${
                active === s.id
                  ? "bg-gold text-maroon-deep"
                  : "text-ivory/75 hover:text-gold"
              }`}
            >
              {s.label.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile nav */}
      <div className="fixed right-4 top-4 z-40 md:hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-gold/60 bg-maroon-deep/80 px-4 py-2 font-display text-xs tracking-widest text-gold backdrop-blur"
        >
          {open ? "CLOSE ✕" : "MENU ☰"}
        </button>
        {open && (
          <div className="mt-2 flex max-h-[70vh] flex-col gap-1 overflow-y-auto rounded-2xl border border-gold/40 bg-maroon-deep/95 p-3 backdrop-blur-md">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`rounded-full px-4 py-2 text-left font-display text-[11px] tracking-[0.2em] ${
                  active === s.id ? "bg-gold text-maroon-deep" : "text-ivory/85"
                }`}
              >
                {s.label.toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
