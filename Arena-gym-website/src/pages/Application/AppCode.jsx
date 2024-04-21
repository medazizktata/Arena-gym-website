import React, { useState, useEffect } from "react";


function AppCode({SrcImg,Remarque}) {

    return(
        <div className="bg-yellowMain w-30 m-6  border-black shadow-cardYellowDark cursor-pointer " >
                <div className="box m-5">
                    <img src={SrcImg} className=' w-full h-30 object-cover ' />
                    <p className="my-4 font-robotoCon text-black text-center ">{Remarque}</p>
                    </div>
        </div>                    
    )

}
export default AppCode;