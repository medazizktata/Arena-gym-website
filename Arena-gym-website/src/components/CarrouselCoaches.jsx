import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
    name: "boxe",
    img: "images/boxe-anglaise-debutant_dojo.jpg",
  },
  {
    name: "Sami",
    img: "images/1000_F_575226840_HVm83lSEIqArrnLNrhXxzebjeRJ14AtE.jpg",
  },
  {
    name: "Wassim",
    img: "images/1000_F_524378456_7iH4roEgy8t8351zKypjRumlIbRfwhIO.jpg",
  },
  {
    name: "Nader",
    img: "images/9522175b-7b4f-4ca6-a79c-c611bc097173_r7aqxd.png",
  },
];

function getClassNames(index, slideIndex) {
  let classNames = "";

  if (index === slideIndex) {
    classNames = "slide-active-coach rounded-full";
  } else if (
    index === slideIndex + 1 ||
    index === slideIndex - 1 ||
    index === slideIndex + 6 ||
    index === slideIndex - 6
  ) {
    classNames = "slide-coach";
  } else if (
    index === slideIndex + 2 ||
    index === slideIndex - 2 ||
    index === slideIndex + 5 ||
    index === slideIndex - 5
  ) {
    classNames = "slideextreme-coach";
  }

  return classNames;
}

function getwidth(index, slideIndex) {
  let width = 200;
  if (index === slideIndex) {
    width = 300;
  } else if (
    index === slideIndex + 1 ||
    index === slideIndex - 1 ||
    index === slideIndex + 6 ||
    index === slideIndex - 6
  ) {
    width = 250;
  }
  return width;
}

function Appcoaches() {
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
    slidesToShow: 5,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="carrousel z-10" style={{ marginTop: "-350px" }}>
      <div className="lg:mx-20 md relative">
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {data.map((d, index) => (
              <div key={index} className={getClassNames(index, slideIndex)}>
                <div
                  className="h-full w-full relative rounded-full"
                  style={{ width: getwidth(index, slideIndex) }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: `url(${d.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-full"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <p
                        className="text-white text-center z-10 font-bold text-xl"
                        style={{
                          fontFamily: "Gentona",
                          position: "absolute",
                          bottom: "70px",
                          transform: "translateY(100%)",
                        }}
                      >
                        {d.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <button
          className="arrowcoach text-xl px-3 py-1 rounded-full flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1 left-0 opacity-50 rounded-full"
          style={{ left: "-50px" }}
          onClick={previous}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="arrowcoach text-xl px-3 py-1 rounded-full flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1 opacity-50 rounded-full right-0"
          style={{ right: "-50px" }}
          onClick={next}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Appcoaches;