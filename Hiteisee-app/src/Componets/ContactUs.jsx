import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { CiPaperplane } from "react-icons/ci";

export default function ContactUs() {
  return (
    <div className='contact-us-page'>
        <div className="contact-us-header">
            <div className="contact-us-heading">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className="contact-us-container">
            <div className="left-contact-us-heading">
                <h1>Get in Touch with Us</h1>
                <p>At Hiteisee, we value your questions, feedback, and inquiries.</p>
                <div className='heading-bar'></div>
            </div>
            <div className="contact-us-main-container">
                <div className="left-contact-us">
                    <div className="help-section">
                        <p className='help-title'>How Can We Help You?</p>
                        <div className="help-desc">
                            <ul>
                                <li>General Inquiries: <span>Have a question about our services or need more information? Reach out to us, and our team will be happy to assist you.</span></li>
                                <li>Client Services: <span>Are you a business looking to explore sustainable solutions or need consultation on business transformation? Connect with our client services team to discuss how we can support your goals.</span></li>
                                <li>Careers: <span>Interested in joining SOUL? Visit our <Link to='/career-jd'>Careers Page</Link> for current opportunities or <Link to='/career-jd'>Submit Your Resume</Link> if you’re looking for future roles. For any specific queries about careers, our HR team is here to help.</span></li>
                                <li>Media and Partnerships: <span>For media inquiries, partnerships, or collaboration opportunities, please contact our media relations team.</span></li>
                            </ul>
                        </div>

                    </div>

                    <div className="contact-box">
                        <div className="office-address">
                            <div className="office-address-heading">
                                <span><FontAwesomeIcon icon={faLocationDot} className='contact-icon'/></span>
                                <span className='contact-heading'>Office Address</span>
                            </div>

                            <div className="address-desc">
                                <p>E/ 42, Jaydev Vihar, Bhubaneswar, Odisha 751024</p>
                            </div>
    
                        </div>
                        <div className="contact-number-contact-page">
                            <div className="office-address-heading">
                                <span><FontAwesomeIcon icon={faPhone} className='contact-icon'/></span>
                                <span className='contact-heading'>Contact Number</span>
                            </div>

                            <div className="address-desc">
                                <p>+91 7077769335</p>
                                <p>+91 7077769336</p>
                            </div>
                            
                        </div>
                        <div className="email">
                            <div className="office-address-heading">
                                <span><FontAwesomeIcon icon={faEnvelope} className='contact-icon'/></span>
                                <span className='contact-heading'>Email</span>
                            </div>

                            <div className="address-desc">
                                <p>hiteisee123@gmail.com</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="right-contact-us">
                    <div className="contact-us-form">
                        <div className="form-heading">
                            <h1>Write to us...</h1>
                        </div>

                        <div className="form-inputs">
                            <div className="input-name">
                                <FontAwesomeIcon className='form-input-icons' icon={faUser} />
                                <input type="text" placeholder='Your Full Name*' required />
                            </div>
                            <div className="input-mail">
                                <FontAwesomeIcon className='form-input-icons' icon={faEnvelope} />
                                <input type="email" placeholder='Your Email*' required />
                            </div>
                            <div className="input-phone">
                                <FontAwesomeIcon className='form-input-icons' icon={faPhone} />
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Contact Number*' required/>
                            </div>
                            <div className="input-msg">
                                <textarea name="msg-textarea" id="msg-text" placeholder='Write your message' rows="6" cols="67"></textarea>
                            </div>
                        </div>
                        <div className="form-btn">
                            <button className='btn-send'>Send <span ><CiPaperplane className="send-icon"/></span></button>
                        </div>
                    </div>
    
                </div>
                
            </div>

        </div> 

        <div className="banner-container">
            
        </div>

        
      
    </div>
  )
}
