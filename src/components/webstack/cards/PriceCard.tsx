"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriceCard({
  price,
  sub,
  benefits,
  className,
  showCta = false,
  ctaHref = "/contact",
  ctaLabel = "Get Your Free Website Mockup",
}: {
  price: string;
  sub: string;
  benefits: string[];
  className?: string;
  showCta?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl border border-ink/10 bg-surface p-5 sm:p-8 md:p-10 shadow-card min-w-0",
        className,
      )}
    >
      <div className="text-center border-b border-ink/10 pb-8 mb-8">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-accent mb-4">
          One-time investment
        </p>
        <p className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-ink tracking-tight">
          {price}
        </p>
        <p className="mt-3 text-base font-medium text-ink-muted">{sub}</p>
      </div>

      <ul className="flex flex-col gap-4">
        {benefits.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="size-6 rounded-full bg-sky-soft grid place-items-center shrink-0 mt-0.5">
              <Check className="size-3.5 text-sky-accent" strokeWidth={3} />
            </span>
            <span className="text-sm sm:text-[15px] font-medium text-ink leading-snug break-words">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {showCta && (
        <div className="mt-10 pt-8 border-t border-ink/10 text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-sky-accent px-8 py-3.5 font-semibold text-white hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </div>
  );
}
