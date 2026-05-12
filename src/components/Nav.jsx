import { Flame } from 'lucide-react'

export default function Nav({ brand }) {
  const links = [
    { href: '#who', label: 'Who it’s for' },
    { href: '#features', label: 'Features' },
    { href: '#screens', label: 'Screens' },
    { href: '#demo', label: 'Live demo' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-ink-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame-500 to-flame-700 grid place-items-center shadow-glow group-hover:scale-105 transition">
            <Flame size={18} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">{brand.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm muted">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-white transition">{l.label}</a>
          ))}
        </nav>
        <a href={brand.betaSignupUrl} className="btn-primary text-sm px-4 py-2">Join the beta</a>
      </div>
    </header>
  )
}
