import React from "react";
import dynamic from "next/dynamic";
import { GetStaticProps } from "next";
import { getSingleProduct, watchesData } from "data/watch";
import { useRouter } from "next/router";
import { MainLayout } from "layout/main";

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
    revalidate: 21600,
  };
};

const ProductDetail = ({ product }: any) => {
  const router = useRouter();

  if (!product) {
    return <p>Loading...</p>;
  }

  return router.isFallback ? (
    <h1>Loading...</h1>
  ) : (
    <MainLayout>
      {product && <ProductDetailView product={product && product} />}
    </MainLayout>
  );
};

export default ProductDetail;
