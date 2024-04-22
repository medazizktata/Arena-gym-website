import React, { useState, useEffect } from "react";



function HeadApplication() {
    return (
        <div className="relative">
        <img src="/src/assets/Logo/Final Logo/White/1x/Padel Premium White.png" className="absolute top-0 right-0 mt-8 mr-6 w-80 h-auto " alt="Padel Premium" />
        <h1 className="font-Gentona absolute top-1/4 left-1/4 transform -translate-x-1/2 text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-5xl" >Exclusive</h1>
        <h1 className="font-Gentona absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-7xl font-bold ">
          Utilisez l'application <br/> pour accéder à nos <br/> offres premium
        </h1>
        <img src="/src/assets/Images/Application.png" className="w-full h-25" alt="Application" />
        <h1 className="font-urbanist bottom-0 m-3  absolute  text-9xl font-bold text-white ">ARENA PADEL APP</h1>
      </div>
      
    
             

        
      
    )

}
export default HeadApplication;