import React from "react";
import PageIntroduction from "../../components/PageIntroduction";
import BackgroundText from "../../components/BackgroundText.jsx";
import SmallCard from "../../components/SmallCard";
import DynamicIcon from "../../components/DynamicIcon";
import CoachCode from "../Coaches/CoachCode.jsx";
import coachImage from "../../assets/Img/coach1.jpg";
import { getColor } from "../../utils/getColor";

function SingleCoachDescription() {
  return (
    <>
      <PageIntroduction
        imgSrc="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        title="COACH"
        titleProps="my-5 max-sm:text-5xl max-md:text-8xl text-9xl text-white ml-20"
      />

      <div className=" relative flex flex-col items-center -mt-10">
        <BackgroundText
          className="z-10"
          text="RADOUEN FOULEN"
          fontFamily=""
          strokeColor="white"
        />
        <div className="flex gap-10">
          <h1 className="text-white font-bold font-Gentona lg:text-9xl md:text-7xl sm:text-6xl max-sm:text-5xl z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  whitespace-nowrap">
            RADOUEN FOULEN
          </h1>
          <h2 className="text-white font-gentona lg:text-6xl md:text-5xl sm:text-4xl">
            HEAD COACH
          </h2>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center my-20 gap-10 mx-20">
        <div
          className="border-2 border-white p-4 h-full mx-auto bg-transparent-200 shadow-cardWhite z-10"
          style={{ border: "3px solid white" }}
        >
          <img src={coachImage} className="h-full" />
        </div>
        <div className="flex flex-row ">
          <div
            className="mx-40 border-2 border-white p-4 mx-auto bg-transparent-200 shadow-cardWhite z-10"
            style={{ border: "3px solid white" }}
          >
            {/* <div className="absolute flex flex-row items-center gap-11 md:gap-4 ml-[600px]">
              <a href="#" className="mb-4 md:mb-0">
                <img
                  className="h-11"
                  src="src/assets/Img/instawhite.png"
                  alt="Instagram"
                />
              </a>

              <a href="#" className="mb-4 md:mb-0">
                <img
                  className=""
                  src="src/assets/Img/icons8-facebook-44.png"
                  alt="Facebook"
                />
              </a>
            </div> */}
            <h1 className="text-white font-Gentona font-bold text-6xl ml-10">
              Introduction
            </h1>
            <p className="text-white font-Gentona text-2xl ml-10 mt-6">
              Je souhaite être un soutien pour vous à <br /> chaque séance, êtes
              vous prêt à changer ?
            </p>
            <h1 className="text-white font-Gentona font-bold text-6xl ml-10 mt-6 mb-10">
              Salle
            </h1>
            <img
              src="../src/assets/Logo/Final Logo/White/1x/Gym Manar2 White.png"
              alt="logo arean gym"
              className=""
            />
            <h1 className="text-white font-Gentona font-bold text-6xl ml-10 mt-6">
              Spécialité
            </h1>
            <div className="flex flex-row gap-32 mt-10 justify-center items-center">
              <div className="flex flex-col">
                <DynamicIcon
                  svgPath={"../../src/assets/Icons/boxing-glove_8754385.svg"}
                  width={"72px"}
                  color={`${getColor("white")}`}
                  hoverColor={`${getColor("yellowBetter")}`}
                />
                <p className="text-white font-Gentona text-3xl mt-6">Boxe</p>{" "}
              </div>
              <div className="flex flex-col ">
                <DynamicIcon
                  svgPath={
                    "../../src/assets/Icons/gym-workout-spinning-icon.svg"
                  }
                  width={"75px"}
                  color={`${getColor("white")}`}
                  hoverColor={`${getColor("yellowBetter")}`}
                />
                <p className="text-white font-Gentona text-3xl ml-4 mt-6">
                  TRX
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 mt-20 mb-10 place-items-center">
              <div className="grid grid-cols-1 gap-5">
                <SmallCard>Lundi 8h/18H30</SmallCard>
                <SmallCard>Mardi 8h/18H30</SmallCard>
                <SmallCard>Vendredi 8h/18H30</SmallCard>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <SmallCard>Lundi 8h/18H30</SmallCard>
                <SmallCard>Mardi 8h/18H30</SmallCard>
                <SmallCard>Vendredi 8h/18H30</SmallCard>
              </div>
            </div>
          </div>

          <img
            className="border-2  my-20 border-white p- w-[600px] mx-auto bg-transparent-200 shadow-cardWhite z-10"
            style={{ border: "3px solid white" }}
            src="https://media.licdn.com/dms/image/D4E03AQEq_letOm387Q/profile-displayphoto-shrink_800_800/0/1684915953004?e=2147483647&v=beta&t=VgErBupwbY9tz_WETka65byU42cJcPo8WHx2gzAJk_A"
            alt="coach"
          />
        </div>
      </div>

      <h1 className="text-white font-Gentona text-3xl ml-20 my-10">
        Vous êtes peut-être intéressé par ...
      </h1>

      <div className="flex flex-col justify-center gap-20 mb-20 md:flex-row md:mx-20 ">
        <CoachCode
          Name="Siwar"
          SrcImg={coachImage}
          Adress="siwar.adress@hotmail.com"
        />
        <CoachCode
          Name="Siwar"
          SrcImg={coachImage}
          Adress="siwar.adress@hotmail.com"
        />
        <CoachCode
          Name="Siwar"
          SrcImg={coachImage}
          Adress="siwar.adress@hotmail.com "
        />
        {/* <CoachCode
          Name="Siwar"
          SrcImg={coachImage}
          Adress="siwar.adress@hotmail.com"
        /> */}
      </div>
    </>
  );
}
export default SingleCoachDescription;
