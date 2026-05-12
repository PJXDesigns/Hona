import { Anchor, Layers, Wrench } from 'lucide-react'

const qualities = [
  {
    icon: Anchor,
    name: 'Mass',
    headline: 'It doesn’t move.',
    body: 'An anvil works because it doesn’t move — it absorbs the blow so the work gets shaped, not the foundation. Anvil should feel like that. Calm. Durable. The same on a hard day as on an easy one. No streak-shaming. No notifications begging for attention. It’s there when you need it.'
  },
  {
    icon: Layers,
    name: 'A working surface',
    headline: 'Every inch earns its place.',
    body: 'An anvil isn’t decorative — every inch of it is for shaping something. Every screen in Anvil should earn its place: today’s training, today’s metrics, today’s recovery. No dashboards for the sake of dashboards. No screens you tap past because nothing’s there.'
  },
  {
    icon: Wrench,
    name: 'Specialized tools',
    headline: 'Built into the shape.',
    body: 'A real anvil has a horn for bending, a hardy hole for cutting, a flat face for striking. The widgets — Training, InBody, Nutrition, Body Metrics, Recovery — are those tools. Each one has a job. Together they cover the full work of shaping an athlete, whatever the discipline.'
  }
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20 md:py-28 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-3xl">
          <div className="pill mb-4"><span>The metaphor</span></div>
          <h2 className="section-title">
            Three qualities of a <span className="text-flame-400">good anvil</span> —
            <br className="hidden md:block" /> three qualities of a good app.
          </h2>
          <p className="mt-5 text-lg muted">
            You’re doing the work. Anvil doesn’t lift the hammer. It’s the surface every strike lands on.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {qualities.map((q, i) => {
            const Icon = q.icon
            return (
              <div key={q.name} className="card p-7 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-flame-500 to-flame-800 grid place-items-center shadow-glow shrink-0">
                    <Icon size={28} />
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest muted">
                    0{i + 1}
                  </div>
                </div>
                <div>
                  <div className="text-flame-400 text-sm uppercase tracking-widest font-semibold">{q.name}</div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl mt-1 leading-tight">{q.headline}</h3>
                  <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-2xl">{q.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
