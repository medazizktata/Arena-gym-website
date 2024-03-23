import React from "react";
import Button from "./Button";

function ButtonYellow({ children, buttonFont, fontWeight }) {
  return (
    <Button
      textColor="text-blackBG"
      bgColor="bg-yellowMain"
      font={buttonFont}
      className={`${fontWeight} border border-1 border-transparent shadow-buttonYellowDark hover:border-white transition-all duration-500 hover:shadow-buttonYellowLight transition-all duration-500`}
    >
      {children}
    </Button>
  );
}

export default ButtonYellow;
