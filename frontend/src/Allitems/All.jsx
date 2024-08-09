import React from 'react'
import Navbar from '../components/Navbar'
import AllItems from '../components/AllItems'
import Footer from '../components/Footer'

function All() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <AllItems/>
        </div>
        <Footer/>
    </>
  )
}

export default All