import React from 'react'
import image from '../assets/image/swapsangambanner.jpg'
function Banner() {
  return (
   <>
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className=' order-2 md:order-1 w-1/2 mt-10 md:mt-36'>
            <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello! Welcome to <spam className="text-purple-800 leading-normal">SwapSangam</spam></h1>
            <p className='font-semibold'>We welcome you to the exclusive MNNIT mart where you can buy and sell with convenience</p>
            <button className="btn bg-purple-800 hover:bg-purple-800/75">Get Started</button>
            </div>
        </div>
        <div className='order-1 w-1/2 mt-10 md:mt-40 ml-10'>
          <img src={image} className=''></img>
        </div>
    </div>
   </>
  )
}

export default Banner