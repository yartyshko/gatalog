import { createStore } from 'redux';
import cardReducers from "./cardReducers";
import {getState, setState} from "./localStoreg";
import {CartState} from "../shared/types/CartState";

const preloadedState: CartState = getState('cart');

const store = createStore(cardReducers, preloadedState);

store.subscribe(() => {
    setState('cart', store.getState())
})

export default store;