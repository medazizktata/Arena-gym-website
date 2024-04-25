import React, { useEffect, useState } from "react";
import ImageHover from "../ImageHover";
import ButtonYellow from "../Buttons/ButtonYellow";
import HamburgerIcon from "./HamburgerCrossIcon/HamburgerCrossIcon";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== navbarBackground) {
        setNavbarBackground(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarBackground]);

  return (
    <nav className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <div
          className={`flex justify-between px-10 py-5 text-white ${
            navbarBackground ? "bg-blackBG" : "bg-blackBG"
          } transition-all duration-900`}
        >
          <div className="inline-flex items-center text-center w-40 hover:text-yellowMain transition duration-500 cursor-pointer">
            <Link
              to="/"
              className="group hover:text-yellowMain transition duration-300"
            >
              <ImageHover
                originalSrc="src/assets/Logo/Final Logo/White/1x/Gym Premium White.png"
                hoverSrc="src/assets/Logo/Final Logo/Yellow/FDEA1D/1x/Gym Premium Yellow FDEA1D.png"
              />
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex lg:space-x-3 items-center text-center font-urbanist font-semibold">
            <Link
              to="/home"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Acceuil</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/activites"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Activités</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/coaches"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Coaches</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/blog"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Blog</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/tarifs"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Tarifs</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/planning"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Planning</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/galerie"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Galerie</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/contact"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Contact</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link
              to="/about"
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">A Propos</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </Link>
            <Link to="/tarifs">
              <ButtonYellow
                buttonFont="font-robotoCon"
                fontWeight="font-black"
                paddingX={10}
              >
                Join Us
              </ButtonYellow>
            </Link>
          </div>
        </div>
      </div>
      {/* Side Menu */}
      <div
        className={`fixed top-10 right-0 h-full bg-blackBG z-40 lg:w-auto transition-all overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-5 text-2xl items-start pt-5 w-60 lg:w-64 space-x-3 font-urbanist font-semibold">
          <Link
            to="/home"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block hidden">Acceuil</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/home"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Acceuil</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/activities"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Activités</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/coaches"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Coaches</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/blog"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Blog</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/tarifs"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Tarifs</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/planning"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Planning</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/galerie"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Galerie</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/contact"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Contact</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
          <Link
            to="/about"
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">A Propos</span>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
