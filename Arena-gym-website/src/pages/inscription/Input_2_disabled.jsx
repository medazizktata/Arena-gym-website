import React from 'react';
import { useFormContext } from 'react-hook-form';

const DropdownField2 = ({ name, label, options , type}) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col ">
      <label className="text-white mb-2">{label}</label>
      <div className=" border-b-4 border-t-2 border-l-2 border-r-2 border-white">
        <select
        {...register(name)}
          className="bg-blackBG text-gray-500 w-full py-2 px-3 cursor-pointer appearance-none"
          
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

export default DropdownField2;
