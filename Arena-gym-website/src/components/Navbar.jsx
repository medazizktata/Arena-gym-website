import React, { useState, useEffect } from "react";
import ImageHover from "./ImageHover";
import ButtonYellow from "./Buttons/ButtonYellow";
import ButtonBlack from "./Buttons/ButtonBlack";
import Arrow from "./Arrow";

function Navbar() {
  return (
    <>
      <div className="bg-black block">
        <div className="flex justify-between px-10 py-5 mx-auto bg-blackBG text-white">
          <div className="inline flex items-center text-center w-40 hover:text-yellowMain transition duration-500 cursor-pointer">
            <a
              href="#"
              className="group hover:text-yellowMain transition duration-300"
            >
              <ImageHover
                originalSrc="src/assets/Logo/Final Logo/White/1x/Gym Premium White.png"
                hoverSrc="src/assets/Logo/Final Logo/Yellow/FDEA1D/1x/Gym Premium Yellow FDEA1D.png"
              />
              {/*<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>*/}
            </a>
          </div>
          <div className="flex justify-around space-x-5 items-center text-center font-urbanist font-semibold">
            <>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Acceuil</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">A Propos</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Activités</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Tarifs</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Coaches</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Planning</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Blog</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Galerie</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
              <a
                href="#"
                className="group hover:text-yellowMain transition duration-300"
              >
                <span className="block">Contact</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              </a>
            </>
            <ButtonYellow buttonFont="font-robotoCon" fontWeight="font-black" paddingX={6}>Join Us</ButtonYellow>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
