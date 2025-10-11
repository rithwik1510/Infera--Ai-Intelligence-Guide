export default function LoadingLearn() {
  return (
    <section className="flex flex-col gap-16">
      <header className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="h-3 w-24 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
          <div className="h-10 w-2/3 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
        </div>
        <div className="h-4 w-3/5 rounded-full bg-[var(--color-surface)]/40 animate-pulse" />
      </header>

      <div className="grid gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <article
            key={index}
            className="relative overflow-hidden rounded-[var(--radius-xxl)] border border-[var(--border-soft)]/55 bg-[var(--color-surface)]/45 px-8 py-10 shadow-[var(--shadow-soft)] animate-pulse"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-3">
                {Array.from({ length: 4 }).map((__, badgeIndex) => (
                  <div key={badgeIndex} className="h-4 w-20 rounded-full bg-white/10" />
                ))}
              </div>
              <div className="space-y-3">
                <div className="h-8 w-1/2 rounded-full bg-white/15" />
                <div className="h-4 w-3/4 rounded-full bg-white/10" />
                <div className="h-4 w-2/3 rounded-full bg-white/10" />
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6">
                  <div className="h-4 w-24 rounded-full bg-white/20" />
                  <div className="mt-4 space-y-3">
                    {Array.from({ length: 2 }).map((__, moduleIndex) => (
                      <div key={moduleIndex} className="h-16 rounded-[var(--radius-xl)] border border-white/15 bg-white/5" />
                    ))}
                  </div>
                </div>
                <div className="rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-6">
                  <div className="h-4 w-16 rounded-full bg-white/20" />
                  <div className="mt-4 h-4 w-3/4 rounded-full bg-white/15" />
                  <div className="mt-2 h-4 w-2/3 rounded-full bg-white/15" />
                </div>
              </div>
              <div className="mt-auto h-4 w-1/3 rounded-full bg-white/15" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

