import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import TestCatalog from './components/TestCatalog.tsx';
import Features from './components/Features.tsx';
import Clients from './components/Clients.tsx';
import Contact from './components/Contact.tsx';
import FloatingCTA from './components/FloatingCTA.tsx';

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
