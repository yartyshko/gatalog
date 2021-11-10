import {Product} from "../shared/types/Product";

export const addProductToCart = (product: Product) => ({
    type: 'ADD_ITEM',
    payload: product,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeProduct = (id: string) => ({
    type: 'REMOVE_ITEM',
    payload: id,
});

export const plusProduct = (id: string) => ({
    type: 'PLUS_ITEM',
    payload: id,
});

export const minusProduct = (id: string) => ({
    type: 'MINUS_ITEM',
    payload: id,
});
export const checkoutCart = () => ({
    type: 'CHECKOUT_CART',
})