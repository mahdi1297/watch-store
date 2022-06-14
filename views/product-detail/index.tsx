import React from "react";
import ProductDetailHead from "./components/head";

const ProductDetailView = ({ product }: any) => {
  return (
    <>
      <div className="product__detail-body">
        <ProductDetailHead product={product} />
      </div>
    </>
  );
};

export default ProductDetailView;
