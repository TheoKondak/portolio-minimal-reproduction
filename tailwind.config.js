/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inset-top': '0px 10px 10px -10px #242424 inset',
        'inset-bottom': '0px -10px 10px -10px #242424 inset',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
