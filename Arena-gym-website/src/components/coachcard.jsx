import React, { useState } from "react";

const CoachCard = ({ img, nom, circleSize = 250 }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };
  

  return (
    <div className="inline flex flex-col align-items justify-center">
      <div
        className="mx-auto relative overflow-hidden scale-90"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        style={{ width: circleSize, height: circleSize }}
      >
        <div
          className={`absolute inset-0 rounded-full`}
          style={{
            backgroundImage: hovered
              ? `linear-gradient(to bottom, rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0.3)), url(${img})`
              : `linear-gradient(to bottom, transparent, black), url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            border: hovered ? "3px solid yellow" : "3px solid white",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-full"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            {hovered && (
              <p
                className="text-white z-10 absolute bottom-10"
                style={{
                  fontFamily: "roboto condensed",
                  fontSize: "1.5rem",
                  bottom: `${(125 / 300) * circleSize}px`,
                }}
              >
                <a
                  href="#"
                  className="group hover:text-white transition duration-300"
                >
                  <span className="block lg:text-5xl md:text-4xl max-sm:text-sm">Consulter Coach</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
      <span className="text-white text-center font-robotoCond font-bold lg:text-5xl md:text-4xl max-sm:text-2xl mt-2">
        {nom}
      </span>
    </div>
  );
};

export default CoachCard;
