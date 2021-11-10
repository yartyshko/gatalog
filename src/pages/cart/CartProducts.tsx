import React from "react";
import {CartProduct} from "../../shared/types/CartProduct";
import CartItem from "./CartItem";

type CartProductsProps = {
    items: CartProduct[];
}

function CartProducts(props: CartProductsProps) {
    const {items} = props
    return (
        <div>
            {
                items.map(product => <CartItem key={product.id} product={product}/>)
            }
        </div>
    );
}

export default CartProducts;
