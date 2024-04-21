import React from "react";
import HeadEntraineurs from "../../components/HeadEntraineurs";
import ContentEntraineurs from "../../components/ContentEntraineurs";
import SearchBox from "../../components/SearchBox";

export function PageEntraineurs() {
  return (
    <>
      <HeadEntraineurs />
      <div className="flex justify-center items-center transform scale-150 my-10">
        <SearchBox />
      </div>
      <ContentEntraineurs />
    </>
  );
}
