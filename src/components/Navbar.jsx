import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SmallNavbar from './SmallNavbar'
import BigNavbar from './BigNavbar'

const Navbar = () => {
  return (
    <header className='bg-neutral-focus p-4'>
        <nav className='max-w-7xl mx-auto'>
            {/*Big Navbar */}
            <BigNavbar />

            {/*Small Navbar */}
            <SmallNavbar />
        </nav>
    </header>
  )
}

export default Navbar