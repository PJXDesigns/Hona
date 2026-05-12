import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import Features from './components/Features.jsx'
import ScreenshotGallery from './components/ScreenshotGallery.jsx'
import InteractiveDemo from './components/InteractiveDemo.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Single source of truth for branding — change these to rename / re-tagline the site.
export const BRAND = {
  name: 'Anvil',
  tagline: 'One screen. Every signal.',
  raceDate: '2027-04-24',           // Ironman Texas
  trainingStart: '2026-06-15',
  betaSignupUrl: '#beta',            // wire to TestFlight public link later
  contactEmail: 'hello@example.com'  // replace with your address
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* subtle grid in the background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <Nav brand={BRAND} />
      <main className="relative">
        <Hero brand={BRAND} />
        <WhoItsFor />
        <Features />
        <ScreenshotGallery />
        <InteractiveDemo brand={BRAND} />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
