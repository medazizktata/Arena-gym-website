import React from 'react';

const DropdownField = ({ label, options }) => {
  return (
    <div className="flex flex-col p-4">
      <label className="text-white mb-2">{label}</label>
      <div className=" border-b-4 border-t-2 border-l-2 border-r-2 border-white">
        <select
          className="bg-blackBG text-white w-full py-2 px-3 cursor-pointer appearance-none"
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
