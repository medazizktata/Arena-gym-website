import { Link } from "react-router-dom";
import BackgroundText from "../../../components/BackgroundText";
import ButtonYellow from "../../../components/Buttons/ButtonYellow";
import Appact from "./CarrouselActivités";

function ActivitiesSection() {
  return (
    <>
      <div className="my-28">
        <h2 className="mb-10 font-urbanist mx-[10%] font-bold text-white text-5xl max-md:text-3xl lg:text-6xl relative z-10">
          Découvrez nos activités
        </h2>
        <div className="relative">
          <BackgroundText
            className=""
            text={"Activites"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
          <div className="-mt-[20%]">
            <Appact />
          </div>
        </div>
        <div className="my-16 flex flex-col justify-center items-center text-lg">
          <Link to={"/activites"}>
            <ButtonYellow
              buttonFont="font-robotoCon"
              fontWeight="font-black hover:scale-105"
              paddingX={10}
            >
              Voir nos Activités
            </ButtonYellow>
          </Link>
        </div>{" "}
      </div>
    </>
  );
}

export default ActivitiesSection;
