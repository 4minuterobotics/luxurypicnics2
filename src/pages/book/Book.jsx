import React from 'react'
import './book.css'

import { PageTitle } from '../../components'
import { BookingForm } from '../../containers'



const Book = () => {
  return (
    <div className="add-margin-regular-page">
      <PageTitle
        text="Book Now"
      />
      {/* <HowItsDone/> */}
      <BookingForm/>
    </div>
  )
}

export default Book