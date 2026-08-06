"use client";

import { Reveal } from "../Reveal";
import { SOLUTION_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";
import { FeatureCard } from "../cards/FeatureCard";
import { SolutionIntegrationGraph } from "../widgets/SolutionIntegrationGraph";

export function SolutionSection() {
  return (
    <section id="solution" className="ws-section md:ws-section-md bg-surface-muted overflow-hidden">
      <SectionContainer>
        <Reveal>
          <SectionHead title={SOLUTION_SECTION.title} center className="max-w-4xl" />
        </Reveal>

        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-base md:text-lg text-ink-muted leading-relaxed text-pretty">
            {SOLUTION_SECTION.descriptionLead}{" "}
            <span className="font-semibold text-ink">{SOLUTION_SECTION.descriptionBold}</span>{" "}
            <span className="font-semibold text-ink">{SOLUTION_SECTION.channelsLead}</span>
          </p>
        </Reveal>

        <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-8 lg:gap-10 items-stretch min-w-0">
          <Reveal className="min-w-0 h-full">
            <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-accent/25 bg-sky-soft/80 p-5 sm:p-6 md:p-8 shadow-card min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-accent/20 pb-4 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sky-accent">
                  Visibility system
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold text-ink leading-tight text-balance break-words">
                {SOLUTION_SECTION.visibilitySystem.title}
              </h3>
              <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-3">
                {SOLUTION_SECTION.visibilitySystem.items.map((item) => (
                  <FeatureCard key={item.text} icon={item.icon} title={item.text} compact />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0 w-full h-full">
            <SolutionIntegrationGraph />
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
