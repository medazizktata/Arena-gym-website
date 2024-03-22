/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'robotoCon': ['Roboto Condensed', 'Roboto', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'montserrat':['Montserrat', 'sans-serif'],
        'mosk': ['Mosk', 'sans-serif'],
        Gentona: ['Gentona', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],        
      },
    },
  },
  plugins: [],
}

