import React from "react";
import Button from "./Button";

function ButtonWhite({ children, buttonFont, paddingX, fontWeight, buttonType }) {

  return (
    <Button
      textColor="text-blackBG"
      bgColor="bg-white"
      font={buttonFont}
      padding={paddingX}
      transparentBorder={1}
      typeB={buttonType}
      className={`${fontWeight} border border-1 border-transparent shadow-buttonblackBG hover:border-yellowMain transition-all duration-500 hover:shadow-buttonYellowLight transition-all duration-500`}
    >
      {children}
    </Button>
  );
}

export default ButtonWhite;
