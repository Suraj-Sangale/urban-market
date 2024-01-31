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
                    <div className='fs-5 fw-600'>{address.name}</div>
                    <div>{address.lineOne}</div>
                    <div>{address.lineTwo}</div>
                    <div>{address.pinCode}</div>
                    <div>+91 - {address.PhoneNumber}</div>
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
