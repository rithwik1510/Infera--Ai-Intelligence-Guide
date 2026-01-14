"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * A refined card component with overflow-hidden and relative positioning.
 * The "spotlight" effect is now handled by children or subtle CSS transitions
 * to maintain a custom, high-end feel without generic white glows.
 */
export function SpotlightCard({
  children,
  className,
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-[var(--color-surface)]/50",
        className
      )}
      {...props}
    >
      {/* 
        Note: The mouse-following motion.div has been removed per design request.
        The inner relative wrapper was removed to allow background children 
        (like gradients) to fill the card's padding-box correctly.
      */}
      {children}
    </div>
  );
}