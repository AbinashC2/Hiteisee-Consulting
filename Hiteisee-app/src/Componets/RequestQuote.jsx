import React from "react";
import { Link } from "react-router-dom";
import "./RequestQuote.css";

const RequestQuote = () => {
  return (
    <div className="contact-container-aboutus-page">
      <div className="contact-content-aboutus-page">
        <div className="contact-heading-aboutus-page">
          <p>Ready to transform your buisness?</p>
        </div>
        <div className="contact-text-aboutus-page">
          <p> Lets Start the Conversation.</p>
        </div>
        <div className="contact-btn-container1">
          <Link to="/Contact">
            <button className="contact-button-aboutus-page">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
