import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import ButtonYellow from "../../../components/Buttons/ButtonYellow";
import ButtonWhite from "../../../components/Buttons/ButtonWhite";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { getColor } from "../../../utils/getColor";

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
    dots: false,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    swipeToSlide: true,
    nextArrow: (
      <SampleNextArrow
        className="text-xl px-3 py-1 flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 right-0 opacity-30 right-5"
        onClick={next}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className="text-xl px-3 py-1 flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 left-5 opacity-30"
        onClick={previous}
      />
    ),
  };

  return (
    <div className="w-[70%] mx-auto">
      <div className="relative">
        <button
          className="absolute sm:-left-16 max-sm:-left-10 top-[45%] text-xl px-3 py-1 flex items-center justify-center w-10 h-10 max-sm:w-5 max-sm:h-5 max-sm:px-1 bg-white opacity-30 hover:opacity-60 transition duration 500 ease-in-out "
          onClick={previous}
        >
          <IoIosArrowBack />
        </button>
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className={
                index === slideIndex
                  ? "slide-active shadow-lg "
                  : "slide shadow-lg"
              }
            >
              <div className="h-full w-full relative hover:cursor-pointer border border-1 border-transparent outline-inset hover:border-white transition duration 500 ease-in-out">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, transparent 10%, ${getColor(
                      "blackBG"
                    )} 100%), url(${d.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <div className="mx-10 absolute inset-0 flex flex-col justify-center items-center">
                    <p className="text-white text-center z-10 font-black text-3xl py-2">
                      {d.name}
                    </p>

                    <div className="absolute bottom-5 z-10">
                      <ButtonWhite
                        buttonFont="font-robotoCon"
                        fontWeight="w-full text-sm md:text-base lg:text-lg px-5 lg:px-20 md:px-12 font-black"
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
          className="absolute sm:-right-16 max-sm:-right-10 top-[45%] text-xl px-3 py-1 flex items-center justify-center w-10 h-10 max-sm:w-5 max-sm:h-5 max-sm:px-1 bg-white opacity-30 hover:opacity-60 transition duration 500 ease-in-out"
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
