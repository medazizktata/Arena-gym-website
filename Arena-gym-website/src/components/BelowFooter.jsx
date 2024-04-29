import React from "react";
import { FaCopyright } from 'react-icons/fa';

function BelowFooter() {
  return (
    <>
      <div className="mt-5 border-t border-white-600 py-3 flex justify-between items-center text-white text-sm font-robotoCon sm:px-20 max-sm:px-5 ">
        <div className="flex items-center justify-between max-sm:justify-center">
          <FaCopyright className="text-sm mr-2 max-sm:text-center" />
          <h3>2024 Arena Gym Website Made By ENIT Junior Entreprise</h3>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-white max-sm:hidden">Terms of Use</a>
          <a href="#" className="text-white max-sm:hidden">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default BelowFooter;
