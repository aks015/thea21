"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/constants/site";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = (Icons[service.icon as keyof typeof Icons] ||
    Icons.Sparkles) as React.ComponentType<{ className?: string }>;

  // 3D tilt on hover
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="group glass relative h-full overflow-hidden rounded-3xl p-7 transition-[transform,border-color] duration-200 ease-out will-change-transform hover:border-accent/40"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow follows cursor */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at var(--mx) var(--my), rgba(59,130,246,0.12), transparent 60%)",
          }}
        />
        <div className="relative z-10">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-fg/10 bg-gradient-to-br from-fg/10 to-transparent text-accent-soft transition-colors group-hover:text-accent">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-xl font-semibold text-fg">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-fg/50">
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What We Do"
          title={<>Services built to <span className="text-gradient-accent">scale you up</span></>}
          subtitle="End-to-end design and development — everything you need to launch and grow online, under one roof."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
