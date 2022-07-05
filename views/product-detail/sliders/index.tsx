import React from "react";
import Image from "next/image";
import Link from "next/link";
import SwiperSlider from "@shared/swiper";
import { SwiperSlide } from "swiper/react";
import { RelatedProducts, relatedProducts } from "./slider.seed";
import { RELATED_PRODUCTS } from "@consts/static";

const ProductDetailSliders = () => {
  return (
    <div>
      <div className="related_prodcut-swiper">
        <h3>{RELATED_PRODUCTS}</h3>
        <SwiperSlider>
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
