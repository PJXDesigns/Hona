import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

// Inline H mark for the welcome scene — saves one extra HTTP request.
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

function StatusBar({ darkText = false }) {
  return (
    <div className={`absolute top-0 inset-x-0 h-7 z-20 flex items-center justify-between px-6 text-[9px] font-semibold ${darkText ? 'text-ink-900' : 'text-paper-50'}`}>
      <span>9:41</span>
      <span className="opacity-80">●●●</span>
    </div>
  )
}

// Welcome scene — stays as JSX for now. Replace with a real onboarding
// screenshot whenever the app gets one and the visual will pop in cleanly.
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

// Helper for image-based scenes. Image is pre-padded to 9:19.5 aspect with the
// app's paper background, so `object-cover` fills the phone screen exactly.
function ScreenImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
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
    render: () => <ScreenImage src={`${base}screens/prototype-2-metrics.jpg`} alt="Hona dashboard header showing the Ironman Texas countdown, CTL, ATL, TSB, and a 42-day TSS chart." />
  },
  {
    key: 'training',
    eyebrow: 'Training',
    title: 'Today’s session, ready.',
    body: 'Workouts pulled from your plan via Apple Calendar (TrainingPeaks syncs through iCal). Tap any session to expand into step-by-step intervals, target zones, and TSS. Week view shows the full block at a glance.',
    render: () => <ScreenImage src={`${base}screens/prototype-3-training.jpg`} alt="Hona training calendar — May 2026 view with completed and upcoming sessions, plus today’s coaching program." />
  },
  {
    key: 'nutrition',
    eyebrow: 'Nutrition',
    title: 'What fueled the work.',
    body: 'Drop in a Cronometer CSV. Daily kcal, protein, carbs, fat — read against today’s burn and what the training calls for. 7-day trend shows the story the food log is actually telling.',
    render: () => <ScreenImage src={`${base}screens/prototype-4-nutrition.jpg`} alt="Hona nutrition screen — daily macros and calorie totals." />
  },
  {
    key: 'body-metrics',
    eyebrow: 'Body Metrics',
    title: 'How you woke up.',
    body: 'HRV, resting heart rate, sleep, and respiratory rate pulled from HealthKit (Oura → Apple Health). One tap for an AI-written readiness insight that frames the data against your week.',
    render: () => <ScreenImage src={`${base}screens/prototype-5-body-metrics.jpg`} alt="Hona body metrics screen — HRV, sleep, SpO2, VO2 Max, body composition, and Generate coaching insight button." />
  },
  {
    key: 'recovery',
    eyebrow: 'Recovery',
    title: 'What you actually did.',
    body: 'A daily check-list — Normatec, cold plunge, sauna, steam, stretching, roll-out — plus a notes field for niggles or wins. Builds a longitudinal record of what your recovery routine looks like.',
    render: () => <ScreenImage src={`${base}screens/prototype-6-recovery.jpg`} alt="Hona recovery screen — three of six modalities complete, with notes." />
  }
]

/* ------------------------------------------------------------------ */
/*  Main Showcase component — sticky phone + scrolling left content    */
/* ------------------------------------------------------------------ */

export default function Showcase({ brand }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef([])

  // Active-scene detection by direct scroll position, not IntersectionObserver.
  // A scene becomes active once its top edge has scrolled to ~160px from the
  // viewport top — meaning its headline is just entering the reading zone.
  // Tune the `160` to taste: bigger = phone changes sooner.
  useEffect(() => {
    let raf = 0
    const update = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        let activeI = 0
        sectionRefs.current.forEach((el, i) => {
          if (!el) return
          const rect = el.getBoundingClientRect()
          if (rect.top <= 160) {
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

      {/* Inline mini phone for mobile (sticky phone is hidden on small screens) */}
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
      {/* progress rail */}
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
          transition: 'transform 1000ms cubic-bezier(0.65, 0, 0.35, 1)'
        }}
      >
        {scenes.map((scene) => (
          <div key={scene.key} className="relative h-full w-full">
            {scene.render && scene.render()}
          </div>
        ))}
      </div>
    </div>
  )
}
