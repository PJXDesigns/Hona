import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

// Narro-style hero: two-column editorial grid. Left, an eyebrow, a headline
// that mixes sans, serif italic, and the single accent phrase, a short sub,
// dual CTAs, and an honest proof line. Right, the phone video (portrait MP4
// with the paper background baked in).
export default function Hero({ brand }) {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-24">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.08fr_0.92fr] gap-12 md:gap-14 items-center">

          {/* Text column */}
          <div className="relative z-10">
            <span className="eyebrow">Training intelligence for athletes</span>
            <h1 className="mt-6 font-serif font-semibold tracking-verytight text-ink-900 leading-[1.06] text-4xl sm:text-5xl lg:text-[62px]">
              You <span className="italic font-medium">train</span> a lot.
              <br />
              Hona hands back
              <br />
              <span className="text-accent-500">one clear day.</span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-md">
              Recovery, training load, fueling, and your coach&rsquo;s plan, read together every
              morning. One score, one session, one clear day. Not another dashboard to babysit.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={brand.betaSignupUrl} className="btn-primary">
                Join the beta <ArrowRight size={16} />
              </a>
              <a href="#loop" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-700 hover:text-ink-900 transition-colors">
                <Play size={14} /> Watch the loop <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-ink-400">
              <span className="pill">TestFlight</span>
              <span>Now in private beta on iPhone. Free while it lasts.</span>
            </div>
          </div>

          {/* Phone video column: portrait MP4 with paper-100 baked in. */}
          <div className="flex justify-center md:justify-end pointer-events-none">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="h-auto w-auto max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] max-h-[70vh]"
            >
              <source src={`${base}hero.mp4`} type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
    </section>
  )
}
