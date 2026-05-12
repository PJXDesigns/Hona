// The five tiles. Each is its own tool. Each has a job.
const features = [
  {
    number: '01',
    title: 'Training',
    body: 'Pulls today’s workout and the full week from Apple Calendar (TrainingPeaks syncs via iCal). Tap to expand into step-by-step intervals, target zones, and TSS.',
    sub: 'TrainingPeaks · iCal · EventKit'
  },
  {
    number: '02',
    title: 'InBody',
    body: 'Every InBody570 scan — weight, SMM, body fat %, ECW ratio, phase angle, score — with trends against your baseline and goals.',
    sub: 'InBody570 · Manual entry'
  },
  {
    number: '03',
    title: 'Nutrition',
    body: 'Drop in a Cronometer CSV. Daily kcal, protein, carbs, fat, with macro rings and a 7-day trend.',
    sub: 'Cronometer CSV'
  },
  {
    number: '04',
    title: 'Body Metrics',
    body: 'HRV, resting HR, sleep, respiratory rate from HealthKit (Oura → Apple Health). One tap to generate an AI-written readiness insight.',
    sub: 'HealthKit · Oura · Anthropic API'
  },
  {
    number: '05',
    title: 'Recovery',
    body: 'A daily check-list — Normatec, cold plunge, sauna, steam, stretch, roll out — plus a notes field. Builds a longitudinal record of what you actually did.',
    sub: 'Manual · HealthKit'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow">The five tiles</span>
          <h2 className="section-title mt-4">
            Five tiles. <span className="text-accent-500">One screen.</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
            What you did, what fueled it, what your body looks like, how you’re recovering, and what’s
            changing over time — visible at once, without prescribing how you balance them. Above them
            sits a single header that frames the day: training phase, where you are in the block, and the
            <span className="text-ink-700 font-medium"> CTL / ATL / TSB </span>numbers that tell you what
            kind of body you woke up in.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {features.map((f) => (
            <article key={f.number} className="bg-paper-50 p-7 flex flex-col">
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-xs tracking-widest text-ink-300">{f.number}</span>
                <span className="w-6 h-px bg-accent-500" />
              </div>
              <h3 className="font-display font-bold text-2xl text-ink-900 tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed flex-1">{f.body}</p>
              <div className="mt-6 pt-4 border-t border-paper-300 text-[11px] font-mono text-ink-300">{f.sub}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
