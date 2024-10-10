import React, { useState } from 'react';
import './Careers.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faEnvelope, faPhone, faPaperclip } from '@fortawesome/free-solid-svg-icons';

const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
    });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('email', formData.email);
        formPayload.append('phone', formData.phone);
        formPayload.append('resume', formData.resume);

        try {
            const response = await fetch('http://localhost:8000/send-email-hr', {
                method: 'POST',
                body: formPayload,
            });

            if (response.ok) {
                setSubmissionStatus('Form submitted successfully! We will review your application.');
                setFormData({ name: '', email: '', phone: '', resume: null }); // Reset form
            } else {
                setSubmissionStatus('Failed to submit form. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="careers-container">
            <div className="careers-banner">
            <div className="contact-us-heading">
                <h1>Career</h1>
            </div>
            </div>

            <div className="career-content">
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
            </div>

            <div className="desired-role-container">
                <div className="desired-role-bgi"></div>
                <div className="left-text-container">
                    <p>Didn’t Find Your Desired Role?</p>
                    <div className="underline3"></div>
                    <h4>Don’t worry. At Hiteisee, we are always on the lookout for passionate, talented individuals who share our commitment to sustainable business transformation and innovation. While there may not be an open position that matches your specific skills or career goals at this moment, we encourage you to stay connected with us.</h4>
                </div>

                <div className="right-form-container">
                    <div className="form">
                        <div className="form-heading">
                            <h1>Apply for this Position</h1>
                        </div>
                        <div className="form-inputs">
                            <div className="input-name">
                                <FontAwesomeIcon className='form-input-icons' icon={faUser} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder='Your Full Name*'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-mail">
                                <FontAwesomeIcon className='form-input-icons' icon={faEnvelope} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Your Email*'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-phone">
                                <FontAwesomeIcon className='form-input-icons' icon={faPhone} />
                                <input
                                    type="tel"
                                    name="phone"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    placeholder='Contact Number*'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-cv">
                                <FontAwesomeIcon className="attach-icon" icon={faPaperclip} />
                                <input
                                    type="file"
                                    accept=".pdf, .docx"
                                    id="file-upload"
                                    name="resume"
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="file-upload">Attach Your Resume*</label>
                                <p>Attach doc, pdf, docx - less than 5mb</p>
                            </div>

                            <div className="form-btn">
                                <button className='btn-submit' onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                    {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
                </div>
            </div>
        </div>
    );
};

export default Careers;