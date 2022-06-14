import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { getSingleProduct, watchesData } from "data/watch";

const ProductDetailView = dynamic(() => import("@views/product-detail"), {
  suspense: true,
  // @ts-ignore
  loading({ error, isLoading }) {
    if (error) {
      return {
        notFound: true,
      };
    }
    if (isLoading) {
      return <h1>loading...</h1>;
    }
  },
});

const ProductDetail = ({ product }: any) => {
  return (
    <div>
      <ProductDetailView product={product} />
    </div>
  );
};

export const getStaticPaths: any = async () => {
  const items = watchesData;

  return {
    paths: items.map((item: any) => ({ params: { slug: item.slug } })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;

  const product = getSingleProduct(params.slug);

  if (!product) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {
      product: product,
    },
  };
};

export default ProductDetail;
