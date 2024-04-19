import React from "react";
import BackgroundText from "../../components/BackgroundText";
import SponsorsCarousel from "./SponsorsSection/SponsorsCarousel";
import MapCard from "../../components/MapCard";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
function MapSection() {
  return (
    <>
      <div className="my-20 px-4 lg:px-14 relative flex flex-col items-center">
        <div className="absolute z-1 w-full top-10 opacity-50">
          <div className="relative top-20 flex flex-col justify-content items-center">
            <BackgroundText
              className=""
              text={"Localisation"}
              fontFamily={"urbanist"}
              strokeColor={"white"}
              textSize={20}
            />
            <BackgroundText
              className=""
              text={"Localisation"}
              fontFamily={"urbanist"}
              strokeColor={"white"}
              textSize={20}
            />
            <BackgroundText
              className=""
              text={"Localisation"}
              fontFamily={"urbanist"}
              strokeColor={"white"}
              textSize={20}
            />
          </div>
        </div>
        <div className="relative z-10 w-full bottom-10 ">
          <MapCard
            url={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d797.9554495945297!2d10.258134042977934!3d36.87068406492787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb94862d47bf%3A0x494dcecf1c908ab8!2sArena%20Gym%20Premium!5e0!3m2!1sen!2stn!4v1712477310349!5m2!1sen!2stn"
            }
            title={"Visitez-nous à Sokra"}
            subtitle={
              "Venez nous rendre visite pour découvrir ce que nous offrons pour améliorer votre condition physique !"
            }
          />
        </div>
        <ButtonYellow
          buttonFont="font-robotoCon"
          fontWeight="font-black hover:scale-105"
          paddingX={10}
        >
          Changer de Salle
        </ButtonYellow>
      </div>
    </>
  );
}
export default MapSection;
