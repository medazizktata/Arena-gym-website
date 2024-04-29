import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [page, setPage] = useState(currentPage);
  const [hoveredButton, setHoveredButton] = useState(null);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  const handleButtonHover = (pageNumber) => {
    setHoveredButton(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 border-white border-2 ${
            page === i
              ? "bg-White text-white border-yellowMain"
              : "bg-blackBG text-white hover:bg-yellowMain hover:text-black transition duration-300 ease-in-out"
          }`}
          onClick={() => handlePageChange(i)}
          onMouseEnter={() => handleButtonHover(i)}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            transform: hoveredButton === i ? "scale(1.1)" : "scale(1)",
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const smallScreen = window.innerWidth <= 640;

  return (
    <div className="flex flex-col gap-5 justify-center items-center sm:flex-row">
      <button
        className={`px-4 py-2 border-white border-2 bg-White text-white transition duration-300 ease-in-out ${
          page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-yellowMain hover:text-black hover:border-black"
        }`}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        {smallScreen ? <FiChevronLeft /> : "Previous"}
      </button>
      <div className="flex justify-center items-center sm:mt-0">
        {renderPageNumbers()}
      </div>
      <button
        className={`px-4 py-2 border-white border-2 bg-White text-white transition duration-300 ease-in-out ${
          page === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-yellowMain hover:text-black hover:border-black"
        }`}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        {smallScreen ? <FiChevronRight /> : "Next"}
      </button>
    </div>
  );
}

export default Pagination;
