import React, { useState, useEffect } from "react";
import SubscriptionBox from "../../components/FichePrix";
import Form_Ins from "../../components/form_inscription";
import Navbar from "../../components/Navbar/Navbar";
import { getColor } from "../../utils/getColor";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import ActivityCard from "../../components/ActivityCard";
import Pagination from "../../components/Pagination";
import BackgroundText from "../../components/BackgroundText";
import DropdownField from "../../components/input_2";
import BelowFooter from "../../components/BelowFooter";
import { RxFontSize } from "react-icons/rx";
import CoachCard from "../../components/CoachCard";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import PageIntroduction from "../../components/PageIntroduction";
import { Link } from "react-router-dom";

function ActiviteInd() {
  const [circleSize, setCircleSize] = useState(300); // Default circle size

  useEffect(() => {
    // Function to calculate circle size based on screen width
    const calculateCircleSize = () => {
      // Adjust this calculation as needed based on your requirements
      const screenWidth = window.innerWidth;
      // Example calculation: circle size is 20% of screen width
      const newCircleSize = Math.round(screenWidth * 0.35);
      setCircleSize(newCircleSize);
    };

    // Call the function initially and on window resize
    calculateCircleSize();
    window.addEventListener("resize", calculateCircleSize);
    return () => window.removeEventListener("resize", calculateCircleSize);
  }, []); // Run only on mount and unmount

  const label = "Objectifs à atteindre";
  const options = [
    "Choose Option",
    "Weight Loss",
    "Body Building",
    "Cross Fit",
    "Dance",
  ];
  return (
    <div>
      <PageIntroduction
        imgSrc={
          "../src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        }
        title="RPM"
        titleProps="my-10 text-greyLight ml-[15%] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
      />
      <div className="relative flex flex-col items-start">
        {/* <div className="absolute inset-0 w-full h-full z-10">
          <img
            src="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
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

        <div className="z-10 ml-10 m-40">
          <div className="mb-1">
            <h1
              className="text-greyLight font-Gentona font-black text-9xl"
              style={{ opacity: 0.8, marginTop: "300px" }}
            >
              RPM
            </h1>
          </div>
        </div> */}

        {/* DESCRIPTION BG */}
        <div className="mb-28 inline-block flex flex-col relative z-10 w-full">
          <h1 className="inline text-white font-Urbanist font-black text-9xl max-lg:text-8xl max-md:text-7xl max-sm:text-5xl text-center">
            DESCRIPTION
          </h1>
          <div className="absolute w-full transform lg:-translate-y-[25%] xl:-translate-y-[35%]  ">
            <BackgroundText
              text={"DESCRIPTION"}
              strokeColor="white"
              fontFamily={"urbanist"}
              textSize={25}
            />
          </div>
        </div>
        <div className="mb-10 bg-blackBG inline w-[80%] max-md:w-[70%] relative border-2 border-black p-4 mx-auto bg-transparent shadow-cardWhite z-10 border border-3 border-white">
          <p className="max-sm:text-sm max-md:text-xl max-lg:text-2xl lg:text-3xl leading-relaxed text-center text-white">
            Le RPM est une activité sportive dynamique et énergique qui se
            pratique sur un vélo stationnaire, en suivant le rythme de la
            musique. <br></br> C'est un entraînement cardiovasculaire complet
            qui améliore la condition physique et brûle des calories.
          </p>
        </div>
      </div>

      {/* Rectangles */}
      <div className="m-auto sm:w-[80%] max-sm:w-[60%] flex justify-around justify-center align-items lg:gap-20 max-lg:gap-10 max-sm:gap-5 md:flex-row max-sm:flex-col">
        <CustomizableTextBox
          className="min-w-[200px] mx-auto md:text-xl lg:text-2xl max-sm:text-sm max-md:text-base text-blackBG p-4 "
          text={`<div class="flex flex-col gap-5 justify-content align-items max-sm:text-base">
              <div>
                  <span class="font-robotoCon font-black">Horaires</span>
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
          className="min-w-[200px] mx-auto md:text-xl lg:text-2xl max-sm:text-sm max-md:text-base text-blackBG p-4"
          text={`<div class="flex flex-col gap-5 justify-content align-items max-sm:text-base">
              <div>
                  <span class="font-robotoCon font-black">Cardio Strength</span>
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
          className="min-w-[200px] mx-auto md:text-xl lg:text-2xl max-sm:text-sm max-md:text-base text-black p-4 "
          text={`<div class="flex flex-col gap-5 justify-content align-items max-sm:text-base">
              <div>
                  <span class="font-robotoCon font-black">Recommandations</span>
              </div>
              <div class="flex flex-col gap-4 font-robotoCon">
                  <span>Colisée Soula | Esc D | 1er étage </span>
                  <span>2092 El Manar 2</span>
              </div>
          </div>`}
          color="bg-white"
          shadow="shadow-cardGreyMedium"
          textColor={"text-black"}
        />
      </div>

      {/* COACHES BG */}
      <div className="inline-block flex flex-col relative z-10 m-auto w-full -mt-40">
        <div className="w-full transform max-md:translate-y-[80%] md:translate-y-[80%] lg:translate-y-[60%] xl:translate-y-[65%]">
          <BackgroundText
            text={"Coaches"}
            strokeColor="white"
            fontFamily={"urbanist"}
            textSize={25}
          />
        </div>
        <h1 className="inline text-white font-Urbanist font-black md:text-9xl max-md:text-7xl text-center">
          COACHES
        </h1>
      </div>

      <div className="relative z-10 mt-10 flex align-items justify-center md:gap-20 max-md:gap-10 max-sm:gap-1 max-sm:flex-col">
        <div className="scale-90">
          <CoachCard
            img="images/gym-workout-plan-for-gaining-muscle_header.jpg"
            nom="Mounir"
            circleSize={circleSize}
          />
        </div>
        <div className="scale-90">
          <CoachCard
            img="images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg"
            nom="Neji"
            circleSize={circleSize}
          />
        </div>
      </div>

      {/* Activités */}

      <div className="my-20 relative z-15 ">
        <span className="text-white font-robotoCon text-5xl mx-40">
          Vous êtes peut-être intéressé par...
        </span>

        <div className="absolute z-1 w-full top-1/2 transform -translate-y-1/2 -translate-y-[70%] opacity-50 flex flex-col justify-between">
          <BackgroundText
            className=""
            text={"Activites"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
        </div>
        <div className="relative z-10 mt-20 scale-90 flex justify-between">
          <ActivityCard
            img="images/gym-workout-plan-for-gaining-muscle_header.jpg"
            nom="Body Building"
            icon="images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png"
          />
          <ActivityCard
            img="images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg"
            nom="RPM"
            icon="images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png"
          />
          <ActivityCard
            img="images/dumbbells-gym-64a3f4bc2fe31.jpg"
            nom="Fitness"
            icon="images/6dcc2d2ac756fe47587fd2be39913e47-removebg-preview.png"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-lg">
        <Link
          to="/activites"
          className={`group hover:text-yellowMain transition duration-300`}
        >
          <ButtonYellow
            buttonFont="font-robotoCon"
            fontWeight="font-black hover:scale-105"
            paddingX={10}
          >
            Voir nos Activités
          </ButtonYellow>
        </Link>
      </div>
    </div>
  );
}

export default ActiviteInd;
