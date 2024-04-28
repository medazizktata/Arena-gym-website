import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BackgroundText from "../../components/BackgroundText";
import BigCaroussel from "../../components/BigCaroussel";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import { getColor } from "../../utils/getColor";
import ConsulterGalerieButton from "../../components/ConsulterGallerie";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="">
        <div
          className="px-5"
          style={{
            background: `linear-gradient(to top, ${getColor(
              "yellowMain"
            )} 0%, ${getColor("blackBG")} 80%, rgba(0, 0, 0, 0) 100%)`,
          }}
        >
          <div className="relative mx-auto mx-[20px]">
            <div className="absolute my-40 inset-0 inline-flex flex-col items-center justify-center text-white z-10 mx-20 max-sm:mx-5 text-lg">
              <div className="inline font-Gentona uppercase text-center mb-8 -mt-8 flex flex-col gap-2">
                <h1 className="inline lg:text-9xl md:text-8xl max-sm:text-6xl sm:text-7xl font-black">
                  Arena Gym
                </h1>
                <h2 className="inline lg:text-7xl md:text-5xl max-sm:text-4xl sm:text-4xl font-black">
                  We are limitless
                </h2>
              </div>
              <span className="inline font-roboto lg:text-2xl md:text-xl max-sm:text-sm sm:text-base sm:mx-20 max-sm:mx-5 text-center sm:mb-8">
                Arena Gym est une salle de sport couvrant un espace de 2500m²
                unique avec sa répartition Indoor et Out-door.
              </span>
              <div className="inline flex flex-row gap-10 md:text-xl sm:text-xl max-sm:gap-1 max-sm:flex-col-reverse max-sm:scale-90 ">
                <ButtonYellow
                  buttonFont="font-robotoCon"
                  fontWeight="font-black scale-90"
                  paddingX={10}
                >
                  En Savoir Plus
                </ButtonYellow>
                <div className="">
                  <Link to={"/galerie"}>
                    <ConsulterGalerieButton
                      className={
                        "sm:text-2xl hover:text-yellowMain transition duration-500 cursor-pointer"
                      }

                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="pb-10 lg:pb-20 md:pb-16">
              <BigCaroussel />
            </div>
          </div>
        </div>
        <div className="bg-yellowMain lg:h-64 w-full bottom-0 font-robotoCon">
          <h1 className="mx-10 flex flex-col gap-14 max-md:gap-10 max-sm:gap-5 justify-center items-center uppercase text-center xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl max-sm:text-3xl font-bold">
            <hr className="border-b-8 border-blackBG w-1/2" />
            <div className="flex flex-col gap-5">
              <span>Abonnements qui alimentent</span>
              <span>votre forme physique!</span>
            </div>
          </h1>
        </div>
        <div className="">
          <svg
            className="bottom-0 left-0"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            width="100%"
            height="100"
          >
            <polygon points="0,0 100,0 50,100" fill={getColor("yellowMain")} />
          </svg>
        </div>
        <div className="mx-auto">
          <div className="text-white mx-10 md:mx-40 lg:text-4xl md:text-3xl sm:text-2xl max-sm:text-lg font-urbanist font-bold my-[7%] bg-blackBG flex justify-center items-centermax-sm:flex-col gap-5 lg:gap-20 ">
            <div className="flex gap-20 sm:flex-row gap-10 justify-center max-sm:flex-col gap-5">
              <div className="inline flex flex-col justify-center md:gap-20 sm:gap-10 max-sm:gap-5 ">
                <div className="inline flex gap-2">
                  <FaCheckCircle className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl w-[60px] py-1" />
                  <span className="inline">Classes de Fitness</span>
                </div>

                <div className="inline flex gap-2 ">
                  <FaCheckCircle className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl w-[60px] py-1" />

                  <span className="inline">Entrainement personnel</span>
                </div>
              </div>
              <div className="inline flex flex-col justify-center md:gap-20 sm:gap-10 max-sm:gap-5">
                <div className="inline flex gap-2">
                  <FaCheckCircle className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl w-[60px] py-1" />

                  <span className="inline">Quality Coaches</span>
                </div>
                <div className="inline flex gap-2">
                  <FaCheckCircle className="max-sm:text-3xl max-md:text-3xl max-lg:text-4xl w-[60px] py-1" />

                  <span className="inline">Equipments haute qualité</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-xl my-10 max-sm:text-sm">
          <Link to={"/tarifs"}>
            <ButtonYellow
              buttonFont="font-robotoCon"
              fontWeight="font-black hover:scale-105"
              paddingX={10}
            >
              Voir nos Tarifs
            </ButtonYellow>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
