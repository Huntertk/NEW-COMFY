import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import { FeaturesProduct, Hero } from '../components'
const url = "/products?featured=true"

export const loader = async () => {
    const res = await customFetch.get(url)
    return {product: res.data}
}

const Landing = () => {
    const {product} = useLoaderData()
  return (
    <>
        <Hero />
        <FeaturesProduct />
    </>
  )
}

export default Landing