import React, {useState, useRef} from 'react'
import './bookingForm.css'

import ReCAPTCHA from 'react-google-recaptcha'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify'

import { luxuryPicnics, luxuryParties, beachSupplies } from '../../objects'
import { addOns } from '../../objects'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function onChange(value) {
    console.log("Captcha value:", value);
}

const BookingForm = () => {
    const formRef = useRef();

    const formInitialDetails = {
        name: "",
        email: "",
        phone: "",
        parkOrBeach: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        date: "",
        time: "",
        picnic: "",
        party: "",
        beach: "",
        addOn1: "",
        addOn2: "",
        addOn3: "",
        addOn4: "",
        addOn5: "",
        addOn6: "",
        addOn7: "",
        addOn8: "",
        addOn9: "",
        addOn10: "",
        addOn11: "",
        addOn12: "",
        message: "",
    }


    const [form, setForm] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});


    const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;


    setForm({
        ...form,
        [name]: value,
    });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        console.log('form name: ', form.name)
    
        emailjs
        .send(
    
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                to_name: "Luxury Picnics",
                to_email: "info@luxurypicnicrentals.com",
                from_name: form.name,
                from_email: form.email,
                phone: form.phone,
                parkOrBeach: form.parkOrBeach,
                address1: form.address1,
                address2: form.address2,
                city: form.city,
                state: form.state,
                date: form.date,
                time: form.time,
                picnic: form.picnic,
                party: form.party,
                beach: form.beach,
                addOn1: form.addOn1,
                addOn2: form.addOn2,
                addOn3: form.addOn3,
                addOn4: form.addOn4,
                addOn5: form.addOn5,
                addOn6: form.addOn6,
                addOn7: form.addOn7,
                addOn8: form.addOn8,
                addOn9: form.addOn9,
                addOn10: form.addOn10,
                addOn11: form.addOn11,
                addOn12: form.addOn12,
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
            () => {
                toast.success("Thank you. I will get back to you as soon as possible.");
                setStatus({ succes: true, message: 'Message sent successfully'});
                console.log("request sent")
        
                setForm({
                    name: "",
                    email: "",
                    phone: "",
                    parkOrBeach: "",
                    address1: "",
                    address2: "",
                    city: "",
                    state: "",
                    date: "",
                    time: "",
                    picnic: "",
                    party: "",
                    beach: "",
                    addOn1: "",
                    addOn2: "",
                    addOn3: "",
                    addOn4: "",
                    addOn5: "",
                    addOn6: "",
                    addOn7: "",
                    addOn8: "",
                    addOn9: "",
                    addOn10: "",
                    addOn11: "",
                    addOn12: "",
                    message: "",
                });
                setButtonText("Submit");
            },
            (error) => {
                console.error(error);
                toast.error("Ahh, something went wrong. Please try again.");
                setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
            }
        );
    };

// useEffect (() =>{
//     console.log(form)  .... was using this useEfect to see immediate updates
// }, [form])

    return (
        <div className="booking-form">

            <Form className="booking-form" onSubmit={handleSubmit} ref={formRef}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="First & Last Name" name='name' value={form.name} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" name='email' value={form.email} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="(###) ### - ####" name='phone' value={form.phone} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridParkOrBeach">
                        <Form.Label>Park/Beach Name</Form.Label>
                        <Form.Control type="text" name='parkOrBeach' value={form.parkOrBeach} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Event Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name='address1' value={form.address1} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Event Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" name='address2' value={form.address2} onChange={handleChange} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" name='city' value={form.city} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type="text" name='state' value={form.state} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridDate">
                        <Form.Label>Event Date</Form.Label>
                        <Form.Control placeholder="--/--/----" type="date" name='date' value={form.date} onChange={handleChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridTime">
                        <Form.Label>Time</Form.Label>
                        <Form.Control placeholder="--:--" type="time" name='time' value={form.time} onChange={handleChange} />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPicnic">
                        <Form.Label>Picnic Packs</Form.Label>
                        <Form.Select defaultValue="Choose..." name="picnic" onChange={handleChange}>
                            <option>Choose...</option>
                            {luxuryPicnics.picnicPacks.map((pack)=>{
                            return(
                                <option key={pack.id} value={pack.name} >{pack.name}</option>
                            )                 
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridParty">
                        <Form.Label>Party Packs</Form.Label>
                        <Form.Select defaultValue="Choose..." name="party" onChange={handleChange}>
                            <option>Choose...</option>
                            {luxuryParties.partyPacks.map((pack)=>{
                            return(
                                <option key={pack.id} value={pack.name} >{pack.name}</option>
                            )                 
                            })}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridParty">
                        <Form.Label>Beach Packs</Form.Label>
                        <Form.Select defaultValue="Choose..." name="beach" onChange={handleChange}>
                            <option>Choose...</option>
                            {beachSupplies.beachPacks.map((pack)=>{
                            return(
                                <option key={pack.id} value={pack.name} >{pack.name}</option>
                            )                 
                            })}
                        </Form.Select>
                    </Form.Group>
                </Row>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={12}>
                            Add-Ons
                        </Form.Label>
                        <Col sm={12}>

                            {addOns.map((item)=>{
                            return(
                                <Form.Check
                                key={item.id}
                                type="checkbox"
                                value={item.name}
                                label={item.name}
                                name={`addOn${item.id}`}
                                id={`addOn${item.id}`}
                                onChange={handleChange}
                                />
                            )
                            })}
                            
                        </Col>
                    </Form.Group>
                </fieldset>

                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions or Requests</Form.Label>
                    <Form.Control as="textarea" rows={3} name='message' value={form.message} onChange={handleChange}/>
                </Form.Group>

                {/* <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onChange}
                    className="recaptcha"
                /> */}

                <Button variant="primary" type="submit">
                    <span>{buttonText}</span>
                </Button>
            </Form>
        </div>
    )
}

export default BookingForm