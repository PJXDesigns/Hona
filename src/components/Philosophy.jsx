// Three qualities from /Hona-brand-positioning.md — Consistency, Patience, Versatility.
const qualities = [
  {
    num: '01',
    name: 'Consistency',
    headline: 'The same on a hard day as an easy one.',
    body: 'Training is a refinement process — small, consistent adjustments compounding over months. Hona is built to feel exactly the same whether the morning is brutal or boring. No streak-shaming. No notifications begging for attention. The same surface every day, every entry, every read.'
  },
  {
    num: '02',
    name: 'Patience',
    headline: 'The story is the slope, not the noise.',
    body: 'Single-day numbers will jerk you around. A bad sleep, a salty meal, one missed session — none of them are the story. Hona surfaces trends over weeks: where SMM is heading, where HRV sits against your seven-day mean, whether your CTL is actually building or just oscillating. The story is the slope.'
  },
  {
    num: '03',
    name: 'Versatility',
    headline: 'Any athlete. Any discipline.',
    body: 'The five tiles — Training, InBody, Nutrition, Body Metrics, Recovery — together cover what you did, what fueled it, what your body looks like, how you’re recovering, and what’s changing over time. The structure is the same whether your training is endurance, strength, hybrid, recreational, or competitive. Hona doesn’t prescribe how you balance them.'
  }
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">The idea</span>
          <h2 className="section-title mt-4">
            Three qualities. <span className="text-accent-500">One daily practice.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
            You don’t transform overnight. You make small, consistent adjustments that
            compound over months. Hona is the dashboard that keeps you honest about
            those adjustments.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {qualities.map((q) => (
            <article key={q.num} className="bg-paper-50 p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-widest text-ink-300">{q.num}</span>
                <span className="eyebrow !text-ink-400">{q.name}</span>
              </div>
              <h3 className="font-display font-bold text-2xl md:text-[28px] leading-snug tracking-tight text-ink-900">
                {q.headline}
              </h3>
              <p className="mt-4 text-ink-500 leading-relaxed">{q.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
