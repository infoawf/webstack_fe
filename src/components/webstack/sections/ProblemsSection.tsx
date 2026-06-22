"use client";

import { Reveal } from "../Reveal";
import { PROBLEMS_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";
import { ProblemCard } from "../cards/ProblemCard";

function BrokenWireframe() {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-white/[0.04] p-4 sm:p-5 min-w-0 overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-4 gap-2 min-w-0">
        <div className="flex gap-1.5 shrink-0">
          <span className="size-2 rounded-full bg-sky-accent/60" />
          <span className="size-2 rounded-full bg-white/30" />
          <span className="size-2 rounded-full bg-white/30" />
        </div>
        <span className="font-mono text-[10px] text-white/50 truncate">scanning…</span>
      </div>
      <div className="space-y-4 min-w-0">
        <div className="flex items-center gap-3 rounded-lg border border-dashed border-red-400/40 p-3 min-w-0">
          <div className="size-10 rounded bg-white/10 shrink-0" />
          <div className="flex-1 space-y-2 min-w-0">
            <div className="h-2 w-3/4 max-w-full rounded bg-white/25" />
            <div className="h-2 w-1/2 max-w-full rounded bg-white/15" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-20 sm:w-24 rounded border border-dashed border-red-400/30" />
          <div className="h-6 w-16 sm:w-20 rounded border border-dashed border-white/20" />
        </div>
        <div className="grid grid-cols-3 gap-2 min-w-0">
          <div className="h-12 rounded border border-dashed border-red-400/30 min-w-0" />
          <div className="h-12 rounded bg-white/5 min-w-0" />
          <div className="h-12 rounded border border-dashed border-red-400/30 min-w-0" />
        </div>
      </div>
    </div>
  );
}

export function ProblemsSection() {
  return (
    <section id="problems" className="ws-section md:ws-section-md overflow-hidden">
      <SectionContainer>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-ink-deep text-white px-4 py-10 sm:px-6 sm:py-14 md:px-12 md:py-16">
            <div
              aria-hidden
              className="absolute -top-24 right-0 size-72 rounded-full bg-sky-accent/15 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 left-0 size-72 rounded-full bg-sky-accent/10 blur-3xl"
            />

            <div className="relative grid items-start gap-8 lg:grid-cols-12 lg:gap-12 min-w-0">
              <div className="lg:col-span-5 min-w-0">
                <SectionHead
                  eyebrow={PROBLEMS_SECTION.eyebrow}
                  title={PROBLEMS_SECTION.title}
                  dark
                />
                <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                  {PROBLEMS_SECTION.closing.split("conversion-focused website built for leads.")[0]}
                  <span className="font-semibold text-white">
                    conversion-focused website built for leads.
                  </span>
                </p>
              </div>

              <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
                <BrokenWireframe />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
                  {PROBLEMS_SECTION.items.map((item, i) => (
                    <Reveal key={item.code} delay={i * 0.04}>
                      <ProblemCard code={item.code} title={item.title} icon={item.icon} dark />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
