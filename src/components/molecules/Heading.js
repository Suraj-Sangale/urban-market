import React from 'react';
import { Card } from 'react-bootstrap';

const Heading = ({ title }) => {
  return (
    <Card.Title className='titleOne'>
      {title}
    </Card.Title>
  );
};

export default Heading;