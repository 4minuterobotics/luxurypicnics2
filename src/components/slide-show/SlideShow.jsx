import React from 'react'
import './slideShow.css'

import Carousel from 'react-bootstrap/Carousel';


const SlideShow = (props) => {

    let slideShowData=props.slideShowData;

    return (
        <div className="slideShow">
            <Carousel fade variant="dark">
                {slideShowData.map((item)=>{
                    return(
                        <Carousel.Item key={item.id} interval={4000}>
                        <img
                        className="d-block w-100 slide-show-image"
                        src={item.image}
                        alt={item.alt}
                        />
                        {/* <Carousel.Caption>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    )                    
                })}
            </Carousel>
        </div>
            
    )
}

export default SlideShow