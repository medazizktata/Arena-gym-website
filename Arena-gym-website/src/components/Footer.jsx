import React from 'react';
import arenalogo from '../assets/Logo/Final Logo/Yellow/FBDE06/5x/Gym Premium Yellow FBDE06.png';
import appstore from '../assets/Img/Footer_AppStoreandGooglePlayBadgePNG1.png';
import arenalogowhite from '../assets/Logo/Final Logo/White/1x/Padel Premium White.png';
import Twitter from '../assets/Img/Footer_Vector_1.png';
import Insta from '../assets/Img/Footer_Vector.png';
import Facebook from '../assets/Img/Footer_Vector_2.png';

function Footer() {
  return (
    <footer className="bg-blackBG text-white px-16 py-8">  
      <div className=" flex justify-around gap-10"> 
        
		
		<ul className="col-span-1 flex flex-col  "> 
          <li className="w-52">
            <img className="" src={arenalogo} alt="Logo" />
          </li>
		  <br></br>
          <li className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis
          </li>
		  
		  <br></br>
		  
          <li className="text-xs"> Colisée Soula, Manar 2, Tunis</li>
          <li className="text-xs">6am – 8pm Weekdays. 8am – 1pm Saturdays.</li>
        </ul>
       
	   
	   
	<div className="col-span-1 flex flex-col items-center">  
          <ul className="space-y-0">  
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Accueil
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Activités
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Planning
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Galerie
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                Entraineurs
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-yellowBetter font-roboto">
                À propos
              </a>
            </li>
          </ul>
        </div>



        <ul className="col-span-1 flex flex-col items-center">  {/* Modified classes */}
          <li> <img className="w-48 Y-" src={arenalogowhite} alt="Arena Padel Premium" /></li>
		  
		  <div className= "flex flex-col justify-around mt-5 gap-5 items-center">
          <li className="text-sm font-roboto mb-2">Télécharger l’application</li>
        
          <li> <img className="h-20 w-30" src={appstore} alt="App Store and Google Play" /></li>
          </div> 
        </ul>




        <div className="col-span-1 flex flex-col items-center">  {/* Modified classes */}
          <span className="text-sm font-roboto mb-2">Social Media</span>
		  <br></br>
          <ul className="flex justify-around gap-5"> 
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
                <img className="" src={Facebook} alt="Facebook" />
              </a>
            </li>
          </ul>
		  <br></br>
		  <br></br>
		  <br></br>
          <button className="bg-yellowBetter text-gray-800 py-1.5 px-1 font-bold ">Contacter-Nous</button>
        </div>
      </div>
    </footer>


	);
	}
	
	export default Footer;