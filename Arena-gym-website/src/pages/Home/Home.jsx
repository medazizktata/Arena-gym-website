import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import AppSection from "./AppSection";
import BelowFooter from "../../components/BelowFooter";
import SponsorsCarousel from "./SponsorsSection/SponsorsCarousel";
import SponsorsSection from "./SponsorsSection/SponsorsSection";
import MapCard from "../../components/MapCard";
import MapSection from "./MapSection";
import Appact from "../../components/CarrouselActivités";
import Appcoaches from "../../components/CarrouselCoaches";
import IMCForm from "./FormIMC";
import IMCSection from "./IMCSection";
import ContactSection from "./ContactSection";
import CalendarSection from "./CalendarSection/CalendarSection";

function Home() {
  return (
    <>
      <HeroSection />
      <ActivitiesSection />
      <CoachesSection />
      <IMCSection/>
      <CalendarSection/>
      <AppSection />
      <MapSection />
      <ContactSection/>
      <SponsorsSection />
    </>
  );
}

export default Home;
