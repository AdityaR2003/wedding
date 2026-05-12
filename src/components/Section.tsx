import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id,
  accent = "oklch(0.30 0.13 18)",
  children,
  className = "",
}: {
  id: string;
  accent?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-4 py-16 md:px-8 md:py-32 ${className}`}
      style={{
        background: `radial-gradient(ellipse at top, ${accent} 0%, oklch(0.16 0.07 22) 70%, oklch(0.10 0.05 20) 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
}
