import { useState } from "react";
import { getColor } from "../../utils/getColor";
import PageIntroduction from "../../components/PageIntroduction";
import SearchBox from "../../components/SearchBox";
import FilterButton from "../../components/Buttons/FilterButton";
import ButtonBlack from "../../components/Buttons/ButtonBlack";
import FilterDropDown from "../../components/FilterDropDown";
import FilterDropDownUpgraded from "../../components/FilterDropDownUpgraded";
import DynamicIcon from "../../components/DynamicIcon";

const Planning = () => {
  return (
    <>
      <PageIntroduction
        imgSrc={
          "../src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        }
        title="Planning"
        titleProps="my-5 text-greyLight text-center uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
      />
      <div className="flex justify-center">
        <div className="">
          {/*           <SearchBox width={600} />
           */}{" "}
        </div>
        {/*     <FilterDropDown>Cours</FilterDropDown>
         */}{" "}
        <FilterDropDownUpgraded>Cours</FilterDropDownUpgraded>
     
      </div>
    </>
  );
};
export default Planning;
