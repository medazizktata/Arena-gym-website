import React from "react";
import { getColor } from "../utils/getColor";
import BackgroundText from "./BackgroundText";

function PageIntroduction({
  imgSrc,
  BGText = "",
  title,
  titleProps = "text-white text-center",
  subTitle = "",
  subTitleProps = "text-white text-center",
}) {
  const translateValue = 30 - BGText.length * 0.4;

  // Calculate extraHeight based on whether BGText is empty or not
  let extraHeight = 110;
  if (BGText === "") {
    extraHeight = 140;
  }

  return (
    <>
      <div className="my-20 relative">
        <div className="inline-block flex flex-col relative z-10">
          <div className="transform translate-y-28">
            <div
              className={`w-[80%] mx-auto transform translate-y-${translateValue} opacity-80 sm:translate-y-0 sm:scale-80 `}
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
            className={`inline font-Gentona font-black text-6xl md:text-8xl lg:text-9xl ${titleProps}`}
          >
            {title}
          </h1>
          <h2 className={`inline text-lg sm:text-xl ${subTitleProps}`}>
            {subTitle}
          </h2>
        </div>

        <img
          src={`${imgSrc}`}
          className={`absolute inset-0 w-full h-[${extraHeight}%] object-cover`}
          alt="Background"
        />
        <div
          className={`absolute inset-0 w-full h-[${extraHeight}%]`}
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
