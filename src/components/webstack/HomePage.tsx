"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroDashboard } from "@/components/webstack/HeroDashboard";
import { Reveal } from "@/components/webstack/Reveal";
import { FeatureBadge } from "@/components/webstack/ui/FeatureBadge";
import { HERO, HERO_TRUST } from "@/components/webstack/content/landing";
import {
  SeeBeforePaySection,
  ProblemsSection,
  SolutionSection,
  HowItWorksSection,
  CTASection,
  Footer,
} from "@/components/webstack/sections";

export function HomePage() {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <main className="min-w-0">
        <section
          id="home"
          className="relative pt-28 sm:pt-32 md:pt-36 pb-10 md:pb-14 overflow-hidden"
        >
          <div className="absolute inset-x-0 -top-20 h-[28rem] bg-[radial-gradient(ellipse_at_top,theme(colors.sky.200/0.5),transparent_70%)] -z-10" />
          <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center min-w-0">
              <div className="lg:col-span-6 text-center lg:text-left min-w-0 flex flex-col justify-center">
                <Reveal>
                  <h1 className="font-display text-[1.65rem] leading-[1.08] sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-ink tracking-tight text-balance break-words">
                    {HERO.headline} <span className="text-sky-accent">{HERO.headlineAccent}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.05}>
                  <p className="mt-4 sm:mt-5 text-base md:text-lg text-ink-muted max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
                    {HERO.subheadline}
                  </p>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl mx-auto lg:mx-0">
                    {HERO_TRUST.map((badge) => (
                      <FeatureBadge key={badge.label} icon={badge.icon} label={badge.label} />
                    ))}
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="mt-6 flex lg:justify-start justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-accent px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold text-white hover:bg-sky-600 transition-colors shadow-[0_14px_40px_-12px_color-mix(in_oklab,var(--sky-accent)_70%,transparent)]"
                    >
                      {HERO.cta}
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6 w-full min-w-0">
                <Reveal delay={0.12}>
                  <div className="w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
                    <HeroDashboard />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <SeeBeforePaySection />
        <ProblemsSection />
        <SolutionSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
