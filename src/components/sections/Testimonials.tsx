"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/constants/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  // Auto-hide until there are real testimonials — never show fake social proof.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Words"
          title={
            <>
              What our clients <span className="text-gradient-accent">say</span>
            </>
          }
          subtitle="Real feedback from the people we've built for."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass flex flex-col gap-5 rounded-3xl p-7"
            >
              <Quote className="h-7 w-7 text-accent/60" />
              <blockquote className="text-[15px] leading-relaxed text-fg/75">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-fg/10"
                  />
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                    {initials(t.name)}
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-fg">{t.name}</span>
                  <span className="text-xs text-fg/60">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
