"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/constants/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LogoMark from "@/components/ui/LogoMark";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled
            ? "glass-strong shadow-2xl shadow-black/10 dark:shadow-black/40"
            : "bg-transparent"
        )}
      >
        <a href="#" aria-label={brand.name} className="flex items-center gap-2">
          <LogoMark className="h-11 w-auto text-fg" />
          <span className="font-display text-xl font-bold tracking-tight">
            {brand.shortName}
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive = active === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors hover:bg-fg/5 hover:text-fg",
                    isActive ? "bg-fg/10 text-fg" : "text-fg/65"
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Start Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-fg"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[4.5rem] z-50 md:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-2xl p-4 shadow-2xl">
              {nav.map((item) => {
                const isActive = active === item.href.replace("#", "");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base transition-colors hover:bg-fg/5 hover:text-fg",
                      isActive ? "bg-fg/10 text-fg" : "text-fg/80"
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-fg px-5 py-3 text-base font-medium text-bg"
              >
                Start Project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
