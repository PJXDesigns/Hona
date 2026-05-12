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
    <section id="beta" className="relative py-24">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-flame-700/30 via-ink-800 to-ink-900 p-10 md:p-16">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-flame-500/30 blur-3xl rounded-full" />
          <div className="relative">
            <div className="pill mb-4"><span>TestFlight beta</span></div>
            <h2 className="section-title max-w-2xl">
              Try it before <span className="text-flame-400">race day.</span>
            </h2>
            <p className="muted text-lg mt-4 max-w-xl">
              Drop your email and you’ll get a TestFlight link when the next build ships. No spam — only build notes.
            </p>

            {!submitted ? (
              <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <div className="flex-1 relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full bg-white/5 border border-white/10 px-11 py-3 outline-none focus:border-flame-500 transition"
                  />
                </div>
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Sign me up <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <div className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-300">
                <Check size={18} /> You’re on the list — I’ll be in touch.
              </div>
            )}
            <p className="text-xs muted mt-4 font-mono">
              Hook this form up to your mailing list provider, or replace the form with a direct TestFlight public link.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
