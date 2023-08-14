import React, { useState } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence } from 'framer-motion';
import { navbarContext } from './contexts/navbarContext';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, PageLoadingScreen, ScrollToTop } from './components';
import { Footer } from './containers';

// USING LAZY LOADING INSTEAD!!
// import { Home, Book, Picnics, Parties, BeachSupplies } from './pages'; 

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//Imports for lazy loading pages
const LazyHome = React.lazy(()=> import ('./pages/home/Home'))
const LazyPicnics = React.lazy(()=> import ('./pages/picnics/Picnics'))
const LazyParties = React.lazy(()=> import ('./pages/parties/Parties'))
const LazyBeachSupplies = React.lazy(()=> import ('./pages/beach-supplies/BeachSupplies'))
const LazyBook = React.lazy(()=> import ('./pages/book/Book'))

function App() {
  // const location = useLocation();

  const [activeLink, setActiveLink] = useState('home');

  return (
    <>
      <div className="App">
      <navbarContext.Provider value={({activeLink, setActiveLink})}>
        <ToastContainer position ="bottom-center" limit={1}/>
        <ScrollToTop/>
        <NavBar/>      
        {/* <AnimatePresence mode="wait"> */}
          <Routes key={location.pathname} location={location}>

            {/* lazy loading routhing method */}
            <Route path="/" element={<React.Suspense fallback= {<PageLoadingScreen/>} > <LazyHome/> </React.Suspense>}/>  
            <Route path="/parties" element={<React.Suspense fallback= {<PageLoadingScreen/>} > <LazyParties/> </React.Suspense>}/>  
            <Route path="/picnics" element={<React.Suspense fallback= {<PageLoadingScreen/>} > <LazyPicnics/> </React.Suspense>}/>  
            <Route path="/beachSupplies" element={<React.Suspense fallback= {<PageLoadingScreen/>} > <LazyBeachSupplies/> </React.Suspense>}/>  
            <Route path="/book" element={<React.Suspense fallback= {<PageLoadingScreen/>} > <LazyBook/> </React.Suspense>}/>   

            {/* non-lazy loading routing method below*/}
            {/* <Route path="/" element={<Home/>}/>  
            <Route path="/parties" element={<Parties/>}/>  
            <Route path="/picnics" element={<Picnics/>}/>  
            <Route path="/beachSupplies" element={<BeachSupplies/>}/>  
            <Route path="/book" element={<Book/>}/>   */}
          </Routes> 
        {/* </AnimatePresence>            */}
        <Footer/>
      </navbarContext.Provider>             
      </div>
    </>
  )
}

export default App
