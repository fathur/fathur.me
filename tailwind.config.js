const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        teal: colors.teal,
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        sans: ['Rubik', 'sans-serif'],
      },
      // opacity: ['disabled'],
      backgroundColor: ['disabled'],
      screens: {
        standalone: { raw: '(display-mode: standalone)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('nightwind')],
};
