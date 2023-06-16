import React from 'react'
import './addOns.css'
import { SectionTitle, AddOnCard } from '../../components'
import { addOns } from '../../objects'



const AddOns = () => {
  return (
    <div className="add-ons-section">
    <SectionTitle
      text="Add Ons"/>
      <div className="add-ons-flexed-container">
        {/* <div className="add-ons-flexed-card">
          <div> Image here </div>
        </div>            
        <div className="add-ons-flexed-card">
          <div> image here </div>
        </div>            
        <div className="add-ons-flexed-card">
          <div> image here</div>
        </div>            
        <div className="add-ons-flexed-card">
          <div> Image here </div>
        </div>            
        <div className="add-ons-flexed-card">
          <div> image here </div>
        </div>            
        <div className="add-ons-flexed-card">
          <div> image here</div>
        </div>             */}
        
        {addOns.map((item) => {
          return(
            <AddOnCard
              key={item.id}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          )
        })}          
      </div>
    </div>
  )
}

export default AddOns