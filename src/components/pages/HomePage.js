import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import HomeCarousel from '../molecules/HomeCarousel';

const HomePage = () => {
  return (
    <>
    <HomeCarousel />
      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Welcome to Urban Market</h1>
            <p>Your one-stop destination for all your shopping needs!</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://placekitten.com/286/180" />
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://placekitten.com/287/180" />
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://placekitten.com/288/180" />
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
