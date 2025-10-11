export default function LoadingComparisons() {
  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-3">
        <div className="h-3 w-28 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        <div className="h-9 w-1/2 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        <div className="h-4 w-2/3 rounded-full bg-[var(--color-surface)]/35 animate-pulse" />
      </header>

      <div className="rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-8 shadow-[var(--shadow-soft)]">
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 rounded-[var(--radius-xl)] border border-[var(--border-soft)]/50 bg-[var(--color-surface)]/55 p-4 animate-pulse"
            >
              <div className="flex items-center justify-between">
                <div className="h-3 w-20 rounded-full bg-[var(--color-surface-elevated)]/60" />
                <div className="h-3 w-12 rounded-full bg-[var(--color-surface-elevated)]/50" />
              </div>
              <div className="h-5 w-3/4 rounded-full bg-[var(--color-surface-elevated)]/45" />
              <div className="h-3 w-2/3 rounded-full bg-[var(--color-surface-elevated)]/40" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="h-[28rem] rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 animate-pulse" />
          <div className="h-[22rem] rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 animate-pulse" />
        </div>
        <aside className="rounded-[var(--radius-xl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-6 shadow-[var(--shadow-soft)]">
          <div className="space-y-3">
            <div className="h-4 w-32 rounded-full bg-[var(--color-surface-elevated)]/50 animate-pulse" />
            <div className="h-3 w-full rounded-full bg-[var(--color-surface-elevated)]/45 animate-pulse" />
            <div className="h-3 w-5/6 rounded-full bg-[var(--color-surface-elevated)]/45 animate-pulse" />
            <div className="h-3 w-2/3 rounded-full bg-[var(--color-surface-elevated)]/40 animate-pulse" />
          </div>
        </aside>
      </div>
    </section>
  );
}

