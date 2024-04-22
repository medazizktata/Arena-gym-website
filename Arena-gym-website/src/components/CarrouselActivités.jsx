import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ButtonYellow from "./Buttons/ButtonYellow";
import ButtonWhite from "./Buttons/ButtonWhite";

function Appact() {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
  };

  return (
    <div className="w-3/4 m-auto" style={{ marginTop: "-350px" }}>
      <div className="mt-20 relative">
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className={
                index === slideIndex
                  ? "slide-active shadow-lg"
                  : "slide shadow-lg"
              }
            >
              <div className="h-full w-full relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, black), url(${d.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-md"></div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <p className="text-white text-center z-10 font-black text-2xl absolute bottom-20 py-2">
                      {d.name}
                    </p>

                    <div className="absolute bottom-5 z-10">
                      <ButtonWhite
                        buttonFont="font-robotoCon"
                        fontWeight="font-black hover:scale-105"
                        paddingX={20}
                      >
                        Voir classe
                      </ButtonWhite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="arrow text-xl px-3 py-1 flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 left-5 opacity-30"
          onClick={previous}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="arrow text-xl px-3 py-1 flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 right-0 opacity-30 right-5"
          onClick={next}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

const data = [
  {
    name: "RPM",
    img: "images/gym-workout-plan-for-gaining-muscle_header.jpg",
  },
  {
    name: "Cardio",
    img: "images/Gym-structure-1080x675.png",
  },
  {
    name: "Musculation",
    img: "images/dumbbells-gym-64a3f4bc2fe31.jpg",
  },
  {
    name: "Boxe",
    img: "images/boxe-anglaise-debutant_dojo.jpg",
  },
];

export default Appact;
