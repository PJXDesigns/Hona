import { Mountain, Dumbbell, Shuffle, Hammer } from 'lucide-react'

const personas = [
  {
    icon: Mountain,
    title: 'The endurance athlete',
    body: 'Marathons, ultras, triathlons, gravel. You already live in TrainingPeaks and a watch app. You want a calmer morning view that ties the plan to the body that woke up.'
  },
  {
    icon: Dumbbell,
    title: 'The lifter',
    body: 'Strength, hypertrophy, powerlifting blocks. Body comp matters. Sleep matters. Anvil treats InBody scans, HRV, and recovery as first-class signals next to your training.'
  },
  {
    icon: Shuffle,
    title: 'The hybrid athlete',
    body: 'You don’t fit one category. Run, lift, climb, swim, ruck. Anvil doesn’t care which sport — every widget reads the same regardless of how you spent the morning.'
  },
  {
    icon: Hammer,
    title: 'Anyone who treats training as craft',
    body: 'No specific sport, no specific body type, no specific goal. If you show up to the same surface most days and put in honest reps, this is your app.'
  }
]

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="pill mb-4"><span>Who it’s for</span></div>
          <h2 className="section-title">
            For anyone who treats training as <span className="text-flame-400">craft.</span>
          </h2>
          <p className="mt-5 text-lg muted">
            The name doesn’t pin Anvil to a sport, a body type, or a goal — it pins it to a relationship
            with the work. Endurance athletes, lifters, hybrid athletes, anyone shaping themselves
            through consistent effort and wanting to see what’s actually changing.
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
