import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
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
  return (
    <div className="min-h-screen relative">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <Nav brand={BRAND} />
      <main className="relative">
        {/* Video hero with the layered "Hona / Sharpen the athlete" text */}
        <Hero brand={BRAND} />
        <WhoItsFor />
        {/* Rotato mockup gallery — the headline visual moment for the app */}
        <ScreenshotGallery />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
