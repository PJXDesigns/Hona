import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Showcase from './components/Showcase.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import ScreenshotGallery from './components/ScreenshotGallery.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Single source of truth for branding. Change these to rename / re-tagline the site.
export const BRAND = {
  name: 'Hona',
  pronunciation: 'HOH-na',
  tagline: 'Sharpen the athlete.',
  betaSignupUrl: '#beta',
  contactEmail: 'peter@pjxdesigns.com'
}

export default function App() {
  // NOTE: keep `overflow-hidden` off this root div. Any ancestor with that
  // property silently disables `position: sticky` on every descendant,
  // including the Showcase phone.
  return (
    <div className="min-h-screen relative">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <Nav brand={BRAND} />
      <main className="relative">
        {/* Video hero with the layered "Hona / Sharpen the athlete" text */}
        <Hero brand={BRAND} />
        {/* Showcase walks through the 5 widget scenes (Metrics, Training, Nutrition, Body, Coach) */}
        <Showcase brand={BRAND} />
        <WhoItsFor />
        <ScreenshotGallery />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
