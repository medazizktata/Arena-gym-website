import React from "react";
import Navbar from "../../components/Navbar";
import HeadApplication from "../../components/HeadApplication";
import ContentApp from "../../components/ContentApp"





export function PageApplication() {
    return (
      <React.Fragment>
        <Navbar />
        <HeadApplication />
        <div className="flex flex-col items-center justify-center my-5">         
          <img src="/src/assets/Logo/Final Logo/White/1x/Padel Premium White.png"  className=" w-80 h-auto  my-9 " />
          <p className="font-Gentona text-white text-xl">Téléchargez notre application Arena Padel Premium pour beneficier de nos offres inédites.</p>
      
        </div>
        <ContentApp />
        <div className="flex flex-col items-center justify-center my-5">
          <h1 className="font-Gentona font-bold text-white text-5xl my-5">Télécharger maintenant</h1>
          <img src="/src/assets/Logo/Final Logo/White/1x/Padel Premium White.png"  className=" w-80 h-auto  " />
      
        </div>
        
      </React.Fragment>
    );
  }