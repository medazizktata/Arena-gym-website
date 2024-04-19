import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, label, placeholder, type }) => {
  const { register } = useFormContext();
  return (
    <div className="flex flex-col">
      <label className="text-white mb-2">{label}</label>
      <div className="border-b-4 border-t-2 border-l-2 border-r-2 border-white transition duration-300">
        <input
          {...register(name)}
          type={type}
          placeholder={placeholder}
          className="bg-transparent w-full text-white placeholder-gray-500 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-yellowMain"
          onFocus={(e) => {
            e.target.parentNode.classList.add('border-yellowMain');
          }}
          onBlur={(e) => {
            e.target.parentNode.classList.remove('border-yellowMain');
          }}
          autoComplete='off'
        />
      </div>
    </div>
  );
};

export default InputField;
