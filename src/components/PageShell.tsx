export function OrnateDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`my-6 flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
      <svg width="28" height="28" viewBox="0 0 24 24" className="text-gold">
        <path
          fill="currentColor"
          d="M12 2 L14 9 L21 9 L15.5 13 L17.5 20 L12 16 L6.5 20 L8.5 13 L3 9 L10 9 Z"
          opacity="0.9"
        />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
