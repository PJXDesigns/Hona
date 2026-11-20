// Privacy. Every claim here is lifted from the actual Privacy Policy
// (/public/privacy.html). If the policy changes, this section must follow.
const base = import.meta.env.BASE_URL

const claims = [
  {
    title: 'Encrypted before upload',
    body: 'Sensitive health, activity, and message fields are encrypted on your device with AES-256-GCM before they ever reach the cloud.'
  },
  {
    title: 'No ads, no trackers',
    body: 'The current build ships no third-party advertising, analytics, or marketing SDKs. Your training is not an audience.'
  },
  {
    title: 'Never sold',
    body: 'Your personal information is not sold, and your health data is never used for advertising.'
  }
]

export default function Privacy() {
  return (
    <section id="privacy" className="band">
      <div className="wrap">
        <div className="label">Privacy</div>
        <h2 className="mt-5 title-section">Your training data stays yours.</h2>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {claims.map((c) => (
            <div key={c.title} className="pt-5 border-t border-rule">
              <h3 className="title-block">{c.title}</h3>
              <p className="mt-3 body-sm">{c.body}</p>
            </div>
          ))}
        </div>

        <a href={`${base}privacy.html`} className="mt-12 inline-block action">
          Read the full privacy policy
        </a>
      </div>
    </section>
  )
}
