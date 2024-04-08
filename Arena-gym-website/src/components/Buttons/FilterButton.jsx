import React, { useState } from "react";

function FilterButton({ children }) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);

    setTimeout(() => {
      const parentElement = document.getElementById("filterButtonParent");

      if (parentElement) {
        parentElement.removeChild(parentElement.firstChild);
      }
    }, 100);
  };

  return (
    <div id="filterButtonParent">
      <button
        className={`relative flex items-center py-1 px-2 h-10 bg-blackBg border border-white transition duration-300 ease-in-out hover:border-yellowMain shadow-cardSmallWhite hover:shadow-cardYellowMain ${
          isRemoving ? "opacity-0 scale-0" : ""
        }`}
      >
        <span className="text-white font-robotoCon mr-2">{children}</span>
        <svg
          className="h-6 w-6 fill-current text-white transition duration-300 ease-in-out hover:text-yellowMain cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={handleRemove}
        >
          <path
            fillRule="evenodd"
            d="M14.35 5.65a.5.5 0 0 0-.707 0L10 9.293 5.354 4.646a.5.5 0 0 0-.708.708L9.293 10l-4.647 4.646a.5.5 0 0 0 .708.708L10 10.707l4.646 4.647a.5.5 0 0 0 .708-.708L10.707 10l4.647-4.646a.5.5 0 0 0 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
}

export default FilterButton;
