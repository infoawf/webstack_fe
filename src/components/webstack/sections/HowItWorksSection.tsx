"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { HOW_IT_WORKS_SECTION } from "../content/landing";
import { SectionHead } from "../ui/SectionHead";
import { SectionContainer } from "../ui/SectionContainer";

export function HowItWorksSection() {
  const steps = HOW_IT_WORKS_SECTION.steps;

  return (
    <section id="process" className="ws-section md:ws-section-md overflow-hidden">
      <SectionContainer>
        <Reveal>
          <SectionHead
            eyebrow={HOW_IT_WORKS_SECTION.eyebrow}
            title={HOW_IT_WORKS_SECTION.title}
            center
          />
        </Reveal>

        <div className="flex flex-col md:flex-row md:items-stretch gap-5 md:gap-0 min-w-0">
          {steps.flatMap((step, i) => {
            const items = [
              <Reveal key={step.n} delay={i * 0.08} className="flex-1 min-w-0">
                <div className="h-full rounded-2xl border border-ink/10 bg-surface p-5 sm:p-7 shadow-soft ws-card-hover min-w-0">
                  <div className="font-mono text-[11px] font-bold tracking-widest text-sky-accent mb-4 sm:mb-6">
                    {step.n}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-2 break-words">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">{step.description}</p>
                </div>
              </Reveal>,
            ];

            if (i < steps.length - 1) {
              items.push(
                <div
                  key={`arrow-${step.n}`}
                  className="hidden md:flex items-center justify-center shrink-0 w-12 px-2"
                  aria-hidden
                >
                  <div className="flex items-center w-full text-ink-muted/35">
                    <span className="h-px flex-1 bg-current" />
                    <ArrowRight className="size-4 shrink-0 -ml-px" strokeWidth={1.75} />
                  </div>
                </div>,
              );
            }

            return items;
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
