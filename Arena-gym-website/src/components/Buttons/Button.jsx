import React from 'react';

function Button({ children, textColor, bgColor, font, padding, className, transparentBorder = 1 }) {
  let filterHide;
  if (transparentBorder === 1){
    transparentBorder = "border border-1 border-transparent";
  } else {
    transparentBorder = ""
  }
  return (
    <button
      className={`h-15 px-${padding} py-2 ${transparentBorder} hover:border-white transition-all duration-500 ${textColor} ${bgColor} ${font} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
