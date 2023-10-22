import React from 'react'
import { useLoaderData } from 'react-router-dom'
import FeaturesProductList from './FeaturesProductList';

const FeaturesProduct = () => {
    const {product} = useLoaderData()
  return (
    <section className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center m-y-4 p-4'>
        {product.data.map((item) => {
           
            return <FeaturesProductList key={item.id} {...item} />
        })}
    </section>
  )
}

export default FeaturesProduct