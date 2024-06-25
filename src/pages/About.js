// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container main-content">
      <section className="about-section">
        <h1>About Us</h1>
        <div className="about-text-photo">
          <p>Our story began...</p>
          <img src="image1.jpg" alt="Our Story" />
        </div>
        <div className="about-text-photo">
          <p>We strive to...</p>
          <img src="image2.jpg" alt="Our Mission" />
        </div>
        <div className="about-text-photo">
          <p>Visit us at...</p>
          <img src="image3.jpg" alt="Our Location" />
        </div>
        <div className="visit-us">
          <h2>Come Visit Us</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47508.64556214609!2d-87.6881836!3d41.9081167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d3f4f1910a1%3A0xbf748b410ff0084f!2sLemon!5e0!3m2!1sen!2sin!4v1698260125102!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='Google Map'
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;
