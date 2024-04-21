
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeadEntraineurs from "../../components/HeadEntraineurs";
import SearchBar from "../../components/SearchBar";
import ContentEntraineurs from "../../components/ContentEntraineurs";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

export function PageEntraineurs() {
  return (
    <React.Fragment>
      <Navbar />
      <HeadEntraineurs />
      <div className="flex justify-center  transform scale-150 items-center my-10">
        <SearchBar />
      </div>
        <ContentEntraineurs/>
      <div className="my-3 mx-3">
         <Pagination/>
      </div>
      <div className="mx-9 my-9">
         <Footer/>
      </div>


    </React.Fragment>
  );
}
