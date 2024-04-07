import React from 'react';

const InputField = ({ label, placeholder , type, value }) => {
    return (
        <div className="flex flex-col p-4">
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
