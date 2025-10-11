"use client";

import { useId } from "react";

interface ProgressRingProps {
  value: number;
  label: string;
  caption: string;
  size?: number;
  gradient: readonly string[];
}

export function ProgressRing({
  value,
  label,
  caption,
  size = 128,
  gradient,
}: ProgressRingProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const id = useId();
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - clamped / 100);

  return (
    <figure className="flex flex-col items-center gap-4 text-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`${label} ${Math.round(clamped)} percent`}
        className="drop-shadow-[0_18px_48px_rgba(15,23,42,0.28)]"
      >
        <defs>
          <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            {gradient.map((color, index) => (
              <stop key={`${color}-${index}`} offset={`${(index / Math.max(1, gradient.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.12)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`url(#ring-${id})`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="45%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-[var(--color-foreground)] text-[22px] font-semibold tracking-tight"
        >
          {Math.round(clamped)}%
        </text>
        <text
          x="50%"
          y="60%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-[var(--color-foreground)]/70 text-[12px] uppercase tracking-[0.32em]"
        >
          {label}
        </text>
      </svg>
      <figcaption className="text-xs uppercase tracking-[0.3em] text-[var(--color-foreground)]/75">{caption}</figcaption>
    </figure>
  );
}
