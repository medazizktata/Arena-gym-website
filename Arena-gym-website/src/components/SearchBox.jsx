import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

const SearchBox = ({ width = 400, filterToggle = 0 }) => //filterToggle = 0 => no Filter Icon
{
  const [searchInput, setSearchInput] = useState('');

  let filterHide;
  if (filterToggle === 0){
    filterHide = "hidden";
  } else {
    filterHide = ""
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="box relative flex items-center">
      <div className="absolute left-0 pl-1">
        <IoSearchSharp className="text-white text-2xl" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleChange}
        className={`w-[${width}px] text-white text-xl h-12 outline-none px-12 py-3 pl-10 bg-transparent border-b-2 border-gray-300"`} // Adjusted height to h-12
      />
      <div className={`relative right-5 ${filterHide}`}>
        <LuFilter className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default SearchBox;
