import { useEffect, useRef, useState } from 'react'

// "A morning with Hona": the page's story, told as one athlete's morning in
// the app. Each step is a time on the left, a short read on the right, and
// (on large screens) one phone that stays pinned beside the steps and swaps
// to that step's screen as you scroll. On small screens each step carries
// its own screen inline.
//
// Everything shown is the same sample morning the app's fixture mode
// renders: athlete Alex, Thu Oct 22, week 6 of a marathon build, a 2:10 long
// run at 07:00. Screens are Screeny renders (iPhone 18 Pro, silver).
const base = import.meta.env.BASE_URL

const screens = {
  home:   { src: `${base}mockups/home.webp`, alt: 'Hona Home: Recovery 89, well recovered, with last night’s HRV, sleep and load and a note from the Coach.' },
  fuel:   { src: `${base}mockups/fuel.webp`, alt: 'Hona Fuel: a 24-hour dial showing 210 of 576 g net carbs, with Before, During and After windows around a long run.' },
  during: { src: `${base}mockups/fuel-during.webp`, alt: 'Hona Fuel, the During window: four gels across 07:00 to 09:10, 100 of 98 g carbs at 46 g per hour.' },
  logged: { src: `${base}mockups/fuel-during-logged.webp`, alt: 'Hona Fuel, the During log: three Maurten Gel 100s and one Gel 100 CAF 100, with carbs, sodium and caffeine.' }
}
const order = ['home', 'fuel', 'during', 'logged']

const steps = [
  {
    time: '05:40',
    name: 'Wake',
    screen: 'home',
    title: 'Your night is already in.',
    body: 'HRV, sleep, and resting heart rate arrive from the wearable you already wear. There is nothing to log.',
    stats: [
      { name: 'HRV', value: '58', unit: 'ms' },
      { name: 'Sleep', value: '7:05' },
      { name: 'Resting HR', value: '49', unit: 'bpm' }
    ]
  },
  {
    time: '06:00',
    name: 'Read',
    screen: 'home',
    title: 'One score for the day.',
    body: 'Hona sets last night against your own normal and against this week’s training load. The Coach says what it means for the session you have planned.',
    recovery: true
  },
  {
    time: '06:30',
    name: 'Fuel',
    screen: 'fuel',
    title: 'Fuel the session, not just the day.',
    body: 'The day’s net carbs sit on a 24-hour dial, with Before, During, and After windows around every session. Before a 07:00 long run, the Before window is a 20–30 g top-up.'
  },
  {
    time: '07:00',
    name: 'Run',
    screen: 'during',
    title: 'Inside the run.',
    body: 'Open the During window and the dial opens with it: every gel on the clock, and your carbs per hour against the guidance for a run that long.',
    stats: [
      { name: 'Carbs', value: '100', unit: 'of 98 g' },
      { name: 'Rate', value: '46', unit: 'g/hr' },
      { name: 'Guidance', value: '30–60', unit: 'g/hr' }
    ]
  },
  {
    time: '09:10',
    name: 'Review',
    screen: 'logged',
    title: 'What you actually took.',
    body: 'Each gel with its carbs, sodium, and caffeine, and the longest gap between them, so the next long run starts from what worked.'
  }
]

function Stats({ items }) {
  return (
    <dl className="mt-8 grid grid-cols-3 border-t border-rule max-w-[28rem]">
      {items.map((s) => (
        <div key={s.name} className="pt-4 pr-4">
          <dt className="unit uppercase">{s.name}</dt>
          <dd className="mt-2 font-display font-semibold text-ink text-[22px] leading-none tracking-[-0.4px]">
            {s.value}
            {s.unit && <span className="ml-1 unit">{s.unit}</span>}
          </dd>
        </div>
      ))}
    </dl>
  )
}

// The coach header's four-point star.
function Star() {
  return (
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <path d="M6 0 C6.5 3.6 8.4 5.5 12 6 C8.4 6.5 6.5 8.4 6 12 C5.5 8.4 3.6 6.5 0 6 C3.6 5.5 5.5 3.6 6 0 Z" fill="currentColor" />
    </svg>
  )
}

