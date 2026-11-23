/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          primary: '#087C19',
          dark: '#075B19',
          lime: '#A8F044',
          light: '#DDF4C9',
          navy: '#102235',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 10px 30px rgba(0, 0, 0, 0.12)',
        'glass-hover': '0 14px 40px rgba(0, 0, 0, 0.18)',
        'lime-glow': '0 6px 20px rgba(168, 240, 68, 0.45)',
        'green-pill': '0 3px 12px rgba(8, 124, 25, 0.28)',
      }
    },
  },
  plugins: [],
}
