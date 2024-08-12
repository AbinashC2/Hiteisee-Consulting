import React from "react";
import "./Services.css";
import logo from "../assets/blogs.jpg";
import strategyIcon from "../assets/stats.png"; 
import irIcon from "../assets/stats.png";
import ldIcon from "../assets/stats.png";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-banner">
        <img src={logo} alt="Company Logo" className="services-logo" />
        <h2 className="services-heading">Our Best Services</h2>
      </div>

      <div className="services-box">
        <div className="card-grid">
          <div className="service-card">
            <img src={strategyIcon} alt="Strategy Consulting" className="service-icon" />
            <h3>Strategy Consulting Services</h3>
            <p>Management of Organizational Values, Redefining business strategies</p>
            {/* <a href="#strategy-consulting" className="read-more">
              Read more...
            </a> */}
          </div>
          <div className="service-card">
            <img src={irIcon} alt="Strategic IR" className="service-icon" />
            <h3>Strategic IR Services</h3>
            <p>Develop IR Policies, Design IR Systems, Processes, IR Strategies formulation</p>
            {/* <a href="#ir-services" className="read-more">
              Read more...
            </a> */}
          </div>
          <div className="service-card">
            <img src={ldIcon} alt="Learning & Development" className="service-icon" />
            <h3>Strategic Learning & Development Services</h3>
            <p>L&D Policies, Design L&D Systems, Processes, Training Needs Assessment (TNA)</p>
            {/* <a href="#learning-development" className="read-more">
              Read more...
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
