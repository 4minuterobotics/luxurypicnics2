import React from 'react'
import { ArrowRightCircle } from 'react-bootstrap-icons';

const SeeMoreButton = () => {
  return (
  <div className='content'>
        <button onClick={() => console.log('connect')}>See More... <ArrowRightCircle size={25} /></button>
  </div>
  )
}

export default SeeMoreButton