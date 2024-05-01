// FilterButton.jsx
import React from "react";

function FilterButton({ children, onClick }) {
  return (
    <div className="filter-button-container transition-opacity transition-transform duration-300 ease-in-out">
      <button
        className="filter-button relative flex items-center py-1 px-2 h-10 bg-blackBg border border-white hover:border-yellowMain shadow-cardSmallWhite hover:shadow-cardYellowMain"
        onClick={onClick}
      >
        <span className="text-white font-robotoCon mr-2">{children}</span>
        <svg
          className="filter-icon h-6 w-6 fill-current text-white cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
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
