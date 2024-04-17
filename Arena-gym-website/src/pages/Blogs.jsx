import React from 'react';
import imageBlog from '../assets/Img/imageBlog.jpg';
import BlogPost from '../components/BlogPost';

function BlogPostContainer() {
  return (
    <div className="bg-blackBG flex flex-wrap justify-center">
      <div className="flex flex-row w-full md:w-4/5 lg:w-2/3 xl:w-4/5 gap-12">
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
      <div className="flex flex-wrap justify-center w-full md:w-2/3 lg:w-2/3 xl:w-4/5 gap-12">
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
    </div>
  );
}

export default BlogPostContainer;
