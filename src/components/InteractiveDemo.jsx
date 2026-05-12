import { useState } from 'react'
import { MousePointerClick } from 'lucide-react'
import HeaderBanner from './widgets/HeaderBanner.jsx'
import TrainingWidget from './widgets/TrainingWidget.jsx'
import InBodyWidget from './widgets/InBodyWidget.jsx'
import NutritionWidget from './widgets/NutritionWidget.jsx'
import BodyMetricsWidget from './widgets/BodyMetricsWidget.jsx'
import RecoveryWidget from './widgets/RecoveryWidget.jsx'

export default function InteractiveDemo({ brand }) {
  const [day, setDay] = useState('Today')
  return (
    <section id="demo" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="pill mb-4"><span>Live demo · Dummy data</span></div>
            <h2 className="section-title">Play with the full dashboard.</h2>
            <p className="mt-4 muted text-lg">
              All five widgets are live and clickable. Expand workouts, toggle recovery items, generate a coaching insight,
              switch InBody trend ranges. Numbers are mocked but the interaction is real.
            </p>
          </div>
          <div className="pill text-flame-300 border-flame-500/30 bg-flame-500/10">
            <MousePointerClick size={14} /> Click anything
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950 p-4 md:p-6 shadow-card">
          <HeaderBanner raceDate={brand.raceDate} />

          <div className="mt-4 grid lg:grid-cols-2 gap-4">
            <div className="lg:col-span-2">
              <TrainingWidget day={day} onDayChange={setDay} />
            </div>
            <BodyMetricsWidget />
            <InBodyWidget />
            <NutritionWidget />
            <RecoveryWidget />
          </div>
        </div>
      </div>
    </section>
  )
}
