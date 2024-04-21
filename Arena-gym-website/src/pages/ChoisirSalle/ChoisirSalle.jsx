import React from "react";
import LogoBox from "./LogoBox";
import { Link } from "react-router-dom";

function ChoisirSalle() {
  return (
    <>
      <div className="relative z-50">
        <div
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('src/assets/Images/Choisir Salle/Map_background_image.png')`,
          }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col gap-20 w-[50%]">
              <Link to="/home">
                <LogoBox
                  className={
                    "shadow-cardYellowDark border border-2 border-transparent hover:border-white transition-all duration-200 hover:shadow-cardWhite transition duration-200 ease-in-out cursor-pointer"
                  }
                  image={
                    "src/assets/Logo/Final Logo/Black/2x/Gym Sokra Black@2x.png"
                  }
                  color={"yellowMain"}
                  hoverImgSrc={
                    "src/assets/Logo/Final Logo/White/2x/Gym Sokra White@2x.png"
                  }
                />
              </Link>
              <Link to="/home">
                <LogoBox
                  className={
                    "shadow-cardYellowDark border border-2 border-transparent hover:border-white transition-all duration-200 hover:shadow-cardWhite transition duration-200 ease-in-out cursor-pointer"
                  }
                  image={
                    "src/assets/Logo/Final Logo/Black/2x/Gym Manar2 Black@2x.png"
                  }
                  color={"yellowMain"}
                  hoverImgSrc={
                    "src/assets/Logo/Final Logo/White/2x/Gym Manar2 White@2x.png"
                  }
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoisirSalle;
