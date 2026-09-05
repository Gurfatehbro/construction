/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0C0E',
        surface: '#141518',
        card: '#141518',
        border: '#222226',
        gold: {
          DEFAULT: '#C9A24D',
          hover: '#B8923D',
          light: '#E2C882',
          dark: '#9E7B2D',
          50: '#FBF8F0',
          100: '#F5EDD9',
          200: '#EADCB3',
          300: '#DDC98B',
          400: '#D3B869',
          500: '#C9A24D',
          600: '#B8923D',
          700: '#94732E',
          800: '#705622',
          900: '#4C3A16',
        },
        foreground: '#FFFFFF',
        'muted-foreground': '#9CA3AF',
        ink: {
          950: '#0B0C0E',
          900: '#111215',
          800: '#16171B',
          700: '#1F2026',
          600: '#2A2C34',
          500: '#3D3F4B',
        },
      },
      fontFamily: {
        sans: ['Barlow', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        ultra: '0.28em',
        wide2: '0.18em',
      },
    },
  },
  plugins: [],
};
