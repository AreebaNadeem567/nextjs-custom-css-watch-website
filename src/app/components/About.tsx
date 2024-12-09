"use client"

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        <div className="caption">
          <h2 className="about-heading" data-aos="fade-up">
            About Watch World
          </h2>
          <div className="about-box" data-aos="fade-right">
            <div className="paragraph-box">
              <p>
                Watch World is your ultimate destination for premium watches,
                offering a curated collection of timeless pieces. Whether
                you are looking for luxury, sports, or everyday wear, we have
                something for every style. Explore our selection and find the
                perfect watch to complement your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
