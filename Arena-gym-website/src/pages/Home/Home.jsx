import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import About from "../About/About";
import SearchBox from "../../components/SearchBox";
import HamburgerCrossIcon from "../../components/HamburgerCrossIcon/HamburgerCrossIcon";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <ActivitiesSection/>
      <CoachesSection/> 
      <SearchBox/> */}
   
    </>
  );
}

export default Home;
