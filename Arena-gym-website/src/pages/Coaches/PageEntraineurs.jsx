import React from "react";
import HeadEntraineurs from "../../components/HeadEntraineurs";
import ContentEntraineurs from "../../components/ContentEntraineurs";
import SearchBox from "../../components/SearchBox";
import PageIntroduction from "../../components/PageIntroduction";

export function PageEntraineurs() {
  return (
    <>
      <PageIntroduction
        imgSrc={"src/assets/Images/Tarifs/Secret-8 1.png"}
        title="Nos entraineurs"
        titleProps="mb-10 max-sm:text-6xl max-md:text-7xl text-8xl text-white text-center"
        subTitleProps="max-sm:text-4xl max-md:text-6xl md:text-6xl text-white text-center"
      />
      <div className="flex justify-center items-center -mt-10 mb-10">
        <SearchBox width={600} />
      </div>

      <ContentEntraineurs />
    </>
  );
}
