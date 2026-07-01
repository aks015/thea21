"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectMockup from "@/components/sections/ProjectMockup";
import { projects, liveProjects } from "@/constants/site";

const tabs = ["All", "Web Apps", "Landing Pages", "E-commerce", "Websites"] as const;
type TabType = (typeof tabs)[number];

function shotUrl(url: string) {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;
}

function getProjectCategories(slug: string): TabType[] {
  const cats: TabType[] = [];
  if (slug === "topnotes" || slug === "prepmeet" || slug === "nimbus") {
    cats.push("Web Apps");
  }
  if (slug === "pulsefit") {
    cats.push("Landing Pages");
  }
  if (slug === "wanderly" || slug === "savory") {
    cats.push("E-commerce");
  }
  if (slug === "topnotes" || slug === "prepmeet" || slug === "savory" || slug === "medicare" || slug === "atelier") {
    cats.push("Websites");
  }
  return cats;
}

export default function Work({ limit }: { limit?: number }) {
  const [activeTab, setActiveTab] = useState<TabType>("All");

  // Combine both live projects and concepts into a unified list
  const combinedProjects = [
    ...liveProjects.map((p) => ({ ...p, isLive: true })),
    ...projects.map((p) => ({ ...p, isLive: false })),
  ];

  // Filter based on active tab
  const filteredProjects = combinedProjects.filter((project) => {
    if (activeTab === "All") return true;
    const cats = getProjectCategories(project.slug);
    return cats.includes(activeTab);
  });

  // Apply limit if rendering on home page
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="work" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Our Portfolio"
          title={
            <>
              Case studies that <span className="text-gradient-accent">prove results</span>
            </>
          }
          subtitle="A handpicked collection of our custom applications and industry concept designs, engineered for speed and conversion."
        />

        {/* Tab Filter System */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 border-b border-fg/10 pb-6">
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-fg/45 mr-2">
            <Filter className="h-3.5 w-3.5" /> Filter by:
          </span>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent text-white shadow-lg shadow-accent/25 scale-[1.02]"
                  : "bg-fg/5 text-fg/60 hover:bg-fg/10 hover:text-fg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-14 grid gap-8 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, i) => {
              const coverImg = "cover" in project && project.cover ? project.cover : null;
              const hasUrl = "url" in project && project.url;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  key={project.slug}
                  className="group relative flex flex-col rounded-3xl p-4 glass hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)] transition-all duration-400 ease-out will-change-transform"
                >
                  {/* Browser Mockup / Screenshot Wrapper */}
                  <div className="relative overflow-hidden rounded-2xl border border-fg/10 bg-surface">
                    {/* Top Bar */}
                    <div className="flex items-center gap-1.5 border-b border-fg/5 bg-fg/[0.02] px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-fg/15" />
                      <span className="h-2 w-2 rounded-full bg-fg/15" />
                      <span className="h-2 w-2 rounded-full bg-fg/15" />
                      <span className="ml-3 flex h-5 flex-1 items-center truncate rounded-full bg-fg/[0.03] px-3 text-[10px] text-fg/35 font-mono">
                        {project.isLive && hasUrl
                          ? project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")
                          : `thea21.in/work/${project.slug}`}
                      </span>
                    </div>

                    {/* Thumbnail Viewport */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-fg/[0.03]">
                      {project.isLive && coverImg ? (
                        // Real project screenshot cover
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={coverImg}
                          alt={`${project.title} screenshot built by TheA21`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      ) : (
                        // CSS Mockup for concept showcase
                        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                          <ProjectMockup variant={(project as any).variant || "restaurant"} />
                        </div>
                      )}

                      {/* Live Badge */}
                      {project.isLive && (
                        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-bg/85 px-3 py-1 text-[10px] font-bold text-fg uppercase tracking-wider backdrop-blur-sm shadow-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                          </span>
                          Live
                        </span>
                      )}

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 z-25">
                        <h4 className="font-display text-xl font-bold text-fg mb-2 tracking-tight">
                          {project.title}
                        </h4>
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:scale-[1.05]">
                          View Case Study <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Content */}
                  <div className="flex flex-1 flex-col px-3 py-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-fg">
                          {project.title}
                        </h3>
                        <p className="text-xs font-semibold text-fg/40 uppercase tracking-wider mt-0.5">
                          {project.category}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                        {project.isLive ? "Live Platform" : "Concept Design"}
                      </span>
                    </div>

                    {/* Result Metrics One-Liner */}
                    <p className="mt-3 text-sm font-semibold text-accent leading-relaxed">
                      ★ {project.oneLiner}
                    </p>

                    {/* Blurb */}
                    <p className="mt-2 text-sm leading-relaxed text-fg/55 line-clamp-2">
                      {project.blurb}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-fg/10 bg-fg/5 px-2.5 py-1 text-[10px] font-medium text-fg/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Read Case Study Button Link */}
                    <div className="mt-6 pt-4 border-t border-fg/5">
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-fg/70 hover:text-accent transition-colors duration-200"
                      >
                        Read Case Study →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Home Page limit CTAs */}
        {limit && filteredProjects.length > limit && (
          <div className="mt-14 text-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 rounded-full border border-fg/15 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-fg transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]"
            >
              View All Case Studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
