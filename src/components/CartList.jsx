import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'

const CartList = (props) => {
  const dispatch = useDispatch()

  return (
    <div className='grid grid-cols-2 gap-4 justify-items-start items-center'>
      <img src={props.image} alt="" className='h-64 w-full object-cover rounded-lg' />
      <div className="">
        <h1 className='text-2xl uppercase font-medium w-full'>{props.title}</h1>
        <h2 className=''>{props.company}</h2>
        <p>${props.price / 100} x {props.amount}</p>
        <button className="btn-link" onClick={() => dispatch(removeItem({product: props}))}>Remove</button>
      </div>
    </div>
  )
}

export default CartList