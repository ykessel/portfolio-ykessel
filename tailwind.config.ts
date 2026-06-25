import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0a',
        surface: '#14140f',
        'surface-2': '#1e1c17',
        accent: '#FF7A59',
        primary: '#ECEAE3',
        secondary: '#86867d',
        muted: '#6e6e64',
        border: '#211f1a',
        'border-2': '#2d2d27',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        body: ['var(--font-archivo)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        serif: ['var(--font-instrument-serif)', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
        'grow-x': 'growX 1s cubic-bezier(.2,.8,.2,1) both',
        'marquee': 'marquee 18s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.35', transform: 'scale(.65)' },
        },
        growX: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
