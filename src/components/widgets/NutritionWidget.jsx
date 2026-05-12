import { useState } from 'react'
import { Apple } from 'lucide-react'

const days = [
  { label: 'Mon',    kcal: 2680, p: 168, c: 312, f: 92 },
  { label: 'Tue',    kcal: 2920, p: 184, c: 358, f: 96 },
  { label: 'Wed',    kcal: 2740, p: 175, c: 330, f: 88 },
  { label: 'Thu',    kcal: 3110, p: 192, c: 380, f: 102 },
  { label: 'Fri',    kcal: 2580, p: 170, c: 295, f: 86 },
  { label: 'Sat',    kcal: 3340, p: 188, c: 420, f: 108 },
  { label: 'Today',  kcal: 2180, p: 142, c: 246, f: 78, partial: true }
]

const goal = { kcal: 2800, p: 180, c: 350, f: 92 }

function Ring({ value, max, color, size = 96, stroke = 10, children }) {
  const r = (size - stroke) / 2
  const C = 2 * Math.PI * r
  const pct = Math.min(1, value / max)
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r}
                stroke={color} strokeWidth={stroke} fill="none"
                strokeLinecap="round"
                strokeDasharray={`${pct * C} ${C}`} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">{children}</div>
    </div>
  )
}

export default function NutritionWidget() {
  const [i, setI] = useState(days.length - 1)
  const d = days[i]
  return (
    <div className="card p-5">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Apple size={18} className="text-emerald-400" />
          <h3 className="font-display font-bold text-lg">Nutrition</h3>
        </div>
        <div className="text-xs muted">Cronometer · 7-day</div>
      </header>

      <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
        <Ring value={d.kcal} max={goal.kcal} color="#10b981" size={120} stroke={12}>
          <div>
            <div className="font-display font-bold text-2xl tabular-nums">{d.kcal}</div>
            <div className="text-[10px] muted uppercase tracking-wider">/ {goal.kcal} kcal</div>
          </div>
        </Ring>
        <div className="grid grid-cols-3 gap-2">
          <MacroCard label="Protein" value={d.p} goal={goal.p} unit="g" color="#ff5d3f" />
          <MacroCard label="Carbs"   value={d.c} goal={goal.c} unit="g" color="#ffb14a" />
          <MacroCard label="Fat"     value={d.f} goal={goal.f} unit="g" color="#7ad7ff" />
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-end gap-1 h-20">
          {days.map((dd, idx) => {
            const h = (dd.kcal / 3500) * 100
            const active = idx === i
            return (
              <button key={dd.label} onClick={() => setI(idx)}
                className="flex-1 flex flex-col items-center gap-1 group">
                <div className="w-full rounded-t-md transition-all"
                     style={{
                       height: `${h}%`,
                       background: active ? '#10b981' : dd.partial ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.1)'
                     }} />
                <div className={`text-[10px] ${active ? 'text-white' : 'muted'}`}>{dd.label}</div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function MacroCard({ label, value, goal, unit, color }) {
  const pct = Math.min(100, Math.round((value / goal) * 100))
  return (
    <div className="rounded-lg bg-white/5 border border-white/10 p-2.5">
      <div className="text-[10px] uppercase muted tracking-wider">{label}</div>
      <div className="font-display font-bold text-base tabular-nums">{value}<span className="text-[10px] muted">{unit}</span></div>
      <div className="mt-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
      </div>
      <div className="text-[10px] muted mt-1 font-mono">{pct}% of {goal}{unit}</div>
    </div>
  )
}
