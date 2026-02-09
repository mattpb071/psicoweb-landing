import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get positions
      const hero = document.getElementById('inicio');
      const contact = document.getElementById('contacto');
      
      if (!hero || !contact) return;

      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Logic: Show if passed hero, hide if reached contact form
      if (heroBottom < 0 && contactTop > windowHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-pw-light text-pw-dark font-extrabold py-4 px-6 rounded-full shadow-2xl hover:scale-110 hover:shadow-cyan-400/60 transition-all duration-300 animate-fade-in-up flex items-center gap-2 border-2 border-white"
    >
      <span>¡SOLICITAR DEMO GRATIS!</span>
      <ArrowUpRight size={24} />
    </button>
  );
};

export default FloatingCTA;