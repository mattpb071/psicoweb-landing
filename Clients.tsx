import React from 'react';
import { CLIENT_LIST } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clientes" className="relative py-16 bg-slate-50 border-b border-slate-200 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pw-dark mb-1">
          CLIENTES QUE NOS RESPALDAN
        </h2>
        <div className="h-1 w-20 bg-pw-light mx-auto my-3 rounded-full"></div>
        <h3 className="text-xl text-slate-500 font-bold tracking-widest">EN COSTA RICA</h3>
      </div>

      {/* Glass container for the slider */}
      <div className="relative w-full overflow-hidden bg-white/50 backdrop-blur-sm py-8 shadow-inner">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-scroll items-center">
            {/* We duplicate the list to ensure the loop is seamless */}
            {[...CLIENT_LIST, ...CLIENT_LIST].map((client, index) => {
              return (
                <div 
                  key={index} 
                  className="mx-4 md:mx-8 flex items-center justify-center px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-lg hover:border-pw-light hover:scale-105 transition-all whitespace-nowrap cursor-default group"
                >
                  <span className="text-slate-600 font-bold text-lg md:text-xl group-hover:text-pw-dark transition-colors">
                    {client}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
      
      {/* Inline styles for the keyframes animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;