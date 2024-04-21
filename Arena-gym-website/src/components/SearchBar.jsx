import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { LuFilter } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";


const SearchBox = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div className="box relative flex items-center">
      <div className="absolute left-0 pl-2">
        <IoSearchSharp className="text-white text-xl" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={handleChange}
        className="text-white h-10 outline-none text-lg px-12 py-3 pl-10 bg-transparent border-b-2 border-gray-300"
      />
      <div className="relative right-5">
        <LuFilter className="text-white text-xl" />
      </div>
    </div>
  );
};

export default SearchBox;