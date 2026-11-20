// What Hona is not: a title, one paragraph, and the four things it isn't as
// plain rows.
const nots = ['A social feed', 'A generic logger', 'A replacement for your coach', 'Another to-do list']

export default function NotThis() {
  return (
    <section id="not" className="band">
      <div className="wrap grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <div className="label">What Hona is not</div>
          <h2 className="mt-5 title-section">Not one more app to babysit.</h2>
          <p className="mt-6 body max-w-[32rem]">
            No streaks to protect. No feed to scroll. No chart you fill in and forget. Hona does one
            job: it turns what your body says into what you do today.
          </p>
        </div>

        <ul className="md:pt-9 border-t border-rule">
          {nots.map((n) => (
            <li key={n} className="py-4 border-b border-rule font-display font-semibold text-[17px] text-ink">
              {n}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
