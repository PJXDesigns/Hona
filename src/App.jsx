import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Philosophy from './components/Philosophy.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import NotThis from './components/NotThis.jsx'
import Features from './components/Features.jsx'
import ScreenshotGallery from './components/ScreenshotGallery.jsx'
import InteractiveDemo from './components/InteractiveDemo.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Single source of truth for branding — change these to rename / re-tagline the site.
export const BRAND = {
  name: 'Hona',
  pronunciation: 'HOH-na',           // from the brand brief
  tagline: 'Sharpen the athlete.',
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
        <Philosophy />
        <WhoItsFor />
        <Features />
        <ScreenshotGallery />
        <InteractiveDemo />
        <NotThis />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
