import { Hammer, Activity, Gauge, Battery } from 'lucide-react'

export default function HeaderBanner() {
  // Example demo values — in the real app these come from Apple Calendar,
  // HealthKit, and the training-plan model.
  const block = { name: 'Build', week: 4, of: 12 }
  const today = 'Tuesday'
  const ctl = 48, atl = 42, tsb = ctl - atl
  const weeklyTSS = 415
  const progress = block.week / block.of

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-flame-600 via-flame-700 to-flame-900 border border-flame-500/40 p-5 md:p-7 shadow-glow">
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="flex items-center gap-2 text-white/80 text-xs uppercase tracking-widest">
            <Hammer size={14} /> Today · {today}
          </div>
          <div className="mt-1 font-display font-extrabold text-4xl md:text-5xl leading-none">
            {block.name} <span className="text-white/70 text-2xl md:text-3xl font-bold">block</span>
          </div>
          <div className="mt-2 flex items-center gap-3 text-sm">
            <span className="px-2.5 py-0.5 rounded-full bg-black/30 border border-white/10 font-semibold">
              Wk {block.week} of {block.of}
            </span>
            <span className="text-white/70">{Math.round((1 - progress) * block.of)} weeks remaining</span>
          </div>
          {/* progress */}
          <div className="mt-4 max-w-md">
            <div className="h-2 rounded-full bg-black/30 overflow-hidden">
              <div
                className="h-full bg-white/90 rounded-full transition-all"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-white/60 font-mono">
              <span>Block start</span><span>Goal date</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 md:gap-3 w-full md:w-auto">
          <Stat icon={Activity} label="CTL" value={ctl} sub="fitness" />
          <Stat icon={Gauge}    label="ATL" value={atl} sub="fatigue" />
          <Stat icon={Battery}  label="TSB" value={tsb > 0 ? `+${tsb}` : tsb} sub="form" highlight={tsb >= 0} />
          <Stat icon={Activity} label="Wk TSS" value={weeklyTSS} sub="this wk" />
        </div>
      </div>
    </div>
  )
}

function Stat({ icon: Icon, label, value, sub, highlight }) {
  return (
    <div className={`rounded-xl border border-white/10 px-3 py-2.5 ${highlight ? 'bg-emerald-500/15' : 'bg-black/30'}`}>
      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-white/70">
        <Icon size={11} /> {label}
      </div>
      <div className="font-display font-bold text-xl tabular-nums">{value}</div>
      <div className="text-[10px] text-white/50">{sub}</div>
    </div>
  )
}
