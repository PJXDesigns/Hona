const personas = [
  {
    title: 'The endurance athlete',
    body: 'Marathons, triathlons, ultras, gravel. Your training plan, your watch data, your race calendar — all in one calm read.'
  },
  {
    title: 'The lifter',
    body: 'Strength and hypertrophy blocks. Body composition matters. Sleep matters. Hona treats InBody scans, HRV, and recovery as first-class signals.'
  },
  {
    title: 'The hybrid athlete',
    body: 'Run, lift, climb, swim, ruck — pick your stack. Every tile reads the same regardless of how you spent the morning.'
  },
  {
    title: 'Anyone who treats training as a daily practice',
    body: 'No specific sport, no specific body type, no specific goal. The bar is consistent attention.'
  }
]

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">Who it’s for</span>
          <h2 className="section-title mt-4">
            For athletes treating training as a <span className="text-accent-500">daily practice.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
            The name doesn’t pin Hona to a sport, a body type, or a goal — it names the relationship
            between you and your training: daily, patient, refining.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {personas.map((p) => (
            <div key={p.title} className="bg-paper-50 p-6 md:p-7">
              <h3 className="font-display font-semibold text-base md:text-lg leading-snug text-ink-900">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
