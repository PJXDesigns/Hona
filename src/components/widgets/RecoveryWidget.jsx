import { useState } from 'react'
import { Snowflake, Wind, Flame, Waves, StretchHorizontal, Hand, Check } from 'lucide-react'

const items = [
  { key: 'normatec',  label: 'Normatec',         icon: Wind },
  { key: 'plunge',    label: 'Cold Plunge',      icon: Snowflake },
  { key: 'sauna',     label: 'Sauna',            icon: Flame },
  { key: 'steam',     label: 'Steam Room',       icon: Waves },
  { key: 'stretch',   label: 'Stretch / Mobility', icon: StretchHorizontal },
  { key: 'roll',      label: 'Roll Out / Massage', icon: Hand }
]

export default function RecoveryWidget() {
  const [done, setDone] = useState({ plunge: true, normatec: true })
  const [notes, setNotes] = useState('Left hip a bit tight after Tuesday’s bike. Spent extra time on glute med.')
  const completed = Object.values(done).filter(Boolean).length

  const toggle = (k) => setDone(d => ({ ...d, [k]: !d[k] }))

  return (
    <div className="card p-5">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Snowflake size={18} className="text-ice-400" />
          <h3 className="font-display font-bold text-lg">Recovery</h3>
        </div>
        <div className="text-xs muted">{completed} / {items.length} today</div>
      </header>

      <div className="grid grid-cols-2 gap-2">
        {items.map(({ key, label, icon: Icon }) => {
          const active = !!done[key]
          return (
            <button
              key={key}
              onClick={() => toggle(key)}
              className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition text-left ${
                active
                  ? 'bg-ice-500/15 border-ice-500/40 text-white'
                  : 'bg-white/[0.02] border-white/10 hover:border-white/20 muted'
              }`}
            >
              <div className={`w-7 h-7 rounded-lg grid place-items-center ${active ? 'bg-ice-500/30' : 'bg-white/5'}`}>
                {active ? <Check size={14} className="text-ice-400" /> : <Icon size={14} />}
              </div>
              <span className="text-sm font-medium">{label}</span>
            </button>
          )
        })}
      </div>

      <label className="block mt-4">
        <span className="text-[10px] uppercase muted tracking-wider">Notes</span>
        <textarea
          value={notes}
          onChange={e => setNotes(e.target.value)}
          rows={2}
          className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-ice-500 transition resize-none"
          placeholder="How are the legs? Any niggles?"
        />
      </label>
    </div>
  )
}
