/** @type {import('tailwindcss').Config} */

module.exports = {
  prefix: 'tw-',
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        vapor: {
          100: '#2b3f4f',
          200: '#1c2933',
          300: '#0b1014'
        },
        white: '#ffffff',
        gray: '#878787',
        lightgray: '#f2f2f2',
        green: '#5ee6ae',
        greendark: '#168c5b',
        blue: '#53e0db',
        bluedark: '#17827e'
      }
    }
  },
  plugins: []
};
