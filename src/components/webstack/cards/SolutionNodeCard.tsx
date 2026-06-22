import type { LucideIcon } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBox } from "../ui/IconBox";

export function SolutionNodeCard({
  icon: Icon,
  label,
  align = "left",
  className,
  innerRef,
}: {
  icon: LucideIcon;
  label: string;
  align?: "left" | "right";
  className?: string;
  innerRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={innerRef}
      className={cn(
        "inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-surface px-4 py-3.5 shadow-soft ws-card-hover",
        align === "right" ? "self-end" : "self-start",
        className,
      )}
    >
      <IconBox icon={Icon} variant="sky" size="sm" />
      <div>
        <p className="text-sm font-semibold text-ink">{label}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-accent-emerald">
          <CircleCheck className="size-3" />
          Discoverable
        </p>
      </div>
    </div>
  );
}
