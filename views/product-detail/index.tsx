import React from "react";
import ProductDetailComments from "./comments";
import ProductDetailFeatures from "./features";
import ProductDetailHead from "./head";
import ProductDetailSliders from "./sliders";

const ProductDetailView = ({ product }: any) => {
  return (
    <>
      <div className="product__detail-body">
        <ProductDetailHead product={product} />
        <ProductDetailFeatures features={product.features} />
        <ProductDetailSliders />
        <ProductDetailComments />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default ProductDetailView;
