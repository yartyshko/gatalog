import React from "react";
import classes from "./CatalogItem.module.css";
import {Product} from "../../../shared/types/Product";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../../store/cartActions";

type CatalogItemProps = {
    item: Product;
}

function CatalogItem(props: CatalogItemProps) {
    const {item} = props;
    const dispatch = useDispatch();

    const onAddProductToCart = () => {
      dispatch(addProductToCart(item));
    }

    return (
    <li className={classes.item}>
      <img src={item.imageUrl} alt="#" />
      <h3 className={classes.title}>{item.name}</h3>
      <h4 className={classes.prise}>{item.price}$</h4>
      <button className={classes.button} onClick={onAddProductToCart}>Add to Shopping Bag</button>
    </li>
    );
}


export default CatalogItem;
