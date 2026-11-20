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
      <div className="wrap grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24">
        <div>
          <div className="label">Inside Hona</div>
          <h2 className="mt-5 title-section">Six tabs, each with one job.</h2>
          <p className="mt-6 body max-w-[26rem]">
            Home, Train, Fuel, and Body sit in the tab bar. Coach is the star beside it, on every
            screen. Profile is your avatar.
          </p>
        </div>

        <dl className="border-t border-rule">
          {tabs.map((t) => (
            <div key={t.name} className="grid sm:grid-cols-[160px_1fr] gap-x-8 gap-y-2 py-6 border-b border-rule">
              <dt>
                <div className="title-block">{t.name}</div>
                <div className="mt-1.5 label">{t.tag}</div>
              </dt>
              <dd className="body-sm">{t.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
