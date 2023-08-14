import React from 'react'
import './myModal.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const MyModal = (props) => {
  return (
    <div>
                <Modal
        {...props}
        size="lg"
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
        </Modal.Body>

        <Modal.Footer className="add-on-modal-footer">
            <Button variant="light" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyModal