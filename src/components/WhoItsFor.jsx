import { Target, Database, Watch, Salad } from 'lucide-react'

const personas = [
  {
    icon: Target,
    title: 'The endurance athlete',
    body: 'You’re training for a long-course triathlon, marathon, ultra, or cycling event. You need one place to see the workout, the readiness, and the trend — not five apps stitched together.'
  },
  {
    icon: Database,
    title: 'The data-driven trainee',
    body: 'You already use TrainingPeaks, Oura, Apple Health, and a body-composition tool. You want them surfaced together with the context that actually matters this morning.'
  },
  {
    icon: Watch,
    title: 'The coached athlete',
    body: 'Your coach builds the plan in TrainingPeaks. The app pulls it via iCal so you never re-enter workouts — just open your phone, see today, and go.'
  },
  {
    icon: Salad,
    title: 'The body-comp focused',
    body: 'You track InBody scans and care about skeletal muscle mass, phase angle, and trends — not just bodyweight. The dashboard treats those as first-class signals.'
  }
]

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="pill mb-4"><span>Who it’s for</span></div>
          <h2 className="section-title">
            Built for athletes who already <span className="text-flame-400">measure everything</span> — and want one screen to make sense of it.
          </h2>
          <p className="mt-5 text-lg muted">
            Most apps own one slice: the plan, the watch, the scale, the food log. This is the morning glance
            that pulls them together so the workout you’re about to do is informed by the body you woke up in.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="card p-6 hover:border-flame-500/30 transition group">
                <div className="w-10 h-10 rounded-lg bg-flame-500/10 border border-flame-500/30 grid place-items-center text-flame-400 mb-4 group-hover:scale-110 transition">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm muted leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
