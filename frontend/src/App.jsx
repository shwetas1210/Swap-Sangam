import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Contactpage from './Contactus/Contactpage'
import Aboutpage from './Aboutus/Aboutpage'
import Homepage from './Home/Homepage'
import Signup from './components/Signup';
import All from './Allitems/All';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/allitems" element={<All/>}/>
     <Route path="/contact" element={<Contactpage/>}/>
     <Route path="/about" element={<Contactpage/>}/>
     <Route path="/signup" element={<Signup/>}/>
     </Routes>
     <Toaster />
     </div>
    
  )
}

export default App