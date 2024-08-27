import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import { useAuth } from './context/AuthProvider';
import Contactpage from './Contactus/Contactpage'
import Aboutpage from './Aboutus/Aboutpage'
import Homepage from './Home/Homepage'
import Signup from './components/Signup';
import All from './Allitems/All';
import { Toaster } from 'react-hot-toast';
// import NewProductadd from './Newproduct/NewProductadd'
// import Newproduct from './components/Newproduct'
import AddProduct from './components/Newproduct';
function App() {
  const [authUser, setAuthUser] = useAuth(); //context-provides to pass data without passing props manually
  return (
    
     <div className="dark:bg-slate-900 dark:text-white">
     <Routes>
     <Route path="/" element={<Homepage />} /> 
     {/* <Route path="/allitems" element={<All/>}/> */}
     <Route path="/contact" element={<Contactpage/>}/>
     <Route path="/about" element={<Aboutpage/>}/>
     <Route path="/allitems" element={authUser ? <All/> : <Navigate to="/signup" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/addproduct" element={authUser ? <AddProduct authUser={authUser} /> : <Navigate to="/signup" />} />
      
     </Routes> 
     <Toaster /> 
     </div>
    //toaster is written above closing div tag (guildlines from documentation) used to show simple or complex messages to user
    //route path provides a path to the written page 
  )
}

export default App