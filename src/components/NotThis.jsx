// Per /Hona-brand-positioning.md: "Not a coach. Not a trophy case. Not loud."
const items = [
  {
    title: 'Not a coach.',
    body: 'Hona shows what’s happening — it doesn’t tell you what to do. Bring your own plan: from a coaching service, a coach, or a program you wrote yourself. The dashboard holds it steady; it doesn’t prescribe it.'
  },
  {
    title: 'Not a trophy case.',
    body: 'It’s a working tool, not a feed. No streaks. No badges. No leaderboard. No celebratory animations when you log a workout. The work is the reward.'
  },
  {
    title: 'Not loud.',
    body: 'No streak counters. No notifications begging for attention. No motivational pop-ups. Hona is exact and unhurried, the way an instrument panel is exact and unhurried.'
  }
]

export default function NotThis() {
  return (
    <section id="not-this" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">What Hona isn’t</span>
          <h2 className="section-title mt-4">
            A clear shape comes from <span className="text-accent-500">clear boundaries.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
            Three things this app refuses to be.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-paper-300 bg-paper-50 p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-ink-300" />
                <h3 className="font-display font-semibold text-xl text-ink-900">{it.title}</h3>
              </div>
              <p className="text-ink-500 leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
