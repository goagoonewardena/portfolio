import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const APP = () => {
  return (
    <div className ='min-h-screen bg-black'>
      <Navbar />
      <main>
        <Hero/>
      </main>
    </div>
  )
}

export default APP;