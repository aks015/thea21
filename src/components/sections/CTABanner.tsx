"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTABanner() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
            {/* glow */}
            <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-accent-deep/20 blur-[100px]" />
            <div className="relative">
              <h3 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl text-gradient">
                Ready to make your brand{" "}
                <span className="text-gradient-accent">unmissable?</span>
              </h3>
              <p className="mx-auto mt-5 max-w-xl text-base text-fg/55">
                Let&apos;s turn your vision into a website that wins clients on first
                impression.
              </p>
              <div className="mt-9 flex justify-center">
                <MagneticButton href="#contact" variant="primary">
                  Start Your Project <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
