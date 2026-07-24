// Logo mark, referenced from /public/logo-mark.svg so it's a single source of
// truth across Nav, Footer, favicon, and any future use. To update the logo:
// replace /public/logo-mark.svg (or logo.svg / logo-on-dark.svg) and you're done.
const markUrl = `${import.meta.env.BASE_URL}logo-mark.svg`

// Section links, in page order. NotThis (#not) and Privacy (#privacy) are
// deliberately not in the nav; they read in flow but don't earn a slot.
const links = [
  { href: '#problem', label: 'The Problem' },
  { href: '#loop',    label: 'How It Works' },
  { href: '#core',    label: 'The Core' },
  { href: '#inside',  label: 'Inside Hona' },
  { href: '#screens', label: 'The Screens' },
  { href: '#beta',    label: 'Start Now' },
]

export default function Nav({ brand }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-100/85 border-b border-paper-300">
      <div className="max-w-[1080px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <img src={markUrl} alt="" aria-hidden="true" className="w-6 h-6 group-hover:opacity-80 transition-opacity" />
          <span className="font-display font-bold text-lg tracking-tightest text-ink-900">{brand.name}</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5 text-[13px] text-ink-400">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-ink-900 whitespace-nowrap transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 shrink-0">
          <a
            href={brand.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline text-sm text-ink-400 hover:text-ink-900 whitespace-nowrap transition-colors"
          >
            Program Builder
          </a>
          <a href={brand.betaSignupUrl} className="btn-primary text-sm px-4 py-2">Join the beta</a>
        </div>
      </div>
    </header>
  )
}
