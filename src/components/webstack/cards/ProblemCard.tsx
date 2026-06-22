import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { IconBox } from "../ui/IconBox";

export function ProblemCard({
  code,
  title,
  icon: Icon,
  dark = false,
  className,
}: {
  code: string;
  title: string;
  icon: LucideIcon;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "h-full rounded-2xl border p-4 sm:p-5 shadow-soft ws-card-hover min-w-0",
        dark ? "border-white/10 bg-white/[0.06]" : "border-red-500/15 bg-surface",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <span
          className={cn(
            "font-mono text-[11px] font-bold tracking-widest shrink-0 pt-1",
            dark ? "text-sky-accent" : "text-sky-accent",
          )}
        >
          {code}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <IconBox icon={Icon} variant="red" size="sm" />
            <p
              className={cn(
                "text-sm sm:text-[15px] font-semibold leading-relaxed break-words",
                dark ? "text-white" : "text-ink",
              )}
            >
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
