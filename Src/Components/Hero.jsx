import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            YOUR BRAND HAS A STORY.<br />
            WE FIND IT.
          </h1>
          <p className="hero-subtitle">
            Brand strategy studio in Berlin. We help you articulate who you are, so your audience actually understands.
          </p>
          <button onClick={scrollToContact} className="btn hero-cta">
            START A CONVERSATION
          </button>
        </div>
        <div className="hero-visual">
          <div className="visual-element">NARRATIVE LAB</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
