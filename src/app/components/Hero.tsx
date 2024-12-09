"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => AOS.refresh();
  }, []);

  return (
    <div id="home" className="bottom-sec">
      <div className="left-sec" data-aos="fade-left">
        <h1>Ultimate Fitness Smart Watch</h1>
        <p>
          Stay connected and track your fitness with the Ultimate Fitness Smart Watch.
          With real-time heart rate monitoring, step tracking, and notifications at your wrist,
          it&apos;s the perfect companion for your active lifestyle.
        </p>
        <Link href="#products" aria-label="Order Now Button">
          <button>Order Now</button>
        </Link>
        <div className="down-btn">
          <div className="under-btn"></div>
        </div>
      </div>
      <div className="right-sec" data-aos="fade-right">
        <Image
          src="/watch.jpg" // Corrected path
          alt="Smart Watch"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Hero;