"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts the numeric part of a stat up from 0 when scrolled into view, keeping
 * any non-numeric prefix/suffix intact (e.g. "<2s", "100%", "7+", "24h").
 * Respects reduced-motion (renders the final value immediately).
 */
export default function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  // Split "<2s" → prefix "<", number "2", suffix "s".
  const match = value.match(/\d+(?:\.\d+)?/);
  const numStr = match?.[0] ?? "";
  const target = numStr ? parseFloat(numStr) : 0;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const prefix = match ? value.slice(0, match.index) : value;
  const suffix = match ? value.slice((match.index ?? 0) + numStr.length) : "";

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Note: depend on stable primitives only. `match` is a fresh array each
    // render, so including it would restart the animation every frame.
    if (!numStr) return;
    if (reduce) {
      setDisplay(target);
      return;
    }
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, target, numStr]);

  // No number to animate — render the original string verbatim.
  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
