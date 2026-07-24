// "What Hona is not" band: the negative-space section. Four crossed-out
// categories and one job statement.
const nots = ['A social feed', 'A generic logger', 'A replacement coach', 'Another to-do list']

export default function NotThis() {
  return (
    <section id="not" className="band">
      <div className="wrap">
        <span className="eyebrow">What Hona is not</span>
        <h2 className="lead mt-5">
          Not one more app to <span className="lead-em">babysit.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed max-w-2xl">
          No streaks to protect. No feed to scroll. No chart you fill in and forget.
          Hona does one job: it turns what your body says into what you do today.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {nots.map((n) => (
            <span
              key={n}
              className="inline-block rounded-full border border-paper-400 px-4 py-2 text-sm text-ink-400 line-through decoration-accent-300 decoration-1"
            >
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
