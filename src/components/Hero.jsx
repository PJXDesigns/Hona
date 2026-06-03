import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

export default function Hero({ brand }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-paper-100 overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        {/* Stacked on mobile (text on top, phone below). Side-by-side from md up. */}
        <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12">

          {/* Text column */}
          <div className="flex-1 min-w-0 relative z-10 text-center md:text-left">
            <h1 className="font-display font-extrabold tracking-tightest text-ink-900 leading-[0.88] text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[14rem]">
              {brand.name}
            </h1>
            <p className="mt-5 md:mt-7 text-ink-500 font-medium tracking-tight text-lg sm:text-2xl md:text-2xl xl:text-4xl max-w-xl mx-auto md:mx-0">
              {brand.tagline}
            </p>
            <div className="mt-7 md:mt-11 flex flex-wrap justify-center md:justify-start gap-3 relative z-30">
              <a href={brand.betaSignupUrl} className="btn-primary">
                Join the beta <ArrowRight size={16} />
              </a>
              <a href="#screens" className="btn-ghost">
                <Play size={14} /> See the screens
              </a>
            </div>
          </div>

          {/* Phone video column — portrait MP4 with paper-100 baked in.
              Capped by both max-w and max-h so it stays reasonable on every viewport. */}
          <div className="flex justify-center md:flex-shrink-0 pointer-events-none">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="h-auto w-auto max-w-[220px] sm:max-w-xs md:max-w-[240px] lg:max-w-[280px] xl:max-w-sm max-h-[50vh] sm:max-h-[55vh] md:max-h-[65vh] lg:max-h-[80vh]"
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
