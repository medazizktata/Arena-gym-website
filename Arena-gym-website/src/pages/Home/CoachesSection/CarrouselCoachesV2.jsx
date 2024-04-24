import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";
import "./Carrouselv2CSS.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const data = [
  {
    name: "Mahdi",
    img: "images/gym-workout-plan-for-gaining-muscle_header.jpg",
  },
  {
    name: "Selim",
    img: "images/Gym-structure-1080x675.png",
  },
  {
    name: "Monji",
    img: "images/dumbbells-gym-64a3f4bc2fe31.jpg",
  },
  {
    name: "Salah",
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

function CarrouselCoachesV2() {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        height={"200px"}
        spaceBetween={"-250px"}
        coverflowEffect={{
          rotate: 0,
          stretch: 1,
          depth: 100,
          modifier: 4,
        }}
        width={"500px"}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
        centerInsufficientSlides={1}
        loopAddBlankSlides={1}
      >
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <button className="">
              <IoIosArrowBack className="text-black" />
            </button>
          </div>
        </div>
        {data.map((item, index) => (
          <SwiperSlide key={index} >
            {/* <img src={item.img} alt={item.name} /> */}
            <div
              className="absolute inset-0 rounded-full scale-90"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "34rem",
                height: "34rem",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-full"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p
                  className="text-white font-robotoCon text-center z-10 font-bold text-3xl"
                  style={{
                    position: "absolute",
                    bottom: "-15%",
                  }}
                >
                  {item.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-next slider-arrow">
            <button className="flex items-center justify-center">
              <IoIosArrowForward className="text-black" />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default CarrouselCoachesV2;
