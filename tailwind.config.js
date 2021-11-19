const colors = require('tailwindcss/colors');

module.exports = {
  // mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
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
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('nightwind'), require('@tailwindcss/typography')],
};
