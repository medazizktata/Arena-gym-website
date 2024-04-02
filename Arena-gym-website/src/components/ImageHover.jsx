import React, { useState } from "react";

function ImageHover({ originalSrc, hoverSrc, className }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <img
      className={`hover:cursor-pointer ${className}`}
      src={isHovered ? hoverSrc : originalSrc}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default ImageHover;
