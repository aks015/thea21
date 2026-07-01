"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, ChevronDown, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { hero } from "@/constants/site";

/** Canvas-based interactive connection particle background */
function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }> = [];

    // Scale number of particles based on screen width
    const numParticles = Math.min(Math.floor(width / 22), 70);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1,
      });
    }

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isDark = document.documentElement.classList.contains("dark");
      // Use blue theme color: rgb(59, 130, 246)
      const baseColor = "59, 130, 246";

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, ${isDark ? 0.35 : 0.55})`;
        ctx.fill();
      });

      // Connect close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${baseColor}, ${(1 - dist / 130) * 0.16})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-80 z-0" />;
}

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
        deleting ? 40 : 80
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(hero.rotating);
  const ref = useRef<HTMLDivElement>(null);

  // Mouse-follow background glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const bx = useSpring(mx, { stiffness: 40, damping: 22 });
  const by = useSpring(my, { stiffness: 40, damping: 22 });

  // Parallax scrolling layout effects
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
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
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col items-center justify-start overflow-hidden bg-grid px-6 pt-32 pb-20 [@media(min-height:800px)]:justify-center [@media(min-height:800px)]:pt-20"
    >
      {/* Background Interactive Canvas */}
      <HeroCanvas />

      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <motion.div
          style={{ x: bx, y: by }}
          className="absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[150px]"
        />
        <div className="animate-pulse-slow absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-accent-deep/10 blur-[130px]" />
        <div className="animate-pulse-slow absolute -right-10 bottom-1/4 h-96 w-96 rounded-full bg-accent-soft/10 blur-[130px]" />
      </div>

      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgb(var(--bg))_90%)] z-0" />

      <motion.div
        style={{ y: yText, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          className="mb-8 inline-flex max-w-[95vw] items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-center text-[11px] font-semibold tracking-wider text-accent uppercase backdrop-blur-md sm:mb-10 sm:text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent animate-spin-slow" />
          {hero.badge}
        </motion.span>

        <h1 className="font-display text-[2.75rem] font-black leading-[0.92] tracking-tight sm:text-7xl md:text-[6.5rem] lg:text-[7.5rem]">
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
          className="mt-8 flex h-10 items-center justify-center font-display text-2xl font-bold text-fg/80 sm:text-4xl"
        >
          <span className="text-fg/55">We craft&nbsp;</span>
          <span className="inline-flex min-w-[13ch] items-center justify-start">
            <span className="text-gradient-accent">{typed}</span>
            <span className="ml-0.5 inline-block h-8 w-[3px] animate-pulse bg-accent sm:h-9" />
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-2xl text-base leading-relaxed text-fg/55 sm:text-xl font-normal"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs clearly visible above the fold */}
        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-5 sm:flex-row w-full sm:w-auto"
        >
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] transition-shadow duration-300">
            Book a Free Call <ArrowUpRight className="h-4.5 w-4.5" />
          </MagneticButton>
          <MagneticButton href="/work" variant="ghost" className="w-full sm:w-auto hover:bg-accent/10 hover:text-accent transition-colors duration-300">
            Explore Case Studies <ArrowDown className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-fg/45"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
