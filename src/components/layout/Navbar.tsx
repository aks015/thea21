"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { brand, nav } from "@/constants/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
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
        <Link href="/" aria-label={brand.name} className="flex items-center gap-2.5">
          <Image
            src="/brand/logo.png"
            alt={brand.name}
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-full object-contain ring-1 ring-fg/10"
          />
          <span className="font-display text-xl font-bold tracking-tight">
            {brand.shortName}
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-fg/5 hover:text-fg",
                    isActive ? "bg-fg/10 text-fg" : "text-fg/65"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-fg px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,77,0,0.15)]"
          >
            Start Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile: theme toggle + menu */}
        <div className="flex items-center gap-1.5 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-fg focus:outline-none"
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
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-fg/5 hover:text-fg",
                      isActive ? "bg-fg/10 text-fg" : "text-fg/80"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-fg px-5 py-3 text-base font-semibold text-bg"
              >
                Start Project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
