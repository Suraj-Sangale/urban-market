import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const SingleDropdown = ({ title, options }) => {
  console.log('title',title);
  console.log('options',options);
  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      {options.map((option, index) => (
        <NavDropdown.Item key={index} href={`#${option.toLowerCase().replace(/\s+/g, '-')}`}>
          {option}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default SingleDropdown;