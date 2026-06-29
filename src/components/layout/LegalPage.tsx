import Link from "next/link";
import Image from "next/image";
import { brand } from "@/constants/site";

/**
 * Minimal standalone shell for legal pages (Privacy, Terms).
 * Intentionally does NOT reuse the home Navbar/Footer — those use in-page
 * hash links (#work) that don't exist on these routes.
 */
export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <header className="border-b border-fg/10">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/brand/logo.png"
              alt={brand.name}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-contain ring-1 ring-fg/10"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              {brand.shortName}
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-fg/55 transition-colors hover:text-fg"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-sm text-fg/45">Last updated: {lastUpdated}</p>
        <div className="mt-10 flex flex-col gap-9">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-fg/10">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-fg/45 sm:flex-row">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-fg">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-fg">
              Terms
            </Link>
            <Link href="/" className="hover:text-fg">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/** A numbered legal section: heading + body. */
export function LegalSection({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold text-fg">
        {n}. {title}
      </h2>
      <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-fg/60">
        {children}
      </div>
    </section>
  );
}
