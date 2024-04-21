import React, { useState, useEffect } from "react";
import ImageHover from "./ImageHover";
import SearchBar from "./SearchBar"



function HeadEntraineurs() {
    return (
     <div className="relative ">
         <h1 className="font-Gentona absolute top-1/2 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-7xl  ">
            NOS ENTRAINEURS</h1>
         <img src=".\src\assets\Images\Entraineurs.png" className=' w-full h-25' />
     </div>
    )

}
export default HeadEntraineurs;