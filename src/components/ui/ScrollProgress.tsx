"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thin accent bar fixed to the very top of the viewport that fills as the page
 * scrolls. Subtle premium touch; reinforces the brand accent.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent-soft via-accent to-accent-deep"
    />
  );
}
