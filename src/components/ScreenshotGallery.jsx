import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import DeviceFrame from './DeviceFrame.jsx'

// Full-screen iOS captures. Two kinds of entry:
//   framed: true  The image already includes its device (Screeny renders in an
//                 iPhone 18 Pro, silver, transparent background, WebP). Shown
//                 as is.
//   otherwise     A raw 1206x2622 capture shown inside the coded DeviceFrame.
// The framed screens are from the current UI (Nov 2026), captured from the
// simulator's fixture mode with sample data (athlete "Alex"). The coded-frame
// screens still show the previous UI until Train, Body and Coach are redone.
// Reorder by moving entries in this array; copy lives alongside each src.
const base = import.meta.env.BASE_URL
// Previous-UI screens (program, body, workout, season, coach) are hidden until
// Train, Body and Coach are redone; their images stay in /public/mockups.
const screens = [
  {
    key: 'home',
    framed: true,
    src: `${base}mockups/home.webp`,
    alt: 'Hona Home: Recovery 89, well recovered, with last night’s HRV, sleep and training load and a note from the Coach.',
    label: 'One clear read, every morning.',
    caption: 'Your Recovery score from last night’s HRV, sleep, and resting heart rate, set against your training load, with a short note from the Coach on what it means for today.'
  },
  {
    key: 'fuel',
    framed: true,
    src: `${base}mockups/fuel.webp`,
    alt: 'Hona Fuel: a 24-hour dial showing 210 of 576 g net carbs, with Before, During and After windows around a long run.',
    label: 'The whole day on one dial.',
    caption: 'Net carbs against the day’s target on a 24-hour dial, with Before, During, and After windows around every session.'
  },
  {
    key: 'fuel-during',
    framed: true,
    src: `${base}mockups/fuel-during.webp`,
    alt: 'Hona Fuel, the During window of a long run: four gels across 07:00 to 09:10, 100 of 98 g carbs at 46 g per hour.',
    label: 'Inside the run.',
    caption: 'Open a window and the dial opens with it: every gel on the clock, your carbs per hour, and how it compares to the guidance for a run that long.'
  },
  {
    key: 'fuel-during-logged',
    framed: true,
    src: `${base}mockups/fuel-during-logged.webp`,
    alt: 'Hona Fuel, the During window’s log: three Maurten Gel 100s and one Gel 100 CAF 100, with carbs, sodium and caffeine for each.',
    label: 'What you actually took.',
    caption: 'Each gel with its carbs, sodium, and caffeine, plus the longest gap between them, so the next long run starts from what worked.'
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
            {s.framed ? (
              <div className="mx-auto w-full max-w-[280px] sm:max-w-[300px]">
                <img
                  key={s.key}
                  src={s.src}
                  alt={s.alt}
                  draggable={false}
                  className="block w-full h-auto pointer-events-none drop-shadow-[0_30px_40px_rgba(20,20,18,0.18)]"
                />
              </div>
            ) : (
              <DeviceFrame src={s.src} alt={s.label} imgKey={s.key} />
            )}
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
