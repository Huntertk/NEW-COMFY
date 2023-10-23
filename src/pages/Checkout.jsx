import React from 'react'
import { CheckoutForm, CheckoutTotal } from '../components'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'

const Checkout = () => {
    const state = useSelector(store => store.cart)
    if(state.cartItems.length === 0){
        return <Navigate to ="/" /> 
    }
  return (
    <section className='grid md:grid-cols-2 items-center justify-items-center mt-4 gap-4'>
        <CheckoutTotal />
        <CheckoutForm />
    </section>
  )
}

export default Checkout