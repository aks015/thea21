import Reveal from "./Reveal";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        center && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl text-gradient">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-fg/55 sm:text-lg",
              center && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
