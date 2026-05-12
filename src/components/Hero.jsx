import { ArrowRight, Play, Smartphone } from 'lucide-react'

export default function Hero({ brand }) {
  return (
    <section id="top" className="relative pt-20 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="pill mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-flame-400 animate-pulse-soft" />
            <span>iOS · TestFlight beta coming soon</span>
          </div>
          <h1 className="font-display font-bold tracking-tight text-5xl md:text-7xl leading-[1.02]">
            <span className="glow-text">Where the work</span>
            <br />
            <span className="text-white/90">gets shaped.</span>
          </h1>
          <p className="mt-6 text-lg muted max-w-xl">
            The anvil isn’t the smith, the hammer, or the fire. It’s the surface — heavy, stable, unmoved —
            that everything else gets shaped against. Your training, your nutrition, your recovery are the
            strikes. Anvil makes sure every one lands somewhere solid, gets measured, and gets remembered.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={brand.betaSignupUrl} className="btn-primary">
              Join the beta <ArrowRight size={18} />
            </a>
            <a href="#demo" className="btn-ghost">
              <Play size={16} /> Try the live demo
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Mass" body="Calm. Durable. The same on a hard day." />
            <Stat label="Surface" body="Every screen earns its place." />
            <Stat label="Tools" body="Specialized. Built into the shape." />
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 bg-flame-500/20 blur-3xl rounded-full" />
          <PhoneFrame>
            <div className="h-full w-full bg-gradient-to-b from-ink-900 to-ink-950 p-4 flex flex-col gap-3 text-[10px]">
              <div className="flex items-center justify-between text-white/70">
                <span>9:41</span>
                <span className="flex items-center gap-1"><Smartphone size={10}/> 100%</span>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-flame-600 to-flame-800 p-3">
                <div className="text-[8px] uppercase opacity-80">Today</div>
                <div className="font-display font-bold text-2xl">Tuesday</div>
                <div className="text-[9px] opacity-90 mt-1">Phase: Base · Wk 4</div>
              </div>
              <MiniCard title="Training" body="Z2 Bike · 90min · 142 TSS" />
              <MiniCard title="Body Metrics" body="HRV 68 · RHR 47 · Sleep 7h22m" />
              <MiniCard title="Nutrition" body="2,180 / 2,800 kcal · 142g protein" />
              <MiniCard title="Recovery" body="Cold plunge · Normatec · Sauna" />
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, body }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-flame-400 font-semibold">{label}</div>
      <div className="text-sm text-white/70 mt-1 leading-relaxed">{body}</div>
    </div>
  )
}

function MiniCard({ title, body }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 p-2.5">
      <div className="text-[8px] uppercase muted tracking-wider">{title}</div>
      <div className="text-[11px] mt-0.5">{body}</div>
    </div>
  )
}

export function PhoneFrame({ children }) {
  return (
    <div className="relative animate-float">
      <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] rounded-[42px] bg-ink-900 border-[10px] border-ink-700 shadow-[0_40px_120px_-30px_rgba(255,61,46,0.45)] overflow-hidden">
        {/* notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-ink-950 z-10" />
        {children}
      </div>
      {/* side buttons */}
      <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-ink-700 rounded-l" />
      <div className="absolute -left-[3px] top-40 w-[3px] h-16 bg-ink-700 rounded-l" />
      <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-ink-700 rounded-r" />
    </div>
  )
}
