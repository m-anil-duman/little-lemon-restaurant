import React from 'react'
import footerImage from '../assets/Logo2.png'
import {BsFacebook,BsInstagram, BsTwitter} from "react-icons/bs"
import { Link } from 'react-router-dom'

import './Footer.css'
const Footer = () => {
  return (
    
    <footer className='primary-background section'>
        <div className='container footer'>
            <img className='footer-logo' src={footerImage} alt="error" />
            <div>
                <span className='footerHd'>Sitemap</span>
                <menu>
                    <li><Link to="/" className="footerItem footer-hover">Home</Link></li>
                    <li><Link to="/Menu" className="footerItem footer-hover">Menu</Link></li>
                    <li><Link to="/reservation" className="footerItem footer-hover">Reservation</Link></li>
                    <li><Link to="/about" className="footerItem footer-hover">About</Link></li>
                    <li><Link to="/login" className="footerItem footer-hover">Login</Link></li>
                </menu>
            </div>
            <div>
                <span className='footerHd'>Contact Us</span>
                <menu>
                    <li className='footerItem'>678 Pisa Ave, Chicago, IL 60611s</li>
                    <li className='footerItem'>(312) 593-2744</li>
                    <li className='footerItem'>customer@littlelemon.com</li>
                </menu>
            </div>
            <div className='footerSocials'>
                <span className='footerHd'>Connect with Us</span>
                <div>
                    <span className='footerSocialItem footer-hover'><BsFacebook/></span>
                    <span className='footerSocialItem footer-hover'><BsInstagram/></span>
                    <span className='footerSocialItem footer-hover'><BsTwitter/></span>
                </div>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer