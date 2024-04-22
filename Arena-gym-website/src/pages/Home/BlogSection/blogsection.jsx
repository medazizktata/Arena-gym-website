import React from 'react';
import BlogGrid from './BlogGrid';
const blogsData = [
  {  imageSrc: 'src/assets/Images/home/Media Objects.png', description : "5 Conseils pour Améliorer Votre Endurance Cardio"  },
  {  imageSrc: 'src/assets/Images/home/Media Objects (1).png', description: "Les Meilleurs Aliments à Consommer Après l'Entraînement" },
  {  imageSrc: 'src/assets/Images/home/Media Objects.png', description : "5 Conseils pour Améliorer Votre Endurance Cardio"  },
  {  imageSrc: 'src/assets/Images/home/Media Objects (1).png', description: "Les Meilleurs Aliments à Consommer Après l'Entraînement" },
  {  imageSrc: 'src/assets/Images/home/Media Objects.png', description : "5 Conseils pour Améliorer Votre Endurance Cardio"  },
  {  imageSrc: 'src/assets/Images/home/Media Objects (1).png', description: "Les Meilleurs Aliments à Consommer Après l'Entraînement" },
  {  imageSrc: 'src/assets/Images/home/Media Objects.png', description : "5 Conseils pour Améliorer Votre Endurance Cardio"  },
  {  imageSrc: 'src/assets/Images/home/Media Objects (1).png', description: "Les Meilleurs Aliments à Consommer Après l'Entraînement" },
  // ... autres données de blogs
];

const BlogHome = () => {
    return (
      <div>
         <div className="text-center my-8">
        <h1 className="font-bold text-white py-7 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Nos publications Blog</h1>
        <p className="mx-auto text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-[80%] text-center">Plongez dans l'univers du fitness et de la santé avec notre blog dédié à tous les passionnés de remise en forme</p>
      </div>
        <BlogGrid blogs={blogsData} />
        {/* ... Autres éléments de votre page ... */}
      </div>
    );
  };
  
  export default BlogHome;