import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#115cd4',
          light: '#2d75e8',
          dark: '#0d48a8',
        },
        dark: {
          bg: '#080f1e',
          card: '#0d1a2e',
          border: '#1a2f4a',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #115cd4 0%, #3b82f6 100%)',
      },
      animation: {
        'blob-float': 'blobFloat 8s ease-in-out infinite',
        'blob-float-slow': 'blobFloat 10s ease-in-out infinite reverse',
        'card-float': 'cardFloat 4s ease-in-out infinite',
        'card-float-delayed': 'cardFloat 4s ease-in-out infinite 2s',
        'pulse-dot': 'pulseDot 2s infinite',
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,-30px) scale(1.05)' },
        },
        cardFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
