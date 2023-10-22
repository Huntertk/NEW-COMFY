import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesProductList = ({id, attributes}) => {
     const {company, description, image, price, title} = attributes
  return (
    <Link to={`/products/${id}`} className='mt-24'>
        <div className="card w-full bg-base-300 shadow-xl">
  <figure><img src={image} alt={title} className='h-72 w-full object-cover' /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">
      {title}
      <div className="badge badge-secondary">Featured</div>
    </h2>
    <p className='tracking-wide leading-8'>{description.substring(0,200)}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{company}</div> 
      <div className="badge badge-outline">${price / 100}</div>
    </div>
  </div>
</div>
    </Link>
  )
}

export default FeaturesProductList