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

export function GoldenParticles({ count = 25, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 6 + Math.random() * 8,
        size: 2 + Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className={`pointer-events-none z-10 overflow-hidden ${className}`}>
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #ffe7a0 0%, #d4a648 60%, transparent 70%)",
            boxShadow: "0 0 8px #ffd97a",
            animation: `float-up ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
