import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { getColor } from "../../utils/getColor";

import GalerieImporter from "./GalerieImporter";
import PageIntroduction from "../../components/PageIntroduction";

const GalerieV2 = () => {
  const images = GalerieImporter();
  console.log(images);
  const [index, setIndex] = useState(-1);

  return (
    <>
      {/* <div className="relative min-h-screen flex flex-col items-start">
        <div className="absolute inset-0 w-full h-full z-10 ">
          <img
            src="../src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Background"
          />
          <div
            className="absolute inset-0 w-full"
            style={{
              background: `linear-gradient(to top, ${getColor(
                "blackBG"
              )}, rgba(255,255,255,0))`,
            }}
          ></div>
        </div>
        <div className="z-10 ml-20 mt-80 ">
          <div className="mb-1">
            <h1 className="text-greyLight font-Gentona font-black text-9xl">
              Galerie
            </h1>
          </div>
          <div className="z-10 ml-20 ">
            <h1 className="text-yellowMain font-Gentona font-bold text-7xl">
              Photos|Videos
            </h1>
          </div>
        </div>
      </div> */}
      <PageIntroduction imgSrc={"../src/assets/Images/Caroussel/Hero-section/Training_ground.jpg"}
      title="Galerie"
      titleProps="text-greyLight ml-12 md:ml-40 text-5xl sm:text-7xl md:text-8xl lg:text-9xl"  
      subTitle="Photos | Videos"
      subTitleProps="ml-20 md:ml-60 my-2 text-yellowMain font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl"/>
      <div className="mx-10 sm:mx-20">
        {/* <div className="my-20 mx-20 flex flex-wrap justify-center">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Image ${index}`}
                className="w-[20%] m-3"
              />
            ))}
        </div> */}
        <PhotoAlbum
          photos={images}
          layout="rows"
          targetRowHeight={400}
          onClick={({ index }) => setIndex(index)}
          padding={5}
        />
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Video]}
        />
      </div>
    </>
  );
};

export default GalerieV2;
