import React from 'react';

const Button = ({ buttonName, type, onClick }) => {
  return <button type={type} onClick={onClick}>{buttonName}</button>
};


export default Button;