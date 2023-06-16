import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';
import { navbarContext } from './contexts/navbarContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components';
import { Footer } from './containers';
import { Home, Book, Picnics, Parties, BeachSupplies } from './pages';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  // const location = useLocation();

  const [activeLink, setActiveLink] = useState('home');

  return (
    <>
      <div className="App">
      <navbarContext.Provider value={({activeLink, setActiveLink})}>
        <ToastContainer position ="bottom-center" limit={1}/>
        <NavBar/>      
        {/* <AnimatePresence mode="wait"> */}
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home/>}/>  
            <Route path="/parties" element={<Parties/>}/>  
            <Route path="/picnics" element={<Picnics/>}/>  
            <Route path="/beachSupplies" element={<BeachSupplies/>}/>  
            <Route path="/book" element={<Book/>}/>  
          </Routes> 
        {/* </AnimatePresence>            */}
        <Footer/>
      </navbarContext.Provider>             
      </div>
    </>
  )
}

export default App
