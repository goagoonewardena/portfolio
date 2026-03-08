
import React, { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../../utils/constants';
import { scrollToSection, useScrollSpy } from '../../hooks/useScrollSpy';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${isScrolled 
        ? 'bg-black/60 backdrop-blur-lg' 
        : 'bg-transparent'}`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className='flex items-center gap-3'>
            <Code className='w-7 h-7 text-primary' />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold text-primary tracking-wide hover:opacity-80 transition-opacity "
              aria-label="home"
            >
              {PERSONAL_INFO.name.split(' ')[0]}
            </button>
          </div>
          {/* Desktop Navigation */}
          <nav className= "hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-white/80 hover:text-primary'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav> 
          {/* CTA Button*/}   
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => handleNavClick('contact')}
              className="px-7 py-2 bg-white text-black font-semibold text-base rounded-xl border border-white shadow hover:bg-primary hover:text-black transition-all duration-300"
            >
              Hire Me
            </button>  
          </div>
          {/* Mobile Menu Button */} 
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-primary transition-colors"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeSection === link.id
                ? 'text-primary bg-white/10'
                : 'text-white/80 hover:text-primary hover:bg-white/5'
            }`}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNavClick('contact')}
          className="w-full px-7 py-3 bg-white text-black font-semibold text-base rounded-xl border border-white shadow hover:bg-primary hover:text-black transition-all duration-300 mt-2"
        >
          Hire Me
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
