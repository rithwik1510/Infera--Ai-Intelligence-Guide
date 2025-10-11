export default function LoadingNews() {
  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <div className="h-5 w-32 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
          <div className="h-3 w-24 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="h-10 w-2/3 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
          <div className="h-4 w-1/2 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/45 px-12 py-10 shadow-[var(--shadow-soft)]">
          <div className="absolute inset-0 animate-pulse bg-[linear-gradient(135deg,rgba(37,99,235,0.18),rgba(6,182,212,0.18))]" />
          <div className="relative flex h-full flex-col gap-6">
            <div className="h-4 w-full rounded-full bg-white/20" />
            <div className="space-y-3">
              <div className="h-8 w-3/4 rounded-full bg-white/20" />
              <div className="h-4 w-5/6 rounded-full bg-white/20" />
              <div className="h-4 w-2/3 rounded-full bg-white/15" />
            </div>
            <div className="mt-auto grid gap-3 sm:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-6 rounded-full bg-white/15" />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-white/40" />
              <div className="h-3 w-32 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
        <aside className="flex flex-col gap-6 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/60 bg-[var(--color-surface)]/40 p-8 shadow-[var(--shadow-soft)]">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="h-3 w-20 rounded-full bg-[var(--color-surface)]/50 animate-pulse" />
              <div className="h-4 w-3/4 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
              <div className="h-3 w-2/3 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
            </div>
          ))}
        </aside>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <article
            key={index}
            className="flex h-full flex-col gap-4 rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/40 p-6 shadow-[var(--shadow-soft)] animate-pulse"
          >
            <div className="h-4 w-1/2 rounded-full bg-[var(--color-surface-elevated)]/50" />
            <div className="h-6 w-2/3 rounded-full bg-[var(--color-surface-elevated)]/40" />
            <div className="h-4 w-3/4 rounded-full bg-[var(--color-surface-elevated)]/35" />
            <div className="mt-auto h-4 w-1/3 rounded-full bg-[var(--color-surface-elevated)]/30" />
          </article>
        ))}
      </div>
    </section>
  );
}

