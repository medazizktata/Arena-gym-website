import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

const SearchBox = ({ width = 400, filterToggle = 0, children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filterActive, setFilterActive] = useState(false);
  const [boxHeight, setBoxHeight] = useState(0);
  const [boxOpacity, setBoxOpacity] = useState(0);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleFilter = () => {
    setFilterActive(!filterActive);
    if (!filterActive) {
      setBoxHeight("500px");
      setBoxOpacity(1);
    } else {
      setBoxHeight(0);
      setBoxOpacity(0);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="absolute left-0 pl-1">
          <IoSearchSharp size={25} className="text-white text-2xl" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleChange}
          className={`w-full md:w-[${width}px] text-white text-xl h-12 px-12 pl-10 outline-none bg-transparent `}
        />
        {filterToggle == 1 && (
          <div className="relative">
            <LuFilter
              size={25}
              className={`text-white text-2xl hover:text-yellowMain cursor-pointer transition duration-500 ${
                filterActive ? "text-yellowMain" : ""
              }`}
              onClick={toggleFilter}
            />
          </div>
        )}
      </div>
      <div className="h-2 border-b-2 border-white-300"></div>

      {filterToggle == 1 && (
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out`}
          style={{
            maxHeight: boxHeight,
            opacity: boxOpacity,
          }}
        >
          <div
            className={` w-full md:w-[${width}px] bg-blackBG text-black border-b-2 border-r-2 border-l-2 border-gray-300 px-2 shadow-cardSmallGreyMedium hover:shadow-cardYellowMain`}
          >
            <div className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white">
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
