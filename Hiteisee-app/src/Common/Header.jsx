import React, { useState } from "react";
import "../Common/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="top-logo">
        <div className="header-logo">
          <div className="logo">
            <img src="/HiteiseeLogo.png" alt="Logo" />
          </div>

          <div className="contact-container">
            {/* <div className="contact-item">
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
            </div> */}

            <button className="consulting-button">Free Consulting</button>
          </div>
        </div>

        <header className="header">
          <nav className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
              <div className={`bar ${isOpen ? "open" : ""}`}></div>
            </div>

            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
              <li>
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu}>About Us</Link>
              </li>
              <li>
                <Link to="/services" onClick={toggleMenu}>Services</Link>
              </li>
              <li>
                <Link to="/projcts" onClick={toggleMenu}>KeyProjects</Link>
              </li>
              <li>
                <Link to="/careers" onClick={toggleMenu}>Career</Link>
              </li>
              <li>
                <Link to="/BlogPage" onClick={toggleMenu}>Blog</Link>
              </li>
              <li>
                <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
