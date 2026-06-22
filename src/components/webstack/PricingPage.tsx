"use client";

import { Footer } from "@/components/webstack/sections";
import { Reveal } from "@/components/webstack/Reveal";
import { PRICING_SECTION } from "@/components/webstack/content/landing";
import { SectionHead } from "@/components/webstack/ui/SectionHead";
import { SectionContainer } from "@/components/webstack/ui/SectionContainer";
import { PriceCard } from "@/components/webstack/cards/PriceCard";

export function PricingPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col overflow-x-clip">
      <main className="flex-1 pt-28 sm:pt-32 md:pt-40 pb-16 ws-section md:ws-section-md min-w-0">
        <SectionContainer size="4xl">
          <Reveal>
            <SectionHead
              eyebrow={PRICING_SECTION.eyebrow}
              title={PRICING_SECTION.title}
              description="Everything included in one simple payment. No subscriptions, no surprises."
              center
            />
          </Reveal>
          <Reveal delay={0.08}>
            <PriceCard
              price={PRICING_SECTION.price}
              sub={PRICING_SECTION.sub}
              benefits={PRICING_SECTION.benefits}
              showCta
              ctaHref="/contact"
              ctaLabel={PRICING_SECTION.cta}
            />
          </Reveal>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
