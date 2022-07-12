import React, { useState, createContext, FC, useCallback } from "react";

type Props = {
  children: React.ReactNode;
};

export const SearchContext = createContext({
  products: [],
  filters: [],
  brandFilterOperator: function (brand: any) { },
  priceFilterOperator: function (price: any) { },
  productsOperator: function (products: any) { },
});

const SearchContextProvider: FC<Props> = ({ children }) => {
  const [filters, setFilters] = useState<any>();
  const [products, setProducts] = useState();

  //
  const brandFilterOperatorHandler = (brand: any) => {
    setFilters({
      ...filters,
      brand: brand
    });
  }

  const priceFilterOperatorHandler = (price: any) => {
    setFilters({
      ...filters,
      price
    });
  }


  const productsOperatorHandler = (product: any) => {
    setProducts(product);
  }



  //

  const store: any = {
    products: products,
    filters: filters,
    brandFilterOperator: brandFilterOperatorHandler,
    priceFilterOperator: priceFilterOperatorHandler,
    productsOperator: productsOperatorHandler,
  };

  return (
    <>
      <SearchContext.Provider value={store}>{children}</SearchContext.Provider>
    </>
  );
};

export default SearchContextProvider;
