"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { id: "problems", label: "Problem", href: "/#problems", isAnchor: true },
  { id: "solution", label: "Solution", href: "/#solution", isAnchor: true },
  { id: "pricing", label: "Pricing", href: "/pricing", isAnchor: false },
  { id: "contact", label: "Contact Us", href: "/contact", isAnchor: false },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const homePrefix = pathname === "/" ? "" : "/";

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[70] flex justify-center pointer-events-none">
        <nav className="pointer-events-auto mt-3 sm:mt-4 w-[min(960px,calc(100%-1rem))] sm:w-[min(960px,calc(100%-1.5rem))] rounded-full ws-glass border border-ink/10 shadow-[0_8px_30px_-12px_rgba(2,8,23,0.15)] px-3 sm:px-5 py-2 sm:py-2.5">
          <div className="mx-auto flex items-center justify-between gap-3 sm:gap-6 min-w-0">
            <Link
              href="/"
              className="inline-flex items-center shrink-0 min-w-0"
              onClick={() => setOpen(false)}
            >
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-ink truncate">
                Web<span className="text-sky-accent">Stack</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-ink-muted">
              {LINKS.map((l) =>
                l.isAnchor ? (
                  <a
                    key={l.id}
                    href={`${homePrefix}${l.href.replace(/^\//, "")}`}
                    data-scroll-to={l.id}
                    className="hover:text-ink transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.id} href={l.href} className="hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                ),
              )}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center rounded-full bg-ink-deep px-4 py-2 text-[13px] font-medium text-white hover:opacity-90 transition-opacity"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden inline-flex size-9 items-center justify-center rounded-full border border-ink/10 text-ink"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
              >
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={[
          "lg:hidden fixed inset-0 z-[60] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink-deep/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={[
            "absolute top-0 right-0 h-full w-[85%] max-w-sm bg-surface shadow-2xl",
            "transition-transform duration-300 ease-out will-change-transform",
            open ? "translate-x-0" : "translate-x-full",
            "flex flex-col pt-24",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
            {LINKS.map((l) =>
              l.isAnchor ? (
                <a
                  key={l.id}
                  href={`${homePrefix}${l.href.replace(/^\//, "")}`}
                  data-scroll-to={l.id}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-ink-muted hover:bg-surface-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-[15px] font-medium text-ink-muted hover:bg-surface-muted hover:text-ink transition-colors"
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>
          <div className="p-4 border-t border-ink/10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-ink-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
