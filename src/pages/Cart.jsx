import React from 'react'
import { useSelector } from 'react-redux'
import { CartList, OrderTotal } from '../components';

const Cart = () => {
 const state = useSelector(store => store.cart)

  if(state.cartItems.length === 0){
    return <section className='grid place-content-center'>
      <h1 className='text-4xl uppercase'>You have no items in cart</h1>
    </section>
  }
  return (
    <section className='flex items-center justify-around p-4'>
      <div className="flex flex-col gap-8">
      {state.cartItems.map((item) => {
        return <CartList key={item.cardID} {...item} />
      })}
      </div>
      <OrderTotal />
    </section>
  )
}

export default Cart