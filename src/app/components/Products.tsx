"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
  const watches = [
    { 
      name: 'Luxury Watch', 
      description: 'A sleek, elegant watch for any occasion.', 
      price: '$250',
      image: 'https://i.pinimg.com/736x/36/86/8e/36868e94e87697075e0feb2e36a95bdd.jpg'
    },
    { 
      name: 'Sport Watch', 
      description: 'Durable and stylish, designed for athletes.', 
      price: '$120',
      image: 'https://i.pinimg.com/736x/ea/ff/1d/eaff1da93febed056ab31f61289087aa.jpg'
    },
    { 
      name: 'Smart Watch', 
      description: 'Stay connected with this feature-packed smartwatch.', 
      price: '$180',
      image: 'https://i.pinimg.com/736x/e0/ca/24/e0ca243085ac58f7fe309292d541b2c9.jpg'
    },
    { 
      name: 'Casual Watch', 
      description: 'Perfect for daily wear with a minimalist design.', 
      price: '$75',
      image: 'https://i.pinimg.com/736x/3a/14/cc/3a14ccf752d4d9c31ada48afcc0014b3.jpg'
    },
    { 
      name: 'Vintage Watch', 
      description: 'A timeless classic with a rich history.', 
      price: '$300',
      image: 'https://i.pinimg.com/736x/ca/d3/19/cad319c78ad3850c690cf4efaf22b0ee.jpg'
    },
    { 
      name: 'Eco-Friendly Watch', 
      description: 'Sustainable design with eco-friendly materials.', 
      price: '$85',
      image: 'https://i.pinimg.com/736x/74/63/55/74635506bfa67a0b552a6129dadf6082.jpg'
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initializes AOS with a 1000ms animation duration
  }, []);

  return (
    <div id="watches">
      <div id="products" className="content">
        <h1 className="heading" data-aos="fade-up">
          Explore Our Premium Watch Collection
        </h1>
        <div className="grid">
          {watches.map((watch, index) => (
            <div key={index} className="card" data-aos="fade-up">
              <Image
                src={watch.image} 
                alt={watch.name} 
                width={300} 
                height={200}
                className="image"
                unoptimized={true}
              />
              <h2 className="watchName">{watch.name}</h2>
              <p className="description">{watch.description}</p>
              <p className="price">{watch.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;