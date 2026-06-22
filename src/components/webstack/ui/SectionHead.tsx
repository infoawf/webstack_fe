import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHead({
  eyebrow,
  title,
  description,
  center = false,
  dark = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mb-8 md:mb-10 max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase",
            dark
              ? "bg-white/5 text-sky-accent border border-white/10"
              : "bg-sky-soft text-sky-accent",
            center && "mx-auto",
          )}
        >
          <span className="size-1.5 rounded-full bg-sky-accent" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-2xl sm:text-3xl md:text-5xl font-semibold leading-[1.08] sm:leading-[1.05] tracking-tight text-balance break-words",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed text-pretty",
            dark ? "text-white/70" : "text-ink-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
