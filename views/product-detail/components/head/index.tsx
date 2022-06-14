/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageSlider from "@shared/image-slider";

const ProductDetailHead = ({ product }: any) => {
  return (
    <>
      <div className="product_detail-view">
        <main>
          <section className="product_detail-img">
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <img src={product.main_image} />

            <ImageSlider images={product.images} />
          </section>
          <section className="product_detail-meta">
            <div className="product-title">
              <h1>ICONIC LINK AUTOMATIC</h1>
              <p>12،000،000 تومان</p>
            </div>
            <div className="description">
              <p>توضیحات محصول</p>
              <div>
                Iconic Link Automatic پیشرفته ترین ساعت ما تا به امروز است.
                دارای یک حرکت خود پیچشی که با حرکت مچ دست شما نیرو می گیرد
              </div>
            </div>
            <div>
              <p className="choose-color">انتخاب رنگ</p>
            </div>
            <div className="product-colors">
              <ul>
                <li style={{ background: "#874249" }}></li>
                <li style={{ background: "#CCC4C3" }}></li>
                <li style={{ background: "#39282D" }}></li>
              </ul>
            </div>

            <div className="product-features">
              <ul>
                <li>
                  <div>ساخت</div>
                  <div>ژاپن</div>
                </li>
                <li>
                  <div>جنس</div>
                  <div>استیل</div>
                </li>
                <li>
                  <div>گارانتی</div>
                  <div>2 سال</div>
                </li>
              </ul>
            </div>

            <button className="add-to-card">اضافه به کارت</button>
          </section>
        </main>
      </div>
      <div className="add-to-card-sm">
        <button>اضافه به کارت</button>
        <p>{product.price}</p>
      </div>
    </>
  );
};

export default ProductDetailHead;
