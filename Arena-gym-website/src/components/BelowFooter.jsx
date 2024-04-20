import React from "react";
import { FaCopyright } from 'react-icons/fa';

function BelowFooter() {
  return (
    <>
      <div className="mt-5 border-t border-white-600 py-3 px-20 flex justify-between items-center text-white text-sm font-regular font-robotoCon text-center">
        <div className="flex items-center justify-content">
          <FaCopyright className="mr-2" />
          <h3>2024 Arena Gym Website Made By ENIT Junior Entreprise</h3>
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-white">Terms of Use</a>
          <a href="#" className="text-white">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default BelowFooter;
