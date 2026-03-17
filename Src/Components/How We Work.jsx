import React from 'react';
import './HowWeWork.css';

function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'DISCOVERY',
      description: 'We start by understanding what your brand is already doing — and what your audience is already responding to.'
    },
    {
      number: '02',
      title: 'DIAGNOSIS',
      description: 'We identify the gap — between what you mean to say and what your audience actually hears. And what they expect.'
    },
    {
      number: '03',
      title: 'STRATEGY',
      description: 'We build the positioning framework, messaging architecture, and brand voice that closes that gap.'
    },
    {
      number: '04',
      title: 'EXECUTION',
      description: 'We implement across social, campaigns, and brand identity — with the strategy as the constant reference point.'
    }
  ];

  return (
    <section id="process" className="how-we-work">
      <div className="container">
        <div className="section-header">
          <h2>HOW WE WORK</h2>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="step-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
