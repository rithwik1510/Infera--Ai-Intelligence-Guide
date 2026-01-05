"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import type { PrimaryNavItem } from "@/lib/navigation";

interface PrimaryNavProps {
  items: PrimaryNavItem[];
  instanceId?: string;
}

export function PrimaryNav({ items, instanceId = "primary" }: PrimaryNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="w-full">
      <ul className="relative flex items-center gap-1 overflow-x-auto rounded-full border border-white/5 bg-white/5 px-1 py-1 backdrop-blur-md shadow-inner">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const linkClasses =
            "relative flex min-w-[120px] items-center justify-center px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] transition-colors duration-200";

          return (
            <li key={item.id} className="relative">
              {isActive ? (
                <motion.span
                  layoutId={`nav-active-pill-${instanceId}`}
                  className="absolute inset-0 rounded-full border border-[var(--border-soft)]/40 bg-[radial-gradient(125%_160%_at_0%_0%,rgba(37,99,235,0.45),transparent_70%),_radial-gradient(125%_160%_at_100%_0%,rgba(6,182,212,0.35),transparent_70%),_var(--color-surface-elevated)] shadow-[var(--shadow-soft)]"
                  transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.7 }}
                />
              ) : null}
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${linkClasses} ${isActive
                    ? "text-[var(--primary-foreground)]"
                    : "text-[var(--color-muted)]/75 hover:text-[var(--color-foreground)]"
                  }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId={`nav-active-underline-${instanceId}`}
                    className="absolute -bottom-1 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-[var(--accent-secondary)]"
                    transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.8 }}
                  />
                ) : null}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
