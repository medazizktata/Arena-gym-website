import { useEffect, useState } from "react";

const GalerieImporter = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob(
        "/src/assets/Images/Gallerie/*.{jpg,png,webp}"
      );
      const imagePaths = Object.keys(imageModules);

      const loadedImages = await Promise.all(
        imagePaths.map(async (path) => {
          const module = await imageModules[path]();
          const img = new Image();
          img.src = module.default;
          await img.decode();
          return { src: module.default, width: img.width, height: img.height };
        })
      );

      setImages(loadedImages);
    };

    loadImages();
  }, []);

  return images;
};

export default GalerieImporter;
