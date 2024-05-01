import React from "react";
import { Link } from "react-router-dom";
import BlogPage from "../pages/Blog/SingleBlog.jsx";

function BlogPost({ title, img, content }) {
  return (
    <div className="relative bg-blackBG container w-[70%] sm:px-2 hover:cursor-pointer">
      <div className="relative overflow-hidden group">
        <Link to="/BlogPage">
          <img
            className="h-48 w-full object-cover mb-2 transition duration-300 transform group-hover:brightness-50"
            src={img}
            alt="Blog Post Image"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-yellowMain bg-opacity-70 transition-all duration 500 transform translate-y-full group-hover:-translate-y-2">
            <h1 className="font-robotoCon text-black text-xl font-bold">
              Voir plus
            </h1>{" "}
          </div>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-robotoCon text-white mb-2">{title}</h1>
      </div>
      <div className="font-roboto text-white">
        <p className="text-l">{content}</p>
      </div>

      <span className="text-white font-roboto text-sm">March 15, 2024</span>
      <hr className="border-yellowBetter border-t-2" />
    </div>
  );
}

export default BlogPost;
