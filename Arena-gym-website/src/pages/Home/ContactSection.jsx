import BackgroundText from "../../components/BackgroundText";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import IMCForm from "./FormIMC";

function ContactSection() {
  return (
    <>
      <div className="my-20 px-4 lg:px-14 relative flex flex-col items-center">
        <div className="absolute z-1 w-full top-10 opacity-50">
          <div className="relative flex flex-col justify-content items-center">
            <BackgroundText
              className=""
              text={"Contact"}
              fontFamily={"urbanist"}
              strokeColor={"white"}
              textSize={20}
            />
          </div>
        </div>
        <div className="flex justify-center relative z-10 w-full bottom-10">
          <IMCForm />
        </div>
      </div>
    </>
  );
}

export default ContactSection;
