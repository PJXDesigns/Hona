import { useState } from 'react'
import { Mail, Check, ArrowRight } from 'lucide-react'

export default function CTA({ brand }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    // TODO: wire to actual mailing-list service (Buttondown, ConvertKit, Mailchimp) or TestFlight public link
    console.log('Beta signup:', email)
    setSubmitted(true)
  }
  return (
    <section id="beta" className="relative py-24 hairline">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <span className="eyebrow">TestFlight beta</span>
        <h2 className="section-title mt-4 max-w-2xl mx-auto">
          A little sharper, <span className="text-accent-500">every day.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-xl mx-auto leading-relaxed">
          Drop your email and you’ll get a TestFlight link when the next build ships.
          No spam — only build notes. Cancel anytime.
        </p>

        {!submitted ? (
          <form onSubmit={onSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full bg-paper-50 border border-paper-400 px-11 py-3 text-sm text-ink-900 outline-none focus:border-accent-500 transition"
              />
            </div>
            <button type="submit" className="btn-primary whitespace-nowrap">
              Sign me up <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-50 border border-accent-200 text-accent-700">
            <Check size={18} /> You’re on the list — I’ll be in touch.
          </div>
        )}
        <p className="text-[11px] text-ink-300 mt-6 font-mono">
          Hook this form up to your mailing list provider, or replace the form with a direct TestFlight public link.
        </p>
      </div>
    </section>
  )
}
