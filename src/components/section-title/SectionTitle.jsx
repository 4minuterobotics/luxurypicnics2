import React from 'react';
import './section-title.css';

const SectionTitle = (props) => {
  return (
    <>
      <div className= "section-title">
        <h1>{props.text}</h1>
      </div>
    </> 
  )
}

export default SectionTitle