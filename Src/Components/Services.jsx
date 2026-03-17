import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      number: '01',
      title: 'BRAND STRATEGY',
      description: 'Positioning, messaging architecture, audience clarity, and brand voice. The foundation everything else is built on.'
    },
    {
      number: '02',
      title: 'BRAND IDENTITY',
      description: 'Not visuals — the articulation of who your brand is. Personality, tone, and the language that makes you recognisable.'
    },
    {
      number: '03',
      title: 'SOCIAL MEDIA',
      description: 'Strategic, consistent, conversion-focused presence. We manage the narrative while you manage the business.'
    },
    {
      number: '04',
      title: 'CAMPAIGNS',
      description: 'Launch campaigns and brand activations built around a clear story and a measurable outcome.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>WHAT WE DO</h2>
          <p>FOUR SERVICES. ONE CLEAR GOAL: YOUR BRAND CONVERTS.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
