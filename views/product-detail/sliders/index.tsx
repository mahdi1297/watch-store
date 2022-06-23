import SwiperSlider from "@shared/swiper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SwiperSlide } from "swiper/react";

const ProductDetailSliders = () => {
  return (
    <div>
      <div className="related_prodcut-swiper">
        <div>محصولات مشابه</div>
        <SwiperSlider>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/">
              <a>
                <div className="related_prodcut-swiper-items">
                  <div className="header">
                    <div className="thumbnail">
                      <Image
                        alt={"title"}
                        src={"/img/products/sample.png"}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <div className="content">
                    <h3>ICONIC LINK ARCTIC</h3>
                    <div className="price">1200000</div>
                  </div>
                </div>
              </a>
            </Link>
          </SwiperSlide>
        </SwiperSlider>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductDetailSliders;
