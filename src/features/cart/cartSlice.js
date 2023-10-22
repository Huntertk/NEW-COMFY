import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0.1,
  orderTotal: 0,
};

const getItemFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
    name:'cart',
    initialState: getItemFromLocalStorage(),
    reducers:{
        addItem: (state, action) => {
            const {product} = action.payload
            state.cartItems.push(product)
            state.numItemsInCart += product.amount 
            state.cartTotal += product.amount * product.price
            state.tax *= product.amount 
            state.orderTotal += state.cartTotal + state.shipping
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }

})

export const {addItem} = cartSlice.actions

export default cartSlice.reducer