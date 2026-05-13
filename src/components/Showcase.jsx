import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

// Helper for image-based scenes. Each image is pre-padded to 9:19.5 aspect
// with the app's paper background, so `object-cover` fills the phone screen
// exactly without any letterboxing visible inside the frame.
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
    render: () => <ScreenImage src={`${base}screens/prototype-1-start.jpg`} alt="Hona opening screen — the entry point into the daily dashboard." />
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
  // Bezel uses padding (not border) so the inner screen owns the 9:19.5
  // aspect ratio exactly — that way images of the same aspect fit without
  // object-cover cropping anything (= no "slightly zoomed" look).
  return (
    <div className="relative w-[336px] xl:w-[376px] rounded-[46px] bg-ink-900 shadow-cardLift p-3 xl:p-[14px]">
      {/* Inner screen — this is where the aspect lock lives */}
      <div className="relative aspect-[9/19.5] rounded-[34px] overflow-hidden">
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
    </div>
  )
}
