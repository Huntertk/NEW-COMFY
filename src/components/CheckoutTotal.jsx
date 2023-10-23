import React from 'react'
import { useSelector } from 'react-redux'

const CheckoutTotal = () => {
     const state = useSelector(store => store.cart)
  return (
    <div className="self-start grid place-content-center gap-4 bg-secondary-content p-6 rounded-lg">
        <h1 className='font-bold tracking-wider text-lg'>Order Summary</h1>
        <p>Total : ${state.cartTotal / 100}</p>
        <p>Shipping : ${state.shipping / 100}</p>
        <p>Order Total : ${(state.orderTotal / 100).toFixed(2)}</p>
      </div>
  )
}

export default CheckoutTotal