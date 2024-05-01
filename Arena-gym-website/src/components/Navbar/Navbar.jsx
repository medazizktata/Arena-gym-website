import React, { useEffect, useState } from "react";
import ImageHover from "../ImageHover";
import ButtonYellow from "../Buttons/ButtonYellow";
import HamburgerIcon from "./HamburgerCrossIcon/HamburgerCrossIcon";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const [navbarBackground, setNavbarBackground] = useState(false);

  const [sidebarBackground, setSidebarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      if (isScrolled !== navbarBackground) {
        setNavbarBackground(isScrolled);
      }
      if (isScrolled !== sidebarBackground) {
        setSidebarBackground(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarBackground, sidebarBackground]);


  return (
    <nav className="">
      <div className="fixed top-0 left-0 w-full z-50">
        <div
          className={`flex justify-between px-10 py-5 text-white bg-blackBG  ${
            navbarBackground ? "bg-opacity-100" : "bg-opacity-0"
          } transition-all duration-900`}
        >
          <div className="inline-flex items-center text-center w-40 hover:text-yellowMain transition duration-500 cursor-pointer">
            <Link to={"/"}>
              <ImageHover
                originalSrc="src/assets/Logo/Final Logo/White/1x/Gym Premium White.png"
                hoverSrc="src/assets/Logo/Final Logo/Yellow/FDEA1D/1x/Gym Premium Yellow FDEA1D.png"
              />
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden z-60">
            <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex lg:space-x-2 md:space-x-2 items-center text-center font-urbanist font-semibold">
            <ScrollLink to="home" spy={true} smooth={true} duration={500} className="">
              <NavLink to="/home" active={location.pathname === "/home"}>
                <span className="block">Acceuil</span>
                {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
                <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>

              </NavLink>
            </ScrollLink>
            <NavLink
              to="/activites"
              active={location.pathname === "/activites"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Activités</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <NavLink
              to="/coaches"
              active={location.pathname === "/coaches"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Coaches</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <NavLink
              to="/blog"
              active={location.pathname === "/blog"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Blog</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <NavLink
              to="/tarifs"
              active={location.pathname === "/tarifs"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Tarifs</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <NavLink
              to="/planning"
              active={location.pathname === "/planning"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Planning</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <NavLink
              to="/galerie"
              active={location.pathname === "/galerie"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">Galerie</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <ScrollLink
              to="home#contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <Link to="/home#contact">
                <span className="block">Contact</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
                <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
              </Link>
            </ScrollLink>
            <NavLink
              to="/about"
              active={location.pathname === "/about"}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <span className="block">A Propos</span>
              {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
              <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            </NavLink>
            <Link to="/tarifs" active={location.pathname === "/tarifs"}>
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
        className={`fixed pt-5 right-0 h-full z-40 lg:w-auto transition-all overflow-y-auto  ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${
          sidebarBackground ? "bg-blackBG bg-opacity-100 border-l-2 border-b-2 border-white" : "bg-opacity-90 backdrop-filter backdrop-blur-lg border-l-2 border-b-2 border-greyDark"
        } transition-background-color duration-900`}
      >
        <div className="flex flex-col gap-5 text-2xl items-start pt-5 w-60 lg:w-64 space-x-3 font-urbanist font-semibold">
          <NavLink
            to="/home"
            active={location.pathname === "/home"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block hidden">Acceuil</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/home"
            active={location.pathname === "/home"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Acceuil</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
            
          </NavLink>
          <NavLink
            to="/activites"
            active={location.pathname === "/activites"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Activités</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/coaches"
            active={location.pathname === "/coaches"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Coaches</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/blog"
            active={location.pathname === "/blog"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Blog</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/tarifs"
            active={location.pathname === "/tarifs"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Tarifs</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/planning"
            active={location.pathname === "/planning"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Planning</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <NavLink
            to="/galerie"
            active={location.pathname === "/galerie"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">Galerie</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
          <ScrollLink
              to="home#contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
            >
              <Link to="/home#contact">
                <span className="block">Contact</span>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span>
                <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
              </Link>
            </ScrollLink>
          <NavLink
            to="/about"
            active={location.pathname === "/about"}
            className="text-white p-2 group relative hover:text-yellowMain transition duration-300"
          >
            <span className="block">A Propos</span>
            {/* <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellowMain"></span> */}
            <span className="absolute inset-0  hover:bg-white opacity-15 transition duration-300 "></span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
const NavLink = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`text-white p-2 group relative hover:text-yellowMain transition duration-300 ${
        active ? "text-yellowMain" : ""
      }`}
    >
      <span className="block">{children}</span>
      <span
        className={`block max-w-0 transition-all duration-300 h-0.5 bg-yellowMain ${
          active ? "max-w-full " : "group-hover:max-w-full"
        }`}
      ></span>
      {!active && (
        <span className="absolute inset-0 hover:bg-white opacity-15 transition duration-300 "></span>
      )}
    </Link>
  );
};

export default Navbar;
