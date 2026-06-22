"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { Reveal } from "../Reveal";
import { CTA_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";

export function CTASection() {
  return (
    <section id="cta" className="ws-section md:ws-section-md overflow-hidden">
      <SectionContainer size="6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-ink-deep text-white px-4 py-14 sm:px-6 sm:py-20 md:px-14 md:py-28 text-center min-w-0">
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 mx-auto h-full w-full opacity-[0.08]"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="120" y="60" width="560" height="280" rx="16" />
              <line x1="120" y1="100" x2="680" y2="100" />
              <rect x="150" y="130" width="180" height="20" rx="3" />
              <rect x="150" y="160" width="120" height="10" rx="2" />
              <rect x="150" y="200" width="80" height="22" rx="11" />
              <rect x="380" y="130" width="280" height="180" rx="8" />
              <rect x="150" y="250" width="120" height="60" rx="6" />
              <rect x="290" y="250" width="80" height="60" rx="6" />
            </svg>

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.sky.500/0.25),transparent_60%)]" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 size-[28rem] rounded-full bg-sky-accent/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl min-w-0 px-1">
              <SectionHead eyebrow={CTA_SECTION.eyebrow} title={CTA_SECTION.title} dark center />
              <Link
                href="/contact"
                className="mt-8 sm:mt-10 inline-flex w-full sm:w-auto max-w-full items-center justify-center gap-2 rounded-full bg-sky-accent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-sky-600 transition-colors shadow-[0_18px_50px_-12px_color-mix(in_oklab,var(--sky-accent)_70%,transparent)]"
              >
                <Flame className="size-4 shrink-0" />
                <span className="truncate">{CTA_SECTION.button}</span>
              </Link>
              <p className="mt-5 sm:mt-6 text-sm text-white/60">{CTA_SECTION.subtext}</p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
