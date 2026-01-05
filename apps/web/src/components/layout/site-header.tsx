'use client';

import Link from "next/link";
import { primaryNav } from "@/lib/navigation";
import { GlobalSearch } from "../search/global-search";
import { PrimaryNav } from "../navigation/primary-nav";
import { AccountMenu } from "../navigation/account-menu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[var(--color-background)]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--color-background)]/20">
      <div className="mx-auto flex h-16 w-full max-w-[1800px] items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <div className="flex items-center gap-12">
          <Link href="/" className="group flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-[var(--accent-primary)] to-[var(--accent-secondary)]" />
            <span className="font-heading text-xl font-semibold tracking-tight text-[var(--color-foreground)]">
              Infera
            </span>
          </Link>
          <div className="hidden md:block">
            <PrimaryNav items={primaryNav} instanceId="desktop-primary" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden w-full max-w-sm md:block">
            <GlobalSearch />
          </div>
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <PrimaryNav items={primaryNav} instanceId="mobile-primary" />
            </div>
            <AccountMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
