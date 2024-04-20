import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundText from "../../components/BackgroundText";
import BigCaroussel from "../../components/BigCaroussel";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import { getColor } from "../../utils/getColor";
import ConsulterGalerieButton from "../../components/ConsulterGallerie";
import { FaCheckCircle } from "react-icons/fa";

function HeroSection() {
  return (
    <>
      <div className="mb-15">
        <div
          className="w-full"
          style={{
            background: `linear-gradient(to top, ${getColor(
              "yellowMain"
            )}, rgba(255, 204, 0, 0))`,
          }}
        >
          <div className="relative mx-auto mx-[2%]">
            <div className="inline absolute inset-x-0 top-40 transform translate-y-1/4 flex flex-col items-center text-white z-10 px-8 text-lg">
              <div className="inline text-6xl font-Gentona uppercase text-center mb-8 flex flex-col">
                <h1 className="inline text-9xl font-black">Arena Gym</h1>
                <h2 className="inline text-7xl font-black">We are limitless</h2>
              </div>
              <span className="inline font-roboto text-lg text-center mb-8">
                Arena Gym est une salle de sport couvrant un espace de 2500m²
                unique avec sa répartition Indoor et Out-door.
              </span>
              <div className="inline flex flex-row gap-10">
                <ButtonYellow
                  buttonFont="font-robotoCon"
                  fontWeight="font-black scale-90"
                  paddingX={10}
                >
                  En Savoir Plus
                </ButtonYellow>
                {/*  <ButtonYellow
                  buttonFont="font-robotoCon"
                  fontWeight="font-black"
                  paddingX={10}
                >
                  Voir la galerie
                </ButtonYellow> */}

                <a href="#">
                  <ConsulterGalerieButton
                    className={
                      "hover:text-yellowMain transition duration-500 cursor-pointer"
                    }
                  />
                </a>
              </div>
            </div>
            <div className="pb-16">
              <BigCaroussel />
            </div>
          </div>
        </div>
        <div className="bg-yellowMain h-64 w-full bottom-0">
          <h1 className="flex flex-col gap-10 justify-center items-center font-robotoCon uppercase text-center text-7xl font-bold">
            <hr className="border-b-8 border-blackBG w-1/4" />
            <span>Abonnements qui alimentent</span>
            <span>votre forme physique!</span>
          </h1>
        </div>
        <svg
          className="bottom-0 left-0"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          width="100%"
          height="100"
        >
          <polygon points="0,0 100,0 50,100" fill={getColor("yellowMain")} />
        </svg>
        <div className="mx-auto">
          <div className=" text-white text-4xl font-urbanist font-bold inline mx-[20%] my-[5%] bg-blackBG bottom-0 flex flex-row justify-between ">
            <div className="inline flex flex-col gap-16">
              <div className="inline flex gap-5">
                <FaCheckCircle />
                <span>Classes de Fitness</span>
              </div>
              <div className="inline flex gap-5">
                <FaCheckCircle />
                <span>Entrainement personnel</span>
              </div>
            </div>
            <div className="inline flex flex-col justify-between">
              <div className="inline flex gap-5">
                <FaCheckCircle />
                <span>Quality Coaches</span>
              </div>
              <div className="inline flex gap-5">
                <FaCheckCircle />
                <span>Equipments haute qualité</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-lg">
          <ButtonYellow
            buttonFont="font-robotoCon"
            fontWeight="font-black hover:scale-105"
            paddingX={10}
          >
            Voir nos Tarifs
          </ButtonYellow>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
