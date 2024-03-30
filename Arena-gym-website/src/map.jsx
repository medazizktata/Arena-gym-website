import React from 'react';
import '@fontsource/urbanist'; // Assurez-vous d'avoir importé la police

const MapCard = ({ title, subtitle, url }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4 font-urbanist">
      <div className="text-center mb-8 w-1/3  ">
        <h1 className="text-4xl font-bold text-white py-2">{title}</h1>
        <p className="text-gray-300 ">{subtitle}</p>
      </div>
      <div className="relative  p-3 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <iframe
          className="w-full h-[300px] md:h-[400px] rounded-lg border-2 border-gray-200 mx-auto custom-iframe-border"
          style={{ maxWidth: 'calc(100% - 250px)' }}
          src={url}
          allowFullScreen
          
          tabIndex="0"
        ></iframe>
        
      </div>
    </div>
  );
};

export default MapCard;
