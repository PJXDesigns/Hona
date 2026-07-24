import { useState } from 'react'
import { Mail, Check, ArrowRight, Loader2, AlertCircle } from 'lucide-react'

// Formspree endpoint. Submissions are forwarded to peter@pjxdesigns.com.
// To swap providers later, replace this URL.
const FORM_ENDPOINT = 'https://formspree.io/f/mqejkael'

export default function CTA({ brand }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')   // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!email.includes('@')) return
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          _subject: 'New Hona beta signup',
          _replyto: email
        })
      })

      if (res.ok) {
        setStatus('success')
        return
      }

      // Formspree returns structured errors when it can.
      let message = 'Something went wrong. Try again, or email peter@pjxdesigns.com.'
      try {
        const data = await res.json()
        if (Array.isArray(data?.errors) && data.errors.length) {
          message = data.errors.map((err) => err.message).join('. ')
        }
      } catch { /* ignore parse failures */ }
      setStatus('error')
      setErrorMsg(message)
    } catch {
      setStatus('error')
      setErrorMsg('Couldn’t reach the server. Check your connection and try again, or email peter@pjxdesigns.com.')
    }
  }

  return (
    <section id="beta" className="relative py-28 md:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <span className="eyebrow justify-center">Start now · TestFlight beta</span>
        {/* The serif close: the one full-serif headline on the page. */}
        <h2 className="mt-6 font-serif font-normal text-ink-900 tracking-verytight leading-[1.06] text-4xl sm:text-5xl md:text-6xl max-w-[16ch] mx-auto">
          Train hard. Recover honestly. <span className="italic text-accent-500">Sharpen the athlete.</span>
        </h2>
        <p className="mt-7 text-lg text-ink-500 max-w-xl mx-auto leading-relaxed">
          Drop your email to get a TestFlight invite when the next build ships. Free while Hona is in beta.
          Build notes only. No spam, no upsells.
        </p>

        {status !== 'success' ? (
          <form onSubmit={onSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
            {/* Honeypot: bots fill this, humans never see it. Formspree rejects submissions that include a value. */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="flex-1 relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-300" />
              <input
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
                className="w-full rounded-full bg-paper-50 border border-paper-400 px-11 py-3 text-sm text-ink-900 outline-none focus:border-accent-500 transition disabled:opacity-60"
              />
            </div>
            <button type="submit" disabled={status === 'submitting'} className="btn-primary whitespace-nowrap disabled:opacity-70">
              {status === 'submitting'
                ? <><Loader2 size={16} className="animate-spin" /> Sending</>
                : <>Request invite <ArrowRight size={16} /></>}
            </button>
          </form>
        ) : (
          <div className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-accent-50 border border-accent-200 text-accent-700">
            <Check size={18} /> You’re on the list. TestFlight invite incoming when the next build ships.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 inline-flex items-start gap-2 px-4 py-2 rounded-lg bg-red-50 border border-red-200 text-red-800 text-sm max-w-md mx-auto text-left">
            <AlertCircle size={16} className="mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>
    </section>
  )
}
