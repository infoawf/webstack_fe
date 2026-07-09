import { TERMS_OF_SERVICE } from "@/components/webstack/content/legal";
import { LegalDocument } from "@/components/webstack/LegalDocument";

export function TermsPage() {
  return <LegalDocument document={TERMS_OF_SERVICE} />;
}
