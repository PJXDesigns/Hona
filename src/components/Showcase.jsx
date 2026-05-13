import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Calendar, Bike, Footprints, Waves, Dumbbell, Apple, HeartPulse, Snowflake, Sparkles, Check, Wind, Flame } from 'lucide-react'

// Inline H mark so the welcome screen doesn't need an extra HTTP request
function HonaMark({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true">
      <g fill="currentColor">
        <path d="M464.04,585 C464.22,558.51 464.78,532.52 464.50,506.53 C464.11,471.57 464.72,436.61 464.56,401.64 C464.48,381.99 464.22,362.34 464.11,342.69 C464.07,336.30 464.48,335.98 470.95,335.95 C476.28,335.92 481.62,336.09 486.94,335.89 C491.01,335.74 492.48,337.27 492.44,341.43 C492.27,359.09 492.37,376.76 492.37,394.42 C492.38,433.91 492.38,473.41 492.41,512.90 C492.42,514.84 491.89,516.92 494.03,519.59 C533.81,497.29 573.74,474.91 613.41,452.68 C615.91,454.77 615.29,456.73 615.29,458.44 C615.34,533.76 615.32,609.08 615.45,684.40 C615.46,689.00 614.06,690.63 609.48,690.36 C604.00,690.03 598.48,690.07 592.99,690.33 C588.83,690.53 587.52,688.92 587.56,684.84 C587.72,667.34 587.61,649.84 587.61,632.35 C587.61,590.36 587.61,548.36 587.62,506.37 C587.62,504.41 587.62,502.45 587.62,500.59 C585.25,499.85 583.96,501.17 582.59,501.95 C554.17,518.01 525.81,534.19 497.32,550.13 C493.40,552.32 492.21,554.92 492.23,559.27 C492.39,600.59 492.33,641.92 492.33,683.24 C492.33,690.29 492.33,690.29 485.12,690.31 C480.45,690.31 475.79,690.31 471.12,690.30 C464.08,690.28 464.07,690.28 464.06,682.98 C464.04,664.65 464.03,646.32 464.02,627.99 C464.02,613.83 464.03,599.66 464.04,585 Z"/>
        <path d="M439.04,511 C439.05,568.49 439.07,625.47 439.07,682.46 C439.07,690.31 439.03,690.31 431.01,690.31 C426.17,690.32 421.32,690.03 416.52,690.39 C411.74,690.75 410.25,688.74 410.67,684.30 C410.91,681.83 410.69,679.31 410.69,676.81 C410.69,565.84 410.69,454.87 410.69,343.90 C410.69,335.92 410.69,335.93 418.63,335.92 C423.13,335.92 427.63,335.89 432.13,335.90 C438.67,335.91 439.01,336.23 439.02,342.54 C439.05,350.21 439.05,357.87 439.05,365.54 C439.05,413.86 439.04,462.18 439.04,511 Z"/>
        <path d="M562.18,627 C562.15,646.33 562.01,665.16 562.17,683.99 C562.20,688.62 560.94,690.73 555.95,690.38 C550.65,690.01 545.27,690.00 539.97,690.37 C534.95,690.72 533.77,688.56 533.79,683.96 C533.93,649.63 533.86,615.30 533.87,580.97 C533.87,574.47 533.89,567.97 533.92,561.48 C533.92,559.63 533.86,557.67 535.79,556.63 C543.97,552.23 552.19,547.89 560.39,543.53 C561.00,543.71 561.58,543.89 562.18,544.07 C562.18,571.55 562.18,599.02 562.18,627 Z"/>
      </g>
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/*  Phone screen contents — narrow-form JSX mockups for each scene     */
/* ------------------------------------------------------------------ */

function StatusBar({ darkText = false }) {
  return (
    <div className={`absolute top-0 inset-x-0 h-7 z-20 flex items-center justify-between px-6 text-[9px] font-semibold ${darkText ? 'text-ink-900' : 'text-paper-50'}`}>
      <span>9:41</span>
      <span className="opacity-80">●●●</span>
    </div>
  )
}

function WelcomeScreen() {
  return (
    <div className="absolute inset-0 bg-paper-100 flex flex-col items-center justify-center px-7 text-center">
      <StatusBar darkText />
      <div className="text-accent-500"><HonaMark size={64} /></div>
      <div className="mt-6">
        <div className="font-display font-bold text-3xl tracking-tight text-ink-900">Hona</div>
        <div className="mt-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-accent-500">Sharpen the athlete</div>
      </div>
      <p className="mt-5 text-[11px] text-ink-500 leading-relaxed max-w-[200px]">
        One calm view. Every signal. Built for the work, not the noise.
      </p>
      <button className="mt-7 w-full max-w-[200px] rounded-full bg-ink-900 text-paper-50 py-2.5 text-[11px] font-semibold">
        Get started
      </button>
      <div className="mt-3 text-[10px] text-ink-300">Already have an account? Sign in</div>
    </div>
  )
}

function HeaderScreen() {
  return (
    <div className="absolute inset-0 bg-paper-100 px-3 pt-9 pb-3 overflow-hidden">
      <StatusBar darkText />
      <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-ink-400 text-center -mt-1 mb-2">
        Peter Jones · Ironman TX
      </div>
      <div className="rounded-2xl bg-ink-900 text-paper-50 p-3.5 shadow-card">
        <div className="text-[7px] uppercase tracking-[0.18em] opacity-60">Ironman Texas · Apr 24, 2027</div>
        <div className="mt-1 font-display font-extrabold text-2xl leading-none">49 weeks out</div>
        <div className="text-[9px] mt-1 opacity-75">346 days · Week 1 of 44</div>
        <div className="mt-3 h-px bg-paper-50/15" />
        <div className="grid grid-cols-4 gap-1.5 mt-3">
          {[
            { label: 'Fitness', v: '40', sub: 'CTL' },
            { label: 'Fatigue', v: '92', sub: 'ATL' },
            { label: 'Form',    v: '-52', sub: 'TSB' },
            { label: 'Week TSS',v: '972', sub: 'pts' },
          ].map((s) => (
            <div key={s.label} className="rounded-md bg-paper-50/5 px-1.5 py-1.5">
              <div className="text-[6px] uppercase tracking-wider opacity-60">{s.label}</div>
              <div className="font-display font-bold text-[13px] leading-tight tabular-nums">{s.v}</div>
              <div className="text-[6px] opacity-50">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-paper-50 border border-paper-300 p-3 shadow-card">
        <div className="text-[7px] uppercase tracking-[0.18em] text-ink-400">Training · Today</div>
        <div className="mt-0.5 font-display font-bold text-[13px] text-ink-900 leading-tight">Swim: Drills — Early Vertical Forearm</div>
        <div className="mt-1.5 text-[9px] text-ink-500 leading-snug">
          Drills, drills & drills. Reinforce high elbow, early vertical forearm catch…
        </div>
        <div className="mt-2 text-[9px] text-accent-500 font-semibold">See full description →</div>
      </div>
    </div>
  )
}

function TrainingScreen() {
  const week = [
    { d: 'M', dt: '11', t: 'Rest', rest: true },
    { d: 'T', dt: '12', t: 'Bike', tint: 'bike',  today: true },
    { d: 'W', dt: '13', t: 'Run',  tint: 'run' },
    { d: 'T', dt: '14', t: 'Bike', tint: 'bike' },
    { d: 'F', dt: '15', t: 'Run',  tint: 'run' },
    { d: 'S', dt: '16', t: 'Bike', tint: 'bike' },
    { d: 'S', dt: '17', t: 'Run',  tint: 'run' },
  ]
  const tintBg = { bike: 'bg-bike', run: 'bg-run', swim: 'bg-swim' }
  return (
    <div className="absolute inset-0 bg-paper-100 px-3 pt-9 pb-3 overflow-hidden">
      <StatusBar darkText />
      <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-ink-400 mb-2 px-1">Training · This week</div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {week.map((d) => (
          <div key={d.d + d.dt} className={`rounded-md py-1.5 text-center border ${
            d.today ? 'bg-ink-900 text-paper-50 border-ink-900' :
            d.rest  ? 'bg-paper-100 border-paper-300 text-ink-400' :
            'bg-paper-50 border-paper-300 text-ink-700'
          }`}>
            <div className="text-[7px] uppercase tracking-wider opacity-70">{d.d}</div>
            <div className="font-bold text-[10px] leading-none mt-0.5">{d.dt}</div>
          </div>
        ))}
      </div>
      <div className={`rounded-xl ${tintBg.bike} px-3 py-2.5 mb-2`}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-paper-50/70 grid place-items-center text-bike-text"><Bike size={12}/></div>
          <div>
            <div className="text-[7px] uppercase tracking-wider text-bike-text/70">Tue · Today</div>
            <div className="text-[11px] font-semibold text-bike-text leading-tight">Z2 Bike · 90 min</div>
          </div>
          <div className="ml-auto text-[10px] font-bold font-mono text-bike-text">142 TSS</div>
        </div>
      </div>
      <div className="space-y-1.5 px-1">
        {['WU · 10 min Z1', 'Main · 70 min Z2 (200–220W)', 'CD · 10 min Z1'].map(s => (
          <div key={s} className="flex items-center gap-1.5 text-[9px] text-ink-500">
            <span className="w-1 h-1 rounded-full bg-accent-500" />
            <span className="font-mono">{s}</span>
          </div>
        ))}
      </div>
      <div className={`mt-2 rounded-xl ${tintBg.run} px-3 py-2`}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-paper-50/70 grid place-items-center text-run-text"><Footprints size={12}/></div>
          <div>
            <div className="text-[7px] uppercase tracking-wider text-run-text/70">Wed</div>
            <div className="text-[11px] font-semibold text-run-text leading-tight">AM Easy · 45 min</div>
          </div>
          <div className="ml-auto text-[10px] font-bold font-mono text-run-text">48 TSS</div>
        </div>
      </div>
    </div>
  )
}

function NutritionScreen() {
  return (
    <div className="absolute inset-0 bg-paper-100 px-3 pt-9 pb-3 overflow-hidden">
      <StatusBar darkText />
      <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-ink-400 text-center mb-1">Nutrition · Today</div>
      <div className="text-center mb-3">
        <div className="font-display font-extrabold text-3xl text-ink-900 tabular-nums">2,180 <span className="text-base text-ink-400 font-medium">/ 2,800 kcal</span></div>
      </div>
      <div className="flex justify-center mb-3">
        <Ring value={2180} max={2800} color="#486820" size={86} />
      </div>
      <div className="space-y-1.5">
        {[
          ['Protein','142','180','g','#8A4A28'],
          ['Carbs','246','350','g','#C44000'],
          ['Fat','78','92','g','#1A6AB0'],
        ].map(([k,v,g,u,c]) => (
          <div key={k} className="bg-paper-50 border border-paper-300 rounded-lg px-2.5 py-1.5">
            <div className="flex items-center justify-between text-[9px] mb-0.5">
              <span className="text-ink-700 font-semibold">{k}</span>
              <span className="font-mono text-ink-500"><b className="text-ink-900">{v}</b>{u} / {g}{u}</span>
            </div>
            <div className="h-1 rounded-full bg-paper-300 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(parseInt(v)/parseInt(g))*100}%`, background: c }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Ring({ value, max, color, size = 86 }) {
  const stroke = 9
  const r = (size - stroke) / 2
  const C = 2 * Math.PI * r
  const pct = Math.min(1, value / max)
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} stroke="#E8E5DC" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none" strokeLinecap="round" strokeDasharray={`${pct*C} ${C}`} />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-display font-bold text-base text-ink-900 tabular-nums leading-none">78<span className="text-[8px] text-ink-400">%</span></div>
          <div className="text-[7px] uppercase text-ink-400 tracking-wider mt-0.5">of goal</div>
        </div>
      </div>
    </div>
  )
}

function MetricsScreen() {
  const data = [
    { k: 'HRV',        v: '68',     u: 'ms',   trend: '+4 vs 7d', good: true },
    { k: 'Resting HR', v: '47',     u: 'bpm',  trend: '-2 vs 7d', good: true },
    { k: 'Sleep',      v: '7h22',   u: '',     trend: '88% eff.', good: true },
    { k: 'Resp. rate', v: '14.2',   u: '/min', trend: 'In range', good: true },
  ]
  return (
    <div className="absolute inset-0 bg-paper-100 px-3 pt-9 pb-3 overflow-hidden">
      <StatusBar darkText />
      <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-ink-400 mb-2 px-1">Body Metrics · Today</div>
      <div className="grid grid-cols-2 gap-1.5 mb-2">
        {data.map(m => (
          <div key={m.k} className="rounded-xl bg-metrics border border-metrics-mid/20 p-2">
            <div className="text-[7px] uppercase tracking-wider text-metrics-text/70">{m.k}</div>
            <div className="font-display font-bold text-lg text-metrics-text tabular-nums leading-tight">{m.v}<span className="text-[8px] opacity-60 ml-0.5">{m.u}</span></div>
            <div className="text-[7px] text-recovery-done font-semibold mt-0.5">{m.trend}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-ink-900 text-paper-50 p-3 mt-2">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Sparkles size={10} className="text-accent-200" />
          <span className="text-[8px] font-semibold tracking-[0.16em] uppercase opacity-80">Coaching insight</span>
        </div>
        <p className="text-[9px] leading-snug opacity-90">
          Readiness is solid — HRV +4 over 7-day mean, RHR down 2 bpm. Today's Z2 bike is well within scope. Hold endurance intent.
        </p>
      </div>
    </div>
  )
}

function RecoveryScreen() {
  const items = [
    { k: 'Normatec',   done: true,  icon: Wind },
    { k: 'Cold Plunge',done: true,  icon: Snowflake },
    { k: 'Sauna',      done: false, icon: Flame },
    { k: 'Steam Room', done: false, icon: Waves },
    { k: 'Stretch',    done: false, icon: Dumbbell },
    { k: 'Roll out',   done: false, icon: HeartPulse },
  ]
  return (
    <div className="absolute inset-0 bg-paper-100 px-3 pt-9 pb-3 overflow-hidden">
      <StatusBar darkText />
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="text-[8px] font-semibold tracking-[0.2em] uppercase text-ink-400">Recovery · Today</div>
        <div className="text-[8px] font-mono text-ink-500">2 / 6</div>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {items.map(({k, done, icon: Icon}) => (
          <div key={k} className={`rounded-xl border px-2 py-2 flex items-center gap-1.5 ${
            done
              ? 'bg-recovery border-recovery-mid/30 text-recovery-text'
              : 'bg-paper-50 border-paper-300 text-ink-500'
          }`}>
            <div className={`w-5 h-5 rounded-md grid place-items-center ${done ? 'bg-recovery-card' : 'bg-paper-200'}`}>
              {done ? <Check size={10} className="text-recovery-done" /> : <Icon size={10} />}
            </div>
            <span className="text-[9px] font-medium leading-none">{k}</span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 rounded-xl bg-paper-50 border border-paper-300 p-2.5">
        <div className="text-[7px] uppercase tracking-[0.16em] text-ink-400 mb-1">Notes</div>
        <p className="text-[9px] text-ink-700 leading-snug">
          Left hip a bit tight after Tuesday's bike. Spent extra time on glute med.
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Scene definitions — left-side content + phone screen for each      */
/* ------------------------------------------------------------------ */

const scenes = [
  {
    key: 'welcome',
    eyebrow: 'iOS · TestFlight beta · coming soon',
    title: 'Sharpen the athlete.',
    body: 'Hona is the daily dashboard that keeps you honest about the small, consistent adjustments that compound into real change. Training, nutrition, body composition, recovery — one calm view, every morning.',
    cta: true,
    render: WelcomeScreen
  },
  {
    key: 'metrics',
    eyebrow: 'Training metrics',
    title: 'Where you are in the block.',
    body: 'Every morning, Hona surfaces the training-load numbers that frame the day — race day, training phase, week-in-block, and the CTL / ATL / TSB readout that tells you what kind of body you woke up in.',
    render: HeaderScreen
  },
  {
    key: 'training',
    eyebrow: 'Training',
    title: 'Today’s session, ready.',
    body: 'Workouts pulled from your plan via Apple Calendar (TrainingPeaks syncs through iCal). Tap any session to expand into step-by-step intervals, target zones, and TSS. Week view shows the full block at a glance.',
    render: TrainingScreen
  },
  {
    key: 'nutrition',
    eyebrow: 'Nutrition',
    title: 'What fueled the work.',
    body: 'Drop in a Cronometer CSV. Daily kcal, protein, carbs, fat — read against today’s burn and what the training calls for. 7-day trend shows the story the food log is actually telling.',
    render: NutritionScreen
  },
  {
    key: 'body-metrics',
    eyebrow: 'Body Metrics',
    title: 'How you woke up.',
    body: 'HRV, resting heart rate, sleep, and respiratory rate pulled from HealthKit (Oura → Apple Health). One tap for an AI-written readiness insight that frames the data against your week.',
    render: MetricsScreen
  },
  {
    key: 'recovery',
    eyebrow: 'Recovery',
    title: 'What you actually did.',
    body: 'A daily check-list — Normatec, cold plunge, sauna, steam, stretching, roll-out — plus a notes field for niggles or wins. Builds a longitudinal record of what your recovery routine looks like.',
    render: RecoveryScreen
  }
]

/* ------------------------------------------------------------------ */
/*  Main Showcase component — sticky phone + scrolling left content    */
/* ------------------------------------------------------------------ */

export default function Showcase({ brand }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  // Active-scene detection by direct scroll position, not IntersectionObserver.
  // A scene becomes active only once its top edge has crossed *above* the
  // viewport top — meaning the scene's content is now fully filling the
  // viewport and the reader has reached it. That timing keeps the phone in
  // sync with what's actually on screen on the left.
  useEffect(() => {
    let raf = 0
    const update = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        let activeI = 0
        // Walk top-to-bottom; the last scene whose top has crossed wins.
        sectionRefs.current.forEach((el, i) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          // ~80px hysteresis above the viewport top stabilises the transition
          // through nav-height padding and prevents flicker right at the edge.
          if (rect.top <= 80) {
            activeI = i
          }
        })
        setActiveIndex(activeI)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section id="showcase" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-[1fr_minmax(340px,auto)] gap-8 lg:gap-16">
          {/* ============ LEFT: scrolling content ============ */}
          <div>
            {scenes.map((scene, i) => (
              <div
                key={scene.key}
                ref={(el) => sectionRefs.current[i] = el}
                data-index={i}
                className="min-h-screen flex items-center py-16 first:pt-24 md:first:pt-32"
              >
                <SceneContent scene={scene} index={i} brand={brand} />
              </div>
            ))}
          </div>

          {/* ============ RIGHT: sticky phone (desktop only) ============ */}
          <aside className="hidden lg:block">
            <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
              <ShowcasePhone activeIndex={activeIndex} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function SceneContent({ scene, index, brand }) {
  return (
    <div className="max-w-xl">
      <span className="eyebrow">{scene.eyebrow}</span>
      <h2 className={`mt-4 font-display font-extrabold tracking-tightest text-ink-900 leading-[1.05] ${
        index === 0 ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'
      }`}>
        {scene.title}
      </h2>
      <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
        {scene.body}
      </p>
      {scene.cta && (
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={brand.betaSignupUrl} className="btn-primary">
            Join the beta <ArrowRight size={16} />
          </a>
          <a href="#screens" className="btn-ghost">
            <Play size={14} /> See the screens
          </a>
        </div>
      )}

      {/* Inline mini phone for mobile (since the sticky phone is hidden on mobile) */}
      <div className="lg:hidden mt-10 flex justify-center">
        <MiniPhone>{scene.render && scene.render()}</MiniPhone>
      </div>
    </div>
  )
}

function MiniPhone({ children }) {
  return (
    <div className="relative w-[260px] aspect-[9/19.5] rounded-[36px] bg-ink-900 border-[8px] border-ink-900 shadow-card overflow-hidden">
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-ink-900 z-10" />
      {children}
    </div>
  )
}

function ShowcasePhone({ activeIndex }) {
  return (
    <div className="relative w-[320px] xl:w-[360px] aspect-[9/19.5] rounded-[42px] bg-ink-900 border-[10px] border-ink-900 shadow-cardLift overflow-hidden">
      {/* notch */}
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-ink-900 z-30" />
      {/* progress rail — tiny indicator on the right edge showing scene position */}
      <div className="absolute right-1 top-12 bottom-12 w-0.5 bg-paper-50/10 z-20 rounded-full overflow-hidden">
        <div
          className="absolute left-0 right-0 bg-accent-500 transition-all duration-700"
          style={{
            top: `${(activeIndex / Math.max(1, scenes.length - 1)) * 100}%`,
            height: '14%'
          }}
        />
      </div>
      {/* Inner content column — all scenes stacked; translateY scrolls between them */}
      <div
        className="relative h-full"
        style={{
          transform: `translateY(-${activeIndex * 100}%)`,
          // Symmetric ease-in-out, slightly slower than before so the motion
          // reads as a deliberate scroll instead of a flick.
          transition: 'transform 1000ms cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {scenes.map((scene, i) => (
          <div key={scene.key} className="relative h-full w-full">
            {scene.render && scene.render()}
          </div>
        ))}
      </div>
    </div>
  )
}
