import { Router } from "@helpers/router";
import { ProductModel } from "@models/product.model";
import { WatchService } from "@services/watch.service";
import { brandsData } from "data/brands";
import { watchesData } from "data/watch";

const _service = new WatchService();
const dataList = watchesData;

export const getPriceFilters = (router: any) => {
  const _router = new Router(router);

  const urlQueris = _router.getQueries();

  const queris = {
    minPrice: urlQueris["min-price"] ? parseInt(urlQueris["min-price"]) : 0,
    maxPrice: urlQueris["max-price"]
      ? parseInt(urlQueris["max-price"])
      : 10000000,
  };

  return queris;
};

type Filter = {
  searchCtx: any;
  setProductsList: Function;
  minPrice: number;
  maxPrice: number;
};

export const filterProducts = ({
  searchCtx,
  setProductsList,
  minPrice,
  maxPrice,
}: Filter) => {
  if (!searchCtx || !searchCtx.filters) {
    return;
  }

  const filters: any = searchCtx?.filters;
  const brandFilters = filters?.brand || brandsData;
  let watchesList: ProductModel[] | any = [];

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
