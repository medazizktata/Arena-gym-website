import React, { useState } from "react";
import "./HamburgerIcon.css"; 

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div
      id="nav-icon"
      onClick={toggleMenu}
      className={`${isOpen ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
