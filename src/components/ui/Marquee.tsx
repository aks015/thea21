import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export default function Marquee({ items, reverse, className }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden",
        // edge fade mask
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-4 pr-4",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          "group-hover:[animation-play-state:paused]"
        )}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="glass inline-flex items-center gap-2.5 whitespace-nowrap rounded-full px-5 py-2.5 text-base font-medium text-fg/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
