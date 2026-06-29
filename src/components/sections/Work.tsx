"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectMockup from "@/components/sections/ProjectMockup";
import ProjectModal from "@/components/sections/ProjectModal";
import { projects, liveProjects } from "@/constants/site";

type Project = (typeof projects)[number];
type LiveProject = (typeof liveProjects)[number];

// Auto-generated live screenshot of the real site (no API key / no auth).
// WordPress mShots is free, has no daily cap and is CDN-cached. The very first
// request may return a "generating…" placeholder, then the real shot once ready.
function shotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;
}

function LiveProjectCard({
  project,
  index,
}: {
  project: LiveProject;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block cursor-pointer"    >
      <div className="glass overflow-hidden rounded-3xl p-3 transition-colors duration-300 group-hover:border-accent/30">
        {/* Browser mockup */}
        <div className="relative overflow-hidden rounded-2xl border border-fg/5 bg-surface">
          {/* Top bar */}
          <div className="flex items-center gap-1.5 border-b border-fg/5 bg-fg/[0.02] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
            <span className="ml-3 flex h-5 flex-1 items-center truncate rounded-full bg-fg/[0.03] px-3 text-[11px] text-fg/35">
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </div>

          {/* Real, live screenshot */}
          <div className="relative aspect-[16/10] overflow-hidden bg-fg/[0.03]">
            {imgError ? (
              // Graceful fallback — never show a broken/error image.
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-accent/15 via-surface to-bg">
                <span className="font-display text-2xl font-bold text-fg/85">
                  {project.title}
                </span>
                <span className="text-xs text-fg/45">Live preview · click to open</span>
              </div>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={shotUrl(project.url)}
                alt={`${project.title} — live website screenshot`}
                loading="lazy"
                onError={() => setImgError(true)}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
            )}

            {/* Live badge */}
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg/70 px-2.5 py-1 text-[11px] font-medium text-fg backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Live
            </span>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg">
                Visit Live Site <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="px-3 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold text-fg">
                {project.title}
              </h3>
              <p className="text-sm text-fg/45">{project.category}</p>
            </div>
            <span className="shrink-0 rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs text-accent-soft">
              {project.tag}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-fg/55">{project.blurb}</p>

          {/* Mini case study — honest, qualitative */}
          <dl className="mt-4 flex flex-col gap-3 border-t border-fg/5 pt-4">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-fg/40">
                Challenge
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-fg/55">
                {project.challenge}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-accent-soft">
                Solution
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-fg/55">
                {project.solution}
              </dd>
            </div>
          </dl>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-fg/10 bg-fg/5 px-2.5 py-1 text-[11px] text-fg/60"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

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
      className="group relative cursor-pointer"    >
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
        {/* Real, live, shipped work — leads the section */}
        <SectionHeading
          eyebrow="Real, Live Work"
          title={<>Shipped products, <span className="text-gradient-accent">live in the wild</span></>}
          subtitle="Real applications we've built and deployed — go ahead, click in and explore the actual product."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {liveProjects.map((project, i) => (
            <LiveProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* Concept showcase */}
        <div className="mt-28 md:mt-36">
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
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
