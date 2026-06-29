"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "span" | "li" | "h2" | "p";
};

/** Fade + slide-up on scroll into view. The workhorse reveal used across sections. */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: Props) {
  const reduce = useReducedMotion();

  // Reduced-motion (or no JS-driven animation desired): render fully visible
  // immediately — no transform, no fade, and never stuck at opacity:0.
  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
