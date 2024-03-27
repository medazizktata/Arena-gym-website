import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ActivitiesSection/>
    </>
  );
}

export default Home;
