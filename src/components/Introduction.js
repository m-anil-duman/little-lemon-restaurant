// src/components/Introduction.js
import React from 'react';
import './Introduction.css';
import { Link } from 'react-router-dom'

const Introduction = ({ title, subtitle, description, image, reverse = false ,type_for_description,button_text,button_path}) => {
    const toRenderDescription = () => {
        switch(type_for_description) {
          case 'p' :
            return (
              <p className='text-white'>
                  {description}
              </p>
            )
          case 'h3' :
            return (
              <h3 className='text-white'>
                  {description}
              </h3>
            )
          default :
              return null;
        }
      }
    
      /* for top section button */
      const toRenderButton = () => {
        return (
          <div>
            <Link to={button_path}>
              <button className='page_top_button'>
                {button_text}
              </button>
            </Link>
          </div>
        )
      }
      /* to render image */
      const toRenderImage = () => {
        return (
          <div>
            
          </div>
        )
      }
    
      return (
        <>
        <section className={`section page-top-section-left ${ reverse ? 'page-top-section-margin' : null }`}>
            <div className='container page-top-container'>
            { !reverse ? <img className={`page-main-image top-section-page-image-margin ${!reverse ? 
        'top-section-page-image-no-margin' : null}`}
        src={image} alt="image_not_found" /> : null }
              <div className='page_top_box'>
                  <h1 className='text-white'>{title}</h1>
                  { subtitle ? <h2 className='text-white'>{subtitle}</h2> : null }
                  {toRenderDescription()}
                  { button_path && button_text ? toRenderButton() : null }
              </div>
              { reverse ? 
              <img 
              className={`page-main-image top-section-page-image-margin ${!reverse ? 
            'top-section-page-image-no-margin' : null}`}
            src={image} alt="image_not_found" /> : null }
            </div>
        </section>
        </>
      )
    }

export default Introduction;
