"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyUs } from "@/constants/site";

export default function WhyUs() {
  return (
    <section className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The difference is in the <span className="text-gradient-accent">details</span></>}
          subtitle="We don't just build websites — we build advantages. Here's what you get with every project."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ||
              Icons.Check) as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-start gap-4 rounded-2xl border border-fg/5 p-6 transition-colors hover:border-accent/30 hover:bg-fg/[0.02]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg/50">
                    {item.desc}
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
