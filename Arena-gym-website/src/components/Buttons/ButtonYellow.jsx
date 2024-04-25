import React from "react";
import Button from "./Button";

function ButtonYellow({ children, buttonFont, paddingX, fontWeight, buttonType, onClick }) {

  return (
    <Button
      textColor="text-blackBG"
      bgColor="bg-yellowMain"
      font={buttonFont}
      padding={paddingX}
      transparentBorder={1}
      typeB={buttonType}
      onClick={onClick}
      className={`${fontWeight} border border-1 border-transparent shadow-buttonYellowDark hover:border-white transition-all duration-500 hover:shadow-buttonYellowLight transition-all duration-500`}
    >
      {children}
    </Button>
  );
}

export default ButtonYellow;
