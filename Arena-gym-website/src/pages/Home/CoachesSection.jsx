import BackgroundText from "../../components/BackgroundText";
import ButtonYellow from "../../components/Buttons/ButtonYellow";

function CoachesSection() {
  return (
    <>
      <div className="my-20 relative">
        <h2 className="font-urbanist ml-[10%] font-bold text-white text-3xl relative z-10">
          Consultez nos entraineurs professionnels
        </h2>
        <BackgroundText
          text={"Coaching"}
          fontFamily={"urbanist"}
          strokeColor={"white"}
          textSize={20}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-lg">
        <ButtonYellow
          buttonFont="font-robotoCon"
          fontWeight="font-black"
          paddingX={10}
        >
          Consulter nos coaches
        </ButtonYellow>
      </div>
    </>
  );
}

export default CoachesSection;