"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
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

export default function Hero() {
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
  const yText = useTransform(scrollYProgress, [0, 1], [0, 80]);
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
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden bg-grid px-6 pt-24 pb-12 z-10"
    >
      {/* Background Interactive Canvas */}
      <HeroCanvas />

      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <motion.div
          style={{ x: bx, y: by }}
          className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[150px]"
        />
        <div className="animate-pulse-slow absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-accent-deep/10 blur-[130px]" />
        <div className="animate-pulse-slow absolute -right-10 bottom-1/4 h-80 w-80 rounded-full bg-accent-soft/10 blur-[130px]" />
      </div>

      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgb(var(--bg))_90%)] z-0" />

      <motion.div
        style={{ y: yText, opacity }}
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex max-w-4xl flex-col items-center text-center mt-6"
      >
        <motion.span
          variants={item}
          className="mb-6 inline-flex max-w-[95vw] items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-center text-[10px] font-bold tracking-wider text-accent uppercase backdrop-blur-sm sm:mb-8 sm:text-xs"
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          {hero.badge}
        </motion.span>

        {/* 100% crawlable, responsive 2-line heading with sparse orange accent */}
        <motion.h1 
          variants={item}
          className="font-display text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] max-w-3xl text-fg"
        >
          We Build Premium Digital <span className="text-gradient-accent">Experiences.</span>
        </motion.h1>

        {/* Static, high-converting copy - no typing layout shift */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-sm leading-relaxed text-fg/55 sm:text-base md:text-lg font-medium"
        >
          {hero.subtitle}
        </motion.p>

        {/* Action triggers clearly visible above the fold */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row w-full sm:w-auto"
        >
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)] transition-shadow duration-300">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="/work" variant="ghost" className="w-full sm:w-auto hover:bg-accent/10 hover:text-accent transition-colors duration-300">
            View our work <ArrowDown className="h-3.5 w-3.5" />
          </MagneticButton>
        </motion.div>

        {/* Trust building metrics row */}
        <motion.div
          variants={item}
          className="mt-12 w-full max-w-2xl border-t border-fg/10 pt-6 z-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-around gap-y-4 gap-x-6 text-center text-sm font-bold uppercase tracking-wider text-fg/60">
            <div>
              <span className="block text-2xl font-black text-accent leading-none">15+</span>
              <span className="text-[10px] text-fg/40 tracking-widest mt-1 block">Projects Shipped</span>
            </div>
            <div className="h-8 w-px bg-fg/10 hidden sm:block" />
            <div>
              <span className="block text-2xl font-black text-accent leading-none">2+</span>
              <span className="text-[10px] text-fg/40 tracking-widest mt-1 block">Startups Built</span>
            </div>
            <div className="h-8 w-px bg-fg/10 hidden sm:block" />
            <div>
              <span className="block text-2xl font-black text-accent leading-none">100%</span>
              <span className="text-[10px] text-fg/40 tracking-widest mt-1 block">Client Satisfaction</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
