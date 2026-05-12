import { Github, Mail } from 'lucide-react'

// Logo mark — same /public/logo-mark.svg the Nav and favicon use.
const markUrl = `${import.meta.env.BASE_URL}logo-mark.svg`

export default function Footer({ brand }) {
  return (
    <footer className="relative border-t border-paper-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={markUrl} alt="" aria-hidden="true" className="w-6 h-6" />
          <div>
            <div className="font-display font-bold text-ink-900">{brand.name}</div>
            <div className="text-xs text-ink-400">Pronounced <span className="font-mono text-ink-500">{brand.pronunciation}</span>. {brand.tagline}</div>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-ink-400">
          <a href={`mailto:${brand.contactEmail}`} className="hover:text-ink-900 inline-flex items-center gap-1.5 transition-colors">
            <Mail size={14} /> Contact
          </a>
          <a href="#" className="hover:text-ink-900 inline-flex items-center gap-1.5 transition-colors">
            <Github size={14} /> Source
          </a>
          <span className="text-ink-300">© {new Date().getFullYear()} {brand.name}</span>
        </div>
      </div>
    </footer>
  )
}
