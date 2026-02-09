import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TestCatalog from './components/TestCatalog';
import Features from './components/Features';
import Clients from './components/Clients';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <About />
        <TestCatalog />
        <Features />
      </main>
      <Contact />
      <FloatingCTA />
    </div>
  );
}

export default App;