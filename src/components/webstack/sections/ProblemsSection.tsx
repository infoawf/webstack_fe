"use client";

import { Reveal } from "../Reveal";
import { PROBLEMS_SECTION } from "../content/landing";
import { SectionContainer } from "../ui/SectionContainer";
import { IconBox } from "../ui/IconBox";

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

            <div className="relative grid items-center gap-8 lg:grid-cols-12 lg:gap-12 min-w-0">
              <div className="lg:col-span-5 min-w-0">
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed text-pretty">
                  {PROBLEMS_SECTION.body}{" "}
                  <span className="font-semibold text-white">{PROBLEMS_SECTION.bodyAccent}</span>
                </p>
              </div>

              <div className="lg:col-span-7 min-w-0">
                <ul className="space-y-3 sm:space-y-3.5">
                  {PROBLEMS_SECTION.items.map((item, i) => (
                    <Reveal key={item.title} delay={i * 0.04}>
                      <li className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 min-w-0">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-sky-accent" />
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <IconBox icon={item.icon} variant="red" size="sm" />
                          <span className="text-sm sm:text-[15px] font-semibold leading-relaxed text-white break-words pt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}
