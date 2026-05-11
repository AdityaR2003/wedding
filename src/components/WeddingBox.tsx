import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ganesha from "@/assets/ganesha.png";

interface WeddingBoxProps {
  guestName: string;
  onOpen: () => void;
}

const Particle = ({ color }: { color: string }) => {
  const angle = Math.random() * Math.PI * 2;
  const distance = 100 + Math.random() * 300;
  const tx = Math.cos(angle) * distance;
  const ty = Math.sin(angle) * distance;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ 
        x: tx, 
        y: ty, 
        opacity: 0, 
        scale: 0,
        rotate: Math.random() * 720 
      }}
      transition={{ duration: 2, ease: [0.23, 1, 0.32, 1] }}
      className="absolute h-1.5 w-1.5 rounded-full"
      style={{ 
        backgroundColor: color, 
        boxShadow: `0 0 15px ${color}, 0 0 5px white`,
        zIndex: 200
      }}
    />
  );
};

export const WeddingBox: React.FC<WeddingBoxProps> = ({ guestName, onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showCrackers, setShowCrackers] = useState(false);
  const [particles, setParticles] = useState<number[]>([]);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    // Trigger crackers shortly after lid starts opening
    setTimeout(() => {
      setShowCrackers(true);
      setParticles(Array.from({ length: 150 }, (_, i) => i));
      
      // Final transition
      setTimeout(() => {
        onOpen();
      }, 2500);
    }, 600);
  };

  const colors = ["#FFD700", "#FF4500", "#FF1493", "#00CED1", "#FFFFFF", "#FFD700", "#FF0000"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 perspective-[1500px] overflow-hidden">
      
      {/* 3D Box Container */}
      <motion.div 
        className="relative w-80 h-[450px] preserve-3d cursor-pointer"
        initial={{ rotateY: -20, rotateX: 10, scale: 0.8, opacity: 0 }}
        animate={{ rotateY: 0, rotateX: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onClick={handleOpen}
      >
        {/* Shadow under the box */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-10 bg-black/60 blur-3xl rounded-full translate-z-[-100px]" />

        {/* BOTTOM FACE (Base) */}
        <div className="absolute inset-0 bg-[#4a0000] rounded-xl shadow-inner border border-gold/20" />

        {/* BACK FACE */}
        <div className="absolute inset-0 bg-[#5c0000] rounded-xl translate-z-[-20px] border border-gold/10" />

        {/* SIDE FACES (Left & Right) */}
        <div className="absolute top-0 bottom-0 left-0 w-[20px] bg-[#3a0000] origin-left rotate-y-90 border-r border-gold/20 shadow-xl" />
        <div className="absolute top-0 bottom-0 right-0 w-[20px] bg-[#3a0000] origin-right -rotate-y-90 border-l border-gold/20 shadow-xl" />

        {/* CONTENT INSIDE (Revealed when lid opens) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 translate-z-[-5px]">
          <motion.img 
            src={ganesha} 
            alt="Ganesha" 
            className="h-32 w-auto mb-6 drop-shadow-[0_0_20px_rgba(255,215,0,0.4)]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <h2 className="font-deva text-4xl text-gold-gradient text-center mb-4">शुभ विवाह</h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent my-4" />
          <p className="font-serif text-2xl text-ivory text-center tracking-wider">{guestName}</p>
          <div className="mt-8 text-gold/60 font-display text-[10px] tracking-[0.4em] uppercase">Invitation Awaits</div>
        </div>

        {/* THE LID (3D Rotating Cover) */}
        <motion.div 
          className="absolute inset-0 preserve-3d origin-top z-50"
          animate={isOpening ? { rotateX: -110 } : { rotateX: 0 }}
          transition={{ duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] }}
        >
          {/* Lid Top Face (Visible when closed) */}
          <div className="absolute inset-0 bg-[#8b0000] rounded-xl shadow-2xl border-4 border-gold/40 flex flex-col items-center justify-center p-8 backface-hidden translate-z-[1px]">
            
            {/* Velvet Texture Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none rounded-xl" style={{ backgroundImage: "radial-gradient(circle, #ff0000 1px, transparent 1px)", backgroundSize: "4px 4px" }} />
            
            {/* Ornate Gold Frame */}
            <div className="absolute inset-4 border border-gold/30 rounded-lg pointer-events-none" />
            <div className="absolute top-2 left-2 w-16 h-16 border-t-4 border-l-4 border-gold rounded-tl-xl" />
            <div className="absolute top-2 right-2 w-16 h-16 border-t-4 border-r-4 border-gold rounded-tr-xl" />
            <div className="absolute bottom-2 left-2 w-16 h-16 border-b-4 border-l-4 border-gold rounded-bl-xl" />
            <div className="absolute bottom-2 right-2 w-16 h-16 border-b-4 border-r-4 border-gold rounded-br-xl" />

            {/* Lid Content */}
            <motion.div 
              className="relative z-10 flex flex-col items-center gap-4"
              animate={isOpening ? { opacity: 0 } : { opacity: 1 }}
            >
              <div className="h-16 w-16 bg-gold/10 rounded-full flex items-center justify-center border border-gold/40 shadow-inner mb-4">
                <span className="text-4xl text-gold-gradient">ॐ</span>
              </div>
              <h1 className="font-deva text-5xl text-gold-gradient drop-shadow-lg">निमंत्रण</h1>
              <p className="font-display text-xs tracking-[0.5em] text-gold/80 mt-6 animate-pulse">TAP TO OPEN THE BOX</p>
            </motion.div>

            {/* Lid Bow Handle */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <div className="relative h-16 w-20">
                <div className="absolute top-0 left-0 w-10 h-14 bg-gold rounded-full rotate-[-30deg] border border-amber-600 shadow-lg" />
                <div className="absolute top-0 right-0 w-10 h-14 bg-gold rounded-full rotate-[30deg] border border-amber-600 shadow-lg" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-amber-600 rounded-full border border-gold z-10 shadow-md" />
              </div>
            </div>
          </div>

          {/* Lid Inner Face (Visible when open) */}
          <div className="absolute inset-0 bg-[#6b0000] rounded-xl border-2 border-gold/20 rotate-x-180 backface-hidden" />
        </motion.div>
      </motion.div>

      {/* Cracker Burst Particles */}
      <AnimatePresence>
        {showCrackers && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-visible">
            {particles.map((i) => (
              <Particle key={i} color={colors[i % colors.length]} />
            ))}
            
            {/* Core Flash */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 4, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1 }}
              className="absolute h-40 w-40 rounded-full bg-white/40 blur-3xl z-[150]"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 6, 0], opacity: [0, 0.8, 0] }}
              transition={{ duration: 1.5 }}
              className="absolute h-60 w-60 rounded-full bg-gold/30 blur-[100px] z-[140]"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

