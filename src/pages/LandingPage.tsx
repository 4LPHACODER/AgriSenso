import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
const LandingPage = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
    </div>;
};
export default LandingPage;