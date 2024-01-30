// Import necessary libraries
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Col, Container, Row, Card, Form } from 'react-bootstrap';
import { Allproducts } from '../Data/Data';
import AllProductCard from '../molecules/AllProductCard';

const ViewAllProducts = () => {
    const [isSmallerThanLg, setIsSmallerThanLg] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallerThanLg(window.innerWidth < 992);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Container fluid className={isSmallerThanLg ? 'mt-6 px-5' : 'mt-9 px-5' } >
            <Row className="mb-2">
                <Col>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>View All Products</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row>
                <Col md={3}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Filters</Card.Title>

                            <Form.Check type="checkbox" label="Available" />
                            <Form.Check type="checkbox" label="Not Available" />

                            <Form.Group controlId="formCategory">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select">
                                    <option>Select...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formBrand">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control type="text" placeholder="Enter brand" />
                            </Form.Group>

                            <Form.Group controlId="formPriceRange">
                                <Form.Label>Price Range</Form.Label>
                                <input type="range" className="form-range" />
                            </Form.Group>

                            <Form.Group controlId="formDiscount">
                                <Form.Check type="checkbox" label="Discounted" />
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={9}>
                    <Row>
                        {Allproducts.map((item) => (
                            <Col key={item.id} md={4}>
                                <AllProductCard product={item} />

                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ViewAllProducts;
