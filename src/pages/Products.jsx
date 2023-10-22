import React from 'react'
import { customFetch } from '../utils'
import { useLoaderData } from 'react-router-dom'
import FeaturesProductList from '../components/FeaturesProductList'

export const loader = async () => {
  const res = await customFetch('/products')
  return {products: res.data.data}
}

const Products = () => {
  const {products} = useLoaderData()
  console.log(products);
  return (
     <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center m-y-4 p-4'>
        {products.map((item) => {
           
            return <FeaturesProductList key={item.id} {...item} />
        })}
    </section>
  )
}

export default Products