"use client";

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-clip w-full min-w-0">
      <Navbar />
      {children}
    </div>
  );
}
