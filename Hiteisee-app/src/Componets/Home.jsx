import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import img from '../assets/partners.jpg';
import Customers from './Customers';
import RequestQuote from './RequestQuote';
import stats from '../assets/stats.png';

const Home = () => {
  const [completed, setCompleted] = useState(0);
  const [ongoing, setOngoing] = useState(0);
  const [upcoming, setUpcoming] = useState(0);

  useEffect(() => {
    const randomValues = [150, 45, 30]; // Example values for completed, ongoing, and upcoming projects
    const duration = 4000; // Slower animation duration in milliseconds

    const animateCounter = (setter, endValue) => {
      let start = 0;
      const increment = endValue / (duration / 50);
      const interval = setInterval(() => {
        if (start >= endValue) {
          clearInterval(interval);
          setter(endValue);
        } else {
          start += increment;
          setter(Math.floor(start));
        }
      }, 50);
    };

    animateCounter(setCompleted, randomValues[0]);
    animateCounter(setOngoing, randomValues[1]);
    animateCounter(setUpcoming, randomValues[2]);
  }, []);

  return (
    <>
      <div className='container'>
        <div className="home">
          <div className="heading-home">
            <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p> 
            <h1 className='text'>
              <span className='unlock-text'>Unlock Your Business Potential</span> <br /> with our Expert Guidance
            </h1>
          </div>
          <div className="button">
            <Link to="/services" className="button-link">Explore</Link>
          </div>
        </div>
      </div>

      {/* Customers Section */}
      <br /><br />
      <Customers />
      <br /><br />

      {/* Services Section */}
      <div className="services-container">
        <h2 className='customers-heading'>Our Services</h2>
        <div className="services-box">
          <div className="card-grid">
            {/* Service Cards */}
            <div className="service-card">
              <h3>Strategy Consulting Services</h3>
              <ul>
                <li>Management of Organizational Values</li>
                <li>Redefining business strategies</li>
              </ul>
              <a href="#strategy-consulting" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Strategic IR Services</h3>
              <ul>
                <li>Develop IR Policies</li>
                <li>Design IR Systems, Processes</li>
                <li>IR Strategies formulation</li>
              </ul>
              <a href="#ir-services" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Strategic Learning & Development Services</h3>
              <ul>
                <li>L&D Policies</li>
                <li>Design L&D Systems, Processes</li>
                <li>Training Needs Assessment (TNA)</li>
              </ul>
              <a href="#learning-development" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Safety Services</h3>
              <ul>
                <li>Safety Audit</li>
                <li>Safety Policies formulation</li>
                <li>Behaviour Based Safety implementation</li>
              </ul>
              <a href="#safety-services" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Strategic CSR Services</h3>
              <ul>
                <li>CSR Policy formulation</li>
                <li>CSR Strategy formulation</li>
                <li>Design & delivery of sustainable CSR initiatives</li>
              </ul>
              <a href="#csr-services" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Success / Executive Coaching</h3>
              <ul>
                <li>Counselling</li>
                <li>Mentoring</li>
                <li>Executive Coaching</li>
              </ul>
              <a href="#executive-coaching" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>Corporate Affairs Services</h3>
              <ul>
                <li>Liaison services</li>
                <li>Media management services</li>
                <li>Corporate Communications services</li>
              </ul>
              <a href="#corporate-affairs" className="read-more">Read more...</a>
            </div>
            <div className="service-card">
              <h3>HR Shared Services</h3>
              <ul>
                <li>HR Leasing</li>
                <li>Pay Roll processing services</li>
              </ul>
              <a href="#hr-shared-services" className="read-more">Read more...</a>
            </div>
          </div>
          <br /><br /><br />


      <div className="img-parent">
      <div className="stat-img">
        <img src={stats} alt="" />
        </div>
      </div>


          
        </div> <br /><br /><br /><br />



      {/* Project Statistics Section */}
     
      <div className="stat-container">
      <div className="project-stats-container">
      <h2 className='customers-heading'>Projects</h2>

        <div className="project-stat">
          <h2 className="stat-number">{completed}</h2>
          <p className="stat-label">Completed</p>
        </div>
        <div className="project-stat">
          <h2 className="stat-number">{ongoing}</h2>
          <p className="stat-label">Ongoing</p>
        </div>
        <div className="project-stat">
          <h2 className="stat-number">{upcoming}</h2>
          <p className="stat-label">Upcoming</p>
        </div>
      </div>
     
      </div>
      </div>
      <RequestQuote />
    </>
    
  );
}

export default Home;
