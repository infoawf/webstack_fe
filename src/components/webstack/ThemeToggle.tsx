"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={[
        "relative inline-flex size-9 items-center justify-center rounded-full",
        "ws-glass border border-ink/10 text-ink",
        "shadow-[0_4px_16px_-6px_rgba(2,8,23,0.18)]",
        "hover:border-sky-accent/40 hover:text-sky-accent transition-all duration-300",
        "overflow-hidden",
        className,
      ].join(" ")}
    >
      <Sun
        className={[
          "absolute size-4 transition-all duration-500",
          isDark ? "opacity-0 -rotate-90 scale-50" : "opacity-100 rotate-0 scale-100",
        ].join(" ")}
      />
      <Moon
        className={[
          "absolute size-4 transition-all duration-500",
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-50",
        ].join(" ")}
      />
    </button>
  );
}
