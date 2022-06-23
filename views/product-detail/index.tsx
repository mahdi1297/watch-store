import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const ProductDetailHead = dynamic(() => import("./head"), {
  ssr: true,
  suspense: true,
});

const ProductDetailFeatures = dynamic(() => import("./features"), {
  ssr: true,
  suspense: true,
});

const ProductDetailSliders = dynamic(() => import("./sliders"), {
  ssr: true,
  suspense: true,
});

const ProductDetailView = ({ product }: any) => {
  return (
    <>
      <div className="product__detail-body">
        <Suspense fallback={<h1>Loading...</h1>}>
          <ProductDetailHead product={product} />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ProductDetailFeatures features={product.features} />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ProductDetailSliders />
        </Suspense>
      </div>
    </>
  );
};

export default ProductDetailView;
