// The H mark is rendered inline as SVG (placeholder — replace with the real logo).
// Per the brand brief: geometric, monogram-style, no decorative elements.
function HonaMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="14" width="8" height="36" fill="currentColor" />
      <rect x="42" y="14" width="8" height="36" fill="currentColor" />
      <rect x="14" y="28" width="36" height="6" fill="currentColor" />
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
