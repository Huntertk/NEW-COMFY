import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const BigNavbar = () => {
  const state = useSelector(store => store.cart)
  return (
    <div className="navbar bg-base-100 hidden md:flex">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl">PEPPERFRY</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li className='font-medium text-base'><NavLink to="/">Home</NavLink></li>
      <li className='font-medium text-base'><NavLink to="/products">Products</NavLink></li>
      <li className='font-medium text-base'><NavLink to="/cart">Cart</NavLink></li>
      <li className='font-medium text-base'><NavLink to="/contact">Contact</NavLink></li>
       <Link to="/cart">

        <label className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{state.numItemsInCart}</span>
        </div>
      </label>
    </Link>
    </ul>
  </div>
</div>
  )
}

export default BigNavbar