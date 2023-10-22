import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
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
            const item = state.cartItems.find(i => i.cardID === product.cardID)
            if(item){
                item.amount += product.amount
            } else{
                state.cartItems.push(product)
            }

            state.numItemsInCart += product.amount 
            state.cartTotal += product.amount * product.price
            state.orderTotal = state.cartTotal + state.shipping
            localStorage.setItem('cart', JSON.stringify(state)) 
        },
        removeItem: (state, action) => {
            const {product} = action.payload

            const newFilterItem  = state.cartItems.filter(i => i.cardID !== product.cardID)
            state.cartItems = newFilterItem
            state.numItemsInCart -= product.amount 
            state.cartTotal -= product.amount * product.price
            state.orderTotal = state.cartTotal + state.shipping
            localStorage.setItem('cart', JSON.stringify(state)) 
        }
    }

})

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer