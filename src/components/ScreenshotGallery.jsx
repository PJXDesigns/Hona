import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'

// Drop new mockup images into /public/screens/, then add a row to this array.
// Files are referenced via BASE_URL so paths work in both dev and on the
// custom domain (hona.fitness/screens/...).
const base = import.meta.env.BASE_URL
const screens = [
  {
    key: 'header',
    src: `${base}screens/01-header.jpg`,
    label: 'The morning glance',
    caption: 'Race day, training phase, and the training-load numbers that frame the day — together with today’s session.'
  },
  {
    key: 'nutrition',
    src: `${base}screens/02-nutrition.jpg`,
    label: 'Nutrition, with context',
    caption: 'Macros, calories, and the 7-day trend — read against what you burned and what your training calls for.'
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
    <section id="screens" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Screens</span>
            <h2 className="section-title mt-4">A look at the app.</h2>
            <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
              Real renders from the iOS build. More dropping in as the app comes together.
            </p>
          </div>
          <div className="pill"><ImageIcon size={14} /> <span>{screens.length} so far</span></div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Full-bleed image — no extra phone frame because the renders include their own device.
              Swipe handlers live on this container so touch users can flick left/right. */}
          <div
            className="relative rounded-2xl overflow-hidden bg-paper-200 border border-paper-300 shadow-card select-none touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            role="region"
            aria-label="Screen carousel — swipe left or right to navigate"
          >
            <div className="aspect-[4/3]">
              <img
                key={s.key}
                src={s.src}
                alt={s.label}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
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
              <div className="ml-4 flex gap-2">
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
