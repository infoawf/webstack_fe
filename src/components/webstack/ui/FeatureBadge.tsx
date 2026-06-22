import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBox } from "./IconBox";

export function FeatureBadge({
  icon: Icon,
  label,
  className,
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-ink/10 bg-surface p-3 sm:p-3.5 shadow-soft ws-card-hover min-w-0",
        className,
      )}
    >
      <IconBox icon={Icon} size="sm" variant="sky" />
      <span className="text-sm font-semibold text-ink leading-snug min-w-0 break-words">
        {label}
      </span>
    </div>
  );
}
