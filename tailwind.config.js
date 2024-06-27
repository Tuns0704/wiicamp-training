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
        darkbg1: 'rgb(var(--dark-bg-primary) / <alpha-value>)',
        darkbg2: 'rgb(var(--dark-bg-secondary) / <alpha-value>)',
        darkbgbase: 'rgb(var(--dark-bg-base) / <alpha-value>)',
        darkbgform: 'rgb(var(--dark-bg-form) / <alpha-value>)',
        darklinebase: 'rgb(var(--dark-line-base) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        textlighter: 'rgb(var(--text-lighter) / <alpha-value>)',
        textlight: 'rgb(var(--text-light) / <alpha-value>)',
        textdark: 'rgb(var(--text-dark) / <alpha-value>)',
        textgray: 'rgb(var(--text-gray) / <alpha-value>)',
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
