"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { packages } from "@/constants/site";

export default function Packages() {
  return (
    <section id="pricing" className="relative px-6 py-28 md:py-36">
      {/* Ambient glow behind the featured plan */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Pricing"
          title={<>Simple, <span className="text-gradient-accent">transparent pricing</span></>}
          subtitle="Clear starting points — every project gets a fixed, upfront quote after a quick discovery call. No hidden fees."
        />

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                pkg.highlighted
                  ? "glass-strong border-accent/40 md:-translate-y-3"
                  : "glass hover:-translate-y-1.5 hover:border-accent/30"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-white shadow-lg shadow-accent/30">
                  <Sparkles className="h-3.5 w-3.5" /> Most Popular
                </span>
              )}

              <h3 className="font-display text-lg font-semibold text-fg">
                {pkg.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/55">
                {pkg.tagline}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="font-display text-4xl font-bold text-gradient-accent">
                  {pkg.price}
                </span>
                <span className="mb-1 text-xs uppercase tracking-wider text-fg/55">
                  {pkg.priceNote}
                </span>
              </div>

              <ul className="mt-7 flex flex-col gap-3.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-fg/70">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <MagneticButton
                  href="#contact"
                  variant={pkg.highlighted ? "primary" : "ghost"}
                  className="w-full"
                >
                  {pkg.cta}
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-fg/55">
          Not sure which fits? <a href="#contact" className="text-accent-soft underline-offset-4 hover:underline">Tell us about your project</a> and we&apos;ll recommend the right one.
        </p>
      </div>
    </section>
  );
}
