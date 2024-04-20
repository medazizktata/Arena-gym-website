/** @type {import('tailwindcss').Config} */
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
        'Gentona': ['Gentona'],
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
       blueMale:"#2196F3",
       blueMaleDark:"#16578A",
       pinkFemale: "#FF1744",
       pinkFemaleDark: "#930E28",

      },
      boxShadow: theme => ({
        'buttonYellowMain': `0 3px 0 0 ${theme('colors.yellowMain')}`,
        'buttonYellowDark': `0 3px 0 0 ${theme('colors.yellowDarkShadow')}`,
        'buttonYellowLight': `0 3px 0 0 ${theme('colors.yellowLightShadow')}`,
        'buttonWhite': `0 3px 0 0 ${theme('colors.white')}`,
        'buttonGreyLight': `0 3px 0 0 ${theme('colors.greyLight')}`,
        'buttonGreyMedium': `0 3px 0 0 ${theme('colors.greyMedium')}`,
        'buttonGreyDark': `0 3px 0 0 ${theme('colors.greyDark')}`,
        'cardYellowDark': `5px 5px 0 ${theme('colors.yellowDarkShadow')}`,
        'cardYellowLight': `5px 5px 0 ${theme('colors.yellowLightShadow')}`,
        'cardWhite': `5px 5px 0 ${theme('colors.white')}`,
        'cardGreyMedium': `5px 5px 0 ${theme('colors.greyMedium')}`,
        'cardGreyDark': `5px 5px 0 ${theme('colors.greyDark')}`,
        'cardGreyLight': `5px 5px 0 ${theme('colors.greyLight')}`,
        'cardYellowMain': `5px 5px 0 ${theme('colors.yellowMain')}`,
        'cardSmallYellowDark': `3px 3px 0 ${theme('colors.yellowDarkShadow')}`,
        'cardSmallYellowLight': `3px 3px 0 ${theme('colors.yellowLightShadow')}`,
        'cardSmallWhite': `3px 3px 0 ${theme('colors.white')}`,
        'cardSmallGreyMedium': `3px 3px 0 ${theme('colors.greyMedium')}`,
        'cardSmallGreyDark': `3px 3px 0 ${theme('colors.greyDark')}`,
        'cardSmallGreyLight': `3px 3px 0 ${theme('colors.greyLight')}`,
        'cardSmallYellowMain': `3px 3px 0 ${theme('colors.yellowMain')}`,
        'cardBlueMale':`5px 5px 0 ${theme('colors.blueMale')}`,
        'cardSmallBlueMale':`3px 3px 0 ${theme('colors.blueMale')}`,
        'cardSmallBlueMaleDark':`3px 3px 0 ${theme('colors.blueMaleDark')}`,
        'cardSmallPinkFemale':`3px 3px 0 ${theme('colors.pinkFemale')}`,
        'cardPinkFemale':`5px 5px 0 ${theme('colors.pinkFemale')}`,
        'cardSmallPinkFemaleDark':`3px 3px 0 ${theme('colors.pinkFemaleDark')}`,

      }),
      backgroundImage:{
        'mapBackground': "url(src/assets/Images/Choisir Salle/Map_background_image.png)",
      }
    },
  },
  plugins: [],
}

