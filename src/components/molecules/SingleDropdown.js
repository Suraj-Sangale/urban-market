import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const SingleDropdown = ({ title, options }) => {
  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      {options.map((option, index) => (
        <NavDropdown.Item  key={index} href={`/products`}>
          {option}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default SingleDropdown;