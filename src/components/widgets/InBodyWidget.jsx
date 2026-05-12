import { useState } from 'react'
import { Activity } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts'

const scans = {
  '3m': [
    { date: 'Feb 23', weight: 138.4, smm: 68.9, bf: 11.1, pa: 7.9 },
    { date: 'Mar 09', weight: 138.0, smm: 69.2, bf: 10.6, pa: 8.0 },
    { date: 'Mar 23', weight: 137.6, smm: 69.7, bf: 10.2, pa: 8.0 },
    { date: 'Apr 06', weight: 137.5, smm: 70.3, bf:  9.9, pa: 8.1 },
    { date: 'Apr 20', weight: 137.8, smm: 71.0, bf:  9.4, pa: 8.2 },
    { date: 'May 04', weight: 138.2, smm: 71.6, bf:  9.2, pa: 8.2 }
  ],
  '6m': [
    { date: 'Nov 24', weight: 142.1, smm: 67.4, bf: 12.5, pa: 7.6 },
    { date: 'Dec 22', weight: 141.5, smm: 67.9, bf: 12.0, pa: 7.7 },
    { date: 'Jan 19', weight: 139.8, smm: 76.9, bf: 10.8, pa: 8.0 },
    { date: 'Feb 23', weight: 138.4, smm: 68.9, bf: 11.1, pa: 7.9 },
    { date: 'Mar 23', weight: 137.6, smm: 69.7, bf: 10.2, pa: 8.0 },
    { date: 'Apr 20', weight: 137.8, smm: 71.0, bf:  9.4, pa: 8.2 },
    { date: 'May 04', weight: 138.2, smm: 71.6, bf:  9.2, pa: 8.2 }
  ]
}

const metrics = [
  { key: 'smm',    label: 'SMM (lb)',     color: '#ff5d3f', goal: 75.0 },
  { key: 'weight', label: 'Weight (lb)',  color: '#7ad7ff' },
  { key: 'bf',     label: 'Body Fat %',   color: '#ffb14a' },
  { key: 'pa',     label: 'Phase Angle',  color: '#a78bfa' }
]

export default function InBodyWidget() {
  const [range, setRange] = useState('3m')
  const [metric, setMetric] = useState('smm')
  const data = scans[range]
  const latest = data[data.length - 1]
  const baseline = data[0]
  const m = metrics.find(x => x.key === metric)
  const delta = (latest[metric] - baseline[metric]).toFixed(1)
  const deltaPositive = parseFloat(delta) >= 0

  return (
    <div className="card p-5">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Activity size={18} className="text-flame-400" />
          <h3 className="font-display font-bold text-lg">InBody</h3>
        </div>
        <div className="flex gap-1 text-xs">
          {['3m','6m'].map(r => (
            <button key={r} onClick={() => setRange(r)}
              className={`px-2 py-1 rounded-md border transition ${
                range === r ? 'bg-flame-500/20 border-flame-500/50 text-white'
                            : 'border-white/10 muted hover:text-white'}`}>
              {r}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {metrics.map(x => {
          const v = latest[x.key]
          return (
            <button key={x.key} onClick={() => setMetric(x.key)}
              className={`rounded-lg border p-2.5 text-left transition ${
                metric === x.key ? 'bg-white/10 border-white/30' : 'bg-white/[0.02] border-white/10 hover:bg-white/5'}`}>
              <div className="text-[10px] uppercase muted tracking-wider truncate">{x.label}</div>
              <div className="font-display font-bold text-lg tabular-nums" style={{ color: metric === x.key ? x.color : 'white' }}>
                {v}
              </div>
            </button>
          )
        })}
      </div>

      <div className="h-44 -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 8, bottom: 0, left: 8 }}>
            <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis stroke="#666" tick={{ fontSize: 10 }} axisLine={false} tickLine={false}
                   domain={['dataMin - 0.5','dataMax + 0.5']} width={30} />
            <Tooltip
              contentStyle={{ background: '#14161d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, fontSize: 12 }}
              labelStyle={{ color: 'white' }}
            />
            {m.goal && <ReferenceLine y={m.goal} stroke={m.color} strokeDasharray="3 3" strokeOpacity={0.5} label={{ value: 'Goal', fill: m.color, fontSize: 10, position: 'right' }} />}
            <Line type="monotone" dataKey={metric} stroke={m.color} strokeWidth={2.5} dot={{ r: 4, fill: m.color }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <div className="muted">Last scan · {latest.date}</div>
        <div className={`font-mono ${deltaPositive ? 'text-emerald-400' : 'text-flame-400'}`}>
          {deltaPositive ? '↑' : '↓'} {Math.abs(delta)} since {baseline.date}
        </div>
      </div>
    </div>
  )
}
