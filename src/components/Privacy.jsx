import { Lock, EyeOff, BadgeX } from 'lucide-react'

// Privacy band. Every claim here is lifted from the actual Privacy Policy
// (/public/privacy.html). If the policy changes, this section must follow.
const base = import.meta.env.BASE_URL

const claims = [
  {
    icon: Lock,
    title: 'Encrypted before upload',
    body: 'Sensitive health, activity, and message fields are encrypted on your device with AES-256-GCM before they ever reach the cloud.'
  },
  {
    icon: EyeOff,
    title: 'No ads, no trackers',
    body: 'The current build ships no third-party advertising, analytics, or marketing SDKs. Your training is not an audience.'
  },
  {
    icon: BadgeX,
    title: 'Never sold',
    body: 'Your personal information is not sold, and your health data is never used for advertising. Full stop.'
  }
]

export default function Privacy() {
  return (
    <section id="privacy" className="band band-tint">
      <div className="wrap">
        <span className="eyebrow">Yours only</span>
        <h2 className="lead mt-5">
          Your hardest efforts <span className="lead-em">stay yours.</span>
        </h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-paper-300 border border-paper-300 rounded-2xl overflow-hidden">
          {claims.map((c) => (
            <div key={c.title} className="bg-paper-100 p-6 md:p-7">
              <c.icon size={18} className="text-accent-500" aria-hidden="true" />
              <h3 className="mt-4 font-display font-semibold text-base text-ink-900">{c.title}</h3>
              <p className="mt-3 text-sm text-ink-500 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <a
          href={`${base}privacy.html`}
          className="mt-8 inline-block text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors"
        >
          Read the full privacy policy →
        </a>
      </div>
    </section>
  )
}
