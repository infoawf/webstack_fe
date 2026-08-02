"use client";

import { Reveal } from "../Reveal";
import { MOCKUP_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";
import { FeatureCard } from "../cards/FeatureCard";
import { MockupVisual } from "../widgets/MockupVisual";

export function SeeBeforePaySection() {
  return (
    <section id="mockup" className="ws-section md:ws-section-md bg-surface-muted overflow-hidden">
      <SectionContainer>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-stretch min-w-0">
          <Reveal className="lg:col-span-5 min-w-0 flex flex-col justify-center">
            <SectionHead
              title={MOCKUP_SECTION.title}
              description={MOCKUP_SECTION.description}
              className="mb-6"
            />
            <p className="text-sm font-semibold text-ink mb-3">{MOCKUP_SECTION.youSeeLabel}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-w-0">
              {MOCKUP_SECTION.points.map((p) => (
                <FeatureCard key={p.label} icon={p.icon} title={p.label} compact />
              ))}
            </div>
            <p className="mt-6 sm:mt-8 font-display text-lg sm:text-xl md:text-2xl font-bold text-sky-accent tracking-tight">
              {MOCKUP_SECTION.trustHeadline}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-7 min-w-0 flex items-center" delay={0.1}>
            <div className="relative w-full min-w-0">
              <MockupVisual />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
