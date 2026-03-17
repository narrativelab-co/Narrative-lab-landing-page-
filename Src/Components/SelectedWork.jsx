import React from 'react';
import './SelectedWork.css';

function SelectedWork() {
  const work = [
    {
      category: 'PREMIUM SKINCARE LABEL',
      description: 'Repositioned from product-first to lifestyle-first. Rebuilt messaging architecture and social strategy from the ground up.'
    },
    {
      category: 'LIFESTYLE HOSPITALITY BRAND',
      description: 'Campaign strategy and content direction. Built the emotional hook that converted first-time visitors into loyal regulars.'
    },
    {
      category: 'FASHION E-COMMERCE BRAND',
      description: 'Social media strategy and brand voice for a brand competing in an oversaturated market. Defined the distinct lane.'
    },
    {
      category: 'LIFESTYLE CONSUMER BRAND',
      description: 'Full brand identity and messaging framework. Created the positioning language that separated them from direct competitors.'
    }
  ];

  return (
    <section id="work" className="selected-work">
      <div className="container">
        <div className="section-header">
          <h2>SELECTED WORK</h2>
          <p>BRAND NAMES WITHHELD BY AGREEMENT. CATEGORIES AND OUTCOMES ARE ACCURATE.</p>
        </div>
        <div className="work-grid">
          {work.map((item, index) => (
            <div key={index} className="work-card">
              <h3>{item.category}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedWork;
