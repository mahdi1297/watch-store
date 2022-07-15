import { Router } from "@helpers/router";
import { ProductModel } from "@models/product.model";
import { WatchService } from "@services/watch.service";
import { brandsData } from "data/brands";
import { watchesData } from "data/watch";

type Filter = {
  setProductsList: Function;
  minPrice: number;
  maxPrice: number;
  router: any;
};

const _service = new WatchService();
const dataList = watchesData;

// This function recieves search price url prarmeters and return
// Result
export const getPriceFilters = (router: any) => {
  const _router = new Router(router);
  const urlQueris: any = _router.getQueries();

  const queris = {
    minPrice: urlQueris["min-price"] ? parseInt(urlQueris["min-price"]) : 0,
    maxPrice: urlQueris["max-price"]
      ? parseInt(urlQueris["max-price"])
      : 10000000,
  };

  return queris;
};

// This function recieves the url search query parameters and filter
// Product based on it
export const filterProducts = ({
  setProductsList,
  minPrice,
  maxPrice,
  router,
}: Filter) => {
  //
  const _router = new Router(router);
  const urlQueris = _router.getQueries();
  let urlBrandQueries: any = urlQueris.brand;

  // Specifies the result to url brand query search parameter
  // If query was undefined, return all data
  // If query was string, converts it to Array
  if (!urlBrandQueries) {
    urlBrandQueries = brandsData;
  } else if (typeof urlBrandQueries === "string") {
    urlBrandQueries = [urlQueris.brand];
  } else {
    urlBrandQueries = urlQueris.brand;
  }

  const brandFilters = urlBrandQueries;
  let watchesList: ProductModel[] = [];

  // Filters products based on price and brand
  brandFilters.forEach((element: any) => {
    const data = _service
      .configProducts(dataList)
      .filterByBrand(element)
      .filterByPrice(minPrice, maxPrice)
      .build();

    watchesList = watchesList.concat(data);
  });

  setProductsList([]);
  setTimeout(() => {
    setProductsList([...watchesList]);
  }, 250);
};
