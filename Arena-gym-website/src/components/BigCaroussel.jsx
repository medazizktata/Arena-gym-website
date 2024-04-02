import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image1 from "../assets/Images/Caroussel/Hero-section/Arena_exterior_best.png";
import Image2 from "../assets/Images/Caroussel/Hero-section/Arena_gym_exterior.png";
import Image3 from "../assets/Images/Caroussel/Hero-section/Arena_interior.jpg";
import Image4 from "../assets/Images/Caroussel/Hero-section/Padel_court_arena.jpg";
import Image5 from "../assets/Images/Caroussel/Hero-section/Training_ground.jpg";

function BigCaroussel() {
  const slides = [Image1, Image2, Image3, Image4, Image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="flex justify-center h-screen relative">
        <div className="w-full px-4 relative">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
              style={{
                opacity: slideIndex === currentIndex ? 1 : 0,
                backgroundImage: `url(${slide})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          ))}
          {/* Black semi-transparent filter */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          {/* Dot indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center space-x-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`text-4xl cursor-pointer ${
                  slideIndex === currentIndex ? "text-yellowMain" : "text-gray-300"
                }`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 mx-4 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={prevSlide} />
          </div>
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl p-2 mx-4 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={nextSlide} />
          </div>
        </div>
    </div>
  );
}

export default BigCaroussel;
