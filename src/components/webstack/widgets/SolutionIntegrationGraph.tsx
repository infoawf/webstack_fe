"use client";

import { createRef, useRef, type RefObject } from "react";
import type { IconType } from "react-icons";
import { SiGoogle, SiGooglemaps, SiWhatsapp, SiStripe } from "react-icons/si";
import { AnimatedBeam } from "../ui/AnimatedBeam";
import { WebStackLogo } from "../WebStackLogo";
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
  showLabel = true,
}: {
  node: GraphNode;
  innerRef?: RefObject<HTMLDivElement | null>;
  showLabel?: boolean;
}) {
  const Icon = node.icon;
  return (
    <div ref={innerRef} className="flex flex-col items-center gap-2 z-10">
      <div className="size-16 rounded-full dark:bg-white bg-surface border border-ink/10 shadow-card grid place-items-center">
        <Icon className={cn("size-7", node.iconClass)} aria-hidden />
      </div>
      {showLabel && (
        <span className="text-[11px] font-semibold text-ink-muted text-center max-w-[88px] leading-tight">
          {node.label}
        </span>
      )}
    </div>
  );
}

export function SolutionIntegrationGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRefArray(LEFT_NODES.length);
  const rightRefs = useRefArray(RIGHT_NODES.length);

  return (
    <>
      <div
        ref={containerRef}
        className="relative bg-gray-400/10 hidden lg:flex items-center justify-around py-14 px-8 rounded-3xl border border-ink/10 min-h-[320px]"
      >
        <div className="flex flex-col justify-evenly gap-16">
          {LEFT_NODES.map((node, i) => (
            <BrandNode key={node.id} node={node} innerRef={leftRefs[i]} />
          ))}
        </div>

        <div ref={hubRef} className="flex flex-col items-center gap-2 z-10 mx-8">
          <div className="size-20 dark:bg-white rounded-full bg-surface border-2 border-sky-accent/30 shadow-card grid place-items-center p-3">
            <WebStackLogo size={48} />
          </div>
          <span className="text-xs font-semibold text-ink">Our Services</span>
        </div>

        <div className="flex flex-col justify-evenly gap-16">
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

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden min-w-0">
        {[...LEFT_NODES, ...RIGHT_NODES].map((node) => (
          <BrandNode key={node.id} node={node} showLabel />
        ))}
      </div>
    </>
  );
}
