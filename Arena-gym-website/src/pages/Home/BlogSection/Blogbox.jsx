import React from 'react';

const BlogCard = ({ description, imageSrc, link }) => {
  return (
    <a href={link} className="block overflow-hidden shadow-lg relative w-full hover:cursor-pointer">
      <div className="aspect-w-1 aspect-h-1 w-full">
        <img src={imageSrc} alt="blog" className="object-cover transition-opacity duration-300 hover:opacity-75" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 w-full ">
        <p className="text-white text-xs sm:text-sm md:text-base">{description}</p>
      </div>
    </a>
  );
};

export default BlogCard;
