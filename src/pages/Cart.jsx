import React from 'react'
import { useSelector } from 'react-redux'
import { CartList } from '../components';

const Cart = () => {
  const state = useSelector(store => store.cart)
  console.log(state);
  return (
    <section className='grid md:grid-cols-[1.2fr_0.8fr] justify-items-center mt-14'>
      <div className="flex flex-col gap-8">

      {state.cartItems.map((item) => {
        return <CartList key={item.cardID} {...item} />
      })}
      </div>
      <div className="grid place-content-center gap-2">
        <h1>Order Summary</h1>
        <p>Total : ${state.cartTotal / 100}</p>
        <p>Shipping : ${state.shipping / 100}</p>
        <p>Order Total : ${state.orderTotal / 100}</p>
        <button className='btn btn-primary'>Proceed to Checkout</button>
      </div>
    </section>
  )
}

export default Cart