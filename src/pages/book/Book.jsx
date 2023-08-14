import React from 'react'
import './book.css'

import { PageTitle, PageAnimation1 } from '../../components'
import { BookingForm } from '../../containers'



const Book = () => {
  return (
    <PageAnimation1>
      <div className="add-margin-regular-page">
        <PageTitle
          text="Book Now"
        />
        {/* <HowItsDone/> */}
        <BookingForm/>
      </div>
    </PageAnimation1>
  )
}

export default Book