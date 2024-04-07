import React from 'react';
import downArrowSVG from '../assets/Icons/down-arrow-svgrepo-com.svg';
const DropdownField = ({ label, options , type }) => {
  return (
    <div className="flex flex-col p-4">
      <label className="text-white mb-2">{label}</label>
      <div className=" border-b-4 border-t-2 border-l-2 border-r-2 border-white">
        <select
          className="bg-blackBG text-white w-full py-2 px-3 cursor-pointer appearance-none"
          style={{
            backgroundImage: `url(${downArrowSVG})`,
            backgroundPosition: 'right 0.5rem center',
            backgroundSize: '1.5rem',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className="bg-blackBG text-white">
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropdownField;
