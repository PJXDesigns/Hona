import { Home, Flame, Leaf, Activity, Sparkles, UserRound } from 'lucide-react'

// "Inside Hona" band: the app's six tabs, named exactly as they appear in the
// app (Home, Train, Fuel and Body in the tab bar, Coach behind the star,
// Profile behind the avatar) so the site and the product describe themselves
// identically.
const tabs = [
  {
    icon: Home,
    name: 'Home',
    tag: 'Where you are today',
    body: 'Your Recovery score from last night’s HRV, sleep, and resting heart rate, a note from the Coach, and the next session with what to eat for it.'
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
    body: 'Net carbs on a 24-hour dial, with Before, During, and After windows around every session and a fuel model that learns from your runs.'
  },
  {
    icon: Activity,
    name: 'Body',
    tag: 'How you’re recovering',
    body: 'Sleep, HRV, resting heart rate, and body metrics from the wearable you already own.'
  },
  {
    icon: Sparkles,
    name: 'Coach',
    tag: 'Ask why',
    body: 'Ask about training, fueling, or the week ahead, and get answers that read your real recovery, load, and plan.'
  },
  {
    icon: UserRound,
    name: 'Profile',
    tag: 'Your setup',
    body: 'Threshold pace and zones, connected sources, notifications, and appearance, all in one place.'
  }
]

export default function InsideApp() {
  return (
    <section id="inside" className="band band-tint">
      <div className="wrap">
        <span className="eyebrow">Inside Hona</span>
        <h2 className="lead mt-5">
          Six tabs. <span className="lead-em">Nothing</span> to learn.
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
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
