import { BadgeCheck, Lock, Unlock } from "lucide-react";

export function MockupVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_30%_30%,color-mix(in_oklab,var(--sky-accent)_20%,transparent),transparent_60%)] blur-3xl"
      />

      <div className="relative rounded-2xl sm:rounded-3xl border border-ink/10 bg-surface-muted p-4 sm:p-6 md:p-8 shadow-card">
        <div
          aria-hidden
          className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, color-mix(in oklab, var(--ink) 8%, transparent) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mb-5 sm:mb-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-ink/10 bg-surface px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-ink-muted">
            <Lock className="size-3 shrink-0" />
            <span className="truncate">Before payment</span>
          </div>
          <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-accent-emerald-soft px-2.5 py-1.5 sm:px-3 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-accent-emerald">
            <Unlock className="size-3 shrink-0" />
            <span className="truncate">Mockup unlocked</span>
          </div>
        </div>

        <div className="relative max-w-full overflow-hidden rounded-xl sm:rounded-2xl border-2 border-sky-accent/30 bg-surface p-3 sm:p-4 shadow-soft sm:-rotate-2 transition-transform duration-500 hover:rotate-0">
          <div className="flex items-center justify-between gap-2 border-b border-ink/10 px-1 sm:px-2 pb-3 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="size-2.5 rounded-full bg-ink/25" />
              <span className="size-2.5 rounded-full bg-ink/20" />
              <span className="size-2.5 rounded-full bg-ink/15" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-ink-muted truncate">
              mockup · v1.draft
            </span>
          </div>

          <div className="space-y-3 p-2 sm:p-3 min-w-0">
            <div className="flex items-center justify-between gap-2 min-w-0">
              <div className="h-3 w-16 sm:w-20 rounded bg-ink/20 shrink-0" />
              <div className="flex gap-1.5 sm:gap-2 shrink-0">
                <div className="h-2 w-8 sm:w-10 rounded bg-ink/10" />
                <div className="h-2 w-8 sm:w-10 rounded bg-ink/10" />
                <div className="h-2 w-10 sm:w-12 rounded bg-sky-accent/70" />
              </div>
            </div>
            <div className="h-4 w-3/4 max-w-full rounded bg-ink/25" />
            <div className="h-4 w-1/2 max-w-full rounded bg-ink/15" />
            <div className="h-2 w-full rounded bg-ink/10" />
            <div className="mt-3 grid grid-cols-2 gap-2 min-w-0">
              <div className="h-14 sm:h-16 rounded-lg bg-sky-soft/60 border border-sky-accent/20 min-w-0" />
              <div className="space-y-1.5 p-1.5 sm:p-2 min-w-0">
                <div className="h-2 w-full rounded bg-ink/20" />
                <div className="h-2 w-3/4 rounded bg-ink/15" />
                <div className="h-6 w-16 sm:w-20 rounded-full bg-sky-accent/80" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 min-w-0">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="h-8 sm:h-10 rounded-lg border border-ink/10 bg-surface-muted min-w-0"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="relative mt-5 sm:mt-6 text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-ink-muted">
          Approve · then we build
        </p>

        <div className="mt-4 flex justify-center sm:hidden">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-ink/10 bg-surface px-3 py-2 text-[11px] font-semibold text-ink shadow-soft">
            <BadgeCheck className="size-3.5 shrink-0 text-accent-emerald" />
            <span className="truncate">Approve before payment</span>
          </span>
        </div>
      </div>

      <div className="absolute -bottom-4 right-2 sm:right-4 hidden sm:block max-w-[calc(100%-1rem)] rounded-full border border-ink/10 bg-surface px-3 sm:px-4 py-2 sm:py-2.5 shadow-card ws-float-slow">
        <span className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-ink">
          <BadgeCheck className="size-4 shrink-0 text-accent-emerald" />
          <span className="truncate">Approve before payment</span>
        </span>
      </div>
    </div>
  );
}
