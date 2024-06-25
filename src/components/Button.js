// src/components/Button.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
