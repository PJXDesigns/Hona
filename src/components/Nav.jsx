// Top bar. The brand is the HONA wordmark (the design system has no drawn
// mark). Solid paper with one hairline below: no blur, no transparency.
// Section links in page order; NotThis and Privacy read in flow and don't
// earn a slot.
const links = [
  { href: '#loop',    label: 'How it works' },
  { href: '#core',    label: 'Recovery' },
  { href: '#inside',  label: 'Inside Hona' },
  { href: '#screens', label: 'Screens' }
]

export default function Nav({ brand }) {
  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-rule">
      <div className="wrap h-16 flex items-center justify-between gap-6">
        <a href="#top" className="wordmark shrink-0" aria-label={brand.name}>
          {brand.name}
        </a>

        <nav className="hidden lg:flex items-center gap-7 font-sans text-[13px] text-ink-3">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-ink whitespace-nowrap transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 shrink-0">
          <a
            href={brand.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline font-sans text-[13px] text-ink-3 hover:text-ink whitespace-nowrap transition-colors"
          >
            Program Builder
          </a>
          <a href={brand.betaSignupUrl} className="btn h-9 px-4 text-[13px]">Join the beta</a>
        </div>
      </div>
    </header>
  )
}
