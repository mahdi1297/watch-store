import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  main_image: string;
  title: string;
  images: string[];
};

const ProductImage: React.FC<Props> = ({ main_image, title, images }) => {
  const [selectedImage, setSelectedImage] = useState<string | any>();

  useEffect(() => {
    setSelectedImage(main_image);
    if (!images.find((s) => s === main_image)) {
      images.unshift(main_image);
    }
  }, [main_image, images]);

  const setImageHandler = (path: string) => {
    setSelectedImage(path);
  };

  return (
    <>
      {selectedImage && (
        <div
          className="main-slider-wrapper"
          style={{
            width: "100%",
            height: "380px",
            position: "relative",
          }}
        >
          <Image
            alt={title}
            src={selectedImage}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}
      <div className="image_slider-body">
        <ul>
          {images &&
            images.map((s: any, l: any) => (
              <li key={l}>
                <div
                  className="image_slider-wrapper"
                  style={{
                    opacity: selectedImage === s ? "1" : "50%",
                  }}
                >
                  <Image
                    alt={title}
                    src={s}
                    layout="fill"
                    objectFit="contain"
                    onClick={() => setImageHandler(s)}
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductImage;
