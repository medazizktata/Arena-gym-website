import React from 'react';
import BlogCard from './Blogbox';
import ButtonYellow from '../../../components/Buttons/ButtonYellow'; // Assurez-vous que le chemin est correct

const BlogGrid = ({ blogs }) => {
  // Obtenir la largeur de l'écran avec un Hook useState et useEffect pour écouter le redimensionnement
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Déterminer le nombre de blogs à afficher en fonction de la largeur de l'écran
  const maxBlogs = windowWidth >= 768 ? (windowWidth >= 1024 ? 8 : 6) : 4;

  return (
    <div className="bg-blackBG p-8 ml-16 mr-16">
      <div className={`grid grid-cols-1 ${windowWidth >= 768 ? 'sm:grid-cols-2' : ''} ${windowWidth >= 1024 ? 'md:grid-cols-3' : ''} ${windowWidth >= 1280 ? 'lg:grid-cols-4' : ''} gap-4`}>
        {blogs.slice(0, maxBlogs).map((blog, index) => (
          <BlogCard
            key={index}
            imageSrc={blog.imageSrc}
            description={blog.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <ButtonYellow buttonType="button" buttonFont={"font-robotoCon"} paddingX={6} fontWeight="font-bold">
          Consulter notre Blog
        </ButtonYellow>
      </div>
    </div>
  );
};

export default BlogGrid;
