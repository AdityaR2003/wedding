import { useMemo } from "react";
import { motion } from "framer-motion";
import fallingHeart from "@/assets/falling_heart.png";

export function Petals({ count = 30, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 30 + Math.random() * 40,
        rotate: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none z-10 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <motion.svg
          key={p.id}
          viewBox="0 0 24 24"
          className="absolute"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: "-15%",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <defs>
            <linearGradient id={`grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#ffd700", stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: "#fff4b0", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#b8860b", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={`url(#grad-${p.id})`}
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function GoldenParticles({ count = 40, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 1 + Math.random() * 3,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none z-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
            y: [0, -100]
          }}
          transition={{ 
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute rounded-full bg-gold shadow-[0_0_10px_#ffd700]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
        />
      ))}
    </div>
  );
}

export function FallingHearts({ count = 20, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 6 + Math.random() * 8,
        size: 15 + Math.random() * 25,
        rotate: Math.random() * 360,
        sway: 30 + Math.random() * 60,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none z-40 overflow-hidden ${className}`}>
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ top: "-10%", left: `${h.left}%`, opacity: 0, rotate: h.rotate }}
          animate={{ 
            top: "110%",
            left: [`${h.left}%`, `${h.left + (h.sway/10)}%`, `${h.left - (h.sway/10)}%`, `${h.left}%`],
            opacity: [0, 0.8, 0.8, 0],
            rotate: h.rotate + 360
          }}
          transition={{ 
            duration: h.duration,
            delay: h.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
          style={{ width: h.size, height: h.size, willChange: "transform, opacity" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full fill-pink-400/40 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function LotusPetals({ count = 25, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 10,
        size: 20 + Math.random() * 30,
        rotate: Math.random() * 360,
        sway: 50 + Math.random() * 100,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none z-50 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ top: "-10%", left: `${p.left}%`, opacity: 0, rotate: p.rotate }}
          animate={{ 
            top: "110%",
            left: [`${p.left}%`, `${p.left + (p.sway/10)}%`, `${p.left - (p.sway/10)}%`, `${p.left}%`],
            opacity: [0, 1, 1, 0],
            rotate: p.rotate + 720
          }}
          transition={{ 
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
          style={{ width: p.size, height: p.size }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
            <path
              d="M50 0 C60 30 90 40 90 60 C90 80 70 100 50 100 C30 100 10 80 10 60 C10 40 40 30 50 0"
              fill="url(#lotus-grad)"
              className="opacity-90"
            />
            <defs>
              <radialGradient id="lotus-grad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="70%" stopColor="#ffdae9" />
                <stop offset="100%" stopColor="#f8bbd0" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
