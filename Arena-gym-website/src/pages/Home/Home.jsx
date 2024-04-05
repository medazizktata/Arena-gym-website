import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import About from "../About/About";
import AppSection from "./AppSection";
import BelowFooter from "../../components/BelowFooter";

function Home() {
  return (
    <>
       {/* <Navbar />
      <HeroSection />
      <ActivitiesSection/>
      <CoachesSection/>  */}
      <AppSection/>
      {/*<About/>*/}
      <BelowFooter/>
    </>
  );
}

export default Home;
