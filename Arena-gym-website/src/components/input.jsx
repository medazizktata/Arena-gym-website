/*

import React from 'react';

const InputField = ({ label, placeholder , type, value }) => {
    return (
        <div className="flex flex-col ">
          <label className="text-white mb-2">{label}</label>
          <div className=' border-b-4 border-t-2 border-l-2 border-r-2 border-white'>
          <input
            type={type}
            value={value}
            placeholder={placeholder}
            className="bg-transparent w-full text-white placeholder-gray-500 py-2 px-3"
          />
          </div>
        </div>
      );
    };

export default InputField;
*/
 
import React from 'react';
import { useFormContext } from 'react-hook-form';

const InputField = ({ name, label, placeholder, type }) => {
  const { register } = useFormContext(); // Utiliser useFormContext pour accéder à register
  return (
    <div className="flex flex-col ">
      <label className="text-white mb-2">{label}</label>
      <div className='border-b-4 border-t-2 border-l-2 border-r-2 border-white'>
        <input
          {...register(name)} // Appliquer register avec le nom du champ
          type={type}
          placeholder={placeholder}
          className="bg-transparent w-full text-white placeholder-gray-500 py-2 px-3"
        />
      </div>
    </div>
  );
};

export default InputField;
