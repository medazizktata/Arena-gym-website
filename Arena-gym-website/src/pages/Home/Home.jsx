import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import AppSection from "./AppSection";
import BelowFooter from "../../components/BelowFooter";
import SponsorsCarousel from "./SponsorsCarousel";
import SponsorsSection from "./SponsorsSection";
import MapCard from "../../components/MapCard";
import MapSection from "./MapSection";
import ContactForm from "./form_com";
import IMCForm from "./form_imc";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ActivitiesSection/>
      <CoachesSection/>
      <AppSection/>
      <MapSection/>

      <IMCForm/>
      <ContactForm/>

      
      <SponsorsSection/>



      
    </>
  );
}

export default Home;
