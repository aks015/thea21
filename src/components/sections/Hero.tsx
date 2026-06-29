"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { hero } from "@/constants/site";

/** Typewriter that cycles through phrases. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.substring(0, prev.length - 1)
              : current.substring(0, prev.length + 1)
          );
        },
        deleting ? 50 : 90
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(hero.rotating);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse-follow blob
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useSpring(mx, { stiffness: 50, damping: 20 });
  const by = useSpring(my, { stiffness: 50, damping: 20 });

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-grid px-6 pt-28 pb-16 [@media(min-height:800px)]:justify-center [@media(min-height:800px)]:pt-16"
    >
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ x: bx, y: by }}
          className="absolute left-1/2 top-1/3 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px]"
        />
        <div className="animate-pulse-slow absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-accent-deep/20 blur-[120px]" />
        <div className="animate-pulse-slow absolute -right-10 bottom-1/4 h-80 w-80 rounded-full bg-accent-soft/20 blur-[120px]" />
      </div>

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgb(var(--bg))_85%)]" />

      <motion.div
        style={{ y: yText, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-4xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex max-w-[90vw] items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-2 text-center text-[11px] font-medium tracking-wide text-fg/70 backdrop-blur-md sm:mb-8 sm:text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {hero.badge}
        </motion.span>

        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl md:text-[5.5rem]">
          {hero.lines.map((line, i) => (
            <motion.span key={i} variants={item} className="block">
              {i === hero.lines.length - 1 ? (
                <span className="text-gradient-accent">{line}</span>
              ) : (
                <span className="text-gradient">{line}</span>
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          variants={item}
          className="mt-7 flex h-9 items-center justify-center font-display text-2xl font-medium text-fg/80 sm:text-3xl"
        >
          <span className="text-fg/40">We craft&nbsp;</span>
          <span className="text-gradient-accent">{typed}</span>
          <span className="ml-0.5 inline-block h-7 w-[3px] animate-pulse bg-accent sm:h-8" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-base leading-relaxed text-fg/55 sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#contact" variant="primary">
            Start Your Project <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#work" variant="ghost">
            <ArrowDown className="h-4 w-4" /> View Our Work
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
