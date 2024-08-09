import React from 'react'
import Navbar from './Navbar'
import list from '../assets/list.json'
import { Link } from 'react-router-dom'
import Cards from './Cards'
function AllItems() {
    console.log(list)
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
          <h1 className='text-2xl  md:text-4xl'>Holla <span className='text-purple-800'>guys! :)</span></h1>
          <p className='mt-8'>
            Below are all the items available for purchase, we hope you find what you are looking for. <span className='text-purple-800'>Keep shopping! </span>
          </p>
          <Link to ="/">
          <button className='bg-purple-800 text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-800 duration-200'>Back</button>
          </Link>
          </div>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 px-2 py-2'>
          {list.map((item)=>(
            <Cards key ={item.id} item={item}/>
          ))}
           
        </div>
      </div>
      </div>
   </>
  )
}

export default AllItems