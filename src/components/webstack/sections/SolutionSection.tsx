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
          <SectionHead title={SOLUTION_SECTION.title} />
        </Reveal>

        <div className="mt-8 md:mt-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-w-0">
          <Reveal className="min-w-0">
            <p className="text-base md:text-lg text-ink-muted leading-relaxed text-pretty">
              {SOLUTION_SECTION.descriptionLead}{" "}
              <span className="font-semibold text-ink">{SOLUTION_SECTION.descriptionBold}</span>{" "}
              <span className="font-semibold text-ink">{SOLUTION_SECTION.channelsLead}</span>
            </p>
          </Reveal>

          <Reveal delay={0.1} className="min-w-0">
            <SolutionIntegrationGraph />
          </Reveal>
        </div>
      </SectionContainer>

      <div className="mt-10 sm:mt-14 bg-sky-soft/60 border-y border-sky-accent/15">
        <SectionContainer>
          <Reveal from="right" delay={0.05} className="py-10 sm:py-14 md:py-16">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-sky-accent/25 bg-sky-soft/80 p-5 sm:p-8 md:p-10 shadow-card min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-accent/20 pb-4 mb-6">
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
          </Reveal>
        </SectionContainer>
      </div>
    </section>
  );
}
