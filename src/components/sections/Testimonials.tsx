"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/constants/site";

const partners = [
  "TopNotes", "PrepMeet", "Savory Labs", "Figma", "Stripe", "Vercel", 
  "Next.js", "React", "TailwindCSS", "AWS", "MongoDB", "PostgreSQL"
];

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
    <section id="testimonials" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Client Reviews"
          title={
            <>
              What our clients <span className="text-gradient-accent">say about us</span>
            </>
          }
          subtitle="Real, verified feedback from the founders and startups we've built applications for."
        />

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass flex flex-col gap-6 rounded-3xl p-8 hover:border-accent/40 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(255,77,0,0.05)] transition-all duration-300"
            >
              <div className="flex justify-between items-center">
                <Quote className="h-7 w-7 text-accent/50" />
                
                {/* 5-Star Ratings */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>

              <blockquote className="text-[15px] leading-relaxed text-fg/75 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-auto flex items-center gap-3.5 pt-4 border-t border-fg/5">
                {t.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover ring-1 ring-fg/10"
                  />
                ) : (
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {initials(t.name)}
                  </span>
                )}
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-fg">{t.name}</span>
                  <span className="text-xs font-semibold text-fg/55">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Trusted By logo marquee strip */}
        <div className="mt-28 border-t border-fg/10 pt-16">
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-fg/40 mb-10">
            Trusted by innovators & integrations worldwide
          </p>

          <div className="relative w-full overflow-hidden py-4">
            {/* Soft gradient masks to fade the edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent z-10" />

            <div className="flex w-max animate-marquee gap-16 text-center select-none">
              {/* Render twice for seamless loop */}
              {partners.map((p, idx) => (
                <span
                  key={idx}
                  className="font-display text-lg sm:text-2xl font-bold tracking-tight text-fg/30 hover:text-accent transition-colors duration-300"
                >
                  {p}
                </span>
              ))}
              {partners.map((p, idx) => (
                <span
                  key={`dup-${idx}`}
                  className="font-display text-lg sm:text-2xl font-bold tracking-tight text-fg/30 hover:text-accent transition-colors duration-300"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
