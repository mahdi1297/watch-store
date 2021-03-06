/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ProductModel } from "@models/product.model";
import Price from "@views/product-detail/components/price";
import ProductImage from "../components/product-image";
import { PRODUCT_DESCRIPTION, CHOOSE_COLOR, ADD_TO_CARD } from "@consts/static";

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
            <ProductImage
              title={product.title}
              main_image={product.main_image}
              images={product.images}
            />
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
        <button>?????????? ???? ????????</button>
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
