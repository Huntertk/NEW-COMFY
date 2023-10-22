import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='grid md:grid-cols-2 items-center justify-items-center'>
      <div className="p-4">
        <h1 className='text-4xl font-bold my-4'>We are changing the way people shop</h1>
        <p className='text-lg leading-7 tracking-wide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ad deleniti quidem doloremque, quaerat ipsam reprehenderit placeat quis quos iure? Molestiae sequi tempore perferendis aperiam incidunt voluptatibus, debitis laudantium quis.</p>
        <Link to="/products" className="mt-4 btn btn-primary">Our Product </Link>
      </div>
        <div className="hidden md:block">
          <Carousel />
        </div>
    </section>
  )
}

export default Hero