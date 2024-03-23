import React from "react";
import Button from "./Button";

function ButtonBlack({ children, buttonFont, fontWeight }) {
  return (
    <Button
      textColor="text-greyLight"
      bgColor="bg-blackBG"
      font={buttonFont}
      className={`${fontWeight} border border-1 border-greyMedium font-black shadow-buttonGreyMedium hover:shadow-buttonWhite transition-all duration-500 hover:text-white transition-all duration-500`}
    >
      {children}
    </Button>
  );
}
export default ButtonBlack;
