import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return <>
    <div className='bg-bg-secondary'>
      <Navbar />
      <div className="container my-5 py-5">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-12">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
}
