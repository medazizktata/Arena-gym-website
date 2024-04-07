import React, { useState } from 'react';

const CoachCard = ({ img, nom }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div>
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{ width: '350px', height: '350px', borderRadius: '50%' }}
    >
      <div
        className={` absolute inset-0`}
        style={{
          backgroundImage: hovered ? `linear-gradient(to bottom, rgba(255, 255, 0, 0.3), rgba(255, 255, 0, 0.3)), url(${img})` : `linear-gradient(to bottom, transparent, black), url(${img})` ,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: hovered ? '3px solid yellow' : '3px solid white',
          borderRadius: '50%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-md"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {hovered && (
            <p
              className="text-white z-10 absolute bottom-10"
              style={{
                fontFamily: 'roboto condensed',
                fontSize: '1.5rem',
                bottom : "150px"
              }}
            >
              <a
                href="#"
                className="group hover:text-white transition duration-300"
              >
                <span className="block text-3xl" style={{bottom:'80px'}}>Consulter Coach</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
            </p>
          )}
        </div>
      </div>

      </div >
      <p className="text-white" style={{ textAlign: "center", fontFamily: "Roboto Condensed", fontSize: "30px", fontWeight: 600, marginTop:'30px'}}>{nom}</p>
     </div>
  );
};

export default CoachCard;
