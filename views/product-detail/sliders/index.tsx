import React from "react";
import Image from "next/image";
import Link from "next/link";
import SwiperSlider from "@shared/swiper";
import { SwiperSlide } from "swiper/react";
import { RelatedProducts, relatedProducts } from "./slider.seed";
import { RELATED_PRODUCTS } from "@consts/static";

const sliderBreakPoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  390: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  600: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1000: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1400: {
    slidesPerView: 5,
    spaceBetween: 50,
  }
}

const ProductDetailSliders = () => {
  return (
    <div>
      <div className="related_prodcut-swiper">
        <h3>{RELATED_PRODUCTS}</h3>
        <SwiperSlider breakPoints={sliderBreakPoints}>
          {relatedProducts?.map((pr: RelatedProducts) => (
            <SwiperSlide key={pr.id}>
              <Link href="/">
                <a>
                  <div className="related_prodcut-swiper-items">
                    <div className="header">
                      <div className="thumbnail">
                        <Image
                          alt={"title"}
                          src={pr.path}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>
                    <div className="content">
                      <h3>{pr.title}</h3>
                      <div className="price">{pr.price}</div>
                    </div>
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </SwiperSlider>
      </div>
    </div>
  );
};

export default ProductDetailSliders;
