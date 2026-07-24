import DeviceFrame from './DeviceFrame.jsx'

// The dark "core" band: the one inverted section on the page, reserved for
// the product's central promise. Everything on it uses the .on-dark styles.
const base = import.meta.env.BASE_URL

export default function Spotlight() {
  return (
    <section id="core" className="band on-dark bg-ink-900 text-paper-50 md:py-32">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-16 items-center">
          <div>
            <span className="eyebrow">The core</span>
            <h2 className="lead mt-5">
              Your morning numbers in. <span className="lead-em">One clear day</span> out.
            </h2>
            <p className="mt-6 text-lg text-ink-100/80 leading-relaxed max-w-xl">
              Readiness, training load, fueling, and the plan, distilled into what to do today.
              Ask the coach why, and it answers from your real numbers, not a script.
            </p>
            <p className="mt-6 text-sm text-ink-200/60 leading-relaxed max-w-xl">
              This is the whole product. History, trends, and the season view are built on top of it.
            </p>
          </div>

          <DeviceFrame
            src={`${base}mockups/screen-7-ai-coach.jpg`}
            alt="Hona's AI coach analyzing the week: training load, readiness, and a session recommendation grounded in the athlete's data."
            imgKey="spotlight-coach"
          />
        </div>
      </div>
    </section>
  )
}
