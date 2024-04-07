import React from "react";
import Form from "./form_inscription";
const MapCard = ({ title, subtitle, url, width="1000px", height="500px" }) => {
  return (
    <div className="flex flex-col items-center justify-content min-h-screen px-4 font-urbanist">
      <div className="text-center my-8">
        <h1 className="font-bold text-white py-7 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title}</h1>
        <p className="mx-auto text-gray-300 text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[80%] text-center">{subtitle}</p>
      </div>
      <div className="relative p-3 w-full max-w-4xl mx-auto">
        <iframe
          width={width}
          height={height}
          className="w-full mx-auto border-2 border-white shadow-cardWhite hover:border-yellowMain hover:shadow-cardYellowMain transition duration-500"
          src={url}
          allowFullScreen
          tabIndex="0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapCard;
