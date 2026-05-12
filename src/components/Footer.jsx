import { Flame, Github, Mail } from 'lucide-react'

export default function Footer({ brand }) {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame-500 to-flame-700 grid place-items-center">
            <Flame size={16} />
          </span>
          <div>
            <div className="font-display font-bold">{brand.name}</div>
            <div className="text-xs muted">Built by an athlete for Ironman Texas 2027.</div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm muted">
          <a href={`mailto:${brand.contactEmail}`} className="hover:text-white inline-flex items-center gap-1.5">
            <Mail size={14} /> Contact
          </a>
          <a href="#" className="hover:text-white inline-flex items-center gap-1.5">
            <Github size={14} /> Source
          </a>
          <span className="text-white/30">© {new Date().getFullYear()} {brand.name}</span>
        </div>
      </div>
    </footer>
  )
}
