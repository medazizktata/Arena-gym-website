import React, { useState } from 'react';

function ImageHover({ originalSrc, hoverSrc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <img
      src={isHovered ? hoverSrc : originalSrc}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default ImageHover;
