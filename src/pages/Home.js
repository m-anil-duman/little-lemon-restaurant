// src/pages/Home.js
import React from 'react';
import Button from '../components/Button';
import Introduction from '../components/Introduction';
import image from '../assets/restauranfood.jpg';
import DishCard from '../components/DishCard';
import SkeletonCard from '../components/SkeletonCard';
import useFetch from '../components/useFetch';

const Home = () => {
  const { data, loading } = useFetch('https://little-lemon-restaurant-database.onrender.com/menu');

  return (
    <section className='mainSection'>
      <Introduction
        title="Welcome to Our Restaurant"
        description="Your gateway to the rich flavors of Italy, Greece, and Turkey. Savor authentic Mediterranean dishes, from Greek souvlaki and Italian pasta to Turkish kebabs, all crafted with the freshest ingredients. Enjoy our warm ambiance and let us take you on a culinary journey. Experience the essence of the Mediterranean at The Little Lemon Restaurant!"
        image={image}
        type_for_description={'h3'}
      />
      <div className="container main-content">
        <section className="specials-section">
          <header className='space-between'> <h2>This Week's Specials!</h2> <Button to={'/reservation'} >Reserve a Table</Button></header>
          <div className='menu-list'>
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              data && data.map((MenuDish) => {
                if (MenuDish['special'] === "true") {
                  return (
                    <DishCard
                      dish={MenuDish}
                      key={MenuDish['id']}
                      dishId={MenuDish['id']}
                    />
                  );
                }
                return null;
              })
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Home;
