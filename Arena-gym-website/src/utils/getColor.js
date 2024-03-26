import defaultTheme from '../../tailwind.config'; 

export const getColor = (colorName) => {
  const colors = defaultTheme.theme.extend.colors;
  
  if (colors.hasOwnProperty(colorName)) {
    return colors[colorName];
  } else {
    return '#000000';
  }
};
