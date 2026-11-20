// The problem: label, title, one paragraph, then the questions athletes
// actually ask, as plain rows between hairlines.
const thoughts = [
  'Why is my watch saying rest when the plan says intervals?',
  'I logged it in three apps and still don’t know what today is.',
  'I skipped the swim, and now the whole week feels off.',
  'Am I actually getting fitter?',
  'My coach’s plan is still in a spreadsheet.'
]

export default function Problem() {
  return (
    <section id="problem" className="band">
      <div className="wrap grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <div className="label">The problem</div>
          <h2 className="mt-5 title-section">Most training data just sits there.</h2>
          <p className="mt-6 body max-w-[32rem]">
            Your watch scores your sleep. Your platform charts your load. Your plan lives in a
            spreadsheet. Nothing reads them together, and nothing tells you what to do at 6 a.m.
          </p>
        </div>

        <ul className="md:pt-9 border-t border-rule">
          {thoughts.map((t) => (
            <li key={t} className="py-4 border-b border-rule body-sm">“{t}”</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
