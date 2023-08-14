import React from 'react'
import './header.css';
import { logoCloudBg } from '../../assets';
import { BookNow } from '../../components';



const Header = () => {
  return (
    <>
      <div className= "header">
        <img src={logoCloudBg} alt="Header Img"/>
      </div>     
    </> 
  )
}

export default Header
