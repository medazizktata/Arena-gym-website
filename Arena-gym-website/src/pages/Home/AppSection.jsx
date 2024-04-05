import React from "react";
import BackgroundText from "../../components/BackgroundText";
import ButtonYellow from "../../components/Buttons/ButtonYellow";

function AppSection() {
  return (
    <>
      <div className="my-20 px-14 relative flex flex-col items-center">
        <div className="absolute z-1 w-full top-10 opacity-50">
          <BackgroundText
            className=""
            text={"PADEL"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
          <BackgroundText
            className=""
            text={"APP"}
            fontFamily={"urbanist"}
            strokeColor={"white"}
            textSize={20}
          />
        </div>
        <h1 className="font-urbanist text-center font-bold text-white text-5xl lg:text-7xl relative z-10 my-4">
          Téléchargez notre application
        </h1>
        <img
          className="my-8 max-w-full"
          src="/src/assets/Logo/Final Logo/White/1x/Padel Premium White.png"
          alt="Logo"
        />
        <div className="flex flex-col gap-10 md:flex-row justify-center items-center z-10">
          <img
            className="my-4 w-[65%] scale-90 md:w-1/3 lg:w-1/3 xl:w-1/5  "
            src="/src/assets/Mockup/Phone1.png"
            alt="Phone1"
          />
          <img
            className="my-4 w-[65%] md:w-1/3 lg:w-1/3 xl:w-1/5"
            src="/src/assets/Mockup/Phone2.png"
            alt="Phone2"
          />
          <img
            className="my-4 w-[65%] md:w-1/3 lg:w-1/3 xl:w-1/5"
            src="/src/assets/Mockup/Phone4.png"
            alt="Phone4"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 justify-center items-center text-lg relative z-10">
        <div className="px-4 md:px-0">
          <h3 className="text-white text-2xl lg:text-4xl text-urbanist text-center">
            Venez nous rendre visite pour découvrir ce que nous offrons pour
            améliorer votre condition physique !
          </h3>
        </div>
        <ButtonYellow
          buttonFont="font-robotoCon"
          fontWeight="font-black"
          paddingX={10}
        >
          Plus de détails
        </ButtonYellow>
      </div>
    </>
  );
}

export default AppSection;
