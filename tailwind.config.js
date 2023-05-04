/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'inset-top': '0px 10px 10px -10px #242424 inset',
        'inset-bottom': '0px -10px 10px -10px #242424 inset',
      },
      fontSize: {
        postTitle: '3.75rem',
      },
      colors: {
        white: '#fff',
        black: '#000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse closest-side, #12061F,rgba(28,30,44,0.4))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
