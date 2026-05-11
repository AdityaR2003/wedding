import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SandeshPatrProps {
  children: ReactNode;
  guestName?: string;
  className?: string;
}

export function SandeshPatr({ children, guestName, className = "" }: SandeshPatrProps) {
  return (
    <div className={`relative mx-auto max-w-2xl w-full px-2 py-12 md:px-4 ${className}`}>
      {/* Floral Mandala Decorations */}
      <div className="absolute -left-4 -top-4 z-30 h-16 w-16 opacity-30 md:h-24 md:w-24">
        <FloralMotif />
      </div>
      <div className="absolute -right-4 -top-4 z-30 h-16 w-16 rotate-90 opacity-30 md:h-24 md:w-24">
        <FloralMotif />
      </div>
      <div className="absolute -bottom-4 -left-4 z-30 h-16 w-16 -rotate-90 opacity-30 md:h-24 md:w-24">
        <FloralMotif />
      </div>
      <div className="absolute -bottom-4 -right-4 z-30 h-16 w-16 rotate-180 opacity-30 md:h-24 md:w-24">
        <FloralMotif />
      </div>

      {/* Top Roller */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="absolute left-1/2 top-0 z-20 h-6 w-[102%] -translate-x-1/2 rounded-full border border-gold/40 bg-gradient-to-b from-maroon-deep via-gold/30 to-maroon-deep shadow-lg md:h-8 md:w-[105%]"
      >
        <div className="absolute -left-1 top-1/2 h-8 w-3 -translate-y-1/2 rounded-l-full bg-gold shadow-md md:-left-2 md:h-10 md:w-4" />
        <div className="absolute -right-1 top-1/2 h-8 w-3 -translate-y-1/2 rounded-r-full bg-gold shadow-md md:-right-2 md:h-10 md:w-4" />
      </motion.div>

      {/* Parchment Body */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: "auto", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative overflow-hidden rounded-sm border-x border-gold/20 bg-[#f4e4bc] bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] p-6 pt-10 md:p-14 md:pt-16 shadow-2xl"
      >
        {/* Ornate Inner Border */}
        <div className="absolute inset-2 pointer-events-none border border-maroon/10 rounded-sm md:inset-4" />
        <div className="absolute inset-3 pointer-events-none border-2 border-gold/20 rounded-sm md:inset-6" />
        
        {/* Personal Greeting */}
        {guestName && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            viewport={{ once: true }}
            className="mb-6 text-center md:mb-8"
          >
            <p className="font-display text-[8px] tracking-[0.5em] text-maroon/60 uppercase md:text-[10px]">Personal Invitation for</p>
            <h4 className="mt-2 font-script text-3xl text-maroon-deep md:text-5xl">
              {guestName}
            </h4>
            <div className="mt-3 flex items-center justify-center gap-3 md:mt-4">
              <div className="h-px w-6 bg-gold/50 md:w-8" />
              <span className="text-sm text-gold md:text-base">✨</span>
              <div className="h-px w-6 bg-gold/50 md:w-8" />
            </div>
          </motion.div>
        )}

        <div className="relative z-10 text-maroon-deep">
          {children}
        </div>
      </motion.div>

      {/* Bottom Roller */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="absolute left-1/2 bottom-0 z-20 h-6 w-[102%] -translate-x-1/2 rounded-full border border-gold/40 bg-gradient-to-b from-maroon-deep via-gold/30 to-maroon-deep shadow-lg md:h-8 md:w-[105%]"
      >
        <div className="absolute -left-1 top-1/2 h-8 w-3 -translate-y-1/2 rounded-l-full bg-gold shadow-md md:-left-2 md:h-10 md:w-4" />
        <div className="absolute -right-1 top-1/2 h-8 w-3 -translate-y-1/2 rounded-r-full bg-gold shadow-md md:-right-2 md:h-10 md:w-4" />
      </motion.div>
    </div>
  );
}

function FloralMotif() {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className="text-gold h-full w-full">
      <path d="M50 0 C55 20 70 35 100 40 C80 45 65 60 60 90 C55 70 40 55 10 50 C30 45 45 30 50 0 Z" />
      <circle cx="50" cy="50" r="10" />
    </svg>
  );
}
