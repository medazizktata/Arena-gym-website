import React from 'react';
import { useFormContext } from 'react-hook-form';
import downArrowSVG from '../assets/Icons/down-arrow-svgrepo-com.svg';

const DropdownField = ({ name, label, options }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="text-white mb-2">{label}</label>
      <div className="border-b-4 border-t-2 border-l-2 border-r-2 border-white transition duration-300">
        <select
          {...register(name)}
          className="bg-blackBG text-white w-full py-2 px-3 cursor-pointer appearance-none focus:outline-none"
          style={{
            backgroundImage: `url(${downArrowSVG})`,
            backgroundPosition: 'right 0.5rem center',
            backgroundSize: '1.5rem',
            backgroundRepeat: 'no-repeat'
          }}
          onFocus={(e) => {
            e.target.parentNode.classList.add('border-yellowMain');
          }}
          onBlur={(e) => {
            e.target.parentNode.classList.remove('border-yellowMain');
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
