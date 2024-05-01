import React, { useState } from "react";
import imageBlog from "../../assets/Img/imageBlog.jpg";
import BlogPost from "../../components/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../../utils/ErrorPage.jsx";
import BlogPage from "./SingleBlog.jsx";
import PageIntroduction from "../../components/PageIntroduction";
import FilterDropDownUpgraded from "../../components/FilterDropDownUpgraded";
import SearchBox from "../../components/SearchBox";
import { getColor } from "../../utils/getColor";
import DynamicSVGComponent from "../../components/DynamicIcon";
import { CgGym } from "react-icons/cg";
import FilterButton from "../../components/Buttons/FilterButton";
import Pagination from "../../components/Pagination";

function BlogPostContainer() {
  const iconPaths = {
    Nutrition: "../../src/assets/Icons/apple_3842166.svg",
    Fitness: "../../src/assets/Icons/dumbbell_1719695.svg",
    "Bien-être": "../../src/assets/Icons/healthy-life_2771065.svg",
  };
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleIconClick = (iconKey) => {
    setSelectedIcons((prevSelectedIcons) => {
      if (prevSelectedIcons.includes(iconKey)) {
        return prevSelectedIcons.filter((key) => key !== iconKey);
      } else {
        return [...prevSelectedIcons, iconKey];
      }
    });
    setFilterVisible(true);
  };

  const toggleFilter = () => {
    // Toggle filterVisible state
    setFilterVisible(!filterVisible);
  };

  const handleRemoveIcon = (iconKey) => {
    setSelectedIcons((prevSelectedIcons) =>
      prevSelectedIcons.filter((key) => key !== iconKey)
    );

    if (selectedIcons.length === 1) {
      setFilterVisible(false);
    }
  };

  const blogPosts = [
    {
      title: "Lorem Ipsum 1",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 2",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 3",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 1",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 2",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorefdfdm Ipsum 3",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsdfum 1",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsdfum 2",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 3",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 1",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Ipsum 2",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
    {
      title: "Lorem Idfdpsum 3",
      img: imageBlog,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9; // Adjust the number of posts per page as needed

  // Calculate index of the first and last post of the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="mb-20">
        <PageIntroduction
          imgSrc={"src/assets/Images/Tarifs/Secret-8 1.png"}
          title={"Blog"}
          subTitle="by Arena Gym"
          titleProps="uppercase text-greyLight ml-[15%] uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
          subTitleProps="font-urbanist ml-[25%] my-2 max-sm:text-lg max-md:text-xl md:text-2xl text-white"
        />
        <div className="flex justify-center items-center flex-col gap-10 mx-12">
          <SearchBox filterToggle={1} width={600}>
            <div className="mx-10 flex flex-row gap-20 max-sm:flex-col max-sm:gap-2">
              {Object.entries(iconPaths).map(([text, path], index) => (
                <div
                  key={index}
                  className="text-greyMedium flex flex-col items-center gap-3 py-3 cursor-pointer hover:text-white transition-all duration-300 py-3"
                  onClick={() => handleIconClick(text)}
                >
                  <div className="">
                    <DynamicSVGComponent
                      svgPath={path}
                      width={"80px"}
                      color={`${getColor("greyMedium")}`}
                      hoverColor={`${getColor("white")}`}
                    />
                  </div>
                  <div className="text-2xl">{text}</div>
                </div>
              ))}
            </div>
          </SearchBox>
          <div
            className={`flex flex-row gap-10 transition-ease-in-out duration-300 ${
              filterVisible ? "mt-5 opacity-100" : "opacity-0"
            }`}
          >
            {selectedIcons.map((iconKey, index) => (
              <FilterButton
                key={index}
                onClick={() => handleRemoveIcon(iconKey)}
              >
                {iconKey}
              </FilterButton>
            ))}
          </div>
        </div>
        <div className="m-10 grid justify-items-center items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 ">
          {currentPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              img={post.img}
              content={post.content}
            />
          ))}
        </div>
        <div className="max-sm:-my-40 max-sm:pb-10 sm:my-20">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(blogPosts.length / postsPerPage)}
            onPageChange={handlePageChange}
          />{" "}
        </div>
      </div>
    </>
  );
}

export default BlogPostContainer;
