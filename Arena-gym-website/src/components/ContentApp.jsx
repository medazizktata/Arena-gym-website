import React, { useState, useEffect } from "react";
import AppCode from "../pages/Application/AppCode";


function ContentApp() {
    return (
        <div className="grid grid-cols-2 gap-4 mr-10 ml-10 flex items-center justify-center">
            <AppCode 
            SrcImg={"/src/assets/Images/iphone.png"}
            Remarque={"1- Cliquez sur le bouton “S’inscrire”"}/>
            <div className="my-9 mx-4"> 
                <h1 className="font-Gentona font-bold text-white text-4xl">Première <br/> connexion ?</h1>
                <p className="font-robotoCon text-white text-1xl mt-5" >Veuillez choisir la plateforme: Play Store pour les <br/> appareils Android ou App Store pour les appareils iOS.</p>
                <div className="flex mt-8 space-x-3">
                  <button className="mr-2 flex items-center border border-white rounded-md px-4 py-2 bg-black">
                 
                       <img src="/src/assets/Images/googleplay.png"  className=" w-8 h-8 mr-2 mr-2 " />
                       <div className="text-white font-robotoCon">
                         <p className="mb-1">GET IT ON</p>
                         <p className="font-bold text-1xl">Goggle Play</p>
                       </div>
                  
                  </button>
                  <button className="mr-2 flex items-center border border-white rounded-md px-4 py-2 bg-black">
                  
                       <img src="/src/assets/Images/appleicon.png"  className="w-9 h-9 mr-2" />
                       <div className="text-white font-robotoCon">
                         <p className="mb-1">Available on the</p>
                         <p className="font-bold text-1xl">App Store</p>
                       </div>
                  
                  </button>
                  <button className="flex items-center">
                 
                       <img src="/src/assets/Images/QRCode.png"  className="w-9 h-9 mr-2 " />
                       <h1 className=" font-Gentona text-white font-bold text-2xl"> Scan QR Code </h1>
                 
                  </button>
                </div>
                </div>
       
               <div className="my-9 mx-4"> 
                  <h1 className="font-Gentona font-bold text-white text-5xl">créez des <br/> équipes</h1>
                  <h2 className="font-Gentona text-white font-bold text-3xl mt-7"> Chattez via notre application !</h2>
                  <p className="font-robotoCon text-white text-xl mt-5">Organisez vos équipes en un clin d'œil et dialoguez aisément via notre application, favorisant ainsi une collaboration optimale entre les membres</p>
               
                </div>
                <AppCode 
                 SrcImg={"/src/assets/Images/iphone.png"}
                 Remarque={"1- Cliquez sur le bouton “Créer une équipe”"}/>
                 
                 <AppCode 
                 SrcImg={"/src/assets/Images/iphone.png"}
                 />
                  <div className="my-9 mx-4"> 
                  <h1 className="font-Gentona font-bold text-white text-5xl">Gérez vos<br/> équipes</h1>
                  <h2 className="font-Gentona text-white font-bold text-3xl mt-7"> Planifiez vos réservations</h2>
                  <p className="font-robotoCon text-white text-xl mt-5">Faites vos réservations rapidement et facilement depuis votre téléphone avec notre application mobile!</p>
               
                </div>


       </div>

    )

}
export default ContentApp;