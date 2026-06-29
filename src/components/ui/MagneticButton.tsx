"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.25, y: y * 0.25 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors overflow-hidden";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:bg-fg/90"
      : "glass text-fg hover:bg-fg/10";

  const inner = (
    <motion.span
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.3 }}
      className="relative z-10 inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  const shineOverlay =
    variant === "primary" ? (
      <span className="shine pointer-events-none absolute inset-0 -translate-x-full bg-[length:200%_100%] opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />
    ) : null;

  const common = cn(base, styles, className);

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
        className={common}
      >
        {shineOverlay}
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      className={cn(common, disabled && "pointer-events-none opacity-60")}
    >
      {shineOverlay}
      {inner}
    </motion.button>
  );
}
