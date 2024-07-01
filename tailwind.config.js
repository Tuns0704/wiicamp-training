/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        dark: {
          bg1: 'rgb(var(--dark-bg-primary) / <alpha-value>)',
          bg2: 'rgb(var(--dark-bg-secondary) / <alpha-value>)',
          base: 'rgb(var(--dark-bg-base) / <alpha-value>)',
          form: 'rgb(var(--dark-bg-form) / <alpha-value>)',
          linebase: 'rgb(var(--dark-line-base) / <alpha-value>)',
        },
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        textlighter: 'rgb(var(--text-lighter) / <alpha-value>)',
        textlight: 'rgb(var(--text-light) / <alpha-value>)',
        textdark: 'rgb(var(--text-dark) / <alpha-value>)',
        textgray: 'rgb(var(--text-gray) / <alpha-value>)',
      },
      screens: {
        base: '1194px',
        '2xl': '1400px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
};
