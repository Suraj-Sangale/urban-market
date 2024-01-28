import React from 'react';

const RoundedButton = ({ onClick, children }) => {

  return (
    <button className='roundedButton' onClick={onClick}>
      {children}
    </button>
  );
};

export default RoundedButton;
