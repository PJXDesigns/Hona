import { Github, Mail } from 'lucide-react'

function HonaMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="14" width="8" height="36" fill="currentColor" />
      <rect x="42" y="14" width="8" height="36" fill="currentColor" />
      <rect x="14" y="28" width="36" height="6" fill="currentColor" />
    </svg>
  )
}

export default function Footer({ brand }) {
  return (
    <footer className="relative border-t border-paper-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-ink-900"><HonaMark /></span>
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
