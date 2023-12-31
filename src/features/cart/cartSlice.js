import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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
            toast.success("Item Added to the cart")
            localStorage.setItem('cart', JSON.stringify(state)) 
        },
        clearCart : (state) => {
             localStorage.setItem('cart', JSON.stringify(defaultState))
            return defaultState
        },
        removeItem: (state, action) => {
            const {product} = action.payload

            const newFilterItem  = state.cartItems.filter(i => i.cardID !== product.cardID)
            state.cartItems = newFilterItem
            state.numItemsInCart -= product.amount 
            state.cartTotal -= product.amount * product.price
            state.orderTotal = state.cartTotal + state.shipping
            toast.warn("Item removed to the cart")
            localStorage.setItem('cart', JSON.stringify(state)) 
        }
    }

})

export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer