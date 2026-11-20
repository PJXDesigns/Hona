const base = import.meta.env.BASE_URL
// Legal pages live as static HTML in /public/ so they render outside the React app.
const termsUrl         = `${base}terms.html`
const privacyUrl       = `${base}privacy.html`
const accessibilityUrl = `${base}accessibility.html`

// Footer: the wordmark and pronunciation, contact, then legal.
export default function Footer({ brand }) {
  return (
    <footer className="border-t border-rule">
      <div className="wrap py-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div>
            <div className="wordmark">{brand.name}</div>
            <p className="mt-3 body-sm">
              Pronounced {brand.pronunciation}. {brand.tagline}
            </p>
          </div>
          <div className="flex items-center gap-7 font-sans text-[13px] text-ink-3">
            <a href={`mailto:${brand.contactEmail}`} className="hover:text-ink transition-colors">Contact</a>
          </div>
        </div>

        <div className="pt-6 border-t border-rule flex flex-col md:flex-row gap-3 md:items-center justify-between unit">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <nav className="flex items-center gap-6 flex-wrap">
            <a href={termsUrl}         className="hover:text-ink transition-colors">Terms of Service</a>
            <a href={privacyUrl}       className="hover:text-ink transition-colors">Privacy Policy</a>
            <a href={accessibilityUrl} className="hover:text-ink transition-colors">Accessibility</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
