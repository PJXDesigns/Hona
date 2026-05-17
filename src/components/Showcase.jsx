import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Play, Activity, Calendar, Apple, HeartPulse, Snowflake } from 'lucide-react'

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
/*  Scene definitions: left-side content + phone screen for each       */
/* ------------------------------------------------------------------ */

const scenes = [
  {
    key: 'welcome',
    // No `tab` field on the welcome scene: it is the section hero on mobile
    // and the opening sticky scene on desktop, but never a tab option.
    eyebrow: 'iOS · TestFlight beta · free',
    title: 'Sharpen the athlete.',
    body: 'A daily dashboard that keeps you honest about the small, consistent work that compounds. Training, nutrition, body composition, recovery. One calm view, every morning.',
    cta: true,
    render: () => <ScreenImage src={`${base}screens/prototype-1-start.jpg`} alt="Hona opening screen, the entry point into the daily dashboard." />
  },
  {
    key: 'metrics',
    tab: 'Metrics',
    icon: Activity,
    eyebrow: 'Training metrics',
    title: 'Where you are in the block.',
    body: 'Every morning, Hona surfaces the training-load numbers that frame the day: race day, training phase, week-in-block, and the CTL / ATL / TSB readout that tells you what kind of body you woke up in.',
    render: () => <ScreenImage src={`${base}screens/prototype-2-metrics.jpg`} alt="Hona dashboard header showing the Ironman Texas countdown, CTL, ATL, TSB, and a 42-day TSS chart." />
  },
  {
    key: 'training',
    tab: 'Training',
    icon: Calendar,
    eyebrow: 'Training',
    title: 'Today’s session, ready.',
    body: 'Workouts from your training plan, surfaced for today and the rest of the week. Tap any session to expand into step-by-step intervals, target zones, and TSS. Connect once and the plan stays in sync as your coach updates it.',
    render: () => <ScreenImage src={`${base}screens/prototype-3-training.jpg`} alt="Hona training calendar showing May 2026 with completed and upcoming sessions plus today’s coaching program." />
  },
  {
    key: 'nutrition',
    tab: 'Nutrition',
    icon: Apple,
    eyebrow: 'Nutrition',
    title: 'What fueled the work.',
    body: 'Bring in your nutrition log of daily kcal, protein, carbs, and fat. Read it against today’s burn and what the training calls for. The 7-day trend shows the story the food log is actually telling.',
    render: () => <ScreenImage src={`${base}screens/prototype-4-nutrition.jpg`} alt="Hona nutrition screen with daily macros and calorie totals." />
  },
  {
    key: 'body-metrics',
    tab: 'Body',
    icon: HeartPulse,
    eyebrow: 'Body Metrics',
    title: 'How you woke up.',
    body: 'HRV, resting heart rate, sleep, and respiratory rate, pulled from whichever wearable you already wear. One tap for an AI-written readiness insight that frames the data against your week.',
    render: () => <ScreenImage src={`${base}screens/prototype-5-body-metrics.jpg`} alt="Hona body metrics screen showing HRV, sleep, SpO2, VO2 Max, body composition, and a Generate coaching insight button." />
  },
  {
    key: 'recovery',
    tab: 'Recovery',
    icon: Snowflake,
    eyebrow: 'Recovery',
    title: 'What you did to recover.',
    body: 'Pick the recovery modalities that matter to you and check them off daily. Add notes for niggles, breakthroughs, or anything you want to remember. Over weeks it builds a real record of how you actually take care of yourself between sessions.',
    render: () => <ScreenImage src={`${base}screens/prototype-6-recovery.jpg`} alt="Hona recovery screen with a daily check-list and notes." />
  }
]

// Tabs exclude the welcome scene (index 0).
const tabScenes = scenes.slice(1)

/* ------------------------------------------------------------------ */
/*  Main Showcase component                                            */
/* ------------------------------------------------------------------ */

