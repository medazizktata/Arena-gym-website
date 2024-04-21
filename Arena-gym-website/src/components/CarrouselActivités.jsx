import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
    <div className='w-3/4 m-auto '>
      <div className='mt-20 relative'>
        <Slider ref={sliderRef} {...settings}>
          {data.map((d, index) => (
            <div key={index} className={index === slideIndex ? 'slide-active shadow-lg' : 'slide shadow-lg'}>
              <div className='h-full w-full relative'>
                <div className='absolute inset-0' style={{ backgroundImage: `linear-gradient(to bottom, transparent, black), url(${d.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-md'></div>
                  <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <p className='text-white text-center z-10 font-bold text-xl' style={{ fontFamily: 'Gentona', position: 'absolute', bottom: '70px', transform: 'translateY(50%)' }}>{d.name}</p>
                    <button className='mt-2 bg-white text-indigo-500 px-4 py-2 rounded z-10' style={{ position: 'absolute', bottom: '10px' }}>Read more</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button className='arrow text-xl px-3 py-1 rounded-full flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 left-10 opacity-50' onClick={previous}>
          <IoIosArrowBack />
        </button>
        <button className='arrow text-xl px-3 py-1 rounded-full flex items-center justify-center w-12 bg-white absolute top-1/2 transform -translate-y-1/2 right-0 opacity-50 right-10' onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

const data = [
  {
    name: 'RPM',
    img: 'images/gym-workout-plan-for-gaining-muscle_header.jpg'
  },
  {
    name: 'Cardio',
    img: 'images/Gym-structure-1080x675.png'
  },
  {
    name: 'Musculation',
    img: 'images/dumbbells-gym-64a3f4bc2fe31.jpg'
  },
  {
    name: 'boxe',
    img: 'images/boxe-anglaise-debutant_dojo.jpg'
  }
];

export default Appact;
