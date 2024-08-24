import React from 'react'
import list from '../assets/list.json'
import Cards from '../components/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { useState,useEffect } from 'react';

function StandardItems(authUser) {
  const [product,setProduct]=useState([])
  useEffect(()=>{
    const getProduct=async()=>{
    try{
      const res=await axios.get("http://localhost:4001/product")
      console.log(res.data.filter((data)=>data.category=="Standard"))
      const data=res.data.filter((data)=>data.category=="Standard")
      setProduct(data)
    }catch(error){
      console.log(error)
    }
    }
    getProduct();
  },[])
    var settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 2,
    };
  return (
    <div className='ml-20'>
      <h1 className='text-purple-800 font-semibold'>Standard products :</h1>
      <p>These are some of the products offered by us.
      <br/>
      <spam className='text-purple-800 font-semibold'>Note:</spam> Inorder to access the premium books, please <spam className='text-purple-800 font-semibold'>login</spam>
      </p>
      <div className='mt-10 w-11/12'>
      <Slider {...settings}>
     {product.map((item)=>(
      <Cards item={item} key={item.id}/>
     ))}
    </Slider>
    </div>
    </div>
  )
}

export default StandardItems