// import React from 'react';
// import './Customers.css';
// import img from '../assets/partners.jpg';

// const Customers = () => {
//     // // Example data for customers
//     // const customerData = [
//     //     { name: 'Company A', logo: '../assets/companyA-logo.png', description: 'Leading in technology solutions.' },
//     //     { name: 'Company B', logo: '../assets/companyB-logo.png', description: 'Innovative healthcare provider.' },
//     //     { name: 'Company C', logo: '../assets/companyC-logo.png', description: 'Global retail giant.' },
//     //     { name: 'Company D', logo: '../assets/companyD-logo.png', description: 'Pioneers in automotive industry.' },
//     //     { name: 'Company E', logo: '../assets/companyE-logo.png', description: 'Experts in financial services.' },
//     //     { name: 'Company F', logo: '../assets/companyF-logo.png', description: 'Leaders in consumer electronics.' },
//     //     // Add more companies as needed
//     // ];

//     return (
//         <div className='customers-container'>
//             <h2 className='customers-heading'>Our Esteemed Customers</h2>
//             <div className='customers-grid'>
//              <img src={img} alt="" className='partner-img' />
//             </div>
//         </div>
//     );
// }

// export default Customers;

import React from 'react';
import './Customers.css';
import img1 from '../assets/WPS.jpeg'; // Ensure you have the logo files
import img2 from '../assets/WPS2.jpeg';
import img3 from '../assets/WPS3.jpeg';
import img4 from '../assets/WPS4.jpeg';
import img5 from '../assets/WPS.jpeg';

const Customers = () => {
  return (
    <div className="customers-container">
      <h2 className="customers-heading">Our Esteemed Customers</h2>
      <div className="customers-grid">
        <div className="carousel">
          <div className="carousel-inner">
            <img src={img1} alt="Customer Logo" className="partner-img" />
            <img src={img2} alt="Customer Logo" className="partner-img" />
            <img src={img3} alt="Customer Logo" className="partner-img" />
            <img src={img4} alt="Customer Logo" className="partner-img" />
            <img src={img5} alt="Customer Logo" className="partner-img" />
            {/* Repeat logos if needed */}
            <img src={img1} alt="Customer Logo" className="partner-img" />
            <img src={img2} alt="Customer Logo" className="partner-img" />
            <img src={img3} alt="Customer Logo" className="partner-img" />
            <img src={img4} alt="Customer Logo" className="partner-img" />
            <img src={img5} alt="Customer Logo" className="partner-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
