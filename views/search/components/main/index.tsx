import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "@shared/card";
import SkeletonLoading from "@shared/loading/skeloton";
import { ProductModel } from "@models/product.model";
import { filterProducts, getPriceFilters } from "./service";

/**
 * This component, recives a list of searches based on Context
 * And gets the watches list
 * 
 * @returns A list of watches based on searchs
 */
const SearchViewList = () => {
  const [productsList, setProductsList] = useState<ProductModel[]>([])

  const router = useRouter();

  useEffect(() => {
    const { minPrice, maxPrice }: any = getPriceFilters(router);

    filterProducts({
      setProductsList,
      minPrice,
      maxPrice,
      router
    });
  }, [router])


  return (
    <div className="list list_inner">
      <div className="search_view-header"></div>
      <div>
        <div className="search_view-wrapper">
          {productsList?.length !== 0 ? productsList?.map((product: ProductModel) => (
            <Card
              key={product.id}
              path={product.slug}
              title={product.title}
              thumbnail={product.main_image}
              price={product.price}
            />
          )) : <SkeletonLoading />}
        </div>
      </div>
    </div>
  );
};

export default SearchViewList;
