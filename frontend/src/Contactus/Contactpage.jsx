import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/mailto'
// renders: vimeo icon

function Contactpage() {
  return (
    <>
    <Navbar/>
    <div className='h-screen justify-center items-center'>
      <br />
      <br />
      <br />
      <h1  className='font-bold text-xl ml-5 mt-3'>Get in touch</h1>
      <p className='font-semibold ml-5'>Want to get in touch? We'd love to hear from you.</p>
      <p className='ml-5'>Here's how you can reach us:</p>
      <br />
      <div className='flex'>
      <div className="card ml-5 mb-5 w-100 bg-slate-700  left-5 shadow-xl left-12">
  <div className="card-body">
    <h2 className="card-title">Official mails</h2>
    <div className='flex'>
     
    <a href="mailto:shweta.sing66@gmail.com" class="text-purple-500 hover:underline" >
    <SocialIcon url="https://www.mailto.com" style={{ height: 20, width: 20,}}/>
    <span className='ml-1'></span>
    shweta.sing66@gmail.com
  </a>
  </div>
  
  <a href="mailto:shwetasingh1545@gmail.com" class="text-purple-500 hover:underline">
  <SocialIcon url="https://www.mailto.com" style={{ height: 20, width: 20,}}/> 
  <span className='ml-1'></span>
    shwetasingh1545@gmail.com
  </a>

    
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card ml-5 bg-slate-700 w-100  shadow-xl absolute right-20 h-100 ">
  <div className="card-body">
    <h2 className="card-title">Social media handles</h2>
    <a href="https://www.instagram.com/shwetaa_1210?igsh=MWhxbm5jZmZxdnFuOQ==" class="text-purple-500 hover:underline ">
    <SocialIcon url="https://www.instagram.com" style={{ height: 20, width: 20,}}/> 

    <span className='ml-1'>Instagram</span>
  </a>
  <a href="https://www.linkedin.com/in/shweta-sing" class="text-purple-500 hover:underline ">
  <SocialIcon url="https://www.linkedin.com" style={{ height: 20, width: 20,}}/> 
  <spam className='ml-1'>LinkedIn</spam>
 </a>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

  </div>
<br />
    <Footer/>
    </>
  )
}

export default Contactpage