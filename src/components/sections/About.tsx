"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/constants/site";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Who We Are
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-8 max-w-4xl font-display text-3xl font-semibold leading-[1.3] tracking-tight sm:text-4xl md:text-[2.75rem]">
            <span className="text-fg">We help startups and businesses build </span>
            <span className="text-gradient-accent">modern, high-performing websites</span>
            <span className="text-fg"> that turn visitors into </span>
            <span className="text-gradient-accent">loyal customers.</span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-fg/50 sm:text-lg">
            We&apos;re a design-driven studio obsessed with detail, speed and
            results. Every pixel, animation and line of code is engineered to make
            your brand look premium and perform flawlessly.
          </p>
        </Reveal>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-6"
            >
              <div className="font-display text-3xl font-bold text-gradient-accent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-fg/45">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
