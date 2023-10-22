import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
    const error = useRouteError()
    console.log(error);
  return (
    <div className='flex items-center justify-center'>
        <h1 className="text-4xl">Something Went Wrong...</h1>
    </div>
  )
}

export default ErrorElement