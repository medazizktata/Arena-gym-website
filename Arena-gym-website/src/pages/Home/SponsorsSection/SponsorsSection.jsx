import React from "react";
import BackgroundText from "../../../components/BackgroundText";
import SponsorsCarousel from "./SponsorsCarousel";
function SponsorsSection() {
  return (
    <>
      <div className="my-20 px-14 relative flex flex-col items-center justify-center">
        <div className="absolute z-1 w-[90%] top-0 opacity-50">
          <BackgroundText
            className=""
            text={"Sponsors"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={15}
          />
        </div>
        <div className="relative top-14 z-10">
          <SponsorsCarousel />
        </div>
      </div>
    </>
  );
}
export default SponsorsSection;
