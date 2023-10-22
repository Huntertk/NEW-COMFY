import React from 'react'

const CartList = (props) => {
  return (
    <div className='grid grid-cols-2 gap-8 justify-items-start items-center'>
      <img src={props.image} alt="" className='h-40 w-full object-cover rounded-lg' />
      <div className="">
        <h1 className='text-2xl uppercase font-medium'>{props.title}</h1>
        <h2 className=''>{props.company}</h2>
        <p>${props.price / 100}</p>
        <button className="btn-link">Remove</button>
      </div>
    </div>
  )
}

export default CartList