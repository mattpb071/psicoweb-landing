import React from 'react';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          
          {/* Spacer to balance the flex container if needed, but absolute positioning is safer for true centering */}
          <div className="flex-1"></div>

          {/* Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => scrollTo('inicio')}>
             <Logo />
             <div className="hidden md:block text-center mt-1">
               <span className="text-[10px] text-slate-500 font-medium tracking-[0.2em] uppercase">Costa Rica</span>
             </div>
          </div>
          
          {/* CTA Button on the right */}
          <div className="flex-1 flex justify-end">
            <button 
              onClick={() => scrollTo('contacto')} 
              className="bg-pw-light text-white px-5 py-2 rounded-full font-bold hover:bg-cyan-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Solicitar Demo
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;