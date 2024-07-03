// src/pages/Menu.js
import React from 'react';
import Introduction from '../components/Introduction';
import image from '../assets/Mario and Adrian A.jpg';
import DishCard from '../components/DishCard';
import { Spin } from 'antd';
import useFetch from '../components/useFetch';
import SkeletonCard from '../components/SkeletonCard';

const Menu = () => {
  const { data, loading, error } = useFetch('https://little-lemon-restaurant-database.onrender.com/menu');

  const renderDish = (category) => {
    return (
      <div className='menuPart'>
        <div className='menuPartTitle'>
          <h2>{category}</h2>
        </div>
        <div className='menu-list'>
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : data && data.map((MenuDish) => {
            if (MenuDish['category'] === category) {
              return (
                <DishCard
                  dish={MenuDish}
                  key={MenuDish['id']}
                  dishId={MenuDish['id']}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="">
      <div className="mainSection">
        <Introduction
          title="Welcome to Our Restaurant"
          subtitle="Best place to enjoy delicious meals."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna."
          image={image}
          type_for_description={'h3'}
          reverse
        />
        <div className="main-content container">
          <section className="menu-section">
            <h1>Our Menu</h1>
            <p>Explore our delicious meals.</p>
            {error ? (
              <p>Error: {error.message}</p>
            ) : (
              <>
                {renderDish('Entrees')}
                {renderDish('Appetizers')}
                {renderDish('Desserts')}
              </>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Menu;
