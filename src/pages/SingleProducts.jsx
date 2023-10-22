import React, { useState } from 'react'
import { customFetch } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const loader = async (data) => {
    const {id} = data.params
    const res = await customFetch(`/products/${id}`)
    return {product: res.data}
} 

const SingleProducts = () => {
    const data = useLoaderData()
    const dispatch = useDispatch()
    const {company, description, image, price, title} = data.product.data.attributes

    const [productAmount, setProductAmount] = useState(1)


    const cartProduct = {
      cardID: data.product.data.id,
      image, 
      company,
      price, 
      title,
      amount: parseInt(productAmount)
    }
  return (
    <>
    <div className="text-sm breadcrumbs">
  <ul>
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/products">Products</Link> </li>
    <li className='uppercase'>{title}</li>
  </ul>
</div>
    <section className='p-2 grid md:grid-cols-2 mt-8 gap-8 items-center justify-items-center'>

        
        <img src={image} alt="" className='h-96 w-full object-cover rounded-xl' />
        <div className="flex flex-col gap-3 items-start">
            <h1 className='text-4xl uppercase font-bold'>{title}</h1>
            <p>{description}</p>
            <p className='font-bold uppercase'>company: {company}</p>
            <p className='uppercase'>price: <span className='font-bold text-lg'>${price / 100}</span></p>
           {/* <select className="select select-accent w-full max-w-xs" value={productAmount} onChange={(e) => setProductAmount(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select> */}
            <button className="btn btn-primary mt-2" onClick={() => dispatch(addItem({product: cartProduct}))}>Add Cart</button>
        </div>
    </section>
    </>
  )
}

export default SingleProducts