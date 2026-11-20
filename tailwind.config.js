/** @type {import('tailwindcss').Config} */
// Tokens from the Hona Design System [PROD] (tokens.json, synced from the iOS
// app's HonaPalette.swift and HonaType.swift). Names match the design system:
// `text-primary` is `text-ink`, `text-secondary` is `text-ink-2`, `text-label`
// is `text-ink-3`. Light theme only; the site has no dark mode.
//
// System rules this site follows: flat paper, radius 0, no cards, no
// gradients, one shadow (floating elements only), one accent (sage).
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        paper:  '#f7f5f1',   // every screen background
        sheet:  '#fbfaf7',   // modals, the nav
        sunken: '#f0ede7',   // wells, inputs, pressed rows
        track:  '#e4e0d8',   // rails
        mark:   '#cbc6bc',   // inactive marks, never text
        ink: {
          DEFAULT: '#1a1a18', // text-primary: numerals, titles
          2: '#5c594f',       // text-secondary: body copy
          3: '#6e6a62'        // text-label: labels, units, inactive nav
        },
        sage: {
          DEFAULT: '#4a5d4e', // accent: the one active control, rail fills
          60: '#7b9083',
          35: '#afc0b4',
          15: '#dce3dc'
        },
        good:    '#4a5d4e',
        caution: '#8a5a0c',
        alert:   '#a8352a',
        rule:    'rgba(26, 26, 24, 0.13)',
        'rule-axis': 'rgba(26, 26, 24, 0.28)'
      },

      fontFamily: {
        // Nunito: numbers and titles. Literata: words. SF Pro: labels and chrome.
        display: ['Nunito', '-apple-system', 'system-ui', 'sans-serif'],
        serif: ['Literata', 'Georgia', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'sans-serif']
      },

      spacing: {
        'page-x': '28px',
        'section-y': '38px',
        'row-gap': '24px',
        'label-gap': '12px'
      },

      boxShadow: {
        nav: '0 8px 20px rgba(23, 24, 26, 0.18)'
      }
    }
  },
  plugins: []
}
