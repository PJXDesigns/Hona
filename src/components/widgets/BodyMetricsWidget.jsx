import { useState } from 'react'
import { HeartPulse, Sparkles, Loader2 } from 'lucide-react'

const metrics = [
  { key: 'hrv',  label: 'HRV',         value: 68,    unit: 'ms',   trend: '+4 vs 7d avg', good: true,
    spark: [54,58,62,59,64,66,68] },
  { key: 'rhr',  label: 'Resting HR',  value: 47,    unit: 'bpm',  trend: '-2 vs 7d avg', good: true,
    spark: [50,49,49,48,48,48,47] },
  { key: 'sleep',label: 'Sleep',       value: '7h22', unit: '',     trend: '88% efficiency', good: true,
    spark: [6.8,7.1,7.4,6.9,7.2,7.5,7.4] },
  { key: 'resp', label: 'Resp. rate',  value: 14.2,  unit: '/min', trend: 'In range', good: true,
    spark: [14.4,14.1,14.0,14.3,14.2,14.1,14.2] }
]

const sampleInsight = `Readiness is solid — HRV is trending +4 over the 7-day rolling average and resting HR has dropped 2 bpm. Sleep landed at 7h22 with 88% efficiency, so the planned Z2 bike (142 TSS) is well within scope today. Hold endurance intent; resist the temptation to push to sweet spot just because legs feel good. Wednesday’s double (run + lift + swim) is the test of whether this recovery sticks.`

export default function BodyMetricsWidget() {
  const [insight, setInsight] = useState(null)
  const [loading, setLoading] = useState(false)

  const generate = () => {
    setLoading(true)
    setInsight(null)
    // Simulated streaming-style reveal
    setTimeout(() => {
      setLoading(false)
      setInsight(sampleInsight)
    }, 1400)
  }

  return (
    <div className="card p-5">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HeartPulse size={18} className="text-ice-400" />
          <h3 className="font-display font-bold text-lg">Body Metrics</h3>
        </div>
        <div className="text-xs muted">HealthKit · Oura</div>
      </header>

      <div className="grid grid-cols-2 gap-2">
        {metrics.map(m => (
          <div key={m.key} className="rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase muted tracking-wider">{m.label}</div>
              <Sparkline data={m.spark} color={m.good ? '#10b981' : '#ff5d3f'} />
            </div>
            <div className="font-display font-bold text-2xl tabular-nums mt-0.5">
              {m.value}<span className="text-[10px] muted ml-0.5">{m.unit}</span>
            </div>
            <div className={`text-[11px] mt-0.5 ${m.good ? 'text-emerald-400' : 'text-flame-400'}`}>{m.trend}</div>
          </div>
        ))}
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-flame-500 to-flame-700 hover:from-flame-400 hover:to-flame-600 transition px-4 py-2.5 font-semibold text-sm disabled:opacity-70"
      >
        {loading ? <><Loader2 size={16} className="animate-spin" /> Thinking…</> : <><Sparkles size={16} /> Generate coaching insight</>}
      </button>

      {insight && (
        <div className="mt-3 rounded-xl border border-flame-500/30 bg-flame-500/5 p-3 text-sm leading-relaxed">
          <div className="text-[10px] uppercase tracking-wider text-flame-300 mb-1">Coaching insight · Claude</div>
          {insight}
        </div>
      )}
    </div>
  )
}

function Sparkline({ data, color }) {
  const w = 50, h = 16
  const min = Math.min(...data), max = Math.max(...data)
  const span = max - min || 1
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / span) * h
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} className="overflow-visible">
      <polyline fill="none" stroke={color} strokeWidth="1.5" points={pts} />
    </svg>
  )
}
