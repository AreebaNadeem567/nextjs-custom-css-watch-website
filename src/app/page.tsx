import React from 'react'
import About from './components/About'
import Watches from './components/Products'
import Contact from './components/Contact'
import Hero from './components/Hero'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Watches />
      <Contact />
    </div>
  )
}

export default Home
