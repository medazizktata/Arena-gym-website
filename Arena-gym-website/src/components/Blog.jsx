import React from 'react';
import { Link } from 'react-router-dom';
import BlogPage from "../pages/Bolgs/SingleBlog.jsx";

function BlogPost({ title, img, content }) {
  return (
    <div className="bg-blackBG container mx-auto md:px-20 py-3 lg:w-[600px] w-[330px] sm:px-2">
      <div className="relative overflow-hidden group">
      
         <img className="h-48 w-full object-cover mb-2 transition duration-300 transform group-hover:brightness-50" src={img} alt="Blog Post Image" /> 
        <div className="absolute inset-0 flex items-center justify-center bg-yellowBetter bg-opacity-70 transition-transform transform translate-y-full group-hover:translate-y-0">
        <Link to="/BlogPage"> <h1 className="text-black text-xl font-bold">Voir plus</h1> </Link>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-robotoCon text-white mb-2">{title}</h1>
      </div>
      <div className="font-roboto text-white">
        <p className='text-l'>
          {content}
        </p>
      </div>

      <br />
      <span className="text-white font-roboto text-l">March 15, 2024</span>
      <hr className="border-yellowBetter border-t-2" />
    </div>
  );
}

export default BlogPost;

