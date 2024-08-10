import React from "react";
import "../Common/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <div className="top-logo">
        <div className="header-logo">
          <div className="logo">
          <img src="/HiteiseeLogo.png" alt="Logo" />
          </div>

          <div className="contact-container">
            <div className="contact-item">
              <div className="contact-icon email-icon"></div>
              <div className="contact-text">
                <div className="contact-title">Email</div>
                <div className="contact-detail">youremail@email.com</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon phone-icon"></div>
              <div className="contact-text">
                <div className="contact-title">Call</div>
                <div className="contact-detail">+1235 2355 98</div>
              </div>
            </div>
           
            <button className="consulting-button">Free Consulting</button>
          </div>
        </div>

        <header className="header">
          <nav className="navbar">
            <ul className="navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/careers">Career</Link>
              </li>
              <li>
              <Link to="/BlogPage">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
