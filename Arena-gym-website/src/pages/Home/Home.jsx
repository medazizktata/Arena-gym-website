import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection/ActivitiesSection";
import CoachesSection from "./CoachesSection/CoachesSection";
import AppSection from "./AppSection";
import BelowFooter from "../../components/BelowFooter";
import SponsorsCarousel from "./SponsorsSection/SponsorsCarousel";
import SponsorsSection from "./SponsorsSection/SponsorsSection";
import MapCard from "../../components/MapCard";
import MapSection from "./MapSection";
import Appact from "./ActivitiesSection/CarrouselActivités";
import Appcoaches from "./CoachesSection/CarrouselCoaches";
import IMCForm from "./FormIMC";
import IMCSection from "./IMCSection";
import ContactSection from "./ContactSection";
import CalendarSection from "./CalendarSection/CalendarSection";
import BlogHome from "./BlogSection/blogsection";
import CarrouselCoachesV2 from "./CoachesSection/CarrouselCoachesV2";
import ButtonYellow from "../../components/Buttons/ButtonYellow";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <HeroSection />
      <ActivitiesSection />
      <CoachesSection />
      
      <IMCSection/>
      <CalendarSection/>
      <BlogHome/>
      <AppSection />
      <MapSection />
      <ContactSection/>
      <SponsorsSection />
    </>
  );
}

export default Home;
