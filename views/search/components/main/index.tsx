import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "@stores/search.store";
import { watchesData } from "data/watch";
import { ProductModel } from "@models/product.model";
import Card from "@shared/card";


const SearchViewList = () => {
  const [productsList, setProductsList] = useState<ProductModel[]>([])
  const searchCtx = useContext(SearchContext);

  useEffect(() => {
    const filters: any = searchCtx?.filters;

    if (filters && filters.brand && filters.brand.length !== 0) {

      let watchesList: ProductModel[] | any = [];

      if (Array.isArray(filters.brand) && filters.brand.length !== 0) {
        filters.brand.forEach((element: any) => {
          let watches = watchesData.filter((s: any) => s.brand === element)
          watchesList = watchesList.concat(watches)
        });
      }

      setProductsList([...watchesList])
    }


  }, [searchCtx])

  return (
    <div className="list list_inner">
      <div className="header"></div>
      <div>
        {productsList?.length !== 0 && productsList?.map((product: ProductModel) => (
          <div key={product.id}>
            <Card
              path={product.slug}
              title={product.title}
              thumbnail={product.main_image}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchViewList;
