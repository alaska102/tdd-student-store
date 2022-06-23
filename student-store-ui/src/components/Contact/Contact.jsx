import * as React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <h3 className="contact-title">Contact Us</h3>
        <div className="contact-box">
          <div className="contact-text">
            <div className="contact-line">
              <p className="contact-linetext">Email: code@path.org</p>
            </div>
            <div className="contact-line">
              <p className="contact-linetext">Phone: 1-800-CODEPATH</p>
            </div>
            <div className="contact-line">
              <p className="contact-linetext">Address: 123 Code Path, San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}