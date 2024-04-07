import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getColor } from "../../utils/getColor";

function Galerie() {
  return (
    <>
    <Navbar/>
      <div className="relative min-h-screen flex flex-col items-start">
        <div className="absolute inset-0 w-full h-full z-10">
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
            <h1 className="text-greyLight font-Gentona font-black text-9xl">
              Galerie
            </h1>
          </div>
          <div className="z-10 ml-20">
            <h1 className="text-yellowMain font-Gentona font-black text-7xl">
              Photos|Videos
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mx-20 my-10 z-20">
          <img
            src="../src/assets/Images/Gallerie/arena_gym_wigo 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Gallerie/arena_gym_wigo 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Arena_interior.jpg"
            alt="placeholder"
            className="object-cover w-full h-40"
          />
           <video
            src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
            alt="Video"
            className="object-cover w-full h-64"
            controls
          />
          <img
            src="../src/assets/Images/Gallerie/arena092016-1 1.png"
            alt="placeholder"
            className="object-cover w-60 h-60"
          />
          <img
            src="../src/assets/Images/Gallerie/arena092016-1 1.png"
            alt="placeholder"
            className="object-cover w-60 h-full"
          />
          <img
            src="../src/assets/Images/Gallerie/img-echauffement 1.png"
            alt="placeholder"
            className="object-cover w-80 h-full"
          />
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg"
            alt="placeholder"
            className="object-cover w-50 h-80"
          />
          <img
            src="../src/assets/Images/Gallerie/arena092016-1 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
           <video
            src="../src/assets/Images/Gallerie/339207637_231833276035782_2795628262026351652_n.mp4"
            alt="Video"
            className="object-cover w-full h-64"
            controls
          />
          
          <img
            src="../src/assets/Images/Gallerie/img-echauffement 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Gallerie/arena092016-1 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Gallerie/img-echauffement 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
           <img
            src="../src/assets/Images/Gallerie/img-echauffement 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
          <img
            src="../src/assets/Images/Gallerie/arena_gym_wigo 1.png"
            alt="placeholder"
            className="object-cover w-full h-64"
          />
        </div>
      </div>
    </>
  );
}

export default Galerie;
