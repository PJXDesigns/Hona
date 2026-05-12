/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07070b',
          900: '#0d0e13',
          800: '#14161d',
          700: '#1c1f29',
          600: '#272b38',
          500: '#3a3f50'
        },
        flame: {
          50:  '#fff3f0',
          100: '#ffe1d9',
          200: '#ffbcaa',
          300: '#ff8d72',
          400: '#ff5d3f',
          500: '#ff3d2e',
          600: '#e22418',
          700: '#b8160c',
          800: '#8d100a'
        },
        ember: {
          400: '#ffb14a',
          500: '#ff8a1f'
        },
        ice: {
          400: '#7ad7ff',
          500: '#3ec1ff'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        glow: '0 0 80px -20px rgba(255, 61, 46, 0.55)',
        card: '0 30px 80px -40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04) inset'
      },
      animation: {
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.85 },
          '50%': { opacity: 1 }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
}
