// src/pages/Menu.js
import React from 'react';

const Menu = () => {
  return (
      <section className="menu-section container main-content">
        <h1>Our Menu</h1>
        <p>Explore our delicious meals.</p>
        <h2>Entrees</h2>
        {/* Add DishCard components for Entrees here */}
        <h2>Appetizers</h2>
        {/* Add DishCard components for Appetizers here */}
        <h2>Desserts</h2>
        {/* Add DishCard components for Desserts here */}
      </section>
  );
};

export default Menu;
