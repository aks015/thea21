"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { founder, brand } from "@/constants/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Founder() {
  return (
    <section id="founder" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
        {/* Photo / initials */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto"
        >
          {founder.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={founder.photo}
              alt={founder.name}
              className="h-40 w-40 rounded-3xl object-cover ring-1 ring-fg/10 sm:h-48 sm:w-48"
            />
          ) : (
            <div className="flex h-40 w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/25 via-surface to-bg font-display text-5xl font-bold text-accent ring-1 ring-fg/10 sm:h-48 sm:w-48">
              {initials(founder.name)}
            </div>
          )}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Meet the Founder
          </span>

          <Quote className="mt-6 h-8 w-8 text-accent/50" />
          <p className="mt-3 font-display text-xl font-medium leading-[1.5] tracking-tight text-fg/85 sm:text-2xl">
            {founder.bio}
          </p>

          <div className="mt-6">
            <p className="font-display text-lg font-semibold text-fg">
              {founder.name}
            </p>
            <p className="text-sm text-fg/45">
              {founder.role}, {brand.shortName}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
