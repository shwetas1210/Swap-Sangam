import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'

import Homepage from './Home/Homepage'
import All from './Allitems/All';
function App() {
  return (
    
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
     <Route path="/" element={<Homepage />} />
     <Route path="/allitems" element={<All/>}/>
     </Routes>
   
     </div>
    
  )
}

export default App