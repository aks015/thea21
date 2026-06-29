import Link from "next/link";
import Image from "next/image";
import { brand } from "@/constants/site";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg px-6 text-center text-fg">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[160px]" />

      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/brand/logo.png"
          alt={brand.name}
          width={56}
          height={56}
          className="mb-8 h-14 w-14 rounded-full object-contain ring-1 ring-fg/10"
        />

        <p className="font-display text-7xl font-extrabold tracking-tight text-gradient-accent sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-fg/55">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-fg/15 px-6 py-3 text-sm font-medium text-fg/80 transition-colors hover:border-fg/30 hover:text-fg"
          >
            Start a project
          </Link>
        </div>
      </div>
    </main>
  );
}
