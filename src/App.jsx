import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Cart, Checkout, HomeLayout, Landing, Products, SingleProducts } from './pages/index'
import { Error, ErrorElement } from './components/index'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProducts'
import { loader as productLoader } from './pages/Products'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children:[
      {
        index:true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />
      },
      {
        path:"products",
        element: <Products />,
        loader: productLoader,
        errorElement: <ErrorElement />
      },
      {
        path:"products/:id",
        element: <SingleProducts />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      },
      {
        path:"cart",
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path:"checkout",
        element: <Checkout />,
        errorElement: <ErrorElement />
      }
    ]
  }
])

const App = () => {
  return (
     <>
      <RouterProvider router={router} />
     </>
  )
}

export default App