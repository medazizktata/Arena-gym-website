import React from 'react';
import arenalogo from '../assets/Logo/Final Logo/Yellow/FBDE06/5x/Gym Premium Yellow FBDE06.png';
import appstore from '../assets/Img/Footer_AppStoreandGooglePlayBadgePNG1.png';
import arenalogowhite from '../assets/Logo/Final Logo/White/1x/Padel Premium White.png';
import { Link } from "react-router-dom"
import ButtonYellow from "./Buttons/ButtonYellow";


function Footer() {
  return (
    <footer className="bg-blackBG text-white px-10  md:px-20  md:pt-16">  
      <div className=" grid grid-cols-1 md:grid-cols-4  gap-10 px-10"> 
        
		
		<ul className="flex flex-col gap-3"> 
          
            <img className="w-52" src={arenalogo} alt="Logo" />
       
		  <br></br>
          <li className="text-">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
          </li>
		  
		  <br></br>
		  
          <li className=""> Colisée Soula, Manar 2, Tunis</li>
          <li className="">6am – 8pm Weekdays. 8am – 1pm Saturdays.</li>
        </ul>
       
	   
	   
	<div className="col-span-1 hidden lg:flex flex-col gap-[-3px] items-center">  
            
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
            <Link to="/tarifs">
            </Link>
       
        </div>



        <ul className="col-span-1 flex flex-col items-center gap-6">  
         <img className="w-56 y-[55px]" src={arenalogowhite} alt="Arena Padel Premium" />
		  
		  <div className= "flex flex-col justify-around lg:mt-16 gap-5 items-center">
          <li className=" font-roboto  mb-2">Télécharger l’application</li>
        
          <li> <img className="h-28" src={appstore} alt="App Store and Google Play" /></li>
      </div> 
        </ul>



        <div className=" flex flex-col items-center lg:ml-40 gap-6">
            <span className="text-xl">Réseaux sociaux</span>

            <div className='flex flex-row items-center gap-12 md:gap-4'>
                <a href="#" className="mb-4 md:mb-0">
                    <img className="h-11" src="src/assets/Img/instawhite.png" alt="Instagram" />
                </a>
                <a href="#" className="mb-4 md:mb-0">
                    <img className="" src="src/assets/Img/icons8-facebook-44.png" alt="Facebook" />
                </a>
                <a href="#" className="mb-4 md:mb-0">
                    <img className="h-[45.9px]" src="src/assets/Img/icons8-twitterx-43.png" alt="X" />
                </a>

                
            </div>

            <div className='lg:mt-20'>
                <ButtonYellow
                    buttonFont="font-robotoCon"
                    fontWeight="font-black"
                    paddingX={8}> Join Us
                </ButtonYellow>
            </div>
        </div>
    
   </div>
  </footer>


	);
	}
	
	export default Footer;