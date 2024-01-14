/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        green: '0 0 3px 3px rgb(74 222 128)',
        gray: '0 1px 3px 0 rgba(60, 64, 67, 0.3)',
      },
    },
  },
  plugins: [],
};
