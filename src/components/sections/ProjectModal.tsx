"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowUpRight } from "lucide-react";
import ProjectMockup from "@/components/sections/ProjectMockup";
import { prefillContact } from "@/lib/contactPrefill";
import { startLenis, stopLenis } from "@/lib/lenis";
import type { projects } from "@/constants/site";

type Project = (typeof projects)[number];

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    stopLenis(); // pause smooth scroll so the page behind doesn't move
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      startLenis();
    };
  }, [project, onClose]);

  const startProject = () => {
    if (!project) return;
    onClose();
    // let the modal close before scrolling
    setTimeout(
      () =>
        prefillContact(
          `Hi! I'm interested in a ${project.category} website like "${project.title}". Here's a bit about my project: `
        ),
      120
    );
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} concept`}
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
            className="no-scrollbar glass-strong relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-3xl p-4 sm:p-6"
          >
            {/* Close */}
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-fg/10 text-fg/80 transition-colors hover:bg-fg/20 hover:text-fg"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Mockup in a browser frame */}
            <div className="overflow-hidden rounded-2xl border border-fg/10 bg-surface">
              <div className="flex items-center gap-1.5 border-b border-fg/5 bg-fg/[0.02] px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-fg/15" />
                <span className="ml-3 h-4 flex-1 rounded-full bg-fg/[0.03]" />
              </div>
              <div className="relative aspect-[16/10]">
                <ProjectMockup variant={project.variant} />
              </div>
            </div>

            {/* Details */}
            <div className="mt-6 px-1 sm:px-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-bold text-fg sm:text-3xl">
                  {project.title}
                </h3>
                <span className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1 text-xs text-accent-soft">
                  {project.tag}
                </span>
                <span className="text-sm text-fg/45">{project.category}</span>
              </div>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-fg/60">
                {project.blurb}
              </p>

              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg/40">
                    What&apos;s included
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {project.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm text-fg/70"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-fg/40">
                    Built with
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-fg/10 bg-fg/5 px-3 py-1.5 text-xs text-fg/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 border-t border-fg/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-fg/55">
                  Want something like this for your brand?
                </p>
                <button
                  onClick={startProject}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
                >
                  Start a project like this
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
