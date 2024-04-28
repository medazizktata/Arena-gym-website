import React from "react";
import PageIntroduction from "../../components/PageIntroduction";
import BlogPost from "../../components/Blog";
import imageBlog from "../../assets/Img/imageBlog.jpg";
import imageBlog2 from "../../assets/Img/imageblog2.jpeg";

function BlogPage({ categ, title, subtitle }) {
  let pubDate = Date();
  let content;

  switch (categ) {
    case "Nutrition":
      content = (
        <div className="flex flex-col z-10 my-40 mx-40">
          <p className="text-white font-roboto text-xl mb-20">
            Pendant le ramadan les petits pains Batbout sont toujours les
            bienvenus ! Cette fois-ci, nous vous invitons à les préparer de
            façon saine avec de la farine complète; Recette: Temps de
            préparation : 30 minutes + 1 h de repos Ingrédients (Pour 15
            batbouts)Pendant le ramadan les petits pains Batbout sont toujours
            les bienvenus ! Cette fois-ci, nous vous invitons à les préparer de
            façon saine avec de la farine complète; Temps de préparation : 30
            minutes + 1 h de repos Ingrédients (Pour 15 batbouts)Pendant le
            ramadan les petits pains Batbout sont toujours les bienvenus ! Cette
            fois-ci, nous vous invitons à les préparer de façon saine avec de la
            farine complète; Cette fois-ci, nous vous invitons à les préparer de
            façon saine avec de la farine complète; Temps de préparation : 30
            minutes + 1 h de repos Ingrédients (Pour 15 batbouts)Pendant le
            ramadan les petits pains Batbout sont toujours les bienvenus ! Cette
            fois-ci, nous vous invitons à les préparer de façon saine avec de la
            farine complète;
          </p>

          <div className="flex flex-row ">
            <img
              className="h-50 w-96"
              src="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/211783/eldorami-mini-batbout-farci-farine-complete-3.jpg"
              alt="babtout"
            />
            <div className="mx-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Ingrédients:
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                2 tasses de farine complète <br />
                1 tasse de semoule fine de blé dur <br />
                1 cuillère à café de levure de boulangerie sèche <br />
                1 cuillère à café de sel <br />1 cuillère à soupe d'huile
                d'olive (ou une autre huile saine) <br />
                Eau tiède (environ 1 tasse, ajustez selon besoin) <br />
                Graines de sésame ou autres graines pour garnir (facultatif){" "}
                <br />
                Herbes fraîches hachées (persil, coriandre, etc.) pour parfumer
                (facultatif)
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-20 mb-[-100px]">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Cuisson des batbouts:
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                Dans un verre, versez la levure avec de l’eau tiède puis ajoutez
                le sucre (ou le miel). Laissez gonfler 10 minutes.Dans un bol
                mélangez la farine et le sel, puis ajoutez le mélange levure/eau
                et rajoutez de l’eau jusqu’à obtenir une pâte molle. Pétrir
                pendant 10 minutes à la main ou 5 minutes au robot. La pâte
                reste légèrement collante. Laisser doubler de volume (environ
                30/40 minutes), couvrir le bol d’un torchon à peine
                humide.Dégazer la pâte en enfonçant le poing dedans, puis former
                15 boules, écrasez les légèrement afin de leur donner la forme
                d’un disque. Laissez doubler à nouveau (15 à 30 minutes plus ou
                moins selon la température de la pièce).Dans une poêle cuire à
                feu doux chaque face 30 seconde à 1 minute.
              </p>
            </div>
            <img
              className="w-1/4 "
              src="https://recettehealthy.com/wp-content/uploads/2020/10/batbout-farci.jpg.webp"
              alt="babtout"
            />
          </div>
        </div>
      );
      break;

    case "Fitness":
      content = (
        <div className="flex flex-col z-10 my-40 mx-40">
          <p className="text-white font-roboto text-xl mb-20">
            Tout exercice peut aider à perdre du poids, peut être un excellent
            stimulant pour l’humeur et offrir de nombreux autres avantages
            autres que la perte de poids. Mais si vous vous sentez coincé dans
            votre routine actuelle ou si vous souhaitez essayer de nouveaux
            exercices qui peuvent vous aider à perdre du poids plus
            efficacement, vous trouverez dans cet article les meilleurs
            exercices qui fonctionnent vraiment pour perdre du poids.
          </p>
          <img
            className="mb-20"
            src="https://timelinecovers.pro/facebook-cover/download/girls-doing-fitness-facebook-cover.jpg"
            alt=""
          />
          <div className="flex flex-row "></div>

          <div className=" mt-9">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Avantages de l’exercice par rapport au régime:
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                Combiner l’exercice avec une alimentation saine est un moyen
                plus efficace de perdre du poids que de dépendre uniquement
                d’une restriction calorique. L’exercice peut prévenir ou même
                inverser les effets de certaines maladies. L’exercice abaisse la
                tension artérielle et le cholestérol, ce qui peut prévenir une
                crise cardiaque. De plus, si vous faites de l’exercice, vous
                réduisez votre risque de développer certains types de cancers
                tels que le cancer du côlon et du sein. L’exercice est également
                connu pour contribuer à un sentiment de confiance et de
                bien-être, réduisant ainsi éventuellement les taux d’anxiété et
                de dépression. L’exercice est utile pour perdre du poids et
                maintenir la perte de poids. L’exercice peut augmenter le
                métabolisme ou le nombre de calories que vous brûlez en une
                journée. Il peut également vous aider à maintenir et à augmenter
                la masse corporelle maigre, ce qui contribue également à
                augmenter le nombre de calories que vous brûlez chaque jour.
              </p>
            </div>
          </div>
          <div className=" mt-9">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Les 3 meilleurs types d’exercices pour perdre du poids:
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                De plus, il n’y a rien de mal à faire des exercices en dehors de
                cette liste, ou simplement pour en profiter.
                <br />
                1- Cardio <br />
                Le premier exercice que beaucoup de gens font quand ils veulent
                perdre du poids est le cardio. Et bien que le cardio soit
                excellent pour élever votre rythme cardiaque et brûler des
                calories, ce n’est pas l’exercice le plus efficace que vous
                puissiez faire pour perdre du poids. Le cardio est important
                pour perdre du poids, mais pour vraiment augmenter vos
                résultats, vous devez également ajouter des exercices qui
                renforcent vos muscles. Le cardio est une partie importante de
                toute routine d’exercice, et vous devriez l’inclure dans votre
                routine hebdomadaire, ainsi que l’entraînement en force.
                <br />
                2- L’entraînement en force
                <br />
                L’entraînement en force, avec votre propre poids corporel ou en
                soulevant des poids, est l’un des moyens les plus efficaces pour
                perdre du poids. Pourquoi? Premièrement, soulever des poids peut
                vous aider à perdre de la graisse tout en développant vos
                muscles, ce qui est formidable pour votre métabolisme. La masse
                musculaire brûle plus de calories que la graisse, ce qui
                signifie que vous brûlez plus de calories chaque jour lorsque
                vous avez plus de muscle, même pendant que vous dormez. Gardez à
                l’esprit que c’est à vous de choisir si vous utilisez des poids
                plus légers ou plus lourds, mais les deux catégories de poids
                nécessitent une approche différente pour développer efficacement
                vos muscles. En général, les poids plus légers nécessitent un
                nombre plus élevé de répétitions et de séries, et les poids plus
                lourds nécessitent moins de répétitions et de séries.
                L’entraînement en force implique souvent l’utilisation
                d’haltères ou d’appareils de musculation.
                <br />
                3- Mouvements composés
                <br />
                Alors, comment combiner le cardio avec des exercices de
                musculation pour non seulement brûler des calories, mais aussi
                développer votre force ? Certains des meilleurs exercices pour
                perdre du poids sont des mouvements composés de tout le corps,
                accompagnés de séances de cardio. Un mouvement composé est un
                exercice multi-articulaire conçu pour cibler plusieurs groupes
                musculaires à la fois. Il est si important de mélanger à la fois
                des poids et un entraînement par intervalles cardio si vous
                souhaitez modifier votre composition corporelle, améliorer votre
                masse musculaire et tonifier les muscles de soutien. Cela va de
                pair avec le renforcement de la densité osseuse et le
                renforcement de votre système cardiovasculaire.
                <br />
                <br />
                <br />À la fin de la journée, vous devez être en déficit
                calorique – grâce à une combinaison de ce que vous mangez et
                brûlez pendant l’exercice – pour perdre du poids. L’exercice est
                donc la clé, tout comme la réduction des calories grâce à la
                nutrition et la gestion de vos ratios de macronutriments.
                N’oubliez pas que vous avez besoin de beaucoup de protéines pour
                aider à reconstruire les muscles après l’exercice, surtout après
                l’entraînement en force.
              </p>
            </div>
          </div>
        </div>
      );
      break;

    case "Bien-être":
      content = (
        <div className="flex flex-col z-10 my-40 mx-40">
          <p className="text-white font-roboto text-xl mb-20">
            Passez un moment de détente en profitant d’un massage relaxant pour
            reconnecter votre corps et votre esprit. Redonnez de la souplesse à
            vos articulations et vos muscles grâce aux doigts de fée de nos
            experts du massage qui vont vous faire oublier toute la fatigue
            d’une bonne séance d’entrainement mais aussi celle causée par le
            stress du quotidien. Après le massage vous allez vous sentir léger,
            détendu et prêts à relever de nouveau défis !
          </p>
          <img
            className="mb-20"
            src="https://www.california-gym.com/dz/wp-content/uploads/2022/11/massage.jpg"
            alt=""
          />
          <div className="flex flex-row ">
            <div className="">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Massage :
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                Massage Relaxant: corps complet (50mn) à 45dt au lieu de 60dt
                Massage Profond: pour les sportifs (50mn) à 45dt au lieu de 60dt
                Les soins PAYOT Flash Hydratant : (Soin Express Désaltérant,
                Tous Types de Peaux) à 55dt au lieu de 70dt Flash Nettoyant :
                (Soin Détox nettoyant, Tous Types de Peaux) 55dt au lieu de 70dt
                Eclat Essentiel : (Soin Booster d’éclat et énergisant pour peaux
                ternes) à 90dt au lieu de 120dt Pureté Essentielle : (Soin
                Purifiant, Peau Nette, Peau à Problèmes) à 90dt au lieu de 120dt
                Hydratation Essentielle : (Soin bain d’Hydratation, Peaux
                Déshydratées) à 90dt au lieu de 120dt Liss Absolu : (Soin
                Peeling Anti-Rides, traite les rides et ridules + 2 Masques) à
                115dt au lieu de 150dt
              </p>
            </div>
          </div>

          <div className=" mt-9">
            <div className="mr-20">
              <h1 className="text-yellowBetter text-4xl font-roboto">
                Réservation :
              </h1>{" "}
              <br />
              <p className="text-white leading-loose text-xl">
                La réservation est obligatoire pour toutes les prestations. Il
                suffit d’appeler le 29640082 pour prendre un rendez-vous.
              </p>
            </div>
          </div>
        </div>
      );
      break;

    default:
      content = <div></div>;
      break;
  }

  return (
    <>
      <PageIntroduction
        imgSrc="src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
        title="BLOG"
        titleProps="my-5 max-sm:text-5xl max-md:text-8xl text-9xl text-white ml-20"
        subTitle={"Nutrition"}
        subTitleProps="text-yellowMain font-Gentona font-black max-sm:text-4xl max-md:text-5xl md:text-6xl ml-40"
      />
      <div className="absolute right-5 mr-40 z-10">
        <span className="text-white font-roboto text-xl block">
          March 15, 2024{" "}
        </span>
        <hr className="border-yellowBetter border-t-2" />
      </div>

      <div className="flex flex-col z-10 my-40 mx-40">
        <p className="text-white font-roboto text-xl mb-20">
          Passez un moment de détente en profitant d’un massage relaxant pour
          reconnecter votre corps et votre esprit. Redonnez de la souplesse à
          vos articulations et vos muscles grâce aux doigts de fée de nos
          experts du massage qui vont vous faire oublier toute la fatigue d’une
          bonne séance d’entrainement mais aussi celle causée par le stress du
          quotidien. Après le massage vous allez vous sentir léger, détendu et
          prêts à relever de nouveau défis !
        </p>
        <img
          className="mb-20 h-1/2"
          src="https://www.california-gym.com/dz/wp-content/uploads/2022/11/massage.jpg"
          alt=""
        />
        <div className="flex flex-row ">
          <div className="">
            <h1 className="text-yellowBetter text-4xl font-roboto">
              Massage :
            </h1>{" "}
            <br />
            <p className="text-white leading-loose text-xl">
              Massage Relaxant: corps complet (50mn) à 45dt au lieu de 60dt
              <br />
              Massage Profond: pour les sportifs (50mn) à 45dt au lieu de 60dt
              <br />
              Les soins PAYOT
              <br />
              Flash Hydratant : (Soin Express Désaltérant, Tous Types de Peaux)
              à 55dt au lieu de 70dt <br />
              Flash Nettoyant : (Soin Détox nettoyant, Tous Types de Peaux) 55dt
              au lieu de 70dt
              <br />
              Eclat Essentiel : (Soin Booster d’éclat et énergisant pour peaux
              ternes) à 90dt au lieu de 120dt
              <br />
              Pureté Essentielle : (Soin Purifiant, Peau Nette, Peau à
              Problèmes) à 90dt au lieu de 120dt
              <br />
              Hydratation Essentielle : (Soin bain d’Hydratation, Peaux
              Déshydratées) à 90dt au lieu de 120dt
              <br />
              Liss Absolu : (Soin Peeling Anti-Rides, traite les rides et
              ridules + 2 Masques) à 115dt au lieu de 150dt <br />
            </p>
          </div>
        </div>

        <div className=" mt-9">
          <div className="mr-20">
            <h1 className="text-yellowBetter text-4xl font-roboto">
              Réservation :
            </h1>{" "}
            <br />
            <p className="text-white leading-loose text-xl">
              La réservation est obligatoire pour toutes les prestations. Il
              suffit d’appeler le 29640082 pour prendre un rendez-vous.
            </p>
          </div>
        </div>
      </div>

      {content}

      <div className="mx-40 mb-9">
        <span className="text-white font-roboto text-lg ">Voir plus</span>
        <hr className="border-yellowBetter border-t-2" />
      </div>

      <div className="flex flex-col  mx-0 mb-40 md:flex-row md:mx-20">
        <BlogPost
          title="Catégorie: Titre-Blog"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Blog"
          img={imageBlog2}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
        <BlogPost
          title="Catégorie: Titre-Blog"
          img={imageBlog}
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a odio baguettes semper, eget pretium quam pulvinar. Aenean laoreet bibendum lacinia."
        />
      </div>
    </>
  );
}

export default BlogPage;
