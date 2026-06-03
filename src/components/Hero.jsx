import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

export default function Hero({ brand }) {
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center bg-paper-100 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Side-by-side at every breakpoint so the tall portrait video never blows out the layout.
            Text takes the remaining space (flex-1), phone is a fixed-aspect column on the right. */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 lg:gap-12">

          {/* Text column */}
          <div className="flex-1 min-w-0 relative z-10">
            <h1 className="font-display font-extrabold tracking-tightest text-ink-900 leading-[0.88] text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] xl:text-[14rem]">
              {brand.name}
            </h1>
            <p className="mt-3 sm:mt-5 md:mt-7 text-ink-500 font-medium tracking-tight text-sm sm:text-xl md:text-2xl xl:text-4xl max-w-xl">
              {brand.tagline}
            </p>
            <div className="mt-5 sm:mt-9 md:mt-11 flex flex-col sm:flex-row sm:flex-wrap items-start gap-2 sm:gap-3 relative z-30">
              <a href={brand.betaSignupUrl} className="btn-primary">
                Join the beta <ArrowRight size={16} />
              </a>
              <a href="#screens" className="btn-ghost">
                <Play size={14} /> See the screens
              </a>
            </div>
          </div>

          {/* Phone video column — portrait MP4 with paper-100 baked in.
              Capped by BOTH max-w (so it doesn't crowd the text) and max-h (so it doesn't blow out the section).
              Whichever cap is smaller for the viewport wins, since the video preserves aspect. */}
          <div className="flex-shrink-0 flex items-center justify-center pointer-events-none">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="h-auto w-auto max-w-[120px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[280px] xl:max-w-sm max-h-[55vh] sm:max-h-[70vh] lg:max-h-[80vh]"
            >
              <source src={`${base}hero.mp4`} type="video/mp4" />
            </video>
          </div>

        </div>
      </div>

      {/* Subtle scroll hint at the bottom (desktop only) */}
      <a
        href="#screens"
        aria-label="Scroll to the screens"
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-ink-400 hover:text-ink-700 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors"
      >
        <span>Scroll</span>
        <span className="inline-block animate-bounce">↓</span>
      </a>
    </section>
  )
}
