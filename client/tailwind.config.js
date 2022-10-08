/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: 'tw-',
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vapor: {
          100: '#0b1014'
        },
        white: '#ffffff',
        gray: '#878787'
      }
    }
  },
  plugins: []
};
