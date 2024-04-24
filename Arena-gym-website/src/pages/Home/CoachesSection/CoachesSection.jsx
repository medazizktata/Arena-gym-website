import { Link } from "react-router-dom";
import BackgroundText from "../../../components/BackgroundText";
import ButtonYellow from "../../../components/Buttons/ButtonYellow";
import Appcoaches from "./CarrouselCoaches";
import CarrouselCoachesV2 from "./CarrouselCoachesV2";

function CoachesSection() {
  return (
    <>
      <div className="my-28">
        <h2 className="mb-20 font-urbanist mx-[10%] font-bold text-white text-4xl max-md:text-3xl lg:text-5xl relative z-10">
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
          
          <div className="-mt-[32%]">
          <CarrouselCoachesV2/>
          </div>
        </div>
        <div className="relative z-40 -mt-28 flex flex-col justify-center items-center text-lg max-sm:mt-5">
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