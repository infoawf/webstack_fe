"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "../Reveal";
import { WHAT_NOT_SECTION, WHAT_IS_BULLETS } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";
import { IconBox } from "../ui/IconBox";

export function WhatNotSection() {
  return (
    <section id="not" className="ws-section md:ws-section-md bg-surface-muted overflow-hidden">
      <SectionContainer size="6xl">
        <Reveal>
          <SectionHead
            eyebrow={WHAT_NOT_SECTION.eyebrow}
            title="Know Exactly What You're Getting"
            center
          />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid md:grid-cols-2 gap-4 md:gap-0 md:rounded-3xl md:overflow-hidden md:border md:border-ink/10 md:shadow-card min-w-0">
            <div className="rounded-2xl md:rounded-none border-2 border-accent-emerald/30 bg-surface p-5 sm:p-8 md:p-10 min-w-0">
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-accent-emerald-soft text-accent-emerald text-[11px] font-bold uppercase tracking-wider">
                <Check className="size-3.5" strokeWidth={3} />
                What it is
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink leading-tight break-words">
                {WHAT_NOT_SECTION.lead}
              </h3>
              <ul className="mt-6 space-y-3">
                {WHAT_IS_BULLETS.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 min-w-0">
                    <IconBox icon={item.icon} variant="emerald" size="sm" />
                    <span className="text-sm sm:text-[15px] font-semibold text-ink break-words">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl md:rounded-none border-2 border-red-500/20 bg-surface-muted/80 p-5 sm:p-8 md:p-10 md:border-l-0 relative min-w-0">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/40 md:hidden" />
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[11px] font-bold uppercase tracking-wider">
                <X className="size-3.5" strokeWidth={3} />
                What it&apos;s not
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-ink-muted leading-tight break-words">
                We don&apos;t build complex systems
              </h3>
              <ul className="mt-6 space-y-3">
                {WHAT_NOT_SECTION.exclusions.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface/60 border border-ink/10 min-w-0"
                  >
                    <span className="size-8 rounded-lg bg-red-500/10 grid place-items-center shrink-0">
                      <X className="size-4 text-red-500" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-[15px] font-medium text-ink-muted line-through decoration-red-500/40 break-words">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
