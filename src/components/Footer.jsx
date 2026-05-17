import { Github, Mail } from 'lucide-react'

const base = import.meta.env.BASE_URL
// Logo mark, the same /public/logo-mark.svg the Nav and favicon use.
const markUrl = `${base}logo-mark.svg`
// Legal pages live as static HTML in /public/ so they render outside the React app.
const termsUrl   = `${base}terms.html`
const privacyUrl = `${base}privacy.html`

export default function Footer({ brand }) {
  return (
    <footer className="relative border-t border-paper-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col gap-6">
        {/* Top row: brand + contact / social */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={markUrl} alt="" aria-hidden="true" className="w-6 h-6" />
            <div>
              <div className="font-display font-bold text-ink-900">{brand.name}</div>
              <div className="text-xs text-ink-400">
                Pronounced <span className="font-mono text-ink-500">{brand.pronunciation}</span>. {brand.tagline}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 text-sm text-ink-400">
            <a href={`mailto:${brand.contactEmail}`} className="hover:text-ink-900 inline-flex items-center gap-1.5 transition-colors">
              <Mail size={14} /> Contact
            </a>
            <a href="https://github.com/PJXDesigns/Hona" className="hover:text-ink-900 inline-flex items-center gap-1.5 transition-colors">
              <Github size={14} /> Source
            </a>
          </div>
        </div>

        {/* Bottom row: legal links + copyright */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between border-t border-paper-300 pt-6 text-xs text-ink-400">
          <span className="text-ink-300">© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <nav className="flex items-center gap-5">
            <a href={termsUrl}   className="hover:text-ink-900 transition-colors">Terms of Service</a>
            <a href={privacyUrl} className="hover:text-ink-900 transition-colors">Privacy Policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
