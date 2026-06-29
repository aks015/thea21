import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";
import { brand, nav } from "@/constants/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-fg/10 px-6 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
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
              {brand.tagline} We turn ideas into fast, beautiful, conversion-ready
              digital experiences.
            </p>
            {/* Only render socials that actually have a URL set in site.ts */}
            {(() => {
              const links = [
                { icon: Facebook, href: brand.socials.facebook },
                { icon: Instagram, href: brand.socials.instagram },
                { icon: Linkedin, href: brand.socials.linkedin },
                { icon: Twitter, href: brand.socials.twitter },
              ].filter((s) => s.href);
              if (links.length === 0) return null;
              return (
                <div className="flex gap-3">
                  {links.map(({ icon: Icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-fg/10 text-fg/60 transition-all hover:border-accent hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              );
            })()}
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg/40">
              Navigate
            </h4>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-fg/60 transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-fg/40">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-fg/60">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-accent" />
                <a href={`mailto:${brand.email}`} className="hover:text-fg">
                  {brand.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-accent" />
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-fg">
                  {brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-accent" />
                {brand.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-fg/10 pt-6 text-sm text-fg/40 sm:flex-row">
          <p>
            © {2026} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-fg">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-fg">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
