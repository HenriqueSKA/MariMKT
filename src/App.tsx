import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { PricingPlans } from './components/PricingPlans';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <PricingPlans />
        <Contact />
      </main>
    </div>
  );
}

export default App;