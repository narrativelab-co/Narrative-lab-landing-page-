import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import SelectedWork from './components/SelectedWork';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <SelectedWork />
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
