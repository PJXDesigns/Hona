import { Calendar, Activity, Apple, HeartPulse, Snowflake, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Calendar,
    color: 'from-flame-500 to-flame-700',
    title: 'Training',
    body: 'Pulls today’s workout and the full week from Apple Calendar (TrainingPeaks syncs via iCal). Tap to expand into step-by-step intervals, target zones, and TSS.',
    sub: 'TrainingPeaks · iCal · EventKit'
  },
  {
    icon: Activity,
    color: 'from-ember-500 to-flame-500',
    title: 'InBody',
    body: 'Track every InBody570 scan — weight, SMM, body fat %, ECW ratio, phase angle, score — with trends against your baseline and goals.',
    sub: 'InBody570 · Manual entry'
  },
  {
    icon: Apple,
    color: 'from-emerald-500 to-teal-600',
    title: 'Nutrition',
    body: 'Drop in a Cronometer CSV. Daily kcal, protein, carbs, fat, with macro ring visualization and weekly trend.',
    sub: 'Cronometer CSV'
  },
  {
    icon: HeartPulse,
    color: 'from-ice-500 to-indigo-500',
    title: 'Body Metrics',
    body: 'HRV, resting HR, sleep, respiratory rate from HealthKit (Oura → Apple Health). One tap to generate an AI-written readiness insight.',
    sub: 'HealthKit · Oura · Anthropic API'
  },
  {
    icon: Snowflake,
    color: 'from-sky-400 to-cyan-500',
    title: 'Recovery',
    body: 'A daily check-list — Normatec, cold plunge, sauna, steam, stretching, roll-out — plus a notes field. Builds a longitudinal record of what you actually did.',
    sub: 'Manual · HealthKit'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="pill mb-4"><span>The five widgets</span></div>
            <h2 className="section-title">Five signals. One morning screen.</h2>
            <p className="mt-4 text-lg muted">
              Each widget is its own focused tool — but they share a single header that tells you the
              <span className="text-white"> race countdown, training phase, and the chronic / acute / form (CTL / ATL / TSB) </span>
              numbers that frame the day.
            </p>
          </div>
          <div className="pill text-flame-300 border-flame-500/30 bg-flame-500/10">
            <Sparkles size={14} /> AI coaching insight built-in
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div key={f.title} className={`card p-6 relative overflow-hidden ${i === 0 ? 'lg:row-span-2 lg:col-span-1' : ''}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} grid place-items-center mb-5 shadow-glow`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-bold text-2xl">{f.title}</h3>
                <p className="mt-2 muted leading-relaxed">{f.body}</p>
                <div className="mt-5 text-xs font-mono muted">{f.sub}</div>
                <div className="pointer-events-none absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-white/[0.02]" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
