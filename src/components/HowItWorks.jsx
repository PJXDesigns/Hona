// How it works: five steps of one morning, as columns under a hairline,
// numbered with SF Pro labels.
const steps = [
  {
    title: 'Wake',
    body: 'Your overnight numbers are already in: HRV, sleep, and resting heart rate, from whichever wearable you wear.'
  },
  {
    title: 'Read',
    body: 'One Recovery score, set against the load your plan asks of you today.'
  },
  {
    title: 'Train',
    body: 'The session your coach or program calls for, down to the intervals and target zones.'
  },
  {
    title: 'Fuel',
    body: 'Net carbs, protein, and energy targets timed around each session, matched to the work you actually did.'
  },
  {
    title: 'Adjust',
    body: 'Tomorrow bends to how today went. The arc builds quietly over months.'
  }
]

export default function HowItWorks() {
  return (
    <section id="loop" className="band">
      <div className="wrap">
        <div className="label">How it works</div>
        <h2 className="mt-5 title-section">Five reads, about a minute each morning.</h2>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s.title} className="pt-5 border-t border-ink">
              <div className="label">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mt-3 title-block">{s.title}</h3>
              <p className="mt-2 body-sm">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
