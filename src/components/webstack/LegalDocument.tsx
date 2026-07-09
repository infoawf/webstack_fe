import { Footer } from "@/components/webstack/sections";
import { SectionHead } from "@/components/webstack/ui/SectionHead";
import { SectionContainer } from "@/components/webstack/ui/SectionContainer";
import type { LegalDocument as LegalDocumentContent } from "@/components/webstack/content/legal";

export function LegalDocument({ document }: { document: LegalDocumentContent }) {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col overflow-x-clip">
      <main className="flex-1 pt-28 sm:pt-32 md:pt-40 pb-16 ws-section md:ws-section-md min-w-0">
        <SectionContainer size="4xl">
          <SectionHead
            title={document.title}
            description={`Last updated: ${document.lastUpdated}`}
          />
          <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-10">
            {document.intro}
          </p>
          <div className="space-y-10">
            {document.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-xl font-semibold text-ink mb-3">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm md:text-base text-ink-muted leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
}
