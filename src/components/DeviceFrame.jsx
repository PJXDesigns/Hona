// Coded iPhone frame. The screenshot fills the screen (object-cover, top
// aligned); the black bezel, rounded screen, and Dynamic Island are drawn
// here so every screen presents identically regardless of the raw capture.
// Shared by ScreenshotGallery (carousel) and Spotlight (dark core section).
export default function DeviceFrame({ src, alt, imgKey, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[280px] sm:max-w-[300px] ${className}`}>
      <div className="relative rounded-[2.9rem] bg-ink-900 p-[0.7rem] ring-1 ring-black/20 shadow-[0_30px_60px_-24px_rgba(20,20,18,0.45)]">
        {/* Screen. aspect matches the native 1206x2622 capture, so no cropping. */}
        <div className="relative overflow-hidden rounded-[2.25rem] bg-paper-100 aspect-[1206/2622]">
          <img
            key={imgKey}
            src={src}
            alt={alt}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
          />
          {/* Dynamic Island */}
          <div className="absolute top-[0.6rem] left-1/2 -translate-x-1/2 h-[1.6rem] w-[5.5rem] rounded-full bg-black" />
        </div>
      </div>
    </div>
  )
}
