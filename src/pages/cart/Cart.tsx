import React, {useState} from 'react';
import CartProducts from "./CartProducts";
import {CartProduct} from "../../shared/types/CartProduct";
import {checkoutCart, clearCart} from "../../store/cartActions";
import {useDispatch, useSelector} from "react-redux";
import classes from "./Cart.module.css";
import {CartState, } from "../../shared/types/CartState";

function Cart() {
    const dispatch = useDispatch();

    const {totalQuantity, totalPrice, items} = useSelector((state: CartState) => state);

    const onClearCart = () => {
        dispatch(clearCart());
    };
    const onCheckoutCart = () => {
      dispatch(checkoutCart());
    };

    return (
        <div >
            <h1>Cart</h1>
            <div className={classes.wrap_cart}>
                <div>
                    {
                        totalQuantity > 0 ?
                            <CartProducts items={items}/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                    }
                </div>
                {
                    totalQuantity > 0 &&
                        <div className={classes.cart_total}>
                            <dl>
                                <dt>Total Items:</dt>
                                <dd>{totalQuantity}</dd>
                            </dl>
                            <dl>
                                <dt>Total Price:</dt>
                                <dd>{totalPrice}</dd>
                            </dl>
                            <hr/>
                            <div className={classes.cart_total_buttons}>
                                <button type="button" className={classes.cart_total_button} onClick={onClearCart}>CLEAR</button>
                                <button type="button" className={classes.cart_total_button} onClick={onCheckoutCart}>BUY</button>
                            </div>
                        </div>
                }

            </div>
        </div>
    );
}

export default Cart;