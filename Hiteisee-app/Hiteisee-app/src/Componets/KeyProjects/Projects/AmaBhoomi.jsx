import React from 'react'
import './AmaBhoomi.css'
import Logo from '../../../assets/career.svg'
import AmaBhoomiLogo from '../../../assets/corporate.jpg'

export default function AmaBhoomi() {
  return (
    <div className='project-erp-container'> 
        <div className="project-img">
            <img src={Logo} alt="#park-img" />
            <div className="ama-bhoomi-logo">
                <img src={AmaBhoomiLogo} alt="ama-bhoomi-logo" />
            </div>
        </div>
        <div className="project-text">
            <p className="project-title">AMA BHOOMI - Open Space Management System</p>
            <p className="project-desc">AMA BHOOMI is a comprehensive web application designed to efficiently manage and streamline the reservation of public recreational spaces, such as parks, playgrounds, multipurpose grounds, and event venues. This system enables citizens to easily locate and book facilities near them, while also tracking their activities and interactions with these spaces. At its core, AMA BHOOMI serves both users and facility administrators, offering a seamless interface for citizens to access well-maintained spaces and for administrators to manage these assets effectively.
            The platform addresses the growing demand for accessible recreational areas, helping foster community well-being and promoting physical activities.</p>
        </div>
  </div>
  )
}
