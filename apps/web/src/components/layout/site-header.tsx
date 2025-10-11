'use client';

import Link from "next/link";
import { primaryNav } from "@/lib/navigation";
import { GlobalSearch } from "../search/global-search";
import { PrimaryNav } from "../navigation/primary-nav";
import { AccountMenu } from "../navigation/account-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-soft)]/80 bg-[var(--color-background)]/65 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 px-6 py-6 sm:px-12 md:px-16 lg:px-16 xl:px-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <Link href="/" className="group inline-flex flex-col gap-1 text-left">
            <span className="text-[10px] font-semibold uppercase tracking-[0.52em] text-[var(--color-muted)]/80">Infera Intelligence</span>
            <span className="text-3xl font-semibold tracking-tight text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent-primary)] sm:text-[2.3rem]">
              Infera
            </span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <PrimaryNav items={primaryNav} instanceId="desktop-primary" />
            <AccountMenu />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="md:hidden">
            <PrimaryNav items={primaryNav} instanceId="mobile-primary" />
          </div>
          <div className="w-full md:max-w-xl">
            <GlobalSearch />
          </div>
          <div className="flex items-center justify-end gap-2 md:hidden">
            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
