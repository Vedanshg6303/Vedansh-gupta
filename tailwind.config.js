/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFFDF0',
          100: '#FFF9C2',
          200: '#FFF085',
          300: '#FFE247',
          400: '#FACC15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#A16207',
          800: '#854D0E',
          900: '#713F12',
          metallic: '#D4AF37',
          champagne: '#F3E5AB',
          amber: '#F59E0B',
        },
        obsidian: {
          DEFAULT: '#060709',
          card: '#0C0E14',
          surface: '#121622',
          border: 'rgba(234, 179, 8, 0.18)',
          highlight: 'rgba(234, 179, 8, 0.35)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-gold': '0 0 30px -5px rgba(234, 179, 8, 0.35)',
        'glow-gold-lg': '0 0 50px -10px rgba(234, 179, 8, 0.45)',
        'glow-card': '0 12px 35px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(234, 179, 8, 0.2)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