// Recovery, drawn with the app's own pieces: label, numeral, status, rail,
// and a coach note with its header and basis line.
function RecoveryRead() {
  return (
    <div className="mt-9 max-w-[28rem]" aria-label="Example: a Recovery score of 89, well recovered">
      <div className="label">Recovery</div>
      <div className="mt-label-gap flex items-baseline gap-4">
        <span className="font-display font-semibold text-ink text-[56px] leading-[0.95] tracking-[-1.6px]">89</span>
        <span className="font-display font-semibold text-good text-[19px] leading-[1.25]">Well recovered</span>
      </div>
      <div className="mt-5 rail"><div className="rail-fill" style={{ width: '89%' }} /></div>

      <div className="mt-8 pt-5 border-t border-rule">
        <div className="flex items-center justify-between">
          <span className="label text-sage inline-flex items-center gap-2"><Star /> Coach</span>
          <span className="unit">AI-GENERATED</span>
        </div>
        <p className="mt-4 font-serif text-[16px] leading-[1.6] text-ink">
          Recovery is close to your normal, with sleep a little short of your need. Keep
          today&rsquo;s run as written, at the easy end of its range.
        </p>
        <p className="mt-3 font-serif text-[13px] leading-[1.5] text-ink-3">
          Based on last night&rsquo;s HRV, resting HR and sleep from Whoop, this week&rsquo;s load from
          your runs, and today&rsquo;s plan.
        </p>
      </div>
    </div>
  )
}

function Phone({ screen, className = '' }) {
  const s = screens[screen]
  return (
    <img src={s.src} alt={s.alt} draggable={false} loading="lazy" className={`block w-full h-auto ${className}`} />
  )
}

export default function Morning() {
  const [active, setActive] = useState(0)
  const refs = useRef([])

  // The step whose middle is nearest the middle of the viewport is active.
  useEffect(() => {
    const els = refs.current.filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.index))
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const current = steps[active].screen

  return (
    <section id="morning" className="band">
      <div className="wrap">
        <div className="max-w-[40rem]">
          <div className="label">A morning with Hona</div>
          <h2 className="mt-5 title-section">What one clear day looks like.</h2>
          <p className="mt-6 body">
            One athlete&rsquo;s Thursday in week 6 of a marathon build, from waking up to the end of
            a two-hour long run. Sample data, real screens.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-24">
          <ol>
            {steps.map((s, i) => (
              <li
                key={s.time}
                ref={(el) => (refs.current[i] = el)}
                data-index={i}
                className="grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr] gap-x-4 border-t border-rule pt-6 pb-16 lg:min-h-[78vh]"
              >
                <div>
                  <div className={`font-display font-semibold text-[22px] leading-none tracking-[-0.4px] transition-colors duration-[180ms] ease-out ${i === active ? 'text-ink' : 'text-ink-3'}`}>
                    {s.time}
                  </div>
                  <div className="mt-2 label">{s.name}</div>
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-[26px] md:text-[30px] leading-[1.15] tracking-[-0.02em]">{s.title}</h3>
                  <p className="mt-4 body max-w-[32rem]">{s.body}</p>
                  {s.stats && <Stats items={s.stats} />}
                  {s.recovery && <RecoveryRead />}
                  {/* Small screens: the step's own screen, inline, unless the
                      step before already showed it. */}
                  {(i === 0 || steps[i - 1].screen !== s.screen) && (
                    <div className="mt-10 max-w-[240px] lg:hidden">
                      <Phone screen={s.screen} />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>

          {/* Large screens: one phone, pinned, swapping screens with a
              180ms ease-out crossfade (the design system's state change). */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="sticky top-[calc(50vh-300px)]">
              <div className="relative w-[300px] mx-auto">
                <Phone screen="home" className="invisible" />
                {order.map((key) => (
                  <img
                    key={key}
                    src={screens[key].src}
                    alt=""
                    draggable={false}
                    className={`absolute inset-0 w-full h-auto transition-opacity duration-[180ms] ease-out ${current === key ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
              </div>
              <div className="mt-6 flex justify-center gap-1.5">
                {steps.map((s, i) => (
                  <span key={s.time} className={`h-[3px] w-8 transition-colors duration-[180ms] ${i === active ? 'bg-sage' : 'bg-track'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
