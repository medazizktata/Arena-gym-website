import React from "react";
import Navbar from "../../components/Navbar";
import HeadEntraineurs from "../../components/HeadEntraineurs";
import SearchBar from "../../components/SearchBar";
import ContentEntraineurs from "../../components/ContentEntraineurs";


export function PageEntraineurs() {
    return (
      <React.Fragment>
        <Navbar />
        <HeadEntraineurs />
        <div className="flex justify-center items-center transform scale-150 my-10" >
          <SearchBar />
        </div>
        <ContentEntraineurs/>
        
      </React.Fragment>
    );
  }