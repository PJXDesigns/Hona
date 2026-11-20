// "How it works" band. Five steps, one morning. Numbered rail like a training
// plan, not a feature grid.
const steps = [
  {
    title: 'Wake',
    body: 'Your overnight numbers are already in. HRV, sleep, resting heart rate, pulled from whichever wearable you wear.'
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
    body: 'Net carbs, protein, and energy targets timed around each session, matched to the work you actually did, not a generic day.'
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
        <span className="eyebrow">How it works</span>
        <h2 className="lead mt-5">
          Five reads. About <span className="lead-em">sixty seconds</span> each morning.
        </h2>

        <ol className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-5 bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-paper-50 p-6 md:p-7">
              <div className="font-mono text-[11px] tracking-widest text-accent-500 tnum">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-3 font-display font-semibold text-lg text-ink-900">{s.title}</h3>
              <p className="mt-2.5 text-sm text-ink-500 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
