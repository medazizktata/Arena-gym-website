import React from "react";
import BackgroundText from "../../../components/BackgroundText";
import ButtonYellow from "../../../components/Buttons/ButtonYellow";
import Example from "./Calendar";
import { Link } from "react-router-dom";

function CalendarSection() {
  return (
    <>
      <div className="my-10 md:mx-20  px-14 relative flex flex-col items-center ">
        <div className="absolute z-1 w-full top-10 opacity-50">
          <BackgroundText
            className=""
            text={"PLANNING"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
        </div>
        <h1 className="font-urbanist text-center font-bold text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl relative z-10 my-4">
          Consultez notre planning du mois
        </h1>
        <h3 className="text-white text-2xl lg:text-4xl text-urbanist text-center w-[80%] mx-auto">
          Découvrir davantage les plans d’entrainement offerts adaptés à vos
          attentes et besoins
        </h3>
      </div>

      <div className="flex flex-col gap-20 justify-center items-center text-lg relative z-10">
        <Example />
        <Link to={"/tarifs"}>
          <ButtonYellow
            buttonFont="font-robotoCon"
            fontWeight="font-black hover:scale-105"
            paddingX={10}
          >
            Voir nos Plans
          </ButtonYellow>
        </Link>
      </div>
    </>
  );
}

export default CalendarSection;
