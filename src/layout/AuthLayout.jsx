import React from 'react'
import {Outlet} from 'react-router-dom'
const AuthLayout = () => {
  return (
    <>
        
        <main className='container mx-auto md:grid md:grid-cols-2 mt-5 items-center'>
            <Outlet/>
        </main>
    </>
  )
}

export default AuthLayout