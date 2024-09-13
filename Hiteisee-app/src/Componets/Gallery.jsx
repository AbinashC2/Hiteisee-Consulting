import React from 'react';
import './Gallery.css';
import corporate from '../assets/corporate.jpg';
import tech from '../assets/technology.jpg';
import teamwork from '../assets/teamwork.jpg';

const images = [
  { src: corporate, alt: 'Corporate Consulting' },
  { src: tech, alt: 'Technology Solutions' },
  { src: teamwork, alt: 'Teamwork' },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <div className="services-banner2">
        <h2 className="services-heading">Gallery</h2>
      </div>
      <div className='gallery-grid'>
        {images.map((image, index) => (
          <div className='gallery-item' key={index}>
            <img src={image.src} alt={image.alt} className='gallery-image' />
            <div className='gallery-overlay'>
              <div className='gallery-info'>
                <p>{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
