import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ActivitiesSection/>
      <CoachesSection/>
    </>
  );
}

export default Home;
