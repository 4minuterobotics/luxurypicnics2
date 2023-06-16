import React, {useState} from 'react'
import './addOnCard.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="sm"
        className="add-on-modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >

        <Modal.Header  className="add-on-modal-header">
            <Modal.Title id="contained-modal-title-vcenter"> {props.name}  </Modal.Title>
        </Modal.Header>

        <Modal.Body className="add-on-modal-body">
            <img src={props.image}/>
            <p> {props.description} </p>
            <p> {`$${props.price}`}</p>  
        </Modal.Body>

        <Modal.Footer className="add-on-modal-footer">
            <Button variant="light" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }




const AddOnCard = (props) => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className="mapped-add-ons-flexed-card">
                <img src={props.image} onClick={() => setModalShow(true)}/>
            </div>

            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            name={props.name}
            image={props.image}
            description={props.description}
            price={props.price}
            />
        </>
    )
}

export default AddOnCard
