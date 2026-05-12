import { ArrowRight, Play } from 'lucide-react'

export default function Hero({ brand }) {
  return (
    <section id="top" className="relative pt-24 md:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <div className="pill mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse-soft" />
            <span>iOS · TestFlight beta · coming soon</span>
          </div>

          <h1 className="font-display font-extrabold tracking-tightest text-5xl md:text-7xl text-ink-900 leading-[1.02]">
            {brand.tagline}
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed">
            Hona is the daily dashboard that keeps you honest about the small,
            consistent adjustments that compound into real change. Training,
            nutrition, body composition, recovery — one calm view, every morning.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={brand.betaSignupUrl} className="btn-primary">
              Join the beta <ArrowRight size={16} />
            </a>
            <a href="#demo" className="btn-ghost">
              <Play size={14} /> See the dashboard
            </a>
          </div>

          {/* Quiet hairline divider then the three qualities as plain text */}
          <div className="mt-14 pt-8 border-t border-paper-300 grid grid-cols-3 gap-6 max-w-lg">
            <Stat label="Consistency" body="Same on a hard day as an easy one." />
            <Stat label="Patience"    body="The story is the slope, not the noise." />
            <Stat label="Versatility" body="Any athlete. Any discipline." />
          </div>
        </div>

        {/* Phone mockup — light-themed interior matching the iOS app */}
        <div className="relative flex justify-center lg:justify-end">
          <PhoneFrame>
            <div className="h-full w-full bg-paper-100 p-4 flex flex-col gap-2.5 text-[10px] text-ink-700">
              <div className="flex items-center justify-between text-ink-400">
                <span className="font-semibold">9:41</span>
                <span>100%</span>
              </div>
              <div className="rounded-2xl bg-ink-900 text-paper-50 px-4 py-3.5">
                <div className="text-[8px] uppercase tracking-[0.16em] opacity-60">Today · Tuesday</div>
                <div className="font-bold text-xl mt-0.5">Build · Wk 4</div>
                <div className="mt-2 h-1 rounded-full bg-paper-50/15 overflow-hidden">
                  <div className="h-full w-[33%] bg-accent-400 rounded-full" />
                </div>
              </div>
              <MiniCard tint="bike"      title="Training"     body="Z2 Bike · 90min · 142 TSS" />
              <MiniCard tint="metrics"   title="Body Metrics" body="HRV 68 · RHR 47 · Sleep 7h22m" />
              <MiniCard tint="nutrition" title="Nutrition"    body="2,180 / 2,800 kcal · 142g protein" />
              <MiniCard tint="recovery"  title="Recovery"     body="Plunge · Normatec · Sauna" />
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
      <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-accent-500">{label}</div>
      <div className="text-sm text-ink-500 mt-1.5 leading-relaxed">{body}</div>
    </div>
  )
}

// Mini cards use the matching widget tint from AppTheme — same colors used
// by the actual iOS app, only inside this in-page preview of the app.
const tintMap = {
  bike:      { bg: 'bg-bike',      text: 'text-bike-text' },
  metrics:   { bg: 'bg-metrics',   text: 'text-metrics-text' },
  nutrition: { bg: 'bg-nutrition', text: 'text-nutrition-text' },
  recovery:  { bg: 'bg-recovery',  text: 'text-recovery-text' }
}
function MiniCard({ tint, title, body }) {
  const c = tintMap[tint] || { bg: 'bg-paper-200', text: 'text-ink-700' }
  return (
    <div className={`rounded-xl px-3.5 py-2.5 ${c.bg} ${c.text}`}>
      <div className="text-[8px] uppercase tracking-[0.16em] opacity-65">{title}</div>
      <div className="text-[11px] mt-0.5 font-medium">{body}</div>
    </div>
  )
}

export function PhoneFrame({ children }) {
  return (
    <div className="relative">
      <div className="relative w-[300px] md:w-[340px] aspect-[9/19.5] rounded-[42px] bg-ink-900 border-[10px] border-ink-900 shadow-cardLift overflow-hidden">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-ink-900 z-10" />
        {children}
      </div>
      <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-ink-700 rounded-l" />
      <div className="absolute -left-[3px] top-40 w-[3px] h-16 bg-ink-700 rounded-l" />
      <div className="absolute -right-[3px] top-32 w-[3px] h-20 bg-ink-700 rounded-r" />
    </div>
  )
}
