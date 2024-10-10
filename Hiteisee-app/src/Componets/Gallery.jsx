import React from 'react';
import './Gallery.css';
// import corporate from '../assets/corporate.jpg';
// import tech from '../assets/technology.jpg';
// import teamwork from '../assets/teamwork.jpg';
import Odisha_CSR_Conclave from '../assets/Odisha _CSR_Conclave.jpg';
import Smart_infra from '../assets/Smart_infra.jpg';
import CII_IR_Conclave from '../assets/CII_IR_Conclave.jpg';
import workshop from '../assets/workshop.jpg';


const images = [
  { src: Odisha_CSR_Conclave, alt: 'Odisha CSR Conclave' },
  { src: Smart_infra, alt: 'Smart Infra' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: workshop, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  { src: CII_IR_Conclave, alt: 'CII IR Conclave' },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <div className="services-banner2">
    
            <div className="contact-us-heading">
                <h1>Gallery</h1>
            </div>
      
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
