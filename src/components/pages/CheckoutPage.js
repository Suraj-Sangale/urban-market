import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ListGroup, Form, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RoundedButton from '../molecules/RoundedButton';
import { combineArrObject, findArrObject } from '../Data/GenericAction';

const CheckoutPage = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector(state => state.cart);

    // const uniqueCartItems = combineArrObject(cartItems);
    console.log('cartItems', cartItems);
    const uniqueCartItems = cartItems;
    // console.log('uniqueCartItems',uniqueCartItems);


    const [cartQuantity, setCartQuantity] = useState(1);


    const calculateTotal = () => {
        let totalPrice = 0;

        // cartItems.forEach((item) => {
        //     totalPrice += (item.price * (quantity[item.id] || 0));
        // });

        return totalPrice;
    };
    const savedMoney = () => {
        let totalsavedMoney = 0;

        uniqueCartItems.forEach((item) => {
            totalsavedMoney += ((item.originalPrice - item.price)) * item.quantity;
        });

        return totalsavedMoney;
    };
    const totalOfProduct = () => {
        let total = 0;
        uniqueCartItems.forEach((item) => {
            total += (item.price * item.quantity);
        });
        return total;
    };
    const totalOfProductMRP = () => {
        let total = 0;
        uniqueCartItems.forEach((item) => {
            total += (item.originalPrice * item.quantity);
        });
        return total;
    };
    const onClickAddToCart = (product) => {

        setCartQuantity(cartQuantity + 1);
        dispatch({ type: 'ADD_TO_CART', payload: product });

    };

    const onClickDecrement = (product) => {
        setCartQuantity(cartQuantity - 1)
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productId: product.id } });

    };
    const onClickIncrement = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <Container style={{ marginTop: '9rem' }}>
            <Row>
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <h5>My Cart</h5>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                {uniqueCartItems.map((item) =>
                                // console.log('item',item)
                                (
                                    <ListGroup.Item key={item.id}>
                                        <Row>
                                            <Col md={4}>
                                                <Image style={{ border: 'none' }} src={item.imageUrl} alt={item.name} thumbnail />
                                            </Col>
                                            <Col md={5}>
                                                <strong className=' APName '>{item.name}</strong>
                                                <div >
                                                    <span className='APPrice '>₹{(item.price * item.quantity).toFixed(2)}</span>
                                                    <span className='APoriginalPrice'>₹{item.originalPrice}</span> <br />
                                                    <span className='APDiscount'> You save ₹ {((item.originalPrice - item.price) * item.quantity).toFixed(2)}</span>
                                                </div>
                                            </Col>
                                            <Col md={3}>
                                                <div className='COTotalCard' >
                                                    {/* <span className='COTotal'>₹{totalOfProduct().toFixed(2)}</span> */}
                                                    <div className="d-flex justify-content-between">
                                                        <RoundedButton onClick={() => onClickDecrement(item)}>-</RoundedButton>
                                                        <span className="m-2 ">{cartQuantity}</span>
                                                        <RoundedButton onClick={() => onClickAddToCart(item)}>+</RoundedButton>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header>
                            <h5>Payment Details</h5>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <Row>
                                        <Col md={8}>MRP Total</Col>
                                        <Col md={4} className='fw-bolder'>₹ {totalOfProductMRP().toFixed(2)}</Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={8} >Product Discount</Col>
                                        <Col md={4} className='fw-bolder text-success'>₹ {savedMoney().toFixed(2)}</Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={7}>Delivery Fee</Col>
                                        <Col md={5} className='fw-bolder'> <span className=' text-success '> FREE </span><span className='text-muted text-decoration-line-through' > ₹40.00</span> </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={8}>Total</Col>
                                        <Col md={4} className='fw-bolder'>₹ {totalOfProduct().toFixed(2)}</Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={8}>Payment Method</Col>
                                        <Col md={4} className='fw-bolder'> COD</Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Col md={5}></Col>
                                        <Col md={7} className='fw-bolder text-success ' style={{ marginRight: '1rem' }}> You Save ₹ {savedMoney().toFixed(2)}</Col>
                                    </Row>
                                </ListGroup.Item>
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
