/* eslint-disable @next/next/no-img-element */

import React from "react";
import ImageSlider from "@shared/image-slider";
import {
  PRODUCT_DESCRIPTION,
  CHOOSE_COLOR,
  ADD_TO_CARD,
  MATERIAL,
  WARANTY,
  MADE,
} from "@consts/static";
import { ProductModel } from "@models/product.model";
import Price from "@components/price";

type Props = {
  product: ProductModel;
};

const ProductDetailHead: React.FC<Props> = ({ product }) => {
  return (
    <>
      <div className="product_detail-view">
        <main>
          <section className="product_detail-img">
            <h1>{product.title}</h1>
            <div className="top-price">
              <Price
                price={product.price}
                hasSale={product.hasSale}
                salePercent={product.salePercent}
                saledPrice={product.saledPrice}
                specificClass={product.hasSale !== true ? "center-at-sm" : ""}
              />
            </div>
            <img src={product.main_image} alt={product.title} />
            <ImageSlider images={product.images} />
          </section>

          <section className="product_detail-meta">
            <div className="product-title">
              <h1>{product.title}</h1>
              <Price
                price={product.price}
                hasSale={product.hasSale}
                salePercent={product.salePercent}
                saledPrice={product.saledPrice}
              />
            </div>

            <div className="description">
              <p>{PRODUCT_DESCRIPTION}</p>
              <div>{product.description}</div>
            </div>

            <div className="product-features">
              <ul>
                <li>
                  <div>{MADE}</div>
                  <div>{product.country}</div>
                </li>
                <li>
                  <div>{MATERIAL}</div>
                  <div>{product.material}</div>
                </li>
                <li>
                  <div>{WARANTY}</div>
                  <div>{product.waranty}</div>
                </li>
              </ul>
            </div>

            <p className="choose-color">{CHOOSE_COLOR}</p>

            <div className="product-colors">
              <ul>
                {product?.colors?.map((color: string, l: number) => (
                  <li key={l} style={{ background: color }}></li>
                ))}
              </ul>
            </div>

            <button className="add-to-card">{ADD_TO_CARD}</button>
          </section>
        </main>
      </div>

      <div className="add-to-card-sm">
        <button>اضافه به کارت</button>
        <Price
          price={product.price}
          hasSale={product.hasSale}
          salePercent={product.salePercent}
          saledPrice={product.saledPrice}
        />
      </div>
    </>
  );
};

export default ProductDetailHead;
