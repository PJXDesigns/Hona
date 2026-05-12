/** @type {import('tailwindcss').Config} */
// Tokens follow /Hona-logo-design-brief.md and /Hona-brand-positioning.md:
//   - One neutral base (paper, off-white) + one accent
//   - Type-driven, minimal, instrument-like
//   - "Matte off-white card stock laid on a wooden surface"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand neutrals --------------------------------------------------
        paper: {
          50:  '#FDFDFB',   // brightest surface
          100: '#F8F7F2',   // page background — warm off-white
          200: '#F2F0E9',
          300: '#E8E5DC',   // hairline dividers
          400: '#D6D2C6'    // mid-light borders
        },
        ink: {
          50:  '#ECEAE3',
          100: '#D6D2C6',
          200: '#A8A49B',
          300: '#787570',
          400: '#5B5853',   // muted secondary text
          500: '#3F3D38',
          700: '#26241F',   // body text
          900: '#141412'    // primary headings
        },
        // --- Single accent --------------------------------------------------
        // Warm umber brown — matches the Hona wordmark/logo color.
        // Adjust the whole palette here if the final logo color shifts.
        accent: {
          50:  '#F5EFE5',
          100: '#E8DDC8',
          200: '#D0BB94',
          300: '#B49265',
          400: '#8A6535',
          500: '#5A3D1F',   // default accent — matches the logo
          600: '#4A3018',
          700: '#3A2412'
        },

        // --- App widget tints (Live demo only) ------------------------------
        // These mirror /IronmanDashboard/AppTheme.swift so the embedded demo
        // looks like the real iOS app. Do NOT use these outside the demo.
        bike:      { DEFAULT: '#D4C8F0', text: '#200870' },
        run:       { DEFAULT: '#F0D0BC', text: '#4A1800' },
        swim:      { DEFAULT: '#B8E4DC', text: '#083A2E' },
        rest:      { DEFAULT: '#E8E0D4', text: '#5A5040' },
        inbody:    { DEFAULT: '#D4E4DC', text: '#0A2A18', mid: '#3A6A50', card: '#C4D8CC' },
        nutrition: { DEFAULT: '#F0D8C8', text: '#3A1808', mid: '#8A4A28', card: '#E8C4A8' },
        metrics:   { DEFAULT: '#E8E0F0', text: '#1A0838', mid: '#5A3A80', card: '#D8D0E8' },
        recovery:  { DEFAULT: '#F8D8E4', text: '#3A0818', mid: '#8A1B3A', card: '#E8C8D4', done: '#2D6B22' },
        fueling:   { DEFAULT: '#E4F0D0', text: '#1A3008', mid: '#486820', card: '#D4E4BC' },
        volume:    { DEFAULT: '#D0E4F8', text: '#0A1E3A', mid: '#2A5A88', card: '#BCE0F4', accent: '#1A6AB0' },
        strength:  { DEFAULT: '#EEE0A0', text: '#3A2800' },
        strava:    { DEFAULT: '#F4DFC0', text: '#3A1A00', mid: '#8A4A10', accent: '#C44000', card: '#E8CCA0' },

        // Backwards-compat aliases for any sand-* / strava-accent references
        // still living in older components — point them at the new neutral system.
        sand: {
          50:  '#FDFDFB',
          100: '#F8F7F2',
          200: '#F2F0E9',
          300: '#E8E5DC',
          400: '#D6D2C6',
          500: '#A8A49B',
          600: '#5B5853',
          700: '#3F3D38',
          800: '#26241F',
          900: '#141412'
        }
      },

      fontFamily: {
        // Single typeface — Inter — for the whole site. Restrained, geometric,
        // works in body text and in numbers. Reference brands (Linear, Stripe,
        // Things 3, Arc) all use Inter or a near-equivalent.
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        display: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', '"JetBrains Mono"', '"SF Mono"', 'SFMono-Regular', 'Menlo', 'monospace']
      },

      letterSpacing: {
        tightest: '-0.045em',
        verytight: '-0.025em'
      },

      boxShadow: {
        // Paper-like, almost imperceptible — like ink on cardstock, not floating.
        card:    '0 1px 0 rgba(20,20,18,0.025), 0 8px 24px -16px rgba(20,20,18,0.08)',
        cardLift:'0 2px 0 rgba(20,20,18,0.04), 0 16px 32px -16px rgba(20,20,18,0.14)'
      },

      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
