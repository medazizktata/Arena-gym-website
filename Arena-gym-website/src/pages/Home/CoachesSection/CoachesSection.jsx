import { Link } from "react-router-dom";
import BackgroundText from "../../../components/BackgroundText";
import ButtonYellow from "../../../components/Buttons/ButtonYellow";
import Appcoaches from "./CarrouselCoaches";
import CarrouselCoachesV2 from "./CarrouselCoachesV2";

function CoachesSection() {
  return (
    <>
      <div className="flex flex-col mt-28">
        <h2 className="mb-20 font-urbanist mx-[10%] font-bold text-white max-sm:text-2xl max-md:text-3xl md:text-4xl lg:text-5xl relative z-10">
        Consultez nos entraineurs professionnels
        </h2>
        <div className="relative">
          <BackgroundText
            className=""
            text={"Coaching"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
          
          <div className="relative sm:-mt-[38%] md:sm:-mt-[38%] lg:-mt-[32%] max-sm:-mt-[50%]">
          <CarrouselCoachesV2/>
          </div>
        </div>
        <div className="relative z-0 flex justify-center text-lg lg:-mt-[120px] md:-mt-[300px] sm:-mt-[350px] max-sm:-mt-[250px] max-sm:text-sm">
          <Link to={"/coaches"}>
            <ButtonYellow
              buttonFont="font-robotoCon"
              fontWeight="font-black hover:scale-105"
              paddingX={10}
            >
          Consulter nos coaches
            </ButtonYellow>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CoachesSection;