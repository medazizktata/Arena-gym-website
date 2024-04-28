import React from 'react';
import imageBlog from '../../assets/Img/imageBlog.jpg';
import BlogPost from '../../components/Blog';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorPage from "../../utils/ErrorPage.jsx";
import BlogPage from "./SingleBlog.jsx";


function BlogPostContainer() {
  return (
    
    <div className=" flex flex-col justify-center mt-20 mb-20">
      <div className="flex flex-col mx-0 mb-10 md:flex-row md:mx-20">
        
       <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
       
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
      </div>



      <div className="flex flex-col  mx-0 mb-10 md:flex-row md:mx-20">
        <BlogPost
          title="Catégorie: Titre-Blog"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
      </div>
      
      

      <div className="flex flex-col  mx-0 mb-10 md:flex-row md:mx-20">
        <BlogPost
          title="Catégorie: Titre-Blog"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Bolg"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
      </div>









    </div>
  );
}

export default BlogPostContainer;
