import React from 'react'
import './howItsDone.css';
import { SectionTitle } from '../../components';
import {number1, number2, number3} from '../../assets';


const HowItsDone = () => {
  return (
    <div className="how-its-done">
        <SectionTitle
            text="How It's Done"
        />

        <div className="flexed-container">
            <div className="flexed-card">
                <div> <img src={number1} className="number"/> </div>
                <div className="flexed-card-title">ONLINE BOOKING</div>
                <div className="flexed-card-body">Book your picnic with us via our online form found below! Make sure to include the number of guests, preferred date, and location.</div>
            </div>            
            <div className="flexed-card">
                <div> <img src={number2} className="number"/> </div>
                <div className="flexed-card-title">CONFIRMATION</div>
                <div className="flexed-card-body">We will contact you about your inquiry and confirm availability. Once the booking is finalized, we'll send over an invoice.</div>
            </div>            
            <div className="flexed-card">
                <div> <img src={number3} className="number"/></div>
                <div className="flexed-card-title">PICNIC DATE</div>
                <div className="flexed-card-body">On the day of your picnic, you don't have to worry about set up or clean up, just arrive and enjoy. </div>
            </div>            
        </div>
    </div>
    )
}

export default HowItsDone



{/* <Container className="card">
<Row>
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={number1} className="number"/>
        <Card.Body>
            <Card.Title className="card-text card-title">Online Booking</Card.Title>
            <Card.Text className="card-text card-body">
            Book your picnic with us via our online form found below! Make sure to include the number of guests, preferred date, and location.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={number2} className="number"/>
        <Card.Body>
            <Card.Title className="card-text card-title">Card Title</Card.Title>
            <Card.Text className="card-text card-body">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={number3} className="number" />
        <Card.Body>
            <Card.Title className="card-text card-title">Card Title</Card.Title>
            <Card.Text className="card-text card-body">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
</Row>
</Container>   */}