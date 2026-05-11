import { useMemo } from "react";

export function Petals({ count = 18, className = "fixed inset-0" }: { count?: number, className?: string }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 12 + Math.random() * 18,
        rotate: Math.random() * 360,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none z-10 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <svg
          key={p.id}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          className="absolute"
          style={{
            left: `${p.left}%`,
            top: "-10%",
            animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
            transform: `rotate(${p.rotate}deg)`,
          }}
        >
          <path
            d="M12 2 C16 6 20 10 12 22 C4 10 8 6 12 2 Z"
            fill="oklch(0.65 0.18 25)"
            opacity="0.85"
          />
          <path d="M12 4 C13 10 13 16 12 20" stroke="oklch(0.78 0.14 80)" strokeWidth="0.4" fill="none" />
        </svg>
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
