
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const OrderPlacedModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
        <img src="https://i.ibb.co/mb0Yy1n/check.gif" alt="Check Mark" style={{ width: '100px', height: '100px' }} />
        <Modal.Title>Your Order is Placed!</Modal.Title>
        <p>Thank you for placing your order with us! 🎉</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderPlacedModal;
