import { useState } from 'react'
import { MousePointerClick } from 'lucide-react'
import HeaderBanner from './widgets/HeaderBanner.jsx'
import TrainingWidget from './widgets/TrainingWidget.jsx'
import InBodyWidget from './widgets/InBodyWidget.jsx'
import NutritionWidget from './widgets/NutritionWidget.jsx'
import BodyMetricsWidget from './widgets/BodyMetricsWidget.jsx'
import RecoveryWidget from './widgets/RecoveryWidget.jsx'

export default function InteractiveDemo() {
  const [day, setDay] = useState('Today')
  return (
    <section id="demo" className="relative py-24 md:py-32 hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Live demo · Dummy data</span>
            <h2 className="section-title mt-4">
              Play with the <span className="text-accent-500">dashboard.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-ink-500 leading-relaxed">
              All five tiles are live and clickable. Expand workouts, toggle recovery items,
              generate a coaching insight, switch InBody trend ranges. Numbers are mocked but
              the interaction is real.
            </p>
          </div>
          <div className="pill !text-accent-500 !border-accent-200 !bg-accent-50">
            <MousePointerClick size={14} /> Click anything
          </div>
        </div>

        <div className="rounded-3xl border border-paper-300 bg-paper-50 p-4 md:p-6 shadow-card">
          <HeaderBanner />

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
