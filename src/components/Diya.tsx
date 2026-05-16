export function Diya({ size = 56, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`} style={{ width: size }}>
      <div
        className="animate-flicker"
        style={{
          width: size * 0.18,
          height: size * 0.5,
          background: "radial-gradient(ellipse at center bottom, #fff3a3 0%, #ffae42 50%, #ff5a1f 90%, transparent 100%)",
          borderRadius: "50% 50% 40% 40% / 70% 70% 30% 30%",
        }}
      />
      <div
        style={{
          width: size,
          height: size * 0.35,
          background: "linear-gradient(180deg, #d28a3a, #6b2f12)",
          borderRadius: "50% 50% 40% 40% / 30% 30% 100% 100%",
          boxShadow: "inset 0 -6px 12px rgba(0,0,0,0.4), 0 8px 20px rgba(255,150,50,0.3)",
        }}
      />
    </div>
  );
}
