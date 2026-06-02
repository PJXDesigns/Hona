import { ArrowRight, Play } from 'lucide-react'

const base = import.meta.env.BASE_URL

export default function Hero({ brand }) {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-paper-100 overflow-hidden py-16 lg:py-0"
    >
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Wrapper becomes the positioning container on lg+ so the video can absolutely overlay the text */}
        <div className="lg:relative">
          {/* Text block: left-aligned, fills width on desktop so "Hona" can extend behind the video */}
          <div className="relative z-10 text-center lg:text-left">
            <h1 className="font-display font-extrabold tracking-tightest text-ink-900 text-7xl sm:text-8xl md:text-[10rem] xl:text-[14rem] leading-[0.88]">
              {brand.name}
            </h1>
            <p className="mt-5 md:mt-7 text-xl sm:text-2xl md:text-3xl xl:text-4xl text-ink-500 font-medium max-w-xl mx-auto lg:mx-0 tracking-tight">
              {brand.tagline}
            </p>
            <div className="mt-9 md:mt-11 flex flex-wrap gap-3 justify-center lg:justify-start relative z-30">
              <a href={brand.betaSignupUrl} className="btn-primary">
                Join the beta <ArrowRight size={16} />
              </a>
              <a href="#showcase" className="btn-ghost">
                <Play size={14} /> See the screens
              </a>
            </div>
          </div>

          {/* Video: inline below the text on mobile, absolutely positioned over the right side on lg+.
              MP4 only — the paper-100 background is baked into the file so it blends seamlessly with the
              section bg on every browser and avoids the iOS Safari VP9-alpha bug that renders transparent
              WebMs as solid black. */}
          <div className="mt-10 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] xl:w-[50%] z-20 flex justify-center pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              className="w-full max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl"
            >
              <source src={`${base}hero.mp4`} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Subtle scroll hint at the bottom (desktop only) */}
      <a
        href="#showcase"
        aria-label="Scroll to the prototype"
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 text-ink-400 hover:text-ink-700 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors"
      >
        <span>Scroll</span>
        <span className="inline-block animate-bounce">↓</span>
      </a>
    </section>
  )
}
