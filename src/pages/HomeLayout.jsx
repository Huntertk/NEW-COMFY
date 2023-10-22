import React from 'react'
import { Navbar } from '../components/index'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from '../components/Loading'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
    <Navbar />

    <section className='max-w-7xl mx-auto px-2 md:p-0'>
      {
        isPageLoading ? <Loading /> : <Outlet />
      }
        
    </section>
    </>
  )
}

export default HomeLayout