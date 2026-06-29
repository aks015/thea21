"use client";

import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import { tech } from "@/constants/site";

export default function TechStack() {
  const half = Math.ceil(tech.length / 2);
  const rowOne = tech.slice(0, half);
  const rowTwo = tech.slice(half);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-fg/55">
            Our Toolkit
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h3 className="mt-4 font-display text-2xl font-semibold text-fg/80 sm:text-3xl">
            Built with the technologies powering the modern web
          </h3>
        </Reveal>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee items={rowOne} />
        <Marquee items={rowTwo} reverse />
      </div>
    </section>
  );
}
