// Logo mark, referenced from /public/logo-mark.svg so it's a single source of
// truth across Nav, Footer, favicon, and any future use. To update the logo:
// replace /public/logo-mark.svg (or logo.svg / logo-on-dark.svg) and you're done.
const markUrl = `${import.meta.env.BASE_URL}logo-mark.svg`

export default function Nav({ brand }) {
  const links = [
    { href: '#showcase', label: 'How it works' },
    { href: '#who',      label: 'Who it’s for' },
    { href: '#screens',  label: 'Screens' },
    { href: '#beta',     label: 'Beta' },
  ]
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-100/85 border-b border-paper-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <img src={markUrl} alt="" aria-hidden="true" className="w-6 h-6 group-hover:opacity-80 transition-opacity" />
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
