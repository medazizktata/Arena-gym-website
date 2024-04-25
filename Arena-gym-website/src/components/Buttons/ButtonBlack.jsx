import React from "react";
import Button from "./Button";

function ButtonBlack({ children, buttonFont, paddingX, fontWeight, buttonType, onClick }) {
  return (
    <Button
      textColor="text-greyLight"
      bgColor="bg-blackBG"
      font={buttonFont}
      padding={paddingX}
      transparentBorder={0}
      typeB={buttonType}
      onClick={onClick}
      className={`${fontWeight} border border-1 border-greyMedium shadow-buttonGreyMedium hover:shadow-buttonWhite transition-all duration-500 hover:text-white transition-all duration-500`}
    >
      {children}
    </Button>
  );
}
export default ButtonBlack;
