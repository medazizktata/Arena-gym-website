import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "./HeroSection";
import ActivitiesSection from "./ActivitiesSection";
import CoachesSection from "./CoachesSection";
import About from "../About/About";
import SearchBox from "../../components/SearchBox";
import IMCForm from "./form_imc";
import SplitRectangle from "./Sokra_only";
function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ActivitiesSection/>
      <CoachesSection/>
      <SearchBox/>


       
      <SplitRectangle
      text_grand="Fitness d'Élite Padel & Piscines Premium"
      text="Plongez dans une expérience fitness hors du commun avec nos terrains de padel et piscines exclusives, intégrés à notre offre haut de gamme. Rejoignez-nous pour une remise en forme qui conjugue luxe, confort et performance."
      imageUrl="https://www.piscineavenue.com/wp-content/uploads/2020/04/prix-construction-piscine-olympique-600x321.jpeg"
      />



      <IMCForm/>
    </>
  );
}

export default Home;
