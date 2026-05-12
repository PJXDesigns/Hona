import { Ban } from 'lucide-react'

const items = [
  {
    title: 'Not a coach.',
    body: 'The anvil doesn’t tell you what to make. Bring your own plan — from TrainingPeaks, a coach, or a program you wrote yourself. Anvil holds it steady; it doesn’t prescribe it.'
  },
  {
    title: 'Not a trophy case.',
    body: 'The anvil isn’t where you display the finished piece — it’s where the piece is made. No streaks. No badges. No leaderboard. The work is the reward.'
  },
  {
    title: 'Not flashy.',
    body: 'Anvils are two hundred pounds of cast steel. They don’t need to be flashy. Anvil avoids animation for its own sake, gamification, manipulative nudges. It sits there, and it’s there when you need it.'
  }
]

export default function NotThis() {
  return (
    <section id="not-this" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="pill mb-4"><Ban size={12} /> <span>What Anvil deliberately isn’t</span></div>
          <h2 className="section-title">
            What Anvil <span className="text-flame-400">isn’t.</span>
          </h2>
          <p className="mt-5 text-lg muted">
            A clear shape comes from clear boundaries. Three things this app refuses to be.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full border border-flame-500/40 grid place-items-center">
                  <span className="w-3 h-0.5 bg-flame-500 -rotate-45 rounded" />
                </span>
                <h3 className="font-display font-bold text-xl">{it.title}</h3>
              </div>
              <p className="muted leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
