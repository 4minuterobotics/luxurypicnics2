import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { NavBar } from './components';
import { Footer } from './containers';
import { Home, Book, Picnics, Parties, BeachSupplies } from './pages';

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>
      <div className="App">
      <ToastContainer position ="bottom-center" limit={1}/>
        <NavBar/>       
          <Routes>
            <Route path="/" element={<Home/>}/>  
            <Route path="/parties" element={<Parties/>}/>  
            <Route path="/picnics" element={<Picnics/>}/>  
            <Route path="/beachSupplies" element={<BeachSupplies/>}/>  
            <Route path="/book" element={<Book/>}/>  
          </Routes>  
        <Footer/>       
      </div>
    </>
  )
}

export default App
