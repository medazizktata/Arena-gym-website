import React from "react";
import HeadEntraineurs from "../../components/HeadEntraineurs";
import ContentEntraineurs from "../../components/ContentEntraineurs";
import SearchBox from "../../components/SearchBox";

export function PageEntraineurs() {
  return (
    <>
      <HeadEntraineurs />
      <div className="flex justify-center items-center -mt-10 mb-10">
        <SearchBox width={600} />
      </div>
      <ContentEntraineurs />
    </>
  );
}
