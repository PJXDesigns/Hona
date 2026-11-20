// "Inside Hona" band: the app's six tabs, named exactly as they appear in the
// app (Home, Train, Fuel and Body in the tab bar, Coach behind the star,
// Profile behind the avatar) so the site and the product describe themselves
// identically.
const tabs = [
  {
    name: 'Home',
    tag: 'Where you are today',
    body: 'Your Recovery score from last night’s HRV, sleep, and resting heart rate, a note from the Coach, and the next session with what to eat for it.'
  },
  {
    name: 'Train',
    tag: 'The plan and the load',
    body: 'Your program week by week, phase by phase, with fitness, fatigue, and form tracked against it.'
  },
  {
    name: 'Fuel',
    tag: 'What powers the work',
    body: 'Net carbs on a 24-hour dial, with Before, During, and After windows around every session and a fuel model that learns from your runs.'
  },
  {
    name: 'Body',
    tag: 'How you’re recovering',
    body: 'Sleep, HRV, resting heart rate, and body metrics from the wearable you already own.'
  },
  {
    name: 'Coach',
    tag: 'Ask why',
    body: 'Ask about training, fueling, or the week ahead, and get answers that read your real recovery, load, and plan.'
  },
  {
    name: 'Profile',
    tag: 'Your setup',
    body: 'Threshold pace and zones, connected sources, notifications, and appearance, all in one place.'
  }
]

export default function InsideApp() {
  return (
    <section id="inside" className="band">
      <div className="wrap">
        <div className="label">Inside Hona</div>
        <h2 className="mt-5 title-section">Six tabs, each with one job.</h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {tabs.map((t) => (
            <div key={t.name} className="pt-5 border-t border-rule">
              <h3 className="title-block">{t.name}</h3>
              <div className="mt-1.5 label">{t.tag}</div>
              <p className="mt-4 body-sm">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
