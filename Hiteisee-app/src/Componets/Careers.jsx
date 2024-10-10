import React, { useState } from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faEnvelope, faPhone, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Form submitted! We will review your application.');
    };

    return (
        <div className="careers-container">
            {/* <h1 className="page-heading">Career Page</h1> */}
            <div className="careers-banner">
                <h1 className="careers-heading">Career</h1>
                <p className="careers-subheading">Shape your future with us</p>
            </div>

            {/* <div className="careers-content">
                <h1 className="content-heading">Go beyond the expected.</h1>
                <p className="intro-text">
                    A global leader and pioneer in business strategy, Boston Consulting Group (BCG) works closely with giants in the corporate world and society to take on their most important challenges and tap into their greatest opportunities. We go beyond ideas to design solutions and implement meaningful action. We’re dedicated to helping our clients do amazing things and unlocking the potential of those who advance the world. Join us, and you can too.
                </p>

                <div className="positions">
                    <h2 className="positions-heading">Open Positions</h2>
                    <ul className="positions-list">
                        <li>Software Developer</li>
                        <li>Data Analyst</li>
                        <li>Project Manager</li>
                        <li>Marketing Specialist</li>
                    </ul>
                </div>

                <div className="application-form">
                    <h2 className="form-heading">Apply Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Cover Letter</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="5"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="resume">Upload Resume</label>
                            <input
                                type="file"
                                id="resume"
                                name="resume"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Submit Application</button>
                    </form>
                </div>
            </div> */}
                        {/* <div className="career-content">
                <div className="career-heading">
                    <p>Join Our Journey at Hiteisee</p>
                </div>
                <div className="career-text">
                    <p>Ready to make a difference? Explore our current openings and start your journey with Hiteisee. <br />
                        Together, we can transform businesses and create a sustainable future for all.</p>
                </div>
                <div className="career-search">
                    <input type="search" name="search" placeholder='Search job role, department, location' />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </div>

                <div className="career-cards">
                    {[...Array(6)].map((_, index) => (
                        <div className="career-card" key={index}>
                            <h3>Senior Software Engineer</h3>
                            <p>Location: Bhubaneswar</p>
                            <p>Employment Type: Full-time</p>
                            <p>Experience: 2+ years</p>
                            <p>Department: IT and Digital Solutions</p>
                            <button>
                                <Link to="/career-jd">Apply Now</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className="desired-role-container">
    <div className="desired-role-bgi"></div>
    
    <div className="left-text-container">
        <p>Didn’t Find Your Desired Role?</p>
        <div className="underline3"></div>

        <h4>Don’t worry. At Hiteisee, we are always on the lookout for passionate, talented individuals who share our commitment to sustainable business transformation and innovation. While there may not be an open position that matches your specific skills or career goals at this moment, we encourage you to stay connected with us.</h4>
    </div>

    <div className="right-form-container">
        {/* <div className="form">
            <div className="form-heading">
                <h1>Apply for this Position</h1>
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
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder='Contact Number*' required />
                </div>
                <div className="input-cv">
                    <FontAwesomeIcon className="form-input-icons" icon={faPaperclip} />
                    <input type="file" accept=".pdf, .docx" id="file-upload" required />
                    <label htmlFor="file-upload">Attach Your Resume*</label>
                    <p>Attach doc, pdf, docx - less than 5mb</p>
                </div>

                <div className="form-btn">
                    <button className='btn-submit'>Submit</button>
                </div>
            </div>
        </div> */}
                      <div className="form">
                    <div className="form-heading">
                        <h1>Apply for this Position</h1>
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
                        <div className="input-cv">
                            <FontAwesomeIcon className="attach-icon" icon={faPaperclip} />
                            <input type="file" accept=".pdf, .docx" id="file-upload" required />
                            <label htmlFor="file-upload">Attach Your Resume*</label>
                            <p>Attach doc, pdf, docx - less than 5mb</p>
                        </div>

                        <div className="form-btn">
                            <button className='btn-submit'>Submit</button>
                        </div>
                        
                    </div>
                    
                </div>
    </div>
</div>
        </div>
    );
};

export default Careers;
