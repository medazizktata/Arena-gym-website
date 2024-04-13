import React from "react";
import { getColor } from "../../utils/getColor";

function Galerie() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-start">
        <div className="absolute inset-0 w-full h-full z-10 ">
          <img
            src="../src/assets/Images/Gallerie/event3 1.png"
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
        <div className="z-10 ml-20 mt-80 ">
          <div className="mb-1">
            <h1 className="text-greyLight font-Gentona font-black text-9xl">
              Galerie
            </h1>
          </div>
          <div className="z-10 ml-20 ">
            <h1 className="text-yellowMain font-Gentona font-black text-7xl">
              Photos|Videos
            </h1>
          </div>
        </div>
        <div className="mx-20 mt-40 z-20">
          {/* Première ligne avec 3 colonnes  */}
          <div className="grid grid-cols-3 gap-4">
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
              src="../src/assets/Images/Gallerie/arena_gym_wigo 1.png"
              alt="placeholder"
              className="object-cover w-full h-64"
            />
            <div className="h-full">
              <video height="1000" className="w-full h-full" loop muted autoPlay="autoplay">
                <source
                  src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <img
              src="../src/assets/Images/Caroussel/Hero-section/Arena_interior.jpg"
              alt="placeholder"
              className="object-cover w-full"
            />
            <img
              src="../src/assets/Images/Caroussel/Hero-section/Arena_interior.jpg"
              alt="placeholder"
              className="object-cover w-full"
            />
          </div>
          {/* Deuxième ligne avec 3 colonnes */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="../src/assets/Images/Gallerie/arena092016-1 1.png"
                alt="placeholder"
                className="object-cover w-full h-40"
              />
              
              <video height="1000" className="object-cover w-full" loop muted autoPlay="autoplay">
                <source
                  src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <img
              src="../src/assets/Images/Gallerie/img-echauffement 1.png"
              alt="placeholder"
              className="object-cover w-full h-60"
            />
            <img
              src="../src/assets/Images/Gallerie/event2.jpg"
              alt="placeholder"
              className="object-cover w-full h-80 "
            />
          </div>
          {/* Troisième ligne avec 3 colonnes */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <img
              src="../src/assets/Images/Gallerie/event1.jpg"
              alt="placeholder"
              className="object-cover w-full h-58"
            />
            <video
              src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
              alt="Video"
              className="object-cover w-full h-64"
              controls
            />
            <img
              src="../src/assets/Images/Gallerie/event1.jpg"
              alt="placeholder"
              className="object-cover w-full h-58"
            />
          </div>
          {/* Deuxième bloc */}
        </div>
        <div className="mx-20 my-10 z-20">
          {/* Première ligne avec 3 colonnes  */}
          <div className="grid grid-cols-3 gap-4 mt-2">
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
            <div className="grid grid-cols-2 gap-2">
              <video
                src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
                alt="Video"
                className="object-cover w-56 h-40"
                controls
              />
              <img
                src="../src/assets/Images/Caroussel/Hero-section/Arena_interior.jpg"
                alt="placeholder"
                className="object-cover w-56 h-40"
              />
            </div>
          </div>
          {/* Deuxième ligne avec 3 colonnes */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="../src/assets/Images/Gallerie/arena092016-1 1.png"
                alt="placeholder"
                className="object-cover w-full h-40"
              />
              <video
                src="../src/assets/Images/Gallerie/ouverturearena.mp4"
                alt="Video"
                className="object-cover w-full h-40"
                controls
              />
            </div>
            <img
              src="../src/assets/Images/Gallerie/img-echauffement 1.png"
              alt="placeholder"
              className="object-cover w-full h-60"
            />
            <img
              src="../src/assets/Images/Gallerie/event2.jpg"
              alt="placeholder"
              className="object-cover w-full h-80"
            />
          </div>
          {/* Troisième ligne avec 3 colonnes */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <img
              src="../src/assets/Images/Gallerie/event1.jpg"
              alt="placeholder"
              className="object-cover w-full h-58"
            />
            <video
              src="../src/assets/Images/Gallerie/GBf23xn5N0IWjWYBAB90EZS5PIU9bmdjAAAF.mp4"
              alt="Video"
              className="object-cover w-full h-64"
              controls
            />
            <img
              src="../src/assets/Images/Gallerie/event1.jpg"
              alt="placeholder"
              className="object-cover w-full h-58"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Galerie;
