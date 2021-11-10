import {CartProduct} from "./CartProduct";

export type CartState = {
  items: CartProduct[];
  totalQuantity: number;
  totalPrice: number;
};