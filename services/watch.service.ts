import { ProductModel } from "@models/product.model";

/**
 * This class recieves a list of data
 * Then filters by brand and price
 *
 * @returns A filtered list of input data
 */
export class WatchService {
  products: ProductModel[];

  configProducts(productsList: ProductModel[]) {
    this.products = productsList;
    return this;
  }

  filterByBrand(brand: string) {
    this.products = this.products.filter(
      (p: ProductModel) => p.brand === brand
    );
    return this;
  }

  filterByPrice(minPrice: number, maxPrice: number) {
    this.products = this.products.filter(
      (p: ProductModel) => p.price > minPrice && p.price < maxPrice
    );
    return this;
  }

  build() {
    return this.products;
  }
}
