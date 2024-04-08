import React, { useRef, useEffect } from "react";
import "./SponsorsCarouselStyle.css";
import CustomizableTextBox from "../../components/CustomizableTextBox";
import BackgroundText from "../../components/BackgroundText";

const SponsorsCarousel = () => {
  const logosContainerRef = useRef(null);

  useEffect(() => {
    const logosContainer = logosContainerRef.current;
    const logos = logosContainer.querySelectorAll(".logo");

    // Clone logos for looping effect
    const cloneLogos = () => {
      logos.forEach((logo) => {
        const clone = logo.cloneNode(true);
        logosContainer.appendChild(clone);
      });
    };

    cloneLogos();

    let animationStartTime = performance.now();

    const animate = (time) => {
      const elapsedTime = time - animationStartTime;
      const distance = (elapsedTime / 10) % logosContainer.scrollWidth;
      logosContainer.style.transform = `translateX(-${distance}px)`;
      if (elapsedTime >= 10) {
        animationStartTime = time;
      }
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Clean up
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <>
      <div className="relative logos-container my-10" ref={logosContainerRef}>
        <img
          src="src/assets/Images/Sponsors/Amalv1.png"
          alt="Amalv1"
          className="logo"
        />
        <img
          src="src/assets/Images/Sponsors/client3.png"
          alt="client3"
          className="logo"
        />
        <img
          src="src/assets/Images/Sponsors/client1.png"
          alt="client1"
          className="logo"
        />
      </div>
    </>
  );
};

export default SponsorsCarousel;
