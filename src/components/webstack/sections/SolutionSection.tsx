"use client";

import { Reveal } from "../Reveal";
import { SOLUTION_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { IconBox } from "../ui/IconBox";
import { SectionContainer } from "../ui/SectionContainer";
import { FeatureCard } from "../cards/FeatureCard";
import { SolutionIntegrationGraph } from "../widgets/SolutionIntegrationGraph";

export function SolutionSection() {
  return (
    <section id="solution" className="ws-section md:ws-section-md bg-surface-muted overflow-hidden">
      <SectionContainer>
        <Reveal>
          <SectionHead
            eyebrow={SOLUTION_SECTION.eyebrow}
            title={SOLUTION_SECTION.title}
            description={SOLUTION_SECTION.description}
            center
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto max-w-xl mb-8 min-w-0">
            <div className="flex items-center gap-3 sm:gap-4 rounded-2xl border border-sky-accent/25 bg-surface p-4 sm:p-5 shadow-card min-w-0">
              <IconBox icon={SOLUTION_SECTION.valueProp.icon} variant="sky" size="lg" />
              <div className="min-w-0">
                <p className="font-display text-base sm:text-lg font-semibold text-ink break-words">
                  {SOLUTION_SECTION.valueProp.title}
                </p>
                <p className="text-sm text-ink-muted">{SOLUTION_SECTION.valueProp.subtitle}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="text-sm font-semibold text-ink mb-6 text-center">
          {SOLUTION_SECTION.channelsLabel}
        </p>

        <Reveal delay={0.1}>
          <SolutionIntegrationGraph />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-10 sm:mt-12 max-w-5xl min-w-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-accent/20 bg-surface p-5 sm:p-8 md:p-10 shadow-card min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 pb-4 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-accent">
                  Visibility system
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-ink leading-tight text-balance break-words">
                {SOLUTION_SECTION.visibilitySystem.title}
              </h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {SOLUTION_SECTION.visibilitySystem.items.map((item) => (
                  <FeatureCard key={item.text} icon={item.icon} title={item.text} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
