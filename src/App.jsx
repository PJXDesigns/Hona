import Nav from './components/Nav.jsx'
import Showcase from './components/Showcase.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import ScreenshotGallery from './components/ScreenshotGallery.jsx'
import InteractiveDemo from './components/InteractiveDemo.jsx'
import NotThis from './components/NotThis.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

// Single source of truth for branding — change these to rename / re-tagline the site.
export const BRAND = {
  name: 'Hona',
  pronunciation: 'HOH-na',
  tagline: 'Sharpen the athlete.',
  betaSignupUrl: '#beta',
  contactEmail: 'hello@example.com'
}

export default function App() {
  // NOTE: keep `overflow-hidden` off this root div — any ancestor with that
  // property silently disables `position: sticky` on every descendant,
  // including the Showcase phone.
  return (
    <div className="min-h-screen relative">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.35]" />
      <Nav brand={BRAND} />
      <main className="relative">
        {/* The Showcase folds in what used to be Hero + Philosophy + Features —
            one scrolly section walking through Welcome + the 5 widgets with a
            sticky phone on the right. */}
        <Showcase brand={BRAND} />
        <WhoItsFor />
        <ScreenshotGallery />
        <InteractiveDemo />
        <NotThis />
        <CTA brand={BRAND} />
      </main>
      <Footer brand={BRAND} />
    </div>
  )
}
