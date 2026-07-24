import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Spotlight from './components/Spotlight.jsx'
import InsideApp from './components/InsideApp.jsx'
import ScreenshotGallery from './components/ScreenshotGallery.jsx'
import NotThis from './components/NotThis.jsx'
import Privacy from './components/Privacy.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Single source of truth for branding. Change these to rename / re-tagline the site.
export const BRAND = {
  name: 'Hona',
  pronunciation: 'HOH-na',
  tagline: 'Sharpen the athlete.',
  betaSignupUrl: '#beta',
  contactEmail: 'peter@pjxdesigns.com',
  // Hona web app (coach + athlete Program Builder), hosted on Firebase.
  appUrl: 'https://hona-31051.web.app'
}

// Page skeleton: editorial bands alternating paper / tinted surface, with one
// dark spotlight in the middle for the core product moment, and a centered
// serif close. Each band leads with the same unit: eyebrow, serif lead, body.
export default function App() {
  return (
    <div className="min-h-screen relative">
      <Nav brand={BRAND} />
      <main className="relative">
        <Hero brand={BRAND} />
        <Problem />
        <HowItWorks />
        <Spotlight />
        <InsideApp />
        <ScreenshotGallery />
        <NotThis />
        <Privacy />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
