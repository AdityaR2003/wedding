import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface InvitationEnvelopeProps {
  onOpen: () => void;
  guestName?: string;
}

export function InvitationEnvelope({ onOpen, guestName }: InvitationEnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(onOpen, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-lg bg-[#ad1457] shadow-[0_0_100px_rgba(0,0,0,0.8)]"
      >
        {/* Envelope Body */}
        <div className="absolute inset-0 border-4 border-gold/20" />
        
        {/* Flap Animation */}
        <motion.div
          animate={isOpening ? { rotateX: -180, zIndex: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute left-0 top-0 z-20 h-1/2 w-full origin-top bg-[#d81b60] shadow-lg"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 border-t-2 border-gold/40" />
        </motion.div>

        {/* Wax Seal */}
        <AnimatePresence>
          {!isOpening && (
            <motion.button
              exit={{ scale: 0, opacity: 0 }}
              onClick={handleOpen}
              className="absolute left-1/2 top-1/2 z-30 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-gold via-gold/80 to-maroon shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              <div className="h-20 w-20 rounded-full border-2 border-maroon-deep/30 bg-gold/50 backdrop-blur-sm flex items-center justify-center">
                <span className="font-script text-3xl text-maroon-deep">A&A</span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Address/Guest Label */}
        <div className="absolute bottom-12 left-0 w-full text-center">
          <p className="font-display text-[10px] tracking-[0.5em] text-gold/60 uppercase">Personal Invitation for</p>
          <p className="mt-2 font-script text-3xl text-gold-gradient md:text-4xl">{guestName || "Guest"}</p>
        </div>

        {/* Decorative Corners */}
        <div className="absolute bottom-0 left-0 h-16 w-16 border-b-2 border-l-2 border-gold/20" />
        <div className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-gold/20" />
      </motion.div>

      {/* Instructions */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 font-display text-xs tracking-[0.4em] text-ivory/50"
      >
        TAP THE SEAL TO OPEN
      </motion.p>
    </div>
  );
}
