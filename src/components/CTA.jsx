import { useState } from 'react'

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
    <section id="beta" className="band">
      <div className="wrap grid md:grid-cols-2 gap-12 md:gap-16 items-end">
        <div>
          <div className="label">TestFlight beta</div>
          <h2 className="mt-5 title-section">Sharpen the athlete.</h2>
          <p className="mt-6 body max-w-[32rem]">
            Drop your email to get a TestFlight invite when the next build ships. Free while Hona is in beta.
            Build notes only. No spam, no upsells.
          </p>
        </div>

        <div>
          {status !== 'success' ? (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
              {/* Honeypot: bots fill this, humans never see it. Formspree rejects submissions that include a value. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <label htmlFor="beta-email" className="sr-only">Email</label>
              <input
                id="beta-email"
                type="email"
                name="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'submitting'}
                className="flex-1 h-11 bg-sunken border border-rule px-4 font-sans text-[15px] text-ink placeholder:text-ink-3 outline-none focus:border-ink transition-colors disabled:opacity-60"
              />
              <button type="submit" disabled={status === 'submitting'} className="btn whitespace-nowrap">
                {status === 'submitting' ? 'Sending' : 'Request invite'}
              </button>
            </form>
          ) : (
            <p className="pt-4 border-t border-rule font-display font-semibold text-[19px] text-good">
              You’re on the list. Your TestFlight invite comes with the next build.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 body-sm text-alert">{errorMsg}</p>
          )}
        </div>
      </div>
    </section>
  )
}
