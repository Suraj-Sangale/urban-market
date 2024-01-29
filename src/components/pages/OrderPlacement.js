import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import OrderPlacedModal from '../molecules/OrderPlacedModal';

const OrderPlacement = ({ show, handleClose, address }) => {
    const [showOrderPlacedModal, setShowOrderPlacedModal] = useState(false);
  
    const handlePlaceOrder = () => {
      setShowOrderPlacedModal(true);
    };
  
    const handleCloseOrderPlacedModal = () => {
      setShowOrderPlacedModal(false);
    };
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Address Details</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{ borderRadius: '10px', border: '1px solid black', padding: '20px' }}>
                    <p>{address.name}</p>
                    <p>{address.street}</p>
                    <p>{address.pinCode}</p>
                    <p>+91 - {address.PhoneNumber}</p>
                    {/* Add more lines for additional address details */}
                </div>

                <Button variant="success" className=" text-center w-100" style={{ marginTop: '45vh' }} block 
                onClick={() => handlePlaceOrder()} >
                    Deliver Here
                </Button>
                <OrderPlacedModal show={showOrderPlacedModal} handleClose={handleCloseOrderPlacedModal} />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OrderPlacement;
