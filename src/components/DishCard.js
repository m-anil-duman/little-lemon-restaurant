import React from 'react';
import './DishCard.css';

const DishCard = ({ dish }) => {
  const imageUrl = `http://localhost:3000/${dish['dish-image']}`;

  return (
    <article className="dish-card">
      <div className="dish-card-image">
        <img className='DishImage' src={imageUrl} alt={dish['dish-name']} />
      </div>
      <div className="dish-card-content">
        <h3 className="dish-card-title">{dish['dish-name']}</h3>
        <p className="dish-card-price">${dish['dish-price']}</p>
        <p className="dish-card-details">{dish['dish-details']}</p>
      </div>
    </article>
  );
};

export default DishCard;
