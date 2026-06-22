import {
  Calendar,
  CreditCard,
  MessageSquare,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

/**
 * Customer-system preview: website + booking + payment + lead inquiry.
 * Refined for a more premium, layered, agency-grade feel.
 */
export function HeroDashboard() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div className="absolute -inset-4 sm:-inset-12 -z-10 bg-[radial-gradient(ellipse_at_25%_15%,color-mix(in_oklab,var(--sky-accent)_22%,transparent),transparent_60%),radial-gradient(ellipse_at_85%_85%,color-mix(in_oklab,var(--sky-accent)_10%,transparent),transparent_55%)] blur-3xl" />

      <div className="relative rounded-2xl sm:rounded-[2rem] border border-ink/10 bg-gradient-to-b from-surface via-surface to-surface-muted/70 p-2.5 sm:p-3 md:p-5 shadow-[0_40px_100px_-30px_rgba(2,8,23,0.28)] ring-1 ring-ink/10 min-w-0">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-3 pb-3.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-ink/25" />
            <span className="size-2.5 rounded-full bg-ink/20" />
            <span className="size-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-muted border border-ink/10 text-[10px] font-mono tracking-widest text-ink-muted">
            <span className="size-1.5 rounded-full bg-accent-emerald" />
            bloomandco.studio
          </div>
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink-muted/70 hidden md:inline">
            webstack / preview
          </span>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {/* ============ Right column ============ */}
          <div className="col-span-12 grid grid-cols-1 gap-3 sm:gap-4">
            {/* Booking calendar */}
            <div className="rounded-2xl bg-surface border border-ink/10 p-4 shadow-[0_12px_30px_-18px_rgba(2,8,23,0.18)]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-ink">
                  <span className="size-6 rounded-lg bg-sky-soft grid place-items-center">
                    <Calendar className="size-3 text-sky-accent" />
                  </span>
                  Booking calendar
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-ink-muted">
                  <span>MAR</span>
                  <span className="text-ink-muted/40">/</span>
                  <span>2026</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-ink-muted/70 font-medium">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={i} className="py-0.5 uppercase tracking-wider">
                    {d}
                  </div>
                ))}
                {Array.from({ length: 21 }).map((_, i) => {
                  const active = i === 8;
                  const booked = [2, 5, 11, 14, 17].includes(i);
                  return (
                    <div
                      key={i}
                      className={[
                        "aspect-square grid place-items-center rounded-md text-[10px] font-medium transition-colors",
                        active
                          ? "bg-sky-accent text-white shadow-[0_4px_10px_-2px_color-mix(in_oklab,var(--sky-accent)_50%,transparent)]"
                          : booked
                            ? "bg-sky-soft text-sky-accent"
                            : "text-ink/55 hover:bg-surface-muted",
                      ].join(" ")}
                    >
                      {i + 8}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 pt-3 border-t border-ink/10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] text-ink-muted">
                  <span className="inline-flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-sky-accent" /> Today
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <span className="size-1.5 rounded-full bg-sky-soft border border-sky-accent/40" />{" "}
                    Booked
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-sky-accent">5 slots left</span>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl bg-gradient-to-br from-[oklch(0.18_0.04_258)] via-[oklch(0.13_0.03_258)] to-[oklch(0.10_0.025_258)] text-white p-4 shadow-[0_18px_40px_-20px_rgba(2,8,23,0.5)] relative overflow-hidden ring-1 ring-white/5">
              <div className="absolute -right-10 -top-10 size-36 bg-sky-accent/40 blur-3xl rounded-full" />
              <div className="absolute -left-8 -bottom-12 size-32 bg-sky-accent/20 blur-3xl rounded-full" />
              <div className="flex items-center justify-between mb-3 relative">
                <div className="flex items-center gap-2 text-[11px] font-medium text-white/75">
                  <span className="size-6 rounded-lg bg-surface/10 grid place-items-center">
                    <CreditCard className="size-3 text-sky-accent" />
                  </span>
                  Payment received
                </div>
                <span className="inline-flex items-center gap-1 text-[9px] font-semibold text-accent-emerald bg-accent-emerald/10 px-2 py-1 rounded-full">
                  <CheckCircle2 className="size-3" /> Paid
                </span>
              </div>
              <div className="font-display text-3xl font-semibold tracking-tight relative">
                £248.00
              </div>
              <div className="mt-3 flex items-center justify-between relative">
                <div className="flex items-center gap-1.5 text-[10px] text-white/55">
                  <TrendingUp className="size-3 text-accent-emerald" />
                  <span>+12% this week</span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  Stripe · ****4242
                </span>
              </div>
            </div>

            {/* Inquiry */}
            <div className="rounded-2xl bg-surface border border-ink/10 p-4 shadow-[0_12px_30px_-18px_rgba(2,8,23,0.18)]">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-full bg-sky-soft grid place-items-center shrink-0 text-[10px] font-bold text-sky-accent">
                  SM
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[12px] font-semibold text-ink truncate">
                      New inquiry: Sarah M.
                    </div>
                    <span className="text-[9px] font-bold tracking-wider text-accent-emerald bg-accent-emerald-soft px-1.5 py-0.5 rounded">
                      LEAD
                    </span>
                  </div>
                  <div className="text-[10.5px] text-ink-muted mt-1 leading-snug">
                    "Hi! Do you have availability Friday morning for a colour consultation?"
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 text-[9px] text-ink-muted/70">
                    <MessageSquare className="size-2.5" />
                    <span className="font-mono uppercase tracking-widest">
                      2 min ago · web form
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
