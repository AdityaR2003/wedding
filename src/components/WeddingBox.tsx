import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pinkGanesha from "@/assets/pink_ganesha.png";
import pinkSilk from "@/assets/pink_silk_texture_1778651645974.png";
import { LotusPetals } from "./Petals";

interface WeddingBoxProps {
  guestName: string;
  onOpen: () => void;
}

const Particle = ({ color, x, y }: { color: string; x: number; y: number }) => {
  const angle = Math.random() * Math.PI * 2;
  const velocity = 2 + Math.random() * 5;
  const tx = Math.cos(angle) * 200 * Math.random();
  const ty = Math.sin(angle) * 200 * Math.random();

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ 
        x: tx, 
        y: ty, 
        opacity: 0, 
        scale: 0,
        rotate: Math.random() * 360 
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute h-2 w-2 rounded-full"
      style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
    />
  );
};

export const WeddingBox: React.FC<WeddingBoxProps> = ({ guestName, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showCrackers, setShowCrackers] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setShowCrackers(true);
      setParticles(Array.from({ length: 100 }, (_, i) => i));
      setTimeout(() => {
        onOpen();
      }, 2000);
    }, 800);
  };

  const colors = ["#FFD700", "#FF4500", "#FF1493", "#00CED1", "#FFFFFF", "#FF69B4"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_oklch(0.34_0.13_18)_0%,_oklch(0.16_0.07_22)_70%,_oklch(0.10_0.05_20)_100%)] perspective-[1000px]">
      <AnimatePresence>
        {!showCrackers && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 20, rotateY: -10 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotateX: 10, 
              rotateY: -5,
              transition: { duration: 1.2, type: "spring" }
            }}
            whileHover={{ 
              rotateX: 5, 
              rotateY: 0,
              scale: 1.02,
              transition: { duration: 0.4 }
            }}
            exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            className="relative w-[85%] max-w-[380px] aspect-[4/5] cursor-pointer group preserve-3d"
            style={{ transformStyle: "preserve-3d" }}
            onClick={handleOpen}
          >
            {/* Box Thickness (Side Walls) - Darker Pink */}
            <div className="absolute inset-0 translate-z-[-20px] bg-[#9e2a44] rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.4)]" />

            {/* Main Box Body - Vibrant Pink with Silk Texture */}
            <div 
              className="absolute inset-0 bg-[#d14d6b] rounded-2xl shadow-[inset_0_0_20px_rgba(0,0,0,0.2),0_8px_0_#9e2a44] border-4 border-gold/40 flex flex-col items-center justify-center p-8 overflow-hidden transform-gpu"
              style={{ 
                backgroundImage: `url(${pinkSilk})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              
              {/* Subtle Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />

              {/* Magical Sparkles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                    x: [0, (i % 2 ? 50 : -50)],
                    y: [0, (i < 3 ? 50 : -50)]
                  }}
                  transition={{ 
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute h-1.5 w-1.5 bg-gold rounded-full shadow-[0_0_15px_#ffd700]"
                  style={{ 
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`
                  }}
                />
              ))}

              {/* Golden Silk Ribbon */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent via-gold/15 to-transparent -rotate-12 translate-y-4 scale-150 blur-sm" />
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent via-gold/10 to-transparent rotate-12 translate-y-8 scale-150 blur-sm" />
              
              {/* Golden Corners */}
              <div className="absolute top-2 left-2 w-14 h-14 border-t-4 border-l-4 border-gold/60 rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-14 h-14 border-t-4 border-r-4 border-gold/60 rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-14 h-14 border-b-4 border-l-4 border-gold/60 rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-14 h-14 border-b-4 border-r-4 border-gold/60 rounded-br-lg" />

              {/* Welcome Text */}
              <h2 className="relative z-10 font-deva text-5xl text-gold-gradient text-center mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">शुभ विवाह</h2>

              {/* Ganeshji Image with Pillars */}
              <div className="relative z-10 flex items-end gap-5 mb-6" style={{ mixBlendMode: "screen" }}>
                {/* Left Pillar */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  style={{ transformOrigin: "bottom" }}
                  className="flex flex-col items-center justify-end h-28 w-5"
                >
                  <div className="w-full h-1.5 rounded-t-sm bg-gradient-to-r from-amber-700 via-gold to-amber-800 shadow-md" />
                  <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-gold to-amber-700" />
                  <div className="w-full h-2 rounded-b-sm bg-gradient-to-r from-amber-800 via-gold to-amber-900 shadow-lg" />
                </motion.div>

                <motion.img 
                  src={pinkGanesha} 
                  alt="Ganesha" 
                  className="h-32 w-auto"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Right Pillar */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  style={{ transformOrigin: "bottom" }}
                  className="flex flex-col items-center justify-end h-28 w-5"
                >
                  <div className="w-full h-1.5 rounded-t-sm bg-gradient-to-r from-amber-700 via-gold to-amber-800 shadow-md" />
                  <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-gold to-amber-700" />
                  <div className="w-full h-2 rounded-b-sm bg-gradient-to-r from-amber-800 via-gold to-amber-900 shadow-lg" />
                </motion.div>
              </div>
              
              {/* Guest Name Section */}
              <div className="relative z-10 flex flex-col items-center mt-2">
                {/* Special Guest Badge */}
                <div className="bg-[#d14d6b] px-6 py-1 rounded-full border border-gold/30 shadow-sm mb-[-12px] z-20">
                  <span className="font-display text-[9px] tracking-[0.4em] text-gold font-bold uppercase">Special Guest</span>
                </div>
                
                {/* Name Banner */}
                <div className="bg-white/90 backdrop-blur-sm px-10 py-5 rounded-sm shadow-xl border-x-4 border-gold/20 min-w-[240px]">
                  <p className="font-serif text-3xl text-maroon-deep text-center tracking-widest font-medium">{guestName}</p>
                </div>
              </div>

              {/* Open Message */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10 mt-10 flex flex-col items-center gap-4"
              >
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="font-display text-sm tracking-[0.5em] text-gold font-bold animate-pulse">TAP TO OPEN</p>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </motion.div>
            </div>


          </motion.div>
        )}
      </AnimatePresence>

      {/* Cracker Burst Particles & Lotus Petals */}
      {showCrackers && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <LotusPetals count={40} />
          {particles.map((i) => (
            <Particle key={i} color={colors[i % colors.length]} x={0} y={0} />
          ))}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [1, 2], opacity: [1, 0] }}
            className="absolute h-40 w-40 rounded-full bg-gold/30 blur-2xl"
          />
        </div>
      )}
    </div>
  );
};
