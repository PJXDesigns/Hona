// The core: Recovery, set in the app's own components from the design system
// (label, hero numeral, status phrase, rail, signal rows, and a coach note
// with its COACH · AI-GENERATED header and basis line). The numbers are the
// same sample morning the screenshots show (athlete "Alex"), so the page
// tells one story.
const signals = [
  { name: 'HRV', value: '58', unit: 'ms' },
  { name: 'Sleep', value: '7:05', unit: '' },
  { name: 'Resting HR', value: '49', unit: 'bpm' },
  { name: 'Load', value: 'Steady', unit: '' }
]

// The coach header's four-point star.
function Star({ className = '' }) {
  return (
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true" className={className}>
      <path d="M6 0 C6.5 3.6 8.4 5.5 12 6 C8.4 6.5 6.5 8.4 6 12 C5.5 8.4 3.6 6.5 0 6 C3.6 5.5 5.5 3.6 6 0 Z" fill="currentColor" />
    </svg>
  )
}

export default function Spotlight() {
  return (
    <section id="core" className="band">
      <div className="wrap grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
        <div>
          <div className="label">The core</div>
          <h2 className="mt-5 title-section">Your morning numbers in. One clear day out.</h2>
          <p className="mt-6 body max-w-[32rem]">
            Hona scores your recovery from last night&rsquo;s HRV, sleep, and resting heart rate, sets
            it against your training load, and says what it means for today&rsquo;s session. Ask the
            coach why, and it answers from your numbers.
          </p>
          <p className="mt-5 body-sm max-w-[32rem]">
            History, trends, and the season view are built on top of this one read.
          </p>
        </div>

        {/* The Recovery block, as Home and Body draw it. */}
        <div aria-label="Example: a Recovery score of 89, well recovered" className="lg:pt-2">
          <div className="label">Recovery · Thu Oct 22</div>
          <div className="mt-label-gap flex items-baseline gap-4">
            <span className="font-display font-semibold text-ink text-[56px] leading-[0.95] tracking-[-1.6px]">89</span>
            <span className="font-display font-semibold text-good text-[19px] leading-[1.25]">Well recovered</span>
          </div>
          <div className="mt-6 rail"><div className="rail-fill" style={{ width: '89%' }} /></div>

          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 border-t border-rule">
            {signals.map((s) => (
              <div key={s.name} className="pt-4 pb-1 pr-4">
                <dt className="unit uppercase">{s.name}</dt>
                <dd className="mt-2 font-display font-semibold text-ink text-[22px] leading-none tracking-[-0.4px]">
                  {s.value}
                  {s.unit && <span className="ml-1 unit">{s.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 pt-5 border-t border-rule">
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
      </div>
    </section>
  )
}
