import React from 'react'

import './Footer.css'
import Logo from '../assets/quote.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'



export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          {/* <div className="company-logo">
            <img src={Logo} alt="#company-logo" />
          </div> */}
          <div className="contact-number">
            <span><FontAwesomeIcon icon={faPhone} className='phone-logo' /> </span><span className='phone-number-footer'>+91 7077769335</span>
          </div>
          <div className="contact-mail">
           <span><FontAwesomeIcon icon={faEnvelope} className='mail-logo'/> </span><span className="mail-footer">soul@soulunileaders.com</span>
          </div>
          <div className="contact-mail">
           <span><FontAwesomeIcon icon={faLocationDot} className='location-logo'/> </span><span className="location-details-footer">E/42/D, Infocity Avenue, Chandaka Industrial Estate, Bhubaneswar, <br /> <span className="location-details-2-footer">Odisha, India - 751024</span></span>
          </div>

          <div className="social-media-footer">
            <a href="https://www.facebook.com/SOUL.Limited/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className='fb-logo' />
            </a>
            <a href="https://x.com/soul_limited" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} className='twitter-logo' />
            </a>
            <a href="https://www.linkedin.com/company/soullimited" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className='linkedin-logo' />
            </a>
            <a href="https://www.instagram.com/soul__limited/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className='ig-logo' />
            </a>
          </div>
        </div>
        <div className="right-footer">
          <div className="quick-links">
            <div className="footer-right-heading">QUICK LINKS</div>
              <Link to='/landing' className="home-footer">Home</Link>
              <Link to='/about-us' className="about-us-footer">About Us</Link>
              <Link to='/products' className="products-footer">Products</Link>
              <Link to='/key-projects' className="key-projects-footer">Key Projects</Link>
              <Link to='/career' className="career-footer">Career</Link>
              <Link to='/contact-us' className="contact-footer">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="break-line">
          <hr />
      </div>
      <div className="copyrights">
        <p>©2024 SOUL Limited.</p>
      </div>
    </div>
  )
}
export default Footer;
