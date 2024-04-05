import React, { useState } from "react";
import ImageHover from "./ImageHover";
import ButtonYellow from "./Buttons/ButtonYellow";
import HamburgerIcon from "./HamburgerCrossIcon/HamburgerCrossIcon";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black block">
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between px-10 py-5 mx-auto bg-blackBG text-white">
          <div className="inline-flex items-center text-center w-40 hover:text-yellowMain transition duration-500 cursor-pointer">
            <a
              href="#"
              className="group hover:text-yellowMain transition duration-300"
            >
              <ImageHover
                originalSrc="src/assets/Logo/Final Logo/White/1x/Gym Premium White.png"
                hoverSrc="src/assets/Logo/Final Logo/Yellow/FDEA1D/1x/Gym Premium Yellow FDEA1D.png"
              />
            </a>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex lg:space-x-3 items-center text-center font-urbanist font-semibold">
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Acceuil</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Activités</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Coaches</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Blog</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Tarifs</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Planning</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Gallerie</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Contact</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <a
              href="#"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">A Propos</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </a>
            <ButtonYellow
              buttonFont="font-robotoCon"
              fontWeight="font-black"
              paddingX={8}
            >
              Join Us
            </ButtonYellow>
          </div>
        </div>
      </div>
      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blackBG z-40 lg:w-auto transition-all overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 text-2xl items-start pt-5 w-60 lg:w-64 space-x-3 font-urbanist font-semibold">
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Acceuil</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Acceuil</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Activités</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Coaches</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Blog</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Tarifs</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Planning</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Gallerie</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Contact</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
          <a
            href="#"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">A Propos</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
