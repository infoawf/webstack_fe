import { FOOTER_DESCRIPTION, FOOTER_LINKS } from "../content/landing";
import { SectionContainer } from "../ui/SectionContainer";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-ink/10 pt-16 sm:pt-20 pb-10 overflow-hidden">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-ink/10">
          <div className="md:col-span-6">
            <div className="font-display font-bold text-2xl text-ink">
              Web<span className="text-sky-accent">Stack</span>
              <span className="text-sky-accent">.</span>
            </div>
            <p className="mt-4 text-sm text-ink-muted max-w-md leading-relaxed">
              {FOOTER_DESCRIPTION}
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-ink mb-4">
              Explore
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2.5">
              {FOOTER_LINKS.map((it) => (
                <li key={it.label}>
                  <a
                    href={it.href}
                    data-scroll-to={it.scrollTo}
                    className="text-sm text-ink-muted hover:text-sky-accent transition-colors"
                  >
                    {it.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 text-xs text-ink-muted">
          <p>© 2026 WebStack. All rights reserved.</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
