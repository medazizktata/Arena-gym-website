import React from "react";
import Button from "./Button";

function ButtonWhite({ children, buttonFont, paddingX, fontWeight, buttonType, onClick }) {

  return (
    <Button
      textColor="text-blackBG"
      bgColor="bg-white"
      font={buttonFont}
      padding={paddingX}
      transparentBorder={1}
      typeB={buttonType}
      onClick={onClick}
      className={`${fontWeight} border border-2 border-transparent shadow-buttonblackBG hover:border-yellowMain transition-all duration-500 hover:shadow-buttonblackBG transition-all duration-500`}
    >
      {children}
    </Button>
  );
}

export default ButtonWhite;
