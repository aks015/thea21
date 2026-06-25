"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { process } from "@/constants/site";

export default function Process() {
  return (
    <section id="process" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How We Work"
          title={<>A process that <span className="text-gradient-accent">just works</span></>}
          subtitle="Clear, collaborative and fast. You always know exactly what's happening and what's next."
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-[1.65rem] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/60 via-fg/10 to-transparent md:block" />

          <div className="flex flex-col gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-start gap-6"
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-fg/10 bg-surface font-display text-lg font-bold text-accent-soft transition-colors group-hover:border-accent group-hover:text-accent">
                  {p.step}
                </div>
                <div className="glass flex-1 rounded-2xl p-6 transition-colors group-hover:border-accent/30">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg/50">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
