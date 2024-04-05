import React from "react";
import BackgroundText from "../../components/BackgroundText";
import Navbar from "../../components/Navbar/Navbar";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import BigCaroussel from "../../components/BigCaroussel";

function About() {
  return (
    <>
      <Navbar />
      <div className="mb-10 relative">
        <div className="inline-block flex flex-col relative z-10">
          <div className="">
            <BackgroundText
              text={"A Propos"}
              strokeColor="white"
              fontFamily={"urbanist"}
              textSize={20}
            />
          </div>
          <h1 className="inline text-white font-Gentona font-black text-9xl text-center">
            A Propos
          </h1>
        </div>

        <img
          src="src/assets/Images/Caroussel/Hero-section/Arena_exterior_best.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
        <div
          className="absolute inset-0 w-full"
          style={{
            background: `linear-gradient(to top, ${getColor(
              "blackBG"
            )}, rgba(255,255,255,0))`,
          }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-[35%] mt-10"
          src="src/assets/Logo/Final Logo/White/2x/Gym Premium White@2x.png"
        />
      </div>
      <CustomizableTextBox
        className={"m-auto my-16 text-center"}
        size="70%"
        text={
          "Arena Gym est une salle de sport couvrant un espace de 2500m² unique avec sa répartition Indoor et Out-door."
        }
        textColor={"text-white"}
      />
      <BigCaroussel />
      <div className="mt-60 mb-20 relative flex justify-start">
        <img
          className="relative w-[70%] mx-60 border border-b shadow-cardWhite hover:border-yellowMain transition duration-300 ease-in-out hover:shadow-cardYellowMain transition duration-300 ease-in-out cursor-pointer"
          src="src/assets/Images/Caroussel/Hero-section/Arena_interior.jpg"
          alt="Arena Interior"
        />
        <CustomizableTextBox
          className="mx-20 absolute transform -translate-y-40"
          size="35%"
          text="Riche en équipements Technogym dernière génération, coachs impliqués à l'écoute, cours professionnels agrées Reebok les Mills intensément bénéfiques."
          textColor={"text-white"}
        />
      </div>
      <BigCaroussel />
      <div className="flex justify-content align-items">
        <div className="mt-40 mb-20 relative flex justify-end">
          <img
            className="relative w-[70%] mx-60 border border-b shadow-cardWhite  hover:border-yellowMain transition duration-300 ease-in-out hover:shadow-cardYellowMain transition duration-300 ease-in-out cursor-pointer"
            src="src/assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg"
          />
          <CustomizableTextBox
            className="mx-20 absolute transform -translate-y-28"
            size="35%"
            text="Plongez dans une expérience fitness hors du commun avec nos terrains de padel et piscines exclusives, intégrés à notre offre haut de gamme."
            textColor={"text-white"}
          />
        </div>
      </div>
      <BigCaroussel />
      <div className="mt-20 flex flex-row space-around justify-content align-items ">
        <CustomizableTextBox
          className="mx-20 text-blackBG"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Horaires</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>Lundi 15h</span>
                  <span>Mercredi 16h</span>
              </div>
          </div>`}
          color="bg-white"
          shadow="shadow-cardGreyMedium"
          textColor={"text-black"}
        />
        <CustomizableTextBox
          className="mx-20 text-blackBG"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Numeros</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>(+216) 71 88 96 58</span>
                  <span>(+216) 58 88 38 83</span>
              </div>
          </div>`}
          color="bg-yellowMain"
          shadow="shadow-cardGreyMedium"
        />
        <CustomizableTextBox
          className="mx-20 text-black"
          size="33%"
          text={`<div class="mx-10 flex flex-col gap-5 justify-content align-items">
              <div>
                  <span class="font-mosk font-black">Adresse</span>
              </div>
              <div class="flex flex-col gap-2 font-robotoCon">
                  <span>Colisée Soula | Esc D | 1er étage </span>
                  <span>2092 El Manar 2</span>
              </div>
          </div>`}
          color="bg-white"
          shadow="shadow-cardGreyMedium"
          textColor={"text-black"}
        />
      </div>
    </>
  );
}

export default About;
