import React from "react";
import ImageHover from "../../components/ImageHover";

function LogoBox({ image, color, width, height, hoverImgSrc, className }) {
  const bgColor = `bg-${color}`;

  return (
    <div
      className={`flex items-center justify-center ${bgColor} w-${width} h-${height} inline-block px-4 ${className}`}
    >
      {/* <img src={image} alt="Logo" className="max-w-full p-5" /> */}
      <ImageHover
        originalSrc={image}
        hoverSrc={hoverImgSrc}
        className="max-w-full p-5"
      />
    </div>
  );
}

export default LogoBox;
