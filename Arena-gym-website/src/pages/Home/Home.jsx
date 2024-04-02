import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import About from "../About/About";
import AppSection from "./AppSection";

function Home() {
  return (
    <>
       <Navbar />
      <HeroSection />
      <ActivitiesSection/>
      <CoachesSection/> 
      <AppSection/>
      {/*<About/>*/}
    </>
  );
}

export default Home;
