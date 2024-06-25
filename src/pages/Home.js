// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
import Introduction from '../components/Introduction';

const Home = () => {
  return (
    <div className='mainSection'>
    <Introduction
        title="Welcome to Our Restaurant"
        subtitle="Best place to enjoy delicious meals."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."
        image="path/to/your/image.jpg"  
      />
    <div className="container main-content">
      
      <section className="specials-section">
        <h2>This Week's Specials!</h2>
        {/* Add DishCard components here */}
      </section>
      <Button to="/reservation">
        Reserve a Table
      </Button>
    </div>
    </div>
  );
};

export default Home;
