import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import DeviceFrame from './DeviceFrame.jsx'

// Full-screen iOS captures shown inside a coded device frame (see DeviceFrame
// below). Source images live in /public/mockups/ as screen-N-*.jpg at native
// iPhone resolution (1206x2622); the frame handles bezel, corners, and the
// Dynamic Island, so the raw screenshots just need a clean status-bar area.
// Reorder by moving entries in this array; copy lives alongside each src.
const base = import.meta.env.BASE_URL
const screens = [
  {
    key: 'program',
    src: `${base}mockups/screen-1-program.jpg`,
    label: 'Down to the week.',
    caption: 'Phase, weekly load, and every session your coach planned, laid out block by block across the whole build.'
  },
  {
    key: 'today',
    src: `${base}mockups/screen-2-home.jpg`,
    label: 'One calm view, every morning.',
    caption: 'Today’s sessions, your fueling, and what your coach assigned, pulled together before you start the day.'
  },
  {
    key: 'fuel',
    src: `${base}mockups/screen-3-fuel.jpg`,
    label: 'What fueled the work.',
    caption: 'Energy balance, hydration, and per-session fueling, read against what you actually burned today.'
  },
  {
    key: 'body',
    src: `${base}mockups/screen-4-body.jpg`,
    label: 'How you woke up.',
    caption: 'Recovery, sleep, resting heart rate, and training load, pulled in from whichever wearable you already wear.'
  },
  {
    key: 'workout',
    src: `${base}mockups/screen-5-workout.jpg`,
    label: 'Every session, in detail.',
    caption: 'Coach notes, target zones, structure, and TSS, so you know exactly how the session should feel.'
  },
  {
    key: 'season',
    src: `${base}mockups/screen-6-season.jpg`,
    label: 'The whole season at a glance.',
    caption: 'Program progress, weeks to race, and training volume across every phase from base to taper.'
  },
  {
    key: 'coach',
    src: `${base}mockups/screen-7-ai-coach.jpg`,
    label: 'A coach that reads your data.',
    caption: 'Ask about training, fueling, or the week ahead, and get answers grounded in your real load and recovery.'
  },
  {
    key: 'fuel-model',
    src: `${base}mockups/screen-8-fuel-model.jpg`,
    label: 'Dialed in from your best days.',
    caption: 'Hona learns the carb, fluid, and sodium rates that held your power through the final third of your hardest sessions.'
  }
]

// How far the user must swipe (in pixels) before we treat it as a directional
// swipe rather than a tap or wobble. 50 is comfortable on most touchscreens.
const SWIPE_THRESHOLD = 50

export default function ScreenshotGallery() {
  const [i, setI] = useState(0)
  const next = () => setI(v => (v + 1) % screens.length)
  const prev = () => setI(v => (v - 1 + screens.length) % screens.length)
  const s = screens[i]

  // Track horizontal travel of the touch so we can fire next/prev on touchend.
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    if (touchStartX.current === null) return
    const dx = touchDeltaX.current
    if (dx <= -SWIPE_THRESHOLD) next()     // swiped left → next
    else if (dx >= SWIPE_THRESHOLD) prev() // swiped right → previous
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return (
    <section id="screens" className="band">
      <div className="wrap">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">The screens</span>
            <h2 className="lead mt-5">
              Real screens, <span className="lead-em">real data.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
              Straight from the current iOS build. More dropping in as the app comes together.
            </p>
          </div>
          <div className="pill"><ImageIcon size={14} /> <span>{screens.length} so far</span></div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div
            className="relative select-none touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            role="region"
            aria-label="Screen carousel. Swipe left or right to navigate"
          >
            <DeviceFrame src={s.src} alt={s.label} imgKey={s.key} />
          </div>

          <div>
            <div className="text-accent-500 text-sm font-mono uppercase tracking-widest">
              {String(i + 1).padStart(2, '0')} / {String(screens.length).padStart(2, '0')}
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl mt-2 text-ink-900 tracking-tight">{s.label}</h3>
            <p className="text-ink-500 text-lg mt-3 leading-relaxed">{s.caption}</p>

            <div className="mt-10 flex items-center gap-3">
              <button onClick={prev} aria-label="Previous screen" className="btn-ghost px-3 py-2"><ChevronLeft size={18} /></button>
              <button onClick={next} aria-label="Next screen"    className="btn-ghost px-3 py-2"><ChevronRight size={18} /></button>
              <div className="ml-4 flex gap-2 flex-wrap">
                {screens.map((sc, idx) => (
                  <button
                    key={sc.key}
                    aria-label={`Go to screen ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-8 bg-accent-500' : 'w-3 bg-paper-400 hover:bg-ink-300'}`}
                  />
                ))}
              </div>
              <span className="ml-auto text-xs text-ink-300 lg:hidden">Swipe to navigate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
