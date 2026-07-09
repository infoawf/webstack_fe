import { PRIVACY_POLICY } from "@/components/webstack/content/legal";
import { LegalDocument } from "@/components/webstack/LegalDocument";

export function PrivacyPage() {
  return <LegalDocument document={PRIVACY_POLICY} />;
}
