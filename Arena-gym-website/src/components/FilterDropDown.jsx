import { useState, useEffect } from "react";
import { LuFilter } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

function FilterDropDown({ children, buttonFont, paddingX, fontWeight }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedRecently, setClickedRecently] = useState(false);

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
          clickedRecently ? "" : "hover:shadow-buttonWhite hover:border-white hover:text-white"
        } transition-all duration-300`}
      >
        <LuFilter className="text-2xl mr-2" />
        <div className="px-2 text-lg">{children}</div>
        <IoIosArrowDown className="text-2xl ml-2" />
      </button>
      <div
        className={`w-full z-10 bg-white border border-yellowMain  hover:shadow-buttonYellowMain hover:border-yellowMain transition-all duration-100 ${
          isOpen ? " scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } transition-all duration-300 origin-top-right `}
      >
        <div className="bg-blackBG text-white font-urbanist hover:shadow-buttonYellowMain transition-all duration-300">
          <div className="pl-3 cursor-pointer hover:bg-yellowMain hover:text-black py-2">
            Option 1
          </div>
          <div className="pl-3 cursor-pointer hover:bg-yellowMain hover:text-black py-2">
            Option 2
          </div>
          <div className="pl-3 cursor-pointer hover:bg-yellowMain hover:text-black py-2">
            Option 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterDropDown;
