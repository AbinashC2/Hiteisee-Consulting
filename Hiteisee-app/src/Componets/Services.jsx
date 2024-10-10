import React from "react";
import "./Services.css";
import ITITES from '../assets/IT ITES.svg';
import SmartInfra from '../assets/smart infra.svg';
import BusinessAdvisory from '../assets/business advisory.svg';

const Services = () => {

  return (
    <div className="services-container">
      <div className="service-banner">
        <div className="contact-us-heading">
          <h1>Services</h1>
        </div>
      </div>

      <div className="services-box">
        <div className="services-box-header">
          <div className="services-box-header-heading">
            <p>We offer a comprehensive range of services</p>
          </div>
          <div className="services-box-header-text">
            <p>Empower businesses to embrace innovation, optimize operations, and achieve sustainable growth with Hiteisee.</p>
          </div>
        </div>

        <div className='service-section-container1'>
          <div className="services1">
            <div className="cards">
              <div className="card">
                <div className="card-img">
                  <img src={ITITES} alt="IT, ITES & IOT" />
                </div>
                <div className="card-title">
                  IT, ITES & IOT
                </div>
                <div className="card-desc">
                  <p>Holistic digital transformation combining design & development of apps & websites, data analytics, and smart device connectivity.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={SmartInfra} alt="Smart Infrastructure" />
                </div>
                <div className="card-title">
                  Smart Infrastructure
                </div>
                <div className="card-desc">
                  <p>Integration of advanced technologies to optimize infrastructure management, enhance efficiency, and improve sustainability.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={BusinessAdvisory} alt="Business Advisory" />
                </div>
                <div className="card-title">
                  Strategy Consulting Services
                </div>
                <div className="card-desc">
                  <p>Management of Organizational Values
                    Redefining business strategies.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-img">
                  <img src={BusinessAdvisory} alt="Business Advisory" />
                </div>
                <div className="card-title">
                  Strategy Consulting Services
                </div>
                <div className="card-desc">
                  <p>Management of Organizational Values
                    Redefining business strategies.</p>
                </div>
              </div>


              <div className="card">
                <div className="card-img">
                  <img src={BusinessAdvisory} alt="Business Advisory" />
                </div>
                <div className="card-title">
                  Strategy Consulting Services
                </div>
                <div className="card-desc">
                  <p>Management of Organizational Values
                    Redefining business strategies.</p>
                </div>
              </div>


              <div className="card">
                <div className="card-img">
                  <img src={BusinessAdvisory} alt="Business Advisory" />
                </div>
                <div className="card-title">
                  Strategy Consulting Services
                </div>
                <div className="card-desc">
                  <p>Management of Organizational Values
                    Redefining business strategies.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-img">
                  <img src={BusinessAdvisory} alt="Business Advisory" />
                </div>
                <div className="card-title">
                  Strategy Consulting Services
                </div>
                <div className="card-desc">
                  <p>Management of Organizational Values
                    Redefining business strategies.</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
