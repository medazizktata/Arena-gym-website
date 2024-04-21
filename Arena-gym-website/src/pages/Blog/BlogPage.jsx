import React from "react";
import SearchBox from "../../components/SearchBox";
import PageIntroduction from "../../components/PageIntroduction";
import BlogPost from '../../components/BlogPost';
import imageBlog from '../../assets/Img/imageBlog.jpg';

function BlogPage ({ categ, title }){
  let pubDate = Date();
  let content;

  switch (categ) {
    case "Nutrition":
      content = (
        <div className="flex flex-col z-10 my-40 mx-40">
          <p className="text-white font-roboto text-xl mb-20">
            Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Recette:
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
          </p>



          <div className="flex flex-row ">
            <img className=""
              src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211783/eldorami-mini-batbout-farci-farine-complete-3.jpg"
              alt="babtout"
            />
            <div className="mx-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">Ingrédients:</h1> <br/>
              <p className="text-white leading-loose text-xl">
                2 tasses de farine complète <br />
                1 tasse de semoule fine de blé dur <br />
                1 cuillère à café de levure de boulangerie sèche <br />
                1 cuillère à café de sel <br />
                1 cuillère à soupe d'huile d'olive (ou une autre huile saine) <br />
                Eau tiède (environ 1 tasse, ajustez selon besoin) <br />
                Graines de sésame ou autres graines pour garnir (facultatif) <br />
                Herbes fraîches hachées (persil, coriandre, etc.) pour parfumer (facultatif) 
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-9">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">Cuisson des batbouts:</h1>  <br/>
              <p className="text-white leading-loose text-xl">
              Faites chauffer une poêle antiadhésive à feu moyen. Vous pouvez légèrement huiler la poêle si nécessaire.
              Placez les cercles de pâte dans la poêle chaude et laissez cuire pendant environ 2 à 3 minutes de chaque côté, 
              jusqu'à ce qu'ils soient légèrement dorés 
              </p>
            </div>
            <img className=""
              src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211783/eldorami-mini-batbout-farci-farine-complete-3.jpg"
              alt="babtout"
            />
          </div>
        </div>
      );
      break;

    case "Sport":
      content = (
        <div className="flex flex-col z-10 my-40 mx-40">
          <p className="text-white font-roboto text-xl mb-20">
            Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Recette:
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
            Temps de préparation : 30 minutes + 1 h de repos
            Ingrédients (Pour 15 batbouts)Pendant le ramadan les petits pains Batbout sont toujours les bienvenus !
            Cette fois-ci, nous vous invitons à les préparer de façon saine avec de la farine complète;
          </p>



          <div className="flex flex-row ">
            <img className=""
              src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211783/eldorami-mini-batbout-farci-farine-complete-3.jpg"
              alt="babtout"
            />
            <div className="mx-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">Ingrédients:</h1> <br/>
              <p className="text-white leading-loose text-xl">
                2 tasses de farine complète <br />
                1 tasse de semoule fine de blé dur <br />
                1 cuillère à café de levure de boulangerie sèche <br />
                1 cuillère à café de sel <br />
                1 cuillère à soupe d'huile d'olive (ou une autre huile saine) <br />
                Eau tiède (environ 1 tasse, ajustez selon besoin) <br />
                Graines de sésame ou autres graines pour garnir (facultatif) <br />
                Herbes fraîches hachées (persil, coriandre, etc.) pour parfumer (facultatif) 
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-9">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">Cuisson des batbouts:</h1>  <br/>
              <p className="text-white leading-loose text-xl">
              Faites chauffer une poêle antiadhésive à feu moyen. Vous pouvez légèrement huiler la poêle si nécessaire.
              Placez les cercles de pâte dans la poêle chaude et laissez cuire pendant environ 2 à 3 minutes de chaque côté, 
              jusqu'à ce qu'ils soient légèrement dorés 
              </p>
            </div>
            <img className=""
              src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211783/eldorami-mini-batbout-farci-farine-complete-3.jpg"
              alt="babtout"
            />
          </div>
        </div>
      );
      break;





      
    default:
      content = <div>Default content goes here</div>;
      break;
  }

  return (
    <>
      <PageIntroduction
        imgSrc="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        title="Recette"
        titleProps="text-greyLight font-Gentona font-black text-10xl  ml-10 "
        subTitle="Batbout Healthy"//{title}
        subTitleProps="text-yellowMain font-Gentona font-black text-7xl ml-11"
      />

      <div className="flex justify-center items-center bottom-10 ">
        <SearchBox />
      </div>

      <div className="absolute right-5 mr-40 z-10">
        <span className="text-white font-roboto text-xl block">March 15, 2024 </span>
        <hr className="border-yellowBetter border-t-2" />
      </div>



      
      {content}

      <div className="mx-40 mb-9">
        <span className="text-white font-roboto text-lg ">Voir plus</span>
        <hr className="border-yellowBetter border-t-2" />
      </div>
      

    
      <div className="flex flex-row mx-20">
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
 

    </>
  );
}

export default BlogPage;
