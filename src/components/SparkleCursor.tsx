import { useEffect, useRef } from "react";

export function SparkleCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      // spawn sparkle
      const s = document.createElement("span");
      s.className = "sparkle";
      s.style.cssText = `position:fixed;left:${tx}px;top:${ty}px;width:6px;height:6px;border-radius:9999px;pointer-events:none;z-index:9999;background:radial-gradient(circle,#fff7d0,#d4a648 60%,transparent);box-shadow:0 0 8px #ffd97a;transform:translate(-50%,-50%);transition:all .8s ease-out;opacity:1;`;
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = `translate(-50%,-50%) translate(${(Math.random()-0.5)*40}px,${(Math.random()-0.5)*40}px) scale(0)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 800);
    };

    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      dot.style.transform = `translate(${x - 12}px, ${y - 12}px)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-6 w-6 rounded-full"
      style={{
        background: "radial-gradient(circle, oklch(0.88 0.11 85 / 0.6), transparent 65%)",
        border: "1px solid oklch(0.78 0.14 80)",
        mixBlendMode: "screen",
      }}
    />
  );
}
