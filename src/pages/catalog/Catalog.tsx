import React, { useEffect, useState } from "react";
import classes from "./Catalog.module.css";
import CatalogItem from "./catalogItem/CatalogItem";
import { storeDataService } from "../../shared/services/store.data.service";
import { Product } from "../../shared/types/Product";

function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    storeDataService.fetchProducts().then((items) => {
      setProducts(items);
    });
  }, [products]);

  return (
    <ul className={classes.list}>
      {products.map((item) => {
        return <CatalogItem item={item} key={item.id} />;
      })}
    </ul>
  );
}

export default Catalog;
