import React, {useState} from 'react'
import './bookNow.css';

import { Link } from 'react-router-dom';

const BookNow = () => {



  return (
    <div className="book-now">
      <Link to="/book">
      <button><span>Book Now</span></button>
      </Link>                            
    </div>
  )
}

export default BookNow