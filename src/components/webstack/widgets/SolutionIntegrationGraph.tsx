"use client";

import { createRef, useRef, type RefObject } from "react";
import type { IconType } from "react-icons";
import { SiGoogle, SiGooglemaps, SiWhatsapp, SiStripe } from "react-icons/si";
import { AnimatedBeam } from "../ui/AnimatedBeam";
import { cn } from "@/lib/utils";

type GraphNode = {
  id: string;
  label: string;
  icon: IconType;
  iconClass: string;
  curvature: number;
  delay: number;
};

const LEFT_NODES: GraphNode[] = [
  {
    id: "google",
    label: "Google Search",
    icon: SiGoogle,
    iconClass: "text-[#4285F4]",
    curvature: -40,
    delay: 0.1,
  },
  {
    id: "maps",
    label: "Local Discovery",
    icon: SiGooglemaps,
    iconClass: "text-[#34A853]",
    curvature: 40,
    delay: 0.3,
  },
];

const RIGHT_NODES: GraphNode[] = [
  {
    id: "whatsapp",
    label: "WhatsApp Chat",
    icon: SiWhatsapp,
    iconClass: "text-[#25D366]",
    curvature: -40,
    delay: 0.3,
  },
  {
    id: "stripe",
    label: "Payment Integration",
    icon: SiStripe,
    iconClass: "text-[#635BFF]",
    curvature: 40,
    delay: 0.1,
  },
];

function useRefArray(count: number) {
  const refs = useRef<RefObject<HTMLDivElement | null>[]>([]);
  if (refs.current.length !== count) {
    refs.current = Array.from({ length: count }, () => createRef<HTMLDivElement>());
  }
  return refs.current;
}

function BrandNode({
  node,
  innerRef,
}: {
  node: GraphNode;
  innerRef?: RefObject<HTMLDivElement | null>;
}) {
  const Icon = node.icon;
  return (
    <div ref={innerRef} className="flex flex-col items-center gap-1.5 sm:gap-2 z-10">
      <div className="size-11 sm:size-14 md:size-16 rounded-full dark:bg-white bg-surface border border-ink/10 shadow-card grid place-items-center">
        <Icon className={cn("size-5 sm:size-6 md:size-7", node.iconClass)} aria-hidden />
      </div>
      <span className="text-[10px] sm:text-[11px] font-semibold text-ink-muted text-center max-w-[72px] sm:max-w-[88px] leading-tight">
        {node.label}
      </span>
    </div>
  );
}

export function SolutionIntegrationGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRefArray(LEFT_NODES.length);
  const rightRefs = useRefArray(RIGHT_NODES.length);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[280px] sm:min-h-[320px] flex items-center justify-around py-8 sm:py-10 px-2 sm:px-4 xl:px-8 rounded-2xl sm:rounded-3xl border border-ink/10 bg-gray-400/10"
    >
      <div className="flex h-full flex-col justify-evenly gap-8 sm:gap-12 md:gap-14 py-2">
        {LEFT_NODES.map((node, i) => (
          <BrandNode key={node.id} node={node} innerRef={leftRefs[i]} />
        ))}
      </div>

      <div ref={hubRef} className="flex flex-col items-center gap-2 z-10 mx-1 sm:mx-4 xl:mx-6">
        <div className="size-20 sm:size-28 xl:size-32 dark:bg-white rounded-full bg-surface border-2 border-sky-accent/40 shadow-card grid place-items-center px-2 sm:px-3 text-center">
          <span className="font-display text-sm sm:text-base xl:text-lg font-bold text-ink leading-tight tracking-tight">
            Your
            <br />
            Website
          </span>
        </div>
      </div>

      <div className="flex h-full flex-col justify-evenly gap-8 sm:gap-12 md:gap-14 py-2">
        {RIGHT_NODES.map((node, i) => (
          <BrandNode key={node.id} node={node} innerRef={rightRefs[i]} />
        ))}
      </div>

      {LEFT_NODES.map((node, i) => {
        const fromRef = leftRefs[i];
        if (!fromRef) return null;
        return (
          <AnimatedBeam
            key={`left-${node.id}`}
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={hubRef}
            curvature={node.curvature}
            delay={node.delay}
            duration={6}
          />
        );
      })}
      {RIGHT_NODES.map((node, i) => {
        const fromRef = rightRefs[i];
        if (!fromRef) return null;
        return (
          <AnimatedBeam
            key={`right-${node.id}`}
            containerRef={containerRef}
            fromRef={fromRef}
            toRef={hubRef}
            curvature={node.curvature}
            delay={node.delay}
            duration={5}
            reverse
          />
        );
      })}
    </div>
  );
}
