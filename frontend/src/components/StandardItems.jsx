import React from 'react'
import list from '../assets/list.json'
import Cards from '../components/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function StandardItems() {
    const filterData=list.filter((data)=>data.category=="Standard");
    console.log(filterData)
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
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
     {filterData.map((item)=>(
      <Cards item={item} key={item.id}/>
     ))}
    </Slider>
    </div>
    </div>
  )
}

export default StandardItems