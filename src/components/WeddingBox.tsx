import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ganesha from "@/assets/ganesha.png";

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 perspective-[1000px]">
      <AnimatePresence>
        {!showCrackers && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: -10 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 1.2, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-[90%] max-w-[400px] aspect-[4/5] cursor-pointer group"
            onClick={handleOpen}
          >
            {/* Main Box Body */}
            <div className="absolute inset-0 bg-[#8b0000] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,215,0,0.2)] border-4 border-gold/40 flex flex-col items-center justify-center p-8 overflow-hidden">
              
              {/* Velvet Texture Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, #ff0000 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
              
              {/* Golden Corners */}
              <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-gold rounded-tl-lg" />
              <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-gold rounded-tr-lg" />
              <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-gold rounded-bl-lg" />
              <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-gold rounded-br-lg" />

              {/* Ganeshji Image with Pillars */}
              <div className="relative flex items-end gap-4 mb-6">
                {/* Left Pillar */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  style={{ transformOrigin: "bottom" }}
                  className="flex flex-col items-center justify-end h-24 w-4"
                >
                  <div className="w-full h-1 rounded-t-sm bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800" />
                  <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-700" />
                  <div className="w-full h-1.5 rounded-b-sm bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700" />
                </motion.div>

                <motion.img 
                  src={ganesha} 
                  alt="Ganesha" 
                  className="h-28 w-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Right Pillar */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  style={{ transformOrigin: "bottom" }}
                  className="flex flex-col items-center justify-end h-24 w-4"
                >
                  <div className="w-full h-1 rounded-t-sm bg-gradient-to-r from-amber-700 via-yellow-300 to-amber-800" />
                  <div className="w-1/2 flex-1 bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-700" />
                  <div className="w-full h-1.5 rounded-b-sm bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-700" />
                </motion.div>
              </div>

              {/* Welcome Text */}
              <h2 className="font-deva text-5xl text-gold-gradient text-center mb-2 drop-shadow-md">शुभ विवाह</h2>
              
              {/* Guest Name */}
              <div className="relative py-4 px-6 border-y border-gold/30 my-4">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b0000] px-4 font-display text-[10px] tracking-[0.3em] text-gold/60 uppercase">Special Guest</span>
                <p className="font-serif text-2xl text-ivory text-center tracking-wider">{guestName}</p>
              </div>

              {/* Open Message */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
                <p className="font-display text-sm tracking-[0.4em] text-gold animate-pulse">OPEN THE BOX</p>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold to-transparent" />
              </motion.div>
            </div>

            {/* Pull Bow on Top */}
            <motion.div 
              className="absolute -top-8 left-1/2 -translate-x-1/2 z-10"
              whileHover={{ scale: 1.1 }}
              animate={isOpening ? { y: -100, opacity: 0 } : {}}
            >
              <div className="relative h-20 w-24">
                {/* Bow Loops */}
                <div className="absolute top-0 left-0 w-12 h-16 bg-gold rounded-full rotate-[-30deg] border-2 border-amber-600 shadow-xl" />
                <div className="absolute top-0 right-0 w-12 h-16 bg-gold rounded-full rotate-[30deg] border-2 border-amber-600 shadow-xl" />
                {/* Bow Center */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full border-2 border-gold z-10 shadow-lg" />
                {/* Ribbons hanging */}
                <div className="absolute top-12 left-4 w-6 h-16 bg-gold rounded-b-lg rotate-[-15deg] border-x-2 border-b-2 border-amber-600 shadow-lg" />
                <div className="absolute top-12 right-4 w-6 h-16 bg-gold rounded-b-lg rotate-[15deg] border-x-2 border-b-2 border-amber-600 shadow-lg" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cracker Burst Particles */}
      {showCrackers && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
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
