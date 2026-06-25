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
            className="flex items-center gap-4 whitespace-nowrap text-lg font-medium text-fg/40"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
