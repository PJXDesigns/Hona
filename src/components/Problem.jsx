// "The problem" band. Mirrors the site's editorial unit: eyebrow, serif lead
// with one accent word, short body, then a scatter of the thoughts athletes
// actually have when their data lives in five places.
const thoughts = [
  '“why is my watch saying rest when the plan says intervals”',
  '“logged it in three apps, still no idea what today is”',
  '“skipped the swim, now the whole week feels off”',
  '“am I actually getting fitter?”',
  '“coach’s plan is still in a spreadsheet”'
]

export default function Problem() {
  return (
    <section id="problem" className="band band-tint">
      <div className="wrap">
        <span className="eyebrow">The problem</span>
        <h2 className="lead mt-5">
          Most training data just <span className="lead-em">sits there.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl">
          Your watch scores your sleep. Your platform charts your load. Your plan lives in a
          spreadsheet. Nothing reads them together, and nothing tells you what to do at 6 a.m.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {thoughts.map((t, i) => (
            <span
              key={t}
              className={`inline-block rounded-full border border-paper-400 bg-paper-100 px-4 py-2 text-sm text-ink-500 ${
                i % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.6deg]'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
