import React from 'react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';


const App = () => {
  return (
    <div className='min-h-screen bg-black flex flex-col relative'>
      {/* Global green ambient blobs — shared across all sections */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[5%]   left-[20%]  w-[700px] h-[700px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-[30%]  right-[20%] w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-[55%]  left-[25%]  w-[650px] h-[650px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-[75%]  right-[25%] w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute top-[95%]  left-[20%]  w-[600px] h-[600px] bg-green-400/10 rounded-full blur-3xl" />
      </div>
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
};

export default App;