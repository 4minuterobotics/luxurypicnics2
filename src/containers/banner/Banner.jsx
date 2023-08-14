import React from 'react'
import './banner.css';
import { BookNow, } from '../../components'
import { maroonLuxuryText } from '../../assets'

const Banner = () => {
    return (
        <>
            <div className= "banner-text">
                <div className="line1">
                    <p className="text" >We are the #1 vendors for       </p> <img className= "redLuxuryText" src = {maroonLuxuryText} alt = "luxury text"/>
                </div>
                <p className="text">picnics & parties in Broward County.</p>
                <BookNow/>
            </div>
        </>
    )
}

export default Banner