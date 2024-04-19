import React, { useState, useEffect, useRef } from "react";
import { LuFilter } from "react-icons/lu";
import {
  IoIosArrowDown,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { RiBoxingLine } from "react-icons/ri";
import { CgGym } from "react-icons/cg";
import DynamicIcon from "./DynamicIcon";
import { getColor } from "../utils/getColor";

function FilterDropDownUpgraded({
  children,
  buttonFont,
  paddingX,
  fontWeight,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedRecently, setClickedRecently] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setClickedRecently(true);
  };

  useEffect(() => {
    let timer;
    if (clickedRecently) {
      timer = setTimeout(() => {
        setClickedRecently(false);
      }, 1000); // Change this value to adjust the delay (1 second in this case)
    }
    return () => clearTimeout(timer);
  }, [clickedRecently]);

  const handleScroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 100;
    } else {
      scrollRef.current.scrollLeft += 100;
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrollPosition(scrollRef.current.scrollLeft);
    };
    scrollRef.current.addEventListener("scroll", handleScrollEvent);
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  const totalOptions = children.length;
  const visibleOptions = 3;
  const maxScroll =
    scrollRef.current?.scrollWidth - scrollRef.current?.clientWidth;
  const disableBackArrow = scrollPosition === 0;
  const disableForwardArrow = scrollPosition >= maxScroll;

  return (
    <div className={`relative flex flex-col items-center`}>
      <button
        onClick={toggleMenu}
        className={`px-2 py-2 flex items-center justify-center ${
          isOpen ? "text-yellowMain" : "text-greyMedium"
        } font-${buttonFont} px-${paddingX} font-black border ${
          isOpen
            ? "border-yellowMain shadow-buttonYellowMain"
            : "border-greyMedium shadow-buttonGreyMedium"
        } ${
          clickedRecently
            ? ""
            : "hover:shadow-buttonWhite hover:border-white hover:text-white"
        } transition-all duration-300`}
      >
        <LuFilter className="text-2xl mr-2" />
        <div className="px-2 text-lg">{children}</div>
        <IoIosArrowDown className="ml-2" />
      </button>
      <div
        className={`w-full z-10 bg-white border border-yellowMain shadow-md transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isOpen ? "my-5" : "hidden"}`}
      >
        <div className="flex items-center justify-center bg-blackBG text-white shadow-cardSmallYellowMain">
          <IoIosArrowBack
            className={`cursor-pointer text-4xl ${
              disableBackArrow ? "text-gray-400" : "hover:text-yellowMain"
            } ${totalOptions <= visibleOptions ? "hidden" : ""}`}
            onClick={() => handleScroll("left")}
            disabled={disableBackArrow}
          />

          <div
            ref={scrollRef}
            className="text-center mx-auto flex items-center gap-5 overflow-x-hidden font-urbanist max-w-[400px]"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Static options */}
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3">
              <div className="">
                <DynamicIcon
                  svgPath={"../../src/assets/Icons/boxing-glove_8754385.svg"}
                  width={"72px"}
                  color={`${getColor("greyMedium")}`}
                  hoverColor={`${getColor("white")}`}
                />
              </div>
              <span className="text-2xl">Boxe</span>
            </div>
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3">
              <CgGym className="text-7xl" />
              <span className="text-2xl">Musculation</span>
            </div>
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3">
              <div className="">
                <DynamicIcon
                  svgPath={"../../src/assets/Icons/burden_9842644.svg"}
                  width={"72px"}
                  color={`${getColor("greyMedium")}`}
                  hoverColor={`${getColor("white")}`}
                />
              </div>
              <span className="text-2xl">Pilates</span>
            </div>
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3">
              <div className="">
                <DynamicIcon
                  svgPath={"../../src/assets/Icons/burden_9842644.svg"}
                  width={"72px"}
                  color={`${getColor("greyMedium")}`}
                  hoverColor={`${getColor("white")}`}
                />
              </div>
              <span className="text-2xl">Dance</span>
            </div>
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3">
              <div className="">
                <DynamicIcon
                  svgPath={"../../src/assets/Icons/burden_9842644.svg"}
                  width={"72px"}
                  color={`${getColor("greyMedium")}`}
                  hoverColor={`${getColor("white")}`}
                />
              </div>
              <span className="text-2xl">Cross Fit</span>
            </div>
          </div>
          <IoIosArrowForward
            className={`cursor-pointer text-4xl ${
              disableForwardArrow ? "text-gray-400" : "hover:text-yellowMain"
            } ${totalOptions <= visibleOptions ? "hidden" : ""}`}
            onClick={() => handleScroll("right")}
            disabled={disableForwardArrow}
          />
        </div>
      </div>
    </div>
  );
}

export default FilterDropDownUpgraded;
