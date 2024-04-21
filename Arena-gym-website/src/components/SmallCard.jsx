import React from "react";

function SmallCard({ children }) {
  return (
    <div id="filterButtonParent">
      <button
        className={`relative flex items-center py-1 px-2 h-10 bg-blackBg border border-white transition duration-300 ease-in-out hover:border-yellowMain shadow-cardSmallWhite hover:shadow-cardYellowMain`}
      >
        <span className="text-white font-robotoCon mr-2">{children}</span>
      </button>
    </div>
  );
}

export default SmallCard;
