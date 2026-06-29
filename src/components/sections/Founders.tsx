"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { founders } from "@/constants/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function FounderPhoto({ src, name }: { src?: string; name: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-surface to-bg font-display text-3xl font-bold text-accent">
        {initials(name)}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      loading="lazy"
      onError={() => setError(true)}
      className="h-24 w-24 rounded-full object-cover"
    />
  );
}

export default function Founders() {
  if (founders.length === 0) return null;

  return (
    <section id="founders" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Meet the Team"
          title={
            <>
              The people behind <span className="text-gradient-accent">TheA21</span>
            </>
          }
          subtitle="A small, hands-on founding team that designs, builds and runs everything end-to-end."
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30"
            >
              {/* Ambient accent glow on hover */}
              <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-accent/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Photo with gradient ring */}
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-full bg-accent/25 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative rounded-full bg-gradient-to-br from-accent to-accent-deep p-[3px] transition-transform duration-300 group-hover:scale-105">
                  <div className="rounded-full bg-surface p-[3px]">
                    <FounderPhoto src={f.photo} name={f.name} />
                  </div>
                </div>
              </div>

              {/* Name + role */}
              <div className="relative flex flex-col items-center gap-2">
                <h3 className="font-display text-lg font-semibold text-fg">
                  {f.name}
                </h3>
                <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                  {f.role}
                </span>
              </div>

              {/* Bio */}
              <p className="relative text-sm leading-relaxed text-fg/55">
                {f.bio}
              </p>

              {/* LinkedIn */}
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="relative mt-auto flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg/55 transition-all duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
