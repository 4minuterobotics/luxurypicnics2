import React from 'react'
import './bundleSummary.css'

import { BookNow } from '../../components'

const BundleSummary = (props) => {
    let title = props.title;
    let description=props.description;
    let details=props.details;


    return (
        <div className='bundle-summary'>
            <h1 className='bundle-summary-title'>{title}</h1>
            <p className='bundle-summary-description'>{description}</p>
            <ul>
                {details.map((item)=>{
                    return(
                        <li key={item.id}>{item.items}</li>  
                    )                    
                })}
            </ul>
            <div className="bundle-summary-book">
                <BookNow/>
            </div>
        </div>
    )
}

export default BundleSummary