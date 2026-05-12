import { useState } from 'react'
import { Calendar, ChevronDown, ChevronUp, Bike, Footprints, Waves, Dumbbell, Moon } from 'lucide-react'

const week = [
  {
    day: 'Mon', date: 'May 11', rest: true,
    workouts: [{ type: 'Rest', title: 'Full rest day', dur: '—', tss: 0 }]
  },
  {
    day: 'Tue', date: 'May 12', today: true,
    workouts: [
      {
        type: 'Bike', title: 'Z2 Endurance · 90 min', dur: '1:30', tss: 142, zone: 'Z2',
        steps: ['WU · 10 min Z1', 'Main · 70 min steady Z2 (200–220 W)', 'CD · 10 min Z1']
      }
    ]
  },
  {
    day: 'Wed', date: 'May 13',
    workouts: [
      { type: 'Run',  title: 'AM Easy Run · 45 min', dur: '0:45', tss: 48, zone: 'Z1-Z2',
        steps: ['WU · 5 min walk-jog', 'Main · 35 min easy Z1-Z2', 'CD · 5 min walk'] },
      { type: 'Lift', title: 'Push (chest/shoulders/tri)', dur: '0:50', tss: 0, zone: 'Maintenance',
        steps: ['Bench 3×6 @ 70%', 'OHP 3×6', 'Incline DB press 3×8', 'Triceps superset 3×10'] },
      { type: 'Swim', title: 'PM Tech swim · 2,400 yd',  dur: '1:00', tss: 52, zone: 'Z2-Z3',
        steps: ['WU 400', 'Drill 8×50', 'Main 6×200 @ T-pace +5', 'CD 200'] }
    ]
  },
  {
    day: 'Thu', date: 'May 14',
    workouts: [
      { type: 'Bike', title: 'Sweet Spot 4×8\' · 100 min', dur: '1:40', tss: 198, zone: 'Z3-Z4',
        steps: ['WU · 15 min', '4 × 8\' @ 88–93% FTP / 4\' Z1', 'CD · 10 min'] }
    ]
  },
  {
    day: 'Fri', date: 'May 15',
    workouts: [
      { type: 'Run',  title: 'AM Tempo · 50 min', dur: '0:50', tss: 68, zone: 'Z3' },
      { type: 'Lift', title: 'Pull (back/biceps)', dur: '0:50', tss: 0, zone: 'Maintenance' },
      { type: 'Swim', title: 'PM Threshold · 3,000 yd', dur: '1:05', tss: 64, zone: 'Z3-Z4' }
    ]
  },
  {
    day: 'Sat', date: 'May 16',
    workouts: [
      { type: 'Bike', title: 'Long Z2 · 3:15', dur: '3:15', tss: 235, zone: 'Z2' }
    ]
  },
  {
    day: 'Sun', date: 'May 17',
    workouts: [
      { type: 'Run',  title: 'Long run · 1:45', dur: '1:45', tss: 132, zone: 'Z2' },
      { type: 'Swim', title: 'PM Recovery swim · 1,500 yd', dur: '0:35', tss: 30, zone: 'Z1' }
    ]
  }
]

const typeIcon = {
  Bike: Bike, Run: Footprints, Swim: Waves, Lift: Dumbbell, Rest: Moon
}

// Colors mirror AppTheme.swift exactly — each discipline has its pastel + deep-text pairing.
const typeColor = {
  Bike: 'text-bike-text bg-bike border-bike-text/20',
  Run:  'text-run-text  bg-run  border-run-text/20',
  Swim: 'text-swim-text bg-swim border-swim-text/20',
  Lift: 'text-strength-text bg-strength border-strength-text/20',
  Rest: 'text-rest-text bg-rest border-rest-text/15'
}

export default function TrainingWidget({ day, onDayChange }) {
  const [expanded, setExpanded] = useState(['Tue-0']) // expand today by default

  const toggle = (key) =>
    setExpanded((cur) => cur.includes(key) ? cur.filter(k => k !== key) : [...cur, key])

  return (
    <div className="card p-5">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar size={18} className="text-sand-900" />
          <h3 className="font-display font-bold text-lg text-sand-900">Training · This Week</h3>
        </div>
        <div className="text-xs muted">Tue → Sun · Mon rest</div>
      </header>

      <div className="grid grid-cols-7 gap-1.5 mb-4">
        {week.map(d => (
          <button
            key={d.day}
            onClick={() => onDayChange?.(d.day)}
            className={`text-center rounded-lg py-2 border transition ${
              d.today
                ? 'bg-sand-900 border-sand-900 text-sand-50'
                : d.rest
                ? 'bg-sand-100 border-sand-200 text-sand-500'
                : 'bg-sand-50 border-sand-300 text-sand-800 hover:border-sand-500'
            }`}
          >
            <div className="text-[10px] uppercase tracking-wider">{d.day}</div>
            <div className="font-display font-bold text-sm">{d.date.split(' ')[1]}</div>
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {week.map((d, di) => d.workouts.map((w, wi) => {
          const key = `${d.day}-${wi}`
          const Icon = typeIcon[w.type] || Calendar
          const open = expanded.includes(key)
          return (
            <div key={key} className={`rounded-xl border ${typeColor[w.type] || typeColor.Rest}`}>
              <button
                onClick={() => toggle(key)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-lg border bg-sand-50/70 grid place-items-center`}>
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider opacity-70">
                      {d.day} · {d.date} {d.today && <span className="font-bold ml-1">· Today</span>}
                    </div>
                    <div className="font-semibold truncate">{w.title}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono shrink-0">
                  <span className="opacity-60 hidden sm:inline">{w.zone}</span>
                  <span className="opacity-60">{w.dur}</span>
                  {w.tss > 0 && <span className="font-bold">{w.tss} TSS</span>}
                  {w.steps && (open ? <ChevronUp size={16} className="opacity-60" /> : <ChevronDown size={16} className="opacity-60" />)}
                </div>
              </button>
              {open && w.steps && (
                <div className="border-t border-current/10 px-4 py-3 space-y-1.5 bg-sand-50/40">
                  {w.steps.map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                      <span className="font-mono opacity-90">{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        }))}
      </div>
    </div>
  )
}
