// Hona H mark — approximation of the supplied wordmark. Doubled parallel-line
// lowercase "h" letterform. Replace this inline SVG (here, in Footer.jsx, and
// in /public/favicon.svg) with the exported SVG from your design tool when ready.
function HonaMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true"
         fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="butt">
      <line x1="20" y1="8"  x2="20" y2="56" />
      <line x1="26" y1="8"  x2="26" y2="56" />
      <line x1="40" y1="26" x2="40" y2="56" />
      <line x1="46" y1="26" x2="46" y2="56" />
      <line x1="26" y1="8"  x2="46" y2="26" />
      <line x1="20" y1="14" x2="40" y2="32" />
    </svg>
  )
}

export default function Nav({ brand }) {
  const links = [
    { href: '#philosophy', label: 'The idea' },
    { href: '#who',        label: 'Who it’s for' },
    { href: '#features',   label: 'Tiles' },
    { href: '#demo',       label: 'Live demo' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-100/85 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="text-ink-900 group-hover:text-accent-500 transition-colors">
            <HonaMark size={22} />
          </span>
          <span className="font-display font-bold text-lg tracking-tightest text-ink-900">{brand.name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-400">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-ink-900 transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href={brand.betaSignupUrl} className="btn-primary text-sm px-4 py-2">Join the beta</a>
      </div>
    </header>
  )
}
