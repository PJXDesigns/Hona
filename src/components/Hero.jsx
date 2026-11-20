const base = import.meta.env.BASE_URL

// Browsers color-manage video slightly differently from the page, so the
// baked-in paper background can show as a faint box. Fading the outer edges
// hides it; the phone itself sits well inside the faded margin.
const edgeFade =
  'linear-gradient(to right, transparent, #000 7%, #000 93%, transparent), ' +
  'linear-gradient(to bottom, transparent, #000 3%, #000 97%, transparent)'
const videoMask = {
  WebkitMaskImage: edgeFade,
  WebkitMaskComposite: 'source-in',
  maskImage: edgeFade,
  maskComposite: 'intersect'
}

// Hero: label, a plain Nunito headline, one Literata sentence, one solid
// control and one text action, then the beta line. Right: the phone video.
export default function Hero({ brand }) {
  return (
    <section id="top" className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

          <div>
            <div className="label">Training intelligence for athletes</div>
            <h1 className="mt-6 font-display font-semibold text-ink text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.04] tracking-[-0.03em] max-w-[14ch]">
              You train a lot. Hona hands back one clear day.
            </h1>
            <p className="mt-7 body max-w-[34rem]">
              Recovery, training load, fueling, and your coach&rsquo;s plan, read together every
              morning. You get one score, the session that fits it, and what to eat around it.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a href={brand.betaSignupUrl} className="btn">Join the beta</a>
              <a href="#loop" className="action">See how it works</a>
            </div>

            <div className="mt-10 pt-5 border-t border-rule flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="label text-sage">TestFlight</span>
              <span className="body-sm">Now in private beta on iPhone. Free while it lasts.</span>
            </div>
          </div>

          {/* Phone video: portrait MP4 with paper baked in (Screeny, iPhone 18
              Pro, a recording of the new Home with its opening heartbeat;
              turns in from the left while zooming, plays once, holds on the
              last frame). */}
          <div className="flex justify-center md:justify-end pointer-events-none">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              style={videoMask}
              className="h-auto w-auto max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] max-h-[72vh]"
            >
              <source src={`${base}hero-home.mp4`} type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
    </section>
  )
}
