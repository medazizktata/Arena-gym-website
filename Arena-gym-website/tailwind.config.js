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
        Gentona: ['Gentona'],
        'urbanist': ['Urbanist', 'sans-serif'],        
      },
      colors: {
        black: '#000',
        blackBG: '#121212',
        white: '#FFF',
        yellowMain: '#FDEA1D',
        yellowBetter: '#FBDE06',
        yellowDarkShadow: '#3D3500',
        yellowLightShadow: '#827200',
       greyLight: "#D9D9D9",
       greyMedium: "#7F7F7F",
       greyDark: "#232323",

      },
      boxShadow: theme => ({
        'buttonYellowDark': `0 3px 0 0 ${theme('colors.yellowDarkShadow')}`,
        'buttonYellowLight': `0 3px 0 0 ${theme('colors.yellowLightShadow')}`,
        'buttonWhite': `0 3px 0 0 ${theme('colors.white')}`,
        'buttonGreyLight': `0 3px 0 0 ${theme('colors.greyLight')}`,
        'buttonGreyMedium': `0 3px 0 0 ${theme('colors.greyMedium')}`,
        'buttonGreyDark': `0 3px 0 0 ${theme('colors.greyDark')}`,
      }),
    },
  },
  plugins: [],
}

