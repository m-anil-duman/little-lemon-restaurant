// src/components/TextImageBox.js
import React from 'react';
import './TextImageBox.css';

const TextImageBox = ({ text, image, reverse }) => {
  return (
    <article className={`text-image-box ${reverse ? 'reverse' : ''}`}>
      <div className="text-content">
        <p>{text}</p>
      </div>
      <div className="image-content">
        <img src={image} alt="Text related visual" />
      </div>
    </article>
  );
};

export default TextImageBox;
