import React from "react";
import { getColor } from "../utils/getColor";
import BackgroundText from "./BackgroundText";

function PageIntroduction({
  imgSrc,
  BGText = "",
  title,
  titleProps = "text-white text-center",
  subTitle = "",
  subTitleProps = "text-white text-center sm:text-4xl",
}) {
  const translateValue = 30 - BGText.length * 0.5;

  // Calculate extraHeight based on whether BGText is empty or not
  let extraHeight = 110;
  if (BGText === "") {
    extraHeight = 140;
  }

  return (
    <>
      <div className="my-20 relative overflow-y-hidden">
        <div className="flex flex-col relative z-10">
          <div className="transform translate-y-10">
            <div
              className={`w-[80%] mx-auto transform translate-y-${translateValue} opacity-80 sm:scale-80 `}
            >
              <BackgroundText
                text={`${BGText}`}
                strokeColor="white"
                fontFamily={"urbanist"}
                textSize={20}
              />
            </div>
          </div>
          <h1
            className={`font-Gentona font-black ${titleProps}`}
          >
            {title}
          </h1>
          <h2 className={`text-lg  ${subTitleProps}`}>
            {subTitle}
          </h2>
        </div>

        <img
          src={`${imgSrc}`}
          className={`absolute inset-0 w-full h-full object-cover`}
          alt="Background"
        />
        <div
          className={`absolute inset-0 w-full h-full`}
          style={{
            background: `linear-gradient(to top, ${getColor(
              "blackBG"
            )}, rgba(255,255,255,0))`,
          }}
        ></div>
      </div>
    </>
  );
}

export default PageIntroduction;
