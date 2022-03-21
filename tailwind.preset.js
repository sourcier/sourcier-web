module.exports = {
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
