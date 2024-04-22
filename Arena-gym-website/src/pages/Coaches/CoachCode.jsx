import React, { useState, useEffect } from "react";

function CoachCode({ SrcImg, Name, Adress }) {
  return (
    <div className="bg-blackBG w-30 m-6 border border-white shadow-cardWhite hover:border-yellowMain hover:shadow-cardYellowMain cursor-pointer ">
      <div className="box m-5">
        <img src={SrcImg} className=" w-full h-60 object-cover " />
        <div className="my-4 font-robotoCon text-white text-center hover:text-yellowMain">
          <h2 className=" font-bold text-2xl my-1 ">{Name}</h2>
          <p className=" ">{Adress}</p>
        </div>
      </div>
    </div>
  );
}
export default CoachCode;
