import React from "react";
import ProductDetailComments from "./comments";
import ProductDetailFeatures from "./features";
import ProductDetailHead from "./head";
import ProductDetailSliders from "./sliders";

const ProductDetailView = ({ product }: any) => {
  return (
    <>
      <div className="product__detail-body">
        <div className="container">
          <ProductDetailHead product={product} />
          {product && product.features && (
            <ProductDetailFeatures features={product.features} />
          )}
          <ProductDetailSliders />
          <ProductDetailComments />
        </div>
      </div>
    </>
  );
};

export default ProductDetailView;
