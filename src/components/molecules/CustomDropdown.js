import React from 'react';
import { NavDropdown } from 'react-bootstrap';

const CustomDropdown = ({ title, options }) => {
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

export default CustomDropdown;