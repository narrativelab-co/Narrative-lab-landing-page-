import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">NARRATIVE LAB</div>
        
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button onClick={() => scrollToSection('services')}>Services</button>
          <button onClick={() => scrollToSection('work')}>Work</button>
          <button onClick={() => scrollToSection('process')}>Process</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