export default function Showcase({ brand }) {
  // On mobile the welcome scene is shown as the section hero, so the
  // interactive prototype starts at the first widget (Metrics, index 1).
  const [activeIndex, setActiveIndex] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return 1
    return 0
  })
  const sectionRefs = useRef([])

  // Desktop scroll-driven active scene. Bails on mobile.
  useEffect(() => {
    let raf = 0
    const update = () => {
      if (window.innerWidth < 1024) return
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

  // For mobile: if for any reason activeIndex is 0 (welcome), the tab bar would
  // show nothing as selected. Treat 0 as the first widget for display purposes.
  const displayIndex = activeIndex === 0 ? 1 : activeIndex
  const welcome = scenes[0]
  const active = scenes[displayIndex]

  return (
    <section id="showcase" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* ============ MOBILE LAYOUT ============ */}
        <div className="lg:hidden">
          {/* Welcome hero — always visible at the top of the section */}
          <div className="pt-16 pb-10 text-center max-w-lg mx-auto">
            <span className="eyebrow">{welcome.eyebrow}</span>
            <h2 className="font-display font-extrabold tracking-tightest text-ink-900 text-4xl sm:text-5xl leading-[1.05] mt-3">
              {welcome.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-500 leading-relaxed">
              {welcome.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <a href={brand.betaSignupUrl} className="btn-primary">
                Join the beta <ArrowRight size={16} />
              </a>
              <a href="#screens" className="btn-ghost">
                <Play size={14} /> See the screens
              </a>
            </div>
          </div>

          {/* Prototype area — phone, scene text, then tabs. Compact so all three
              elements fit in a single mobile viewport. */}
          <div className="pb-16">
            <div className="flex justify-center mb-5">
              <ShowcasePhone activeIndex={displayIndex} />
            </div>

            {/* Active scene text */}
            <div className="text-center max-w-lg mx-auto mb-5 px-2">
              <span className="eyebrow">{active.eyebrow}</span>
              <h3 className="font-display font-bold tracking-tight text-ink-900 text-2xl sm:text-3xl leading-snug mt-2">
                {active.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-ink-500 leading-relaxed">
                {active.body}
              </p>
            </div>

            {/* Tab bar (5 tabs, no Welcome) */}
            <TabBar activeIndex={displayIndex} onSelect={setActiveIndex} />
          </div>
        </div>

        {/* ============ DESKTOP LAYOUT ============ */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_minmax(340px,auto)] gap-8 lg:gap-16">
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

          <aside>
            <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
              <ShowcasePhone activeIndex={activeIndex} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  TabBar — mobile only. Styled like an iOS in-app tab bar.            */
/*  Skips the welcome scene; 5 tabs total.                              */
/* ------------------------------------------------------------------ */

function TabBar({ activeIndex, onSelect }) {
  return (
    <div className="flex justify-center px-1">
      <nav
        role="tablist"
        aria-label="Prototype views"
        className="inline-flex items-stretch gap-1 bg-paper-50 border border-paper-300 rounded-full p-1.5 shadow-card max-w-full overflow-x-auto no-scrollbar"
      >
        {tabScenes.map((scene) => {
          const Icon = scene.icon
          // The scene's true index in the full `scenes` array is +1 since we sliced off welcome.
          const sceneIndex = scenes.indexOf(scene)
          const isActive = sceneIndex === activeIndex
          return (
            <button
              key={scene.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(sceneIndex)}
              className={`flex flex-col items-center justify-center gap-0.5 px-2.5 sm:px-3 py-1.5 rounded-full transition-colors min-w-[58px] sm:min-w-[64px] ${
                isActive
                  ? 'bg-ink-900 text-paper-50'
                  : 'text-ink-400 hover:text-ink-900'
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              <span className="text-[10px] font-semibold tracking-tight leading-tight">{scene.tab}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Desktop scene block — left-side content                             */
/* ------------------------------------------------------------------ */

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
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  ShowcasePhone — titanium-bezel iPhone with translateY scrolly inside */
/* ------------------------------------------------------------------ */

// Bezel colors approximate iPhone 16 Pro "Desert Titanium", a warm copper that
// complements the brand brown. The thin black inner band is the realistic
// "chamfer" between the metal frame and the glass display.
const BEZEL_GRADIENT = 'linear-gradient(135deg, #D19764 0%, #B57746 45%, #9A6234 100%)'
const BEZEL_FLAT     = '#B57746'   // for side-button strips
const CHAMFER        = '#0A0A0A'

function ShowcasePhone({ activeIndex }) {
  return (
    <div className="relative">
      {/* Side buttons sit slightly proud. Positioned in percentages so they
          stay correct across all phone sizes. */}
      <div className="absolute -left-[3px] top-[15%]  w-[3px] h-[5%]  rounded-l z-10" style={{ background: BEZEL_FLAT }} />
      <div className="absolute -left-[3px] top-[23%]  w-[3px] h-[9%]  rounded-l z-10" style={{ background: BEZEL_FLAT }} />
      <div className="absolute -left-[3px] top-[34%]  w-[3px] h-[9%]  rounded-l z-10" style={{ background: BEZEL_FLAT }} />
      <div className="absolute -right-[3px] top-[21%] w-[3px] h-[12%] rounded-r z-10" style={{ background: BEZEL_FLAT }} />

      {/* Outer phone shell: titanium-tone metal frame.
          Sizes: 196px on small mobile, 216px sm, 228px desktop, 260px xl. */}
      <div
        className="relative w-[196px] sm:w-[216px] lg:w-[228px] xl:w-[260px] rounded-[38px] sm:rounded-[40px] lg:rounded-[42px] shadow-cardLift p-[6px]"
        style={{ background: BEZEL_GRADIENT }}
      >
        {/* Inner black chamfer */}
        <div className="relative rounded-[32px] sm:rounded-[34px] lg:rounded-[36px] p-[2px]" style={{ background: CHAMFER }}>
          {/* Screen */}
          <div className="relative aspect-[9/19.5] rounded-[30px] sm:rounded-[32px] lg:rounded-[34px] overflow-hidden bg-paper-100">
            {/* Dynamic Island */}
            <div
              className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[70px] sm:w-[74px] lg:w-[78px] h-[20px] sm:h-[21px] lg:h-[22px] rounded-full z-30"
              style={{ background: CHAMFER }}
            />
            {/* Progress rail showing scene position */}
            <div className="absolute right-1 top-12 bottom-12 w-0.5 bg-paper-50/10 z-20 rounded-full overflow-hidden">
              <div
                className="absolute left-0 right-0 bg-accent-500 transition-all duration-700"
                style={{
                  top: `${(activeIndex / Math.max(1, scenes.length - 1)) * 100}%`,
                  height: '14%'
                }}
              />
            </div>
            {/* Inner content column: all scenes stacked; translateY scrolls between them */}
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
      </div>
    </div>
  )
}
