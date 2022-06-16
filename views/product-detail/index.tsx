import React from "react";
import ProductDetailBody from "./body";
import ProductDetailHead from "./head";

const ProductDetailView = ({ product }: any) => {
  return (
    <>
      <div className="product__detail-body">
        <ProductDetailHead product={product} />

        <ProductDetailBody features={product.features}/>
      </div>
    </>
  );
};

export default ProductDetailView;
