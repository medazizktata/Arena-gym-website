import React, { useState } from "react";

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
    const pageNumbers = [];

  const renderPageNumbers = () => {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 border-white border-2 ${
            page === i
              ? "bg-White text-white border-yellowMain"
              : "bg-gray-300 text-gray-600 hover:bg-blue-400 hover:text-white"
          }`}
          onClick={() => handlePageChange(i)}
          onMouseEnter={() => handleButtonHover(i)}
          onMouseLeave={() =>
            setHoveredButton(hoveredButton === i ? null : hoveredButton)
          }
          style={{
            transform: hoveredButton === i ? "scale(1.15)" : "scale(1)",
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };
  const L = pageNumbers;

  return (
    <div className="flex justify-center items-center">
      {page !== 1 && (
        <button
          className={`px-4 py-2 mr-2 border-white border-2 bg-White text-white hover:bg-yellowMain hover:text-black hover:border-black`}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
      )}

      <div className="flex">
        {L.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-4 py-2 mx-1 border-white border-2 ${
              page === pageNumber
                ? "bg-yellowMain text-Black border-yellowMain"
                : "bg-blackBG text-white hover:bg-yellowMain hover:text-black"
            }`}
            onClick={() => handlePageChange(pageNumber)}
            onMouseEnter={() => handleButtonHover(pageNumber)}
            onMouseLeave={() =>
              setHoveredButton(
                hoveredButton === pageNumber ? null : hoveredButton
              )
            }
            style={{
              transform:
                hoveredButton === pageNumber ? "scale(1.15) " : "scale(1)",
              border:
                page === pageNumber && hoveredButton === pageNumber
                  ? "2px solid var(--color-yellowDarkShadow)"
                  : "",
            }}
          >
            {pageNumber}
          </button>
        ))}
        {renderPageNumbers()}
      </div>
      {page !== L.length && (
        <button
          className={`px-4 py-2 ml-2 border-white border-2 bg-White text-white hover:bg-yellowMain hover:text-black hover:border-black`}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
