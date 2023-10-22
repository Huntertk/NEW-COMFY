import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    console.log(error);
    if(error.status === 404) {
      return <div className='h-screen flex-col flex items-center justify-center text-center p-6 gap-6'>
        <h1 className='text-5xl'>Oops! 404 the page you find not exist </h1>
        <Link to="/" className='btn btn-secondary'>Go Back</Link>
      </div>
    }
  return (
    <div className='h-screen flex items-center justify-center text-center p-6'>
        <h1 className='text-5xl'>Something went wrong</h1>
        
      </div>
  )
}

export default Error