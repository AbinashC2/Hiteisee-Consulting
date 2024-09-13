import React from 'react';
import "./Hero.css";
import bgi from "../assets/homeright.svg"
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-left">
   
          <div className="heading-home">
            <p className='welcome'>Welcome to <span className='hiteisee'>Hiteisee</span></p> 
            <h1 className='text'>
              <span className='unlock-text'>Unlock Your Business Potential</span> <br /> <span className="welcome-2">with our Expert Guidance</span> 
            </h1>
          </div>
          <div className="button-explore">
            Explore
            {/* <Link to="/services" className="button-link">Explore</Link> */}
          </div>
     
      </div>

      <div className="hero-right">
        <img src={bgi} alt="" />
        {/* The right side will show the background image */}
      </div>
    </div>
  );
}

export default Hero;
