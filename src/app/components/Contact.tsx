"use client"

import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with desired options
  }, []);

  return (
    <div id="contact" className="contact-container" data-aos="fade-up">
      <h1 data-aos="fade-right">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group" data-aos="fade-right">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit" className="submit-btn" data-aos="zoom-in">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
