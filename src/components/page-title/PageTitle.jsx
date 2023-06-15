import React from 'react';
import './pageTitle.css';

const PageTitle = (props) => {
  return (
    <>
      <div className= "page-title">
        <h1>{props.text}</h1>
      </div>
    </> 
  )
}

export default PageTitle