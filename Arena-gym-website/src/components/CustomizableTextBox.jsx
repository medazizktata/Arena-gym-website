import React from "react";

function CustomizableTextBox({ text, size = "80%", color = "bg-blackBG", shadow = "shadow-cardWhite", textColor, className }) {
  return (
    <div
      className={`${className} text-3xl p-4 w-[${size}] ${color} border border-b ${shadow} ${textColor} hover:border-yellowMain transition duration-300 ease-in-out hover:shadow-cardYellowMain transition duration-300 ease-in-out cursor-pointer `}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

export default CustomizableTextBox;
