import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form } from 'react-bootstrap';

const CheckoutPage = () => {
  // Sample data for the cart
  const cartItems = [
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ];

  const [quantity, setQuantity] = useState({});

  // Function to handle quantity increment
  const handleIncrement = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
  };

  // Function to handle quantity decrement
  const handleDecrement = (productId) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max((prevQuantity[productId] || 0) - 1, 0),
    }));
  };

  // Calculate total price
  const calculateTotal = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += (item.price * (quantity[item.id] || 0));
    });

    return totalPrice;
  };

  return (
    <Container style={{marginTop:'12rem'}}>
      <Row>
        {/* Card Section */}
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5>My Cart</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.id}>
                    <Row>
                      <Col md={8}>
                        <strong>{item.name}</strong>
                        <p>Price: ${item.price}</p>
                      </Col>
                      <Col md={4}>
                        <Form>
                          <Form.Group controlId={`quantity_${item.id}`}>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                              type="number"
                              value={quantity[item.id] || 0}
                              onChange={() => {}}
                            />
                          </Form.Group>
                        </Form>
                        <Button
                          variant="outline-secondary"
                          className="mr-2"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </Button>
                        <Button
                          variant="outline-secondary"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar Section */}
        <Col md={4}>
          <Card>
            <Card.Header>
              <h5>Payment Details</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>MRP Total</Col>
                    <Col>${calculateTotal()}</Col>
                  </Row>
                </ListGroup.Item>
                {/* Add other payment details here */}
              </ListGroup>
              <Button variant="success" className="mt-3" block>
                Place Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
