"use client";

import { BadgeCheck, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { WHAT_YOU_GET_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";
import { IconBox } from "../ui/IconBox";

export function WhatYouGetSection() {
  const { featured } = WHAT_YOU_GET_SECTION;

  return (
    <section id="what-you-get" className="ws-section md:ws-section-md overflow-hidden">
      <SectionContainer>
        <Reveal>
          <SectionHead eyebrow={WHAT_YOU_GET_SECTION.eyebrow} title={WHAT_YOU_GET_SECTION.title} />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mb-8 sm:mb-10 rounded-2xl border-2 border-sky-accent/40 bg-sky-soft/30 p-4 sm:p-6 md:p-8 shadow-card min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 min-w-0">
              <IconBox icon={featured.icon} variant="sky" size="lg" />
              <div className="flex-1 min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-sky-accent mb-3">
                  <Sparkles className="size-3 shrink-0" />
                  Included free
                </span>
                <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-ink leading-snug break-words">
                  {featured.title}
                </p>
                <p className="mt-2 text-sm md:text-base text-ink-muted">{featured.description}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-2 min-w-0">
          {WHAT_YOU_GET_SECTION.groups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.06}>
              <div className="h-full rounded-2xl border border-ink/10 bg-surface p-4 sm:p-6 shadow-soft min-w-0">
                <div className="flex items-center justify-between border-b border-ink/10 pb-3 gap-2 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-muted truncate">
                    {group.label}
                  </span>
                  <span className="font-mono text-[10px] text-ink-muted shrink-0">
                    {String(group.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-4 divide-y divide-ink/10 min-w-0">
                  {group.items.map((item) => (
                    <li
                      key={item.title}
                      className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 min-w-0"
                    >
                      <IconBox icon={item.icon} variant="sky" size="sm" />
                      <p className="text-sm font-semibold text-ink leading-snug pt-1 min-w-0 break-words">
                        {item.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-6 sm:mt-8 rounded-2xl border border-ink/10 bg-surface-muted p-4 sm:p-6 shadow-soft min-w-0">
            <div className="flex items-start gap-3 min-w-0">
              <BadgeCheck className="size-5 text-sky-accent shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base font-semibold text-ink italic break-words">
                {WHAT_YOU_GET_SECTION.disclaimer}
              </p>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
