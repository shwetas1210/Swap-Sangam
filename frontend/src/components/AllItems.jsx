import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useEffect } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'
import Cards from './Cards'
function AllItems() {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    const getProduct=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/product")
      console.log(res.data)
      setProduct(res.data)
    }catch(error){
      console.log(error)
    }
    }
    getProduct();
  },[])

  return (
    <>
      <div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className=' items-center justify-center text-center'>
          <div className='mt-6'>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1 className='text-2xl  md:text-4xl'>Holla <span className='text-purple-700'>guys! </span></h1>
          <p className='mt-8'>
          Below are all the items available for purchase, we hope you find what you are looking for. <span className='text-purple-700'>Keep shopping!</span>
          </p>
          <Link to ="/">
          <button className='bg-purple-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-700 duration-200'>Back</button>
          </Link>
          </div>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
          {product.map((item)=>(
            <Cards item={item} key={item.id}/>
          ))}
           
        </div>
      </div>
      </div>
    </>
  )
}


export default AllItems