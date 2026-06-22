import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBox } from "../ui/IconBox";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  compact = false,
  className,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  compact?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-ink/10 bg-surface ws-card-hover min-w-0",
        compact ? "p-3" : "p-4",
        className,
      )}
    >
      <IconBox icon={Icon} variant="sky" size={compact ? "sm" : "md"} />
      <div className="min-w-0">
        <p
          className={cn(
            "font-semibold text-ink leading-snug break-words",
            compact ? "text-sm" : "text-[15px]",
          )}
        >
          {title}
        </p>
        {description && (
          <p className="mt-1 text-xs text-ink-muted leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
