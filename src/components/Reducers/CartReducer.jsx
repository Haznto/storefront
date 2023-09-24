import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export let initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.cart.push(action.payload)
        },
        remove(state, action) {
            state.cart = state.cart.filter(element => element.name !== action.payload.name);
        }
    }
})

// export function cartReducer(state = initialState, action) {
//     switch (action.type) {

//         case 'ADD-TO-CART': {
//             if (!state.cart.includes(action.payload)) {

//                 return { ...state, cart: [...state.cart, action.payload] }
//             }
//             return state
//         }
//         case 'REMOVE-FROM-CART': {
//             return { ...state, cart: state.cart.filter(element => element.name !== action.payload.name) }
//         }
//         default: return state
//     }
// }
const { add, remove } = cartSlice.actions

export const addToCart = (product) => async dispatch => {
    let updatedProduct = { inStock: product.inStock - 1 };
    let url = `https://api-js401.herokuapp.com/api/v1/products/${product._id}`;
    let results = await axios.put(url, updatedProduct)
    let record = results.data;
    dispatch(add(record));
};

export const removeFromCart = (product) => async dispatch => {
    let updatedProduct = { inStock: product.inStock + 1 };
    let url = `https://api-js401.herokuapp.com/api/v1/products/${product._id}`;
    let results = await axios.put(url, updatedProduct)
    let record = results.data
    dispatch(remove(record));
};

// export const add = (payload) => {
//     return {
//         type: 'ADD-TO-CART',
//         payload: payload
//     }
// }
// export const remove = (payload) => {
//     return {
//         type: 'REMOVE-FROM-CART',
//         payload: payload
//     }
// }

export default cartSlice.reducer

