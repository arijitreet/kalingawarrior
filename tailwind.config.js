/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#04080f',
          800: '#0f172a',
          700: '#111827',
          gold: '#d4af37',
          green: '#11b981'
        }
      },
      boxShadow: {
        glowGold: '0 0 20px rgba(212, 175, 55, 0.55)',
        glowSilver: '0 0 16px rgba(192, 192, 192, 0.45)'
      },
      animation: {
        pulseBadge: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
};
