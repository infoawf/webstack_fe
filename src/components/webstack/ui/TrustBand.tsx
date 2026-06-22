import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBox } from "./IconBox";

export function TrustBand({
  icon: Icon,
  headline,
  description,
  className,
}: {
  icon: LucideIcon;
  headline: string;
  description?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-sky-accent/20 bg-sky-soft/40 p-5 md:p-6 shadow-soft",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <IconBox icon={Icon} size="md" variant="sky" />
        <div>
          <p className="font-display text-lg font-semibold text-ink leading-snug">{headline}</p>
          {description && (
            <p className="mt-1.5 text-sm text-ink-muted leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
