/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.hmtl",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      gridTemplateColums:{
        '70/30': '70% 28%',
      }
    },
  },
  plugins: [],
}