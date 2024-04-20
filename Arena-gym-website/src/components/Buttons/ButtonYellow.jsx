import React from "react";
import Button from "./Button";

function ButtonYellow({ children, buttonFont, paddingX, fontWeight, buttonType }) {

  return (
    <Button
      textColor="text-blackBG"
      bgColor="bg-yellowMain"
      font={buttonFont}
      padding={paddingX}
      transparentBorder={1}
      typeB={buttonType}
      className={`${fontWeight} border border-1 border-transparent shadow-buttonYellowDark hover:border-white transition-all duration-500 hover:shadow-buttonYellowLight transition-all duration-500`}
    >
      {children}
    </Button>
  );
}

export default ButtonYellow;
