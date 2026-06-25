"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { promises } from "@/constants/site";

export default function Promise() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      {/* ambient accent */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Our Promise"
          title={<>Why clients <span className="text-gradient-accent">trust us</span></>}
          subtitle="No fine print, no surprises. These are the commitments we make to every single client."
        />

        <div className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {promises.map((p, i) => {
            const Icon = (Icons[p.icon as keyof typeof Icons] ||
              Icons.Check) as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 border-b border-fg/8 pb-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="pt-0.5">
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg/55">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
