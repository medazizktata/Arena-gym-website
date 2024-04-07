import React, { useState } from 'react';

const ActivityCard = ({ img, nom, icon }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="w-64 h-72 relative m-auto"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        className={` absolute inset-0 ${
          hovered ? 'shadow-cardYellowMain' : 'border-white shadow-cardWhite' 
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, black), url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: hovered ? '3px solid yellow' : '3px solid white',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <img
            src={icon}
            style={{
              position: 'absolute',
              bottom: hovered ? '130px' : '110px',
              transition: 'bottom 0.3s, transform 0.3s',
            }}
          />
          <p
            className="text-white text-center z-10 font-bold text-5xl"
            style={{
              fontFamily: 'roboto condensed',
              position: 'absolute',
              bottom: hovered ? '80px' : '70px',
              transition: 'bottom 0.3s, transform 0.3s',
            }}
          >
            {nom}
          </p>
          {hovered && (
            <p
              className="text-white z-10 absolute bottom-10"
              style={{
                fontFamily: 'roboto condensed',
                fontSize: '1.5rem',
              }}
            >
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Voir Classe</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
