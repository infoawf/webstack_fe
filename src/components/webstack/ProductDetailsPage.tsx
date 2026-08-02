"use client";

import {
  WhatYouGetSection,
  WhatNotSection,
  Footer,
} from "@/components/webstack/sections";

export function ProductDetailsPage() {
  return (
    <div className="bg-background text-foreground overflow-x-clip">
      <main className="min-w-0 pt-20 sm:pt-24">
        <WhatYouGetSection />
        <WhatNotSection />
      </main>
      <Footer />
    </div>
  );
}
