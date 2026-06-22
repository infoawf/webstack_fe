"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";
import { AppShell } from "@/components/webstack/AppShell";
import { SmoothScroll } from "@/components/webstack/SmoothScroll";
import { ThemeProvider } from "@/components/webstack/ThemeProvider";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SmoothScroll>
          <AppShell>{children}</AppShell>
        </SmoothScroll>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
