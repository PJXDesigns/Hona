import { useState } from 'react'
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react'
import { PhoneFrame } from './Hero.jsx'

// Placeholder screenshots — each is a styled mock of what a real screenshot will look like.
// To swap in real screenshots later:
//   1. Drop PNGs into /public (e.g. /public/screens/training.png)
//   2. Replace the `render` JSX below with: <img src="/screens/training.png" className="w-full h-full object-cover" />
const screens = [
  {
    key: 'home',
    label: 'Home',
    caption: 'Morning glance — everything at once.',
    render: () => (
      <div className="h-full w-full bg-gradient-to-b from-ink-900 to-ink-950 p-3 flex flex-col gap-2 text-[10px]">
        <div className="rounded-lg bg-gradient-to-br from-flame-600 to-flame-800 p-3">
          <div className="text-[8px] uppercase opacity-80">Today · Tuesday</div>
          <div className="font-display font-bold text-xl">Build · Wk 4</div>
          <div className="mt-1 h-1 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full w-[33%] bg-white/80" />
          </div>
        </div>
        {['Training','InBody','Nutrition','Body Metrics','Recovery'].map(t => (
          <div key={t} className="rounded-lg bg-white/5 border border-white/10 p-2">
            <div className="text-[8px] uppercase muted">{t}</div>
            <div className="text-[10px]">Today’s detail here</div>
          </div>
        ))}
      </div>
    )
  },
  {
    key: 'training',
    label: 'Training detail',
    caption: 'Tap any workout to see the steps.',
    render: () => (
      <div className="h-full w-full bg-ink-950 p-3 text-[10px]">
        <div className="text-[8px] uppercase muted">Wednesday · AM run</div>
        <div className="font-display font-bold text-lg">Threshold 5×6’</div>
        <div className="text-flame-400 text-[10px] mt-1">142 TSS · Z3-Z4</div>
        <div className="mt-3 space-y-1.5">
          {['WU · 15min Z1', '5×6\' @ Z4 / 2\' Z1', 'CD · 10min Z1'].map((s,i) => (
            <div key={i} className="rounded bg-white/5 border border-white/10 px-2 py-1.5 text-[10px]">{s}</div>
          ))}
        </div>
      </div>
    )
  },
  {
    key: 'body',
    label: 'Body metrics',
    caption: 'Readiness, summarized.',
    render: () => (
      <div className="h-full w-full bg-ink-950 p-3 text-[10px]">
        <div className="text-[8px] uppercase muted">Body metrics</div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[['HRV','68','ms'],['RHR','47','bpm'],['Sleep','7h22m',''],['Resp','14.2','/min']].map(([k,v,u]) => (
            <div key={k} className="rounded bg-white/5 border border-white/10 p-2">
              <div className="text-[8px] muted">{k}</div>
              <div className="font-display font-bold text-base">{v} <span className="text-[8px] muted">{u}</span></div>
            </div>
          ))}
        </div>
        <button className="mt-3 w-full rounded-lg bg-flame-500 text-white text-[10px] py-1.5 font-semibold">
          Generate coaching insight
        </button>
      </div>
    )
  },
  {
    key: 'inbody',
    label: 'InBody trend',
    caption: 'SMM, BF%, phase angle.',
    render: () => (
      <div className="h-full w-full bg-ink-950 p-3 text-[10px]">
        <div className="text-[8px] uppercase muted">InBody · Apr 20</div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {[['Weight','137.8'],['SMM','71.0'],['BF%','9.4']].map(([k,v]) => (
            <div key={k} className="rounded bg-white/5 border border-white/10 p-2">
              <div className="text-[8px] muted">{k}</div>
              <div className="font-display font-bold text-sm">{v}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 h-16 rounded bg-white/5 border border-white/10 relative overflow-hidden">
          <svg viewBox="0 0 100 50" className="w-full h-full">
            <polyline fill="none" stroke="#ff5d3f" strokeWidth="1.5"
              points="2,40 18,32 35,28 52,30 70,22 86,18 98,20" />
          </svg>
        </div>
      </div>
    )
  }
]

export default function ScreenshotGallery() {
  const [i, setI] = useState(0)
  const next = () => setI(v => (v + 1) % screens.length)
  const prev = () => setI(v => (v - 1 + screens.length) % screens.length)
  const s = screens[i]
  return (
    <section id="screens" className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div className="max-w-2xl">
            <div className="pill mb-4"><span>Screens</span></div>
            <h2 className="section-title">A look at the app.</h2>
            <p className="mt-4 muted text-lg">
              These are stylized previews. Real screenshots and recordings drop in here as the build progresses.
            </p>
          </div>
          <div className="pill"><ImageIcon size={14} /> <span>Placeholder mockups</span></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="scale-[0.85]">
              <PhoneFrame>{s.render()}</PhoneFrame>
            </div>
          </div>
          <div>
            <div className="text-flame-400 text-sm font-mono uppercase tracking-widest">
              {String(i+1).padStart(2,'0')} / {String(screens.length).padStart(2,'0')}
            </div>
            <h3 className="font-display font-bold text-3xl md:text-4xl mt-2">{s.label}</h3>
            <p className="muted text-lg mt-3">{s.caption}</p>

            <div className="mt-8 flex items-center gap-3">
              <button onClick={prev} className="btn-ghost px-4 py-2"><ChevronLeft size={18} /></button>
              <button onClick={next} className="btn-ghost px-4 py-2"><ChevronRight size={18} /></button>
              <div className="ml-4 flex gap-2">
                {screens.map((sc, idx) => (
                  <button
                    key={sc.key}
                    onClick={() => setI(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-8 bg-flame-500' : 'w-3 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 text-xs muted font-mono">
              <p>Drop real screenshots into <code>/public/screens/</code> and replace the placeholder JSX in <code>ScreenshotGallery.jsx</code>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
