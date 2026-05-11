import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ScratchInvitationProps {
  onComplete: () => void;
  guestName?: string;
}

export function ScratchInvitation({ onComplete, guestName }: ScratchInvitationProps) {
  const [sealBroken, setSealBroken] = useState(false);

  function handleSealClick() {
    if (sealBroken) return;
    setSealBroken(true);
    setTimeout(onComplete, 1200);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
    >
      {/* Envelope / Card */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.85 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, type: "spring", bounce: 0.35 }}
        className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.7)]"
        style={{
          background: "linear-gradient(145deg, #4a0010 0%, #ad1457 40%, #d81b60 100%)",
          border: "2px solid #b8860b",
        }}
      >
        {/* Corner ornaments */}
        {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
          <div key={pos} className={`absolute ${pos} text-gold/50 text-xl leading-none select-none`}>✦</div>
        ))}

        {/* Top text */}
        <div className="absolute top-8 left-0 right-0 text-center">
          <p className="font-display text-[9px] tracking-[0.6em] text-gold/50 uppercase">Shubh Vivah</p>
          <p className="mt-1 font-deva text-xl text-gold/70">शुभ विवाह</p>
        </div>

        {/* Decorative border lines */}
        <div className="absolute inset-6 rounded-xl" style={{ border: "1px solid rgba(184,134,11,0.25)" }} />
        <div className="absolute inset-8 rounded-xl" style={{ border: "1px dashed rgba(184,134,11,0.15)" }} />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-8">
          <p className="font-display text-[9px] tracking-[0.5em] text-gold/60 uppercase">You are cordially invited to the wedding of</p>

          <div className="my-3">
            <motion.p
              animate={{ filter: ["drop-shadow(0 0 8px rgba(255,200,0,0.3))", "drop-shadow(0 0 20px rgba(255,200,0,0.7))", "drop-shadow(0 0 8px rgba(255,200,0,0.3))"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-script text-5xl md:text-6xl"
              style={{ background: "linear-gradient(135deg, #ffd700, #ffe066, #b8860b, #ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Ravi
            </motion.p>
            <p className="font-display text-sm text-gold/60 tracking-widest my-1">&amp;</p>
            <motion.p
              animate={{ filter: ["drop-shadow(0 0 8px rgba(255,200,0,0.3))", "drop-shadow(0 0 20px rgba(255,200,0,0.7))", "drop-shadow(0 0 8px rgba(255,200,0,0.3))"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="font-script text-5xl md:text-6xl"
              style={{ background: "linear-gradient(135deg, #ffd700, #ffe066, #b8860b, #ffd700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Ranjana
            </motion.p>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent my-1" />

          <p className="font-serif italic text-ivory/50 text-xs">{guestName ? `Dear ${guestName}` : "Dear Guest"}</p>
          <p className="font-display text-[8px] tracking-[0.4em] text-ivory/40 uppercase">14 · June · 2026 · Gorakhpur</p>
        </div>

        {/* WAX SEAL — clickable */}
        <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-3">
          <AnimatePresence>
            {!sealBroken ? (
              <motion.button
                key="seal"
                onClick={handleSealClick}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9, rotate: -8 }}
                exit={{ scale: 2.5, opacity: 0, rotate: 25 }}
                transition={{ exit: { duration: 0.6, ease: "easeOut" } }}
                className="relative flex flex-col items-center justify-center cursor-pointer select-none"
                style={{ width: 88, height: 88 }}
                aria-label="Break the seal to open invitation"
              >
                {/* Outer wax ring */}
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #c0392b, #7b0d1e, #4a0010)", boxShadow: "0 4px 24px rgba(150,0,30,0.8), inset 0 2px 4px rgba(255,255,255,0.15)" }} />
                {/* Inner ring detail */}
                <div className="absolute inset-[6px] rounded-full" style={{ border: "1px solid rgba(255,200,150,0.3)" }} />
                <div className="absolute inset-[10px] rounded-full" style={{ border: "1px dashed rgba(255,200,150,0.2)" }} />
                {/* Seal text */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <span className="text-2xl leading-none">🔱</span>
                  <span className="mt-1 font-display text-[7px] tracking-[0.2em] text-amber-100/80 uppercase">R ✦ R</span>
                </div>
              </motion.button>
            ) : (
              <motion.div
                key="broken"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-1"
              >
                <span className="text-4xl">💌</span>
                <p className="font-display text-[8px] tracking-[0.4em] text-gold/70 uppercase">Opening...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {!sealBroken && (
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-display text-[8px] tracking-[0.4em] text-gold/50 uppercase"
            >
              Tap seal to open
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Background particles hint */}
      <motion.p
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-6 font-display text-[9px] tracking-[0.6em] text-ivory/30 uppercase"
      >
        A Royal Invitation Awaits ✦
      </motion.p>
    </motion.div>
  );
}
