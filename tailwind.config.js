/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

export default withMT({
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#403F3F',
      gray: '#706F6F',
    },
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [require('daisyui')],
});
