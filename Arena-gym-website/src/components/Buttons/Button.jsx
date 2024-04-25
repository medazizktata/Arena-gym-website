import React from 'react';

function Button({ children, textColor, bgColor, font, padding, className, transparentBorder = 1, typeB, onClick }) {

  const borderClass = transparentBorder === 1 ? "border border-transparent" : "";

  let typeProp = "button"

  if (typeB === "submit" || typeB === "reset") {
    typeProp = typeB;
  }
  return (
    <button
      type={typeProp} 
      className={`h-15 px-${padding} py-2 ${borderClass} hover:border-white transition-all duration-500 ${textColor} ${bgColor} ${font} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
