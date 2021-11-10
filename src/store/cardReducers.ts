import {CartState} from "../shared/types/CartState";

type CartAction = {
    type: string;
    payload?: any;
};

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

function cartReducers(state: CartState = initialState, action: CartAction) {
    let newItems
    switch (action.type) {
        case 'ADD_ITEM':
            newItems = [...state.items];
            const cardProduct = newItems.find(item => item.id === action.payload.id);

            if (cardProduct) {
                cardProduct.quantity += 1;
            } else {
                newItems.push({...action.payload, quantity: 1 });
            }
            return {
                totalPrice: state.totalPrice + action.payload.price,
                totalQuantity: state.totalQuantity + 1,
                items: newItems
            };

        case 'CLEAR_CART':
            return {items: [], totalPrice: 0, totalQuantity: 0};
        case 'REMOVE_ITEM':
            newItems = [...state.items];
            const indexToRemove = newItems.findIndex(item => item.id === action.payload);
            if(indexToRemove < 0){
                return state;
            }
            const [productToRemote] = newItems.splice(indexToRemove, 1);
            return {
                totalPrice: state.totalPrice - productToRemote.price * productToRemote.quantity,
                totalQuantity: state.totalQuantity - productToRemote.quantity,
                items: newItems
            };
        case 'PLUS_ITEM':
            newItems = [...state.items];
            const productToUpdate = newItems.find(item => item.id === action.payload);
            if(!productToUpdate){
                return state;
            }
            productToUpdate.quantity += 1;

            return {
                totalPrice: state.totalPrice + productToUpdate.price,
                totalQuantity: state.totalQuantity + 1,
                items: newItems
            };
        case 'MINUS_ITEM':
            newItems = [...state.items];
            const productToMinus = newItems.find(item => item.id === action.payload);
            if(!productToMinus){
                return state;
            }
            productToMinus.quantity -= 1;

            return {
                totalPrice: state.totalPrice - productToMinus.price,
                totalQuantity: state.totalQuantity - 1,
                items: newItems
            };
        case 'CHECKOUT_CART':
            console.log('checkout cart', state);
            return {items: [], totalPrice: 0, totalQuantity: 0};
        default:
            return state;
    }
}

export default cartReducers;