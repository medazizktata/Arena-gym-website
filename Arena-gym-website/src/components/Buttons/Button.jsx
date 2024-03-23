import React from 'react';

function Button({ children, textColor, bgColor, font, className }) {
  return (
    <button
      className={`h-15 px-6 py-2 border border-1 border-transparent hover:border-white transition-all duration-500 ${textColor} ${bgColor} ${font} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;