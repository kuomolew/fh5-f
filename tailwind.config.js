/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue, js, ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'opacity-green-500': 'rgba(34, 197, 94, 0.65)',
        'opacity-blue-500': 'rgba(59, 130, 246, 0.65)',
        'opacity-violet-500': 'rgba(139, 92, 246, 0.65)',
        'opacity-yellow-500': 'rgba(234, 179, 8, 0.65)',
        'opacity-red-500': 'rgba(239, 68, 68, 0.65)',
        'opacity-pink-500': 'rgba(236, 72, 153, 0.65)',
        'opacity-lime-500': 'rgba(101, 163, 13, 0.65)',
      },
      boxShadow: {
        green: '0 0 3px 3px rgb(74, 222, 128)',
        gray: '0 1px 3px 0 rgba(60, 64, 67, 0.3)',
        red: '0 0 3px 3px rgb(239, 68, 68)',
      },
    },
  },
  plugins: [],
};
