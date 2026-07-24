import { Home, Flame, Leaf, Activity } from 'lucide-react'

// "Inside Hona" band: the app's four tabs, named exactly as they appear in
// the tab bar so the site and the product describe themselves identically.
const tabs = [
  {
    icon: Home,
    name: 'Home',
    tag: 'Where you are today',
    body: 'Today’s sessions, meals, and readiness on one timeline, read top to bottom like a day.'
  },
  {
    icon: Flame,
    name: 'Train',
    tag: 'The plan and the load',
    body: 'Your program week by week, phase by phase, with fitness, fatigue, and form tracked against it.'
  },
  {
    icon: Leaf,
    name: 'Fuel',
    tag: 'What powers the work',
    body: 'Energy balance, hydration, and per-session fueling, learned from your strongest days.'
  },
  {
    icon: Activity,
    name: 'Body',
    tag: 'How you’re recovering',
    body: 'Sleep, HRV, resting heart rate, and body metrics from the wearable you already own.'
  }
]

export default function InsideApp() {
  return (
    <section id="inside" className="band band-tint">
      <div className="wrap">
        <span className="eyebrow">Inside Hona</span>
        <h2 className="lead mt-5">
          Four tabs. <span className="lead-em">Nothing</span> to learn.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {tabs.map((t) => (
            <div key={t.name} className="bg-paper-100 p-6 md:p-7">
              <t.icon size={18} className="text-accent-500" aria-hidden="true" />
              <h3 className="mt-4 font-display font-semibold text-lg text-ink-900">{t.name}</h3>
              <div className="mt-0.5 text-[13px] font-medium text-accent-500">{t.tag}</div>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
