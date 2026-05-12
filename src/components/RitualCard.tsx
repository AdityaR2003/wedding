import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Ritual {
  id: string;
  chapter: string;
  title: string;
  subtitle: string;
  emoji: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  momentImg?: string;
  mapUrl?: string;
}

interface RitualCardProps {
  ritual: Ritual;
  index: number;
}

export function RitualCard({ ritual, index }: RitualCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const triggeredRef = useRef(false);

  /* ── Draw the scratch layer ── */
  useEffect(() => {
    if (revealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Rose-gold / pink foil background */
    const drawLayer = () => {
      const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      g.addColorStop(0,   "#f472b6");   // pink-400
      g.addColorStop(0.4, "#ec4899");   // pink-500
      g.addColorStop(0.7, "#db2777");   // pink-600
      g.addColorStop(1,   "#be185d");   // pink-700
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      /* Sparkle dots */
      for (let i = 0; i < 900; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.18})`;
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() < 0.5 ? 1 : 2,
          Math.random() < 0.5 ? 1 : 2
        );
      }

      /* Diagonal shimmer lines */
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 1.5;
      for (let i = -canvas.height; i < canvas.width + canvas.height; i += 28) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    drawLayer();

    let drawing = false;

    const triggerReveal = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;

      /* Fade out canvas */
      let alpha = 1;
      const fade = () => {
        alpha -= 0.055;
        if (!canvas) return;
        const c = canvas.getContext("2d");
        if (!c) return;
        c.globalAlpha = Math.max(0, alpha);
        c.globalCompositeOperation = "source-over";
        const g = c.createLinearGradient(0, 0, canvas.width, canvas.height);
        g.addColorStop(0, "#f472b6");
        g.addColorStop(0.5, "#ec4899");
        g.addColorStop(1, "#be185d");
        c.fillStyle = g;
        c.fillRect(0, 0, canvas.width, canvas.height);
        if (alpha > 0) requestAnimationFrame(fade);
        else {
          setRevealed(true);
          setTimeout(() => setCurtainOpen(true), 120);
        }
      };
      requestAnimationFrame(fade);
    };

    const scratch = (x: number, y: number) => {
      const c = canvas.getContext("2d");
      if (!c) return;
      c.globalCompositeOperation = "destination-out";
      c.beginPath();
      c.arc(x, y, 36, 0, Math.PI * 2);
      c.fill();
      triggerReveal();
    };

    const onMouseDown = () => (drawing = true);
    const onMouseUp   = () => (drawing = false);
    const onMouseMove = (e: MouseEvent) => {
      if (!drawing) return;
      const r = canvas.getBoundingClientRect();
      const scaleX = canvas.width  / r.width;
      const scaleY = canvas.height / r.height;
      scratch((e.clientX - r.left) * scaleX, (e.clientY - r.top) * scaleY);
    };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      const scaleX = canvas.width  / r.width;
      const scaleY = canvas.height / r.height;
      const t = e.touches[0];
      scratch((t.clientX - r.left) * scaleX, (t.clientY - r.top) * scaleY);
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup",   onMouseUp);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("touchstart", onTouch, { passive: false });
    canvas.addEventListener("touchmove",  onTouch, { passive: false });

    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mouseup",   onMouseUp);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove",  onTouch);
    };
  }, [revealed, ritual.emoji, ritual.chapter]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      /* Fixed uniform size — same for every card */
      className="relative overflow-hidden rounded-3xl border border-gold/30 shadow-xl perspective-1000"
      style={{ height: 420, willChange: "transform", background: revealed ? "oklch(0.18 0.10 18)" : "transparent" }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* ── Front Side ── */}
        <div 
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0 text-center px-6 py-6 bg-gradient-to-b from-[#1a0008] via-[#2d0010] to-[#1a0008]">
            {/* Top gold bar */}
            <div className="absolute top-0 h-1 w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            <p className="font-display text-[8px] tracking-[0.6em] text-gold/50 uppercase mb-2">{ritual.chapter}</p>

            <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/50 bg-pink-950/40 shadow-[0_0_24px_rgba(236,72,153,0.35)]">
              <span className="text-4xl">{ritual.emoji}</span>
            </div>

            <h3 className="font-script text-4xl text-gold-gradient leading-tight">{ritual.title}</h3>
            <p className="mt-1 font-serif italic text-pink-300/80 text-xs">{ritual.subtitle}</p>

            <div className="my-3 flex items-center gap-2 w-full justify-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/25" />
              <span className="text-gold/40 text-[10px]">✦</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/25" />
            </div>

            <p className="font-serif text-[11px] leading-relaxed text-ivory/70 italic min-h-[52px] px-1">
              "{ritual.description}"
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2 w-full border-t border-gold/10 pt-4">
              {[
                { label: "Date",  value: ritual.date  },
                { label: "Time",  value: ritual.time  },
                { label: "Venue", value: ritual.venue },
              ].map(({ label, value }) => (
                <div key={label} className="relative rounded-lg border border-gold/15 bg-black/30 p-2">
                  <p className="font-display text-[7px] tracking-[0.25em] text-gold/55 uppercase">{label}</p>
                  <p className="mt-0.5 font-serif text-ivory text-[10px] leading-tight">{value}</p>
                  {label === "Venue" && ritual.mapUrl && (
                    <a 
                      href={ritual.mapUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="absolute -bottom-2 -right-1 flex items-center justify-center h-5 w-5 rounded-full bg-gold shadow-lg hover:scale-110 transition-transform"
                    >
                      <span className="text-[10px]">📍</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* View Moments Button - Logo only */}
            {curtainOpen && ritual.momentImg && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsFlipped(true)}
                className="mt-6 flex flex-col items-center gap-2 group"
              >
                <div className="relative h-16 w-16 flex items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold shadow-[0_0_20px_rgba(255,215,0,0.2)] transition-all group-hover:border-gold group-hover:bg-gold/10">
                  <span className="text-3xl">📸</span>
                </div>
                <span className="font-display text-[8px] tracking-[0.3em] text-gold opacity-60 group-hover:opacity-100">VIEW MOMENTS</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* ── Back Side (The Photo) ── */}
        <div 
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #1a0008 0%, #2d0010 100%)"
          }}
        >
          {ritual.momentImg && (
            <div className="relative h-full w-full p-4 flex flex-col items-center">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-gold/40 shadow-2xl">
                <img 
                  src={ritual.momentImg} 
                  alt={ritual.title} 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <h4 className="font-script text-3xl text-gold-gradient">{ritual.title} Moments</h4>
                  <p className="font-display text-[8px] tracking-[0.4em] text-ivory/60 uppercase mt-1">Ravi & Ranjana</p>
                </div>
              </div>

              <button
                onClick={() => setIsFlipped(false)}
                className="mt-4 flex items-center gap-2 font-display text-[9px] tracking-[0.3em] text-gold/80 hover:text-gold transition uppercase"
              >
                ← Back to Details
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Pink Curtain Overlay (splits open on reveal) ── */}
      <AnimatePresence>
        {!curtainOpen && revealed && (
          <>
            {/* Left curtain */}
            <motion.div
              key="curtain-left"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              exit={{}}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
              className="absolute inset-y-0 left-0 z-30 w-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, #be185d, #db2777, #ec4899, #f9a8d4)",
                boxShadow: "inset -12px 0 30px rgba(0,0,0,0.25)",
              }}
            >
              {/* Curtain pleats */}
              {[15, 35, 55, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute inset-y-0"
                  style={{
                    left: `${pct}%`,
                    width: 3,
                    background: "rgba(0,0,0,0.12)",
                  }}
                />
              ))}
              {/* Gold fringe top */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 opacity-80" />
              {/* Decorative bow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 flex flex-col items-end gap-1 pr-1 opacity-70">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px w-full bg-yellow-300/70" />
                ))}
              </div>
            </motion.div>

            {/* Right curtain */}
            <motion.div
              key="curtain-right"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              exit={{}}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
              className="absolute inset-y-0 right-0 z-30 w-1/2 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, #be185d, #db2777, #ec4899, #f9a8d4)",
                boxShadow: "inset 12px 0 30px rgba(0,0,0,0.25)",
              }}
            >
              {[15, 35, 55, 75].map((pct) => (
                <div
                  key={pct}
                  className="absolute inset-y-0"
                  style={{ left: `${pct}%`, width: 3, background: "rgba(0,0,0,0.12)" }}
                />
              ))}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-400 opacity-80" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 flex flex-col items-start gap-1 pl-1 opacity-70">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-px w-full bg-yellow-300/70" />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Scratch Canvas Layer (top-most before reveal) ── */}
      {!revealed && (
        <canvas
          ref={canvasRef}
          width={400}
          height={420}
          className="absolute inset-0 z-20 w-full h-full cursor-crosshair touch-none"
        />
      )}

      {/* ── Scratch hint (Centered) ── */}
      {!revealed && (
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ willChange: "transform, opacity" }}
          className="absolute top-1/2 left-0 right-0 z-30 -translate-y-1/2 flex flex-col items-center gap-4 pointer-events-none"
        >
          <p className="font-display text-[14px] tracking-[0.6em] text-white uppercase font-bold">
            Scratch to reveal
          </p>
          <motion.p 
            animate={{ scale: [0.98, 1.05, 0.98], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="font-script text-6xl md:text-7xl text-gold-gradient"
          >
            {ritual.title}
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}
