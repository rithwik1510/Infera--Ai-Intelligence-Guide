export default function LoadingModels() {
  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-4">
        <div className="h-3 w-24 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        <div className="h-9 w-1/2 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        <div className="h-4 w-3/4 rounded-full bg-[var(--color-surface)]/35 animate-pulse" />
      </header>

      <div className="rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-8 shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="h-6 w-24 rounded-full bg-[var(--color-surface-elevated)]/50 animate-pulse" />
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 p-8 shadow-[var(--shadow-soft)] animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="h-4 w-20 rounded-full bg-[var(--color-surface-elevated)]/60" />
              <div className="h-3 w-12 rounded-full bg-[var(--color-surface-elevated)]/50" />
            </div>
            <div className="h-6 w-3/4 rounded-full bg-[var(--color-surface-elevated)]/45" />
            <div className="space-y-2">
              <div className="h-3 w-full rounded-full bg-[var(--color-surface-elevated)]/40" />
              <div className="h-3 w-2/3 rounded-full bg-[var(--color-surface-elevated)]/35" />
            </div>
            <div className="mt-auto h-4 w-24 rounded-full bg-[var(--color-surface-elevated)]/30" />
          </article>
        ))}
      </div>
    </section>
  );
}

