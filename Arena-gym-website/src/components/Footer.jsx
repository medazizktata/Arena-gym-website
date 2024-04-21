import React from "react";
import arenalogo from "../assets/Logo/Final Logo/Yellow/FBDE06/5x/Gym Premium Yellow FBDE06.png";
import appstore from "../assets/Img/Footer_AppStoreandGooglePlayBadgePNG1.png";
import arenalogowhite from "../assets/Logo/Final Logo/White/1x/Padel Premium White.png";
import Twitter from "../assets/Img/Footer_Vector_1.png";
import Insta from "../assets/Img/Footer_Vector.png";
import Facebook from "../assets/Img/Footer_Vector_2.png";
import { Link } from "react-router-dom";
import ButtonYellow from "./Buttons/ButtonYellow";

function Footer() {
  return (
    <footer className="bg-blackBG text-white px-20">
      <div className=" flex justify-around gap-10">
        <ul className="col-span-1 flex flex-col  ">
          <li className="w-52 ">
            <img className="" src={arenalogo} alt="Logo" />
          </li>
          <br></br>
          <li className="text-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            venenatis
          </li>

          <br></br>

          <li className="text-xl"> Colisée Soula, Manar 2, Tunis</li>
          <li className="text-xl">6am – 8pm Weekdays. 8am – 1pm Saturdays.</li>
        </ul>

        <div className="col-span-1 flex flex-col gap-[-3px] items-center">
          <Link
            to="/"
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
          <Link to="/tarifs"></Link>
        </div>

        <ul className="col-span-1 flex flex-col items-center">
          {" "}
          {/* Modified classes */}
          <li>
            {" "}
            <img
              className="w-56 y-[55px]"
              src={arenalogowhite}
              alt="Arena Padel Premium"
            />
          </li>
          <div className="flex flex-col justify-around mt-16 gap-5 items-center">
            <li className=" font-roboto mb-2">Télécharger l’application</li>

            <li>
              {" "}
              <img
                className="h-28"
                src={appstore}
                alt="App Store and Google Play"
              />
            </li>
          </div>
        </ul>

        <div className="col-span-1 flex flex-col items-center">
          {" "}
          {/* Modified classes */}
          <span className="text-xl font-roboto mb-7">Social Media</span>
          <br></br>
          <ul className="flex justify-around gap-6 ">
            <li>
              <a href="#">
                <img className="" src={Insta} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img className="" src={Twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  className="hover:filter hover:brightness-110 hover:saturate-100 hover:hue-rotate-180"
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
            </li>
          </ul>
          <div className="mt-28">
            <ButtonYellow
              buttonFont="font-robotoCon"
              fontWeight="font-black"
              paddingX={8}
            >
              {" "}
              Join Us
            </ButtonYellow>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
