"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import { useAuth } from "@/context/auth-context";
import { useThemeMode } from "@/components/theme/theme-controller";

function getInitials(email: string | undefined) {
  if (!email) return "•";
  const [localPart] = email.split("@");
  if (!localPart) return "•";
  return localPart.charAt(0).toUpperCase();
}

export function AccountMenu() {
  const { user, logout, isLoading } = useAuth();
  const { mode, toggle } = useThemeMode();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!menuRef.current) return;
      if (menuRef.current.contains(event.target as Node)) return;
      setOpen(false);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const menuState = useMemo(() => {
    if (user) {
      return {
        headerTitle: "Signed in",
        headerSubtitle: user.email,
        items: [
          { label: "Dashboard", href: "/dashboard" },
          { label: "Account settings", href: "/settings" },
        ] as const,
        footer: { label: "Sign out", action: () => logout() },
      };
    }
    return {
      headerTitle: "Browsing as guest",
      headerSubtitle: "Create an account to sync your intelligence brief.",
      items: [
        { label: "Login", href: "/auth/login" },
        { label: "Register", href: "/auth/register" },
      ] as const,
      footer: undefined,
    };
  }, [logout, user]);

  if (isLoading) {
    return (
      <div className="h-10 w-10 animate-pulse rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/60" />
    );
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="group flex items-center gap-2 rounded-full border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/55 px-2.5 py-1.5 text-sm font-medium text-[var(--color-muted)]/80 shadow-[var(--shadow-soft)]/20 transition-colors hover:bg-white/10 hover:text-[var(--color-foreground)]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white/80 shadow-[0_0_12px_rgba(37,99,235,0.25)]">
          {getInitials(user?.email)}
        </span>
        <span className="hidden text-[13px] text-[var(--color-muted)]/85 transition group-hover:text-[var(--color-foreground)] sm:inline">
          Account
        </span>
        <svg
          className={`h-3.5 w-3.5 text-[var(--color-muted)] transition-transform duration-200 group-hover:text-[var(--color-foreground)] ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 10 6"
          aria-hidden="true"
        >
          <path
            d="M1 1.75 5 5l4-3.25"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/90 shadow-[var(--shadow-soft)]/45 backdrop-blur-xl">
          <div className="space-y-1 border-b border-white/10 px-4 py-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]/70">
              {menuState.headerTitle}
            </span>
            <p className="text-xs font-medium leading-relaxed text-[var(--color-foreground)]/80">{menuState.headerSubtitle}</p>
          </div>
          <div className="flex flex-col gap-0.5 px-2 py-3">
            {menuState.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-foreground)]/80 transition hover:bg-white/10 hover:text-[var(--color-foreground)]"
              >
                {item.label}
                <span aria-hidden className="text-xs opacity-0 transition group-hover:opacity-50">
                  &rsaquo;
                </span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                toggle();
                setOpen(false);
              }}
              className="flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[var(--color-foreground)]/80 transition hover:bg-white/10 hover:text-[var(--color-foreground)]"
            >
              <span>Switch to {mode === "dark" ? "light" : "dark"} mode</span>
              <span aria-hidden className="text-xs text-[var(--color-muted)]/70">{mode === "dark" ? "☀︎" : "☾"}</span>
            </button>
          </div>
          {menuState.footer ? (
            <button
              type="button"
              onClick={() => {
                menuState.footer?.action();
                setOpen(false);
              }}
              className="flex w-full items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-sm font-semibold text-[var(--color-muted)]/75 transition hover:bg-white/10 hover:text-[var(--color-foreground)]"
            >
              {menuState.footer.label}
              <span aria-hidden className="text-base">&times;</span>
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
