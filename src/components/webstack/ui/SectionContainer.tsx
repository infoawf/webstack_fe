import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "4xl" | "6xl" | "7xl";
};

const maxWidth = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

export function SectionContainer({ children, className, size = "7xl" }: SectionContainerProps) {
  return (
    <div className={cn("mx-auto w-full min-w-0", maxWidth[size], "px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}
