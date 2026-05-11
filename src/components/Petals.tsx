import { useMemo } from "react";
import rosePetal from "@/assets/rose_petal.png";

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
        <img
          key={p.id}
          src={rosePetal}
          alt=""
          className="absolute"
          style={{
            width: p.size,
            height: "auto",
            left: `${p.left}%`,
            top: "-15%",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
            mixBlendMode: 'screen',
            filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.1))",
          }}
        />
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
