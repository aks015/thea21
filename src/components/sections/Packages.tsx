"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { packages } from "@/constants/site";

interface ComparisonRow {
  feature: string;
  starter: string | boolean;
  growth: string | boolean;
  custom: string | boolean;
}

const comparisonData: ComparisonRow[] = [
  { feature: "Number of Pages", starter: "1 Page", growth: "Up to 6 Pages", custom: "Unlimited" },
  { feature: "Visual Identity & Design", starter: "Clean Template", growth: "Premium Custom", custom: "Bespoke Design System" },
  { feature: "Mobile Responsive Layout", starter: true, growth: true, custom: true },
  { feature: "Animations & Motion", starter: "Basic Fade-in", growth: "Custom Micro-interactions", custom: "Rich WebGL/GSAP Experience" },
  { feature: "SEO Optimization", starter: "On-page Basic", growth: "Full Metadata & JSON-LD", custom: "Enterprise Dynamic SEO Strategy" },
  { feature: "Analytics & Monitoring", starter: "Google Analytics", growth: "GA4 + Event Tracking", custom: "Custom Events & Heatmaps" },
  { feature: "CMS / Content Updates", starter: "Code Edit", growth: "Headless CMS Integration", custom: "Custom Database Admin Panel" },
  { feature: "Delivery Timeframe", starter: "3–5 Days", growth: "1–2 Weeks", custom: "Milestone-based" },
  { feature: "Post-launch Support", starter: "7 Days", growth: "30 Days (Priority)", custom: "24/7 Custom SLA Support" },
  { feature: "Ownership of Codebase", starter: true, growth: true, custom: true },
];

export default function Packages() {
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  return (
    <section id="pricing" className="relative px-6 py-32 md:py-40">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[150px] z-0" />

      <div className="relative mx-auto max-w-6xl z-10">
        <SectionHeading
          eyebrow="Pricing & Packages"
          title={
            <>
              Simple, <span className="text-gradient-accent">transparent pricing</span>
            </>
          }
          subtitle="Fixed upfront quotes with zero surprises. Choose a starter tier or contact us for a customized engineering proposal."
        />

        {/* View Mode Toggle Switch */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-fg/5 p-1.5 border border-fg/10">
            <button
              onClick={() => setViewMode("cards")}
              className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                viewMode === "cards"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-fg/60 hover:text-fg"
              }`}
            >
              Card Packages
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                viewMode === "table"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-fg/60 hover:text-fg"
              }`}
            >
              Compare Features
            </button>
          </div>
        </div>

        {/* Dynamic View Display */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            {viewMode === "cards" ? (
              <motion.div
                key="cards"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid items-stretch gap-8 md:grid-cols-3"
              >
                {packages.map((pkg, i) => (
                  <div
                    key={pkg.name}
                    className={`group relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                      pkg.highlighted
                        ? "glass-strong border-accent/60 md:-translate-y-4 shadow-[0_20px_50px_rgba(59,130,246,0.15)] ring-1 ring-accent/20"
                        : "glass hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
                    }`}
                  >
                    {pkg.highlighted && (
                      <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-accent/40">
                        <Sparkles className="h-3.5 w-3.5 text-white animate-pulse" /> Recommended
                      </span>
                    )}

                    <h3 className="font-display text-xl font-bold text-fg">
                      {pkg.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-fg/55">
                      {pkg.tagline}
                    </p>

                    <div className="mt-6 flex items-end gap-2">
                      <span className="font-display text-4xl font-black text-gradient-accent">
                        {pkg.price}
                      </span>
                      <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-fg/45">
                        {pkg.priceNote}
                      </span>
                    </div>

                    <ul className="mt-8 flex flex-col gap-4">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-fg/70">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                            <Check className="h-3 w-3" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-10">
                      <MagneticButton
                        href="/contact"
                        variant={pkg.highlighted ? "primary" : "ghost"}
                        className="w-full shadow-sm hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]"
                      >
                        {pkg.cta}
                      </MagneticButton>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="table"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="overflow-x-auto rounded-3xl border border-fg/10 glass shadow-2xl"
              >
                <table className="w-full min-w-[700px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-fg/10 bg-fg/[0.02]">
                      <th className="p-6 font-semibold text-fg/50 uppercase tracking-wider text-xs">Features</th>
                      <th className="p-6">
                        <span className="block font-display font-bold text-base text-fg">Starter</span>
                        <span className="block text-xs font-semibold text-accent mt-0.5">₹15,000 starting</span>
                      </th>
                      <th className="p-6 bg-accent/5">
                        <span className="flex items-center gap-1.5 font-display font-bold text-base text-fg">
                          Growth <Sparkles className="h-3.5 w-3.5 text-accent" />
                        </span>
                        <span className="block text-xs font-bold text-accent mt-0.5">₹40,000 starting</span>
                      </th>
                      <th className="p-6">
                        <span className="block font-display font-bold text-base text-fg">Custom Project</span>
                        <span className="block text-xs font-semibold text-accent mt-0.5">Let&apos;s talk scope</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-fg/10">
                    {comparisonData.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-fg/[0.01] transition-colors"
                      >
                        <td className="p-5 font-semibold text-fg/75">{row.feature}</td>
                        
                        {/* Starter column */}
                        <td className="p-5 text-fg/60">
                          {typeof row.starter === "boolean" ? (
                            row.starter ? (
                              <Check className="h-5 w-5 text-accent" />
                            ) : (
                              <X className="h-5 w-5 text-fg/20" />
                            )
                          ) : (
                            row.starter
                          )}
                        </td>

                        {/* Growth column (highlighted) */}
                        <td className="p-5 text-fg bg-accent/[0.02] font-medium border-x border-accent/15">
                          {typeof row.growth === "boolean" ? (
                            row.growth ? (
                              <Check className="h-5 w-5 text-accent" />
                            ) : (
                              <X className="h-5 w-5 text-fg/20" />
                            )
                          ) : (
                            row.growth
                          )}
                        </td>

                        {/* Custom column */}
                        <td className="p-5 text-fg/60">
                          {typeof row.custom === "boolean" ? (
                            row.custom ? (
                              <Check className="h-5 w-5 text-accent" />
                            ) : (
                              <X className="h-5 w-5 text-fg/20" />
                            )
                          ) : (
                            row.custom
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-12 text-center text-sm text-fg/55">
          Not sure which package fits your business?{" "}
          <a href="/contact" className="text-accent underline underline-offset-4 hover:text-accent-soft">
            Schedule a free project discovery session
          </a>{" "}
          with our tech team and get a detailed proposal.
        </p>
      </div>
    </section>
  );
}
