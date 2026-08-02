"use client";

import Image from "next/image";

export function MockupVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden">
      <div
        aria-hidden
        className="absolute -inset-4 sm:-inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_30%_30%,color-mix(in_oklab,var(--sky-accent)_20%,transparent),transparent_60%)] blur-3xl"
      />

      <div className="relative rounded-2xl sm:rounded-3xl border border-ink/10 bg-surface-muted p-3 sm:p-5 md:p-6 shadow-card">
        <div className="relative max-w-full overflow-hidden rounded-xl sm:rounded-2xl border border-ink/10 bg-surface shadow-soft">
          <div className="flex items-center gap-2 border-b border-ink/10 bg-surface-muted px-3 sm:px-4 py-2.5 min-w-0">
            <div className="flex gap-1.5 shrink-0">
              <span className="size-2.5 rounded-full bg-ink/25" />
              <span className="size-2.5 rounded-full bg-ink/20" />
              <span className="size-2.5 rounded-full bg-ink/15" />
            </div>
            <div className="ml-2 flex-1 rounded-md bg-surface border border-ink/10 px-2.5 py-1 min-w-0">
              <span className="font-mono text-[9px] sm:text-[10px] text-ink-muted truncate block">
                yourbusiness.com
              </span>
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full bg-surface-muted">
            <Image
              src="/website-mockup.png"
              alt="Example custom website mockup for a service business"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>

        <p className="relative mt-5 sm:mt-6 text-center text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-sky-accent">
          Approve · then we build
        </p>
      </div>
    </div>
  );
}
