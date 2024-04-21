import BackgroundText from "../../components/BackgroundText";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import IMCForm from "./FormIMC";

function SocialSection() {
  return (
    <>
      <div className="my-20 px-4 lg:px-14 relative flex flex-col items-center">
        <div className="absolute z-1 w-full top-10 opacity-50">
          <div className="relative flex flex-col justify-content items-center">
            <BackgroundText
              className=""
              text={"Social"}
              fontFamily={"urbanist"}
              strokeColor={"white"}
              textSize={20}
            />
          </div>
        </div>
        <div className="flex justify-center relative z-10 w-full bottom-10">
          
          <div className="transform translate-y-20">
          <h1 className="font-bold text-white py-7 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title}</h1>
        <p className="mx-auto text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[80%] text-center">{subtitle}</p>

            <IMCForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialSection;
