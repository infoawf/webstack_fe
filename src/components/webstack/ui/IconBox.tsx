import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  sky: "bg-sky-soft text-sky-accent",
  emerald: "bg-accent-emerald-soft text-accent-emerald",
  red: "bg-red-500/10 text-red-500",
  violet: "bg-accent-violet-soft text-accent-violet",
  ink: "bg-ink-deep/10 text-ink",
  white: "bg-white/10 text-white",
};

const sizes = {
  sm: "size-8 rounded-lg [&_svg]:size-3.5",
  md: "size-10 rounded-xl [&_svg]:size-4",
  lg: "size-12 rounded-2xl [&_svg]:size-5",
};

export function IconBox({
  icon: Icon,
  variant = "sky",
  size = "md",
  className,
}: {
  icon: LucideIcon;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <span
      className={cn("grid shrink-0 place-items-center", variants[variant], sizes[size], className)}
    >
      <Icon strokeWidth={2.25} />
    </span>
  );
}
