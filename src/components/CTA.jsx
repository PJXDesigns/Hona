import { useState } from 'react'
import { Mail, Check, ArrowRight } from 'lucide-react'

export default function CTA({ brand }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    // TODO: wire to a real form service (Formspree, Buttondown, ConvertKit) so
    // submissions actually reach you. Right now this just shows the confirmation
    // state. Emails are not collected anywhere.
    console.log('Beta signup:', email)
    setSubmitted(true)
  }
  return (
    <section id="beta" className="relative py-24 hairline">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <span className="eyebrow">TestFlight beta · Free</span>
        <h2 className="section-title mt-4 max-w-2xl mx-auto">
          Try the <span className="text-accent-500">private beta.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-xl mx-auto leading-relaxed">
          Drop your email to get a TestFlight invite when the next build ships. Free while Hona is in beta.
          Build notes only. No spam, no upsells.
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
              Request invite <ArrowRight size={16} />
            </button>
          </form>
        ) : (
          <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-50 border border-accent-200 text-accent-700">
            <Check size={18} /> You’re on the list. TestFlight invite incoming when the next build ships.
          </div>
        )}
      </div>
    </section>
  )
}
