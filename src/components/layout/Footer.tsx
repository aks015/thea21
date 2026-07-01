"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { brand, nav } from "@/constants/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubsubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubsubscribed(true);
    setEmail("");
    setTimeout(() => setSubsubscribed(false), 3000);
  };

  return (
    <footer className="relative border-t border-fg/10 bg-surface/10 px-6 pb-12 pt-24 z-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1.5fr]">
          
          {/* Brand details */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <Image
                src="/brand/logo.png"
                alt={brand.name}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-contain ring-1 ring-fg/10"
              />
              <span className="font-display text-2xl font-bold tracking-tight">
                {brand.shortName}
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-fg/50">
              {brand.tagline} We engineer premium digital platforms, conversion-optimized landing pages, and scalable web applications.
            </p>
            {/* Social profiles */}
            {(() => {
              const links = [
                { icon: Facebook, href: brand.socials.facebook, label: "Facebook" },
                { icon: Instagram, href: brand.socials.instagram, label: "Instagram" },
                { icon: Linkedin, href: brand.socials.linkedin, label: "Linkedin" },
                { icon: Twitter, href: brand.socials.twitter, label: "Twitter" },
              ].filter((s) => s.href);
              if (links.length === 0) return null;
              return (
                <div className="flex gap-3">
                  {links.map(({ icon: Icon, href, label }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      aria-label={label}
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg/50 transition-all hover:border-accent hover:text-accent hover:scale-105"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-fg/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg/60 transition-colors hover:text-accent font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localized NAP Contact */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-fg/40">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-fg/60">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <a href={`mailto:${brand.email}`} className="hover:text-accent transition-colors font-medium break-all">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <a href={`tel:${brand.phoneRaw}`} className="hover:text-accent transition-colors font-medium">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5 leading-relaxed font-medium">
                <MapPin className="h-4.5 w-4.5 text-accent shrink-0 mt-0.5" />
                <span>
                  {brand.address}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-fg/40">
              Newsletter
            </h4>
            <p className="text-sm text-fg/50 leading-relaxed mb-4">
              Subscribe to get updates on web standards, development tips, and startup pricing.
            </p>
            {subscribed ? (
              <p className="text-xs font-bold text-accent">✓ Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-fg/10 bg-fg/[0.03] py-3 pl-4 pr-12 text-sm text-fg placeholder:text-fg/30 outline-none focus:border-accent/60 focus:bg-fg/[0.05] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-lg bg-fg text-bg hover:bg-accent hover:text-white transition-colors duration-200"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Legal links and copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-fg/10 pt-8 text-sm text-fg/40 sm:flex-row">
          <p className="font-medium">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/privacy" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
