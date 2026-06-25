"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectMockup from "@/components/sections/ProjectMockup";
import ProjectModal from "@/components/sections/ProjectModal";
import { projects } from "@/constants/site";

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(project)}
      className="group relative cursor-pointer"
      data-cursor="hover"
    >
      <div className="glass overflow-hidden rounded-3xl p-3 transition-colors duration-300 group-hover:border-accent/30">
        {/* Browser mockup */}
        <div className="relative overflow-hidden rounded-2xl border border-fg/5 bg-surface">
          {/* Top bar */}
          <div className="flex items-center gap-1.5 border-b border-fg/5 bg-fg/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="ml-3 h-4 flex-1 rounded-full bg-fg/[0.03]" />
          </div>
          {/* "Screenshot" — realistic CSS mockup */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]">
              <ProjectMockup variant={project.variant} />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg">
                View Concept <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between px-3 py-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-fg">
              {project.title}
            </h3>
            <p className="text-sm text-fg/45">{project.category}</p>
          </div>
          <span className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs text-accent-soft">
            {project.tag}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Concept Showcase"
          title={<>Designs that <span className="text-gradient-accent">speak for themselves</span></>}
          subtitle="A showcase of concept designs across industries — the calibre of premium, conversion-focused work we craft for our clients."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
