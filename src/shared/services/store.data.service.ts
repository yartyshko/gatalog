import { Product } from "../types/Product";

export const storeDataService = {
  fetchProducts(): Promise<Product[]> {
    return fetch("/data/products.json").then((response) => response.json());
  }
};
