/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageSlider = ({ images }: any) => {
  return (
    <div className="image_slider-body">
      <ul>
        {images &&
          images.map((s: any, l: any) => (
            <li key={l}>
              <img src={s} alt="" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageSlider;
