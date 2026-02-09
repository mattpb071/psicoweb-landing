import React from 'react';
import { ChevronDown, ArrowRight, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-fixed bg-hero-pattern bg-cover bg-center">
      
      {/* Heavy Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-pw-dark/95 via-pw-dark/80 to-pw-dark/60 z-0"></div>
      
      {/* Decorative blurred blobs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pw-light opacity-20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 opacity-20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20 pb-32">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide leading-tight drop-shadow-lg">
            <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
              OPTIMICE SU SELECCIÓN DE
            </span>
            <span className="block text-pw-light font-extrabold mb-4 drop-shadow-xl relative inline-block">
              PERSONAL
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-pw-light opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.0001 3.50002 65.4998 0.500024 99.9998 2.49997C134.5 4.49991 169.999 7.49997 197.999 5.49997" stroke="currentColor" strokeWidth="3"></path></svg>
            </span>
          </h1>
          
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-100 leading-relaxed drop-shadow-md">
            La plataforma integral que transforma la gestión de Recursos Humanos. 
            Evalúe candidatos con <span className="text-pw-light font-bold">precisión científica</span>, obtenga resultados inmediatos y 
            tome las mejores decisiones.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full sm:w-auto bg-pw-light text-pw-dark font-extrabold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(77,208,225,0.5)] hover:shadow-[0_0_30px_rgba(77,208,225,0.8)] transition-all transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Solicitar Información <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3.5 px-8 rounded-full text-lg hover:bg-white hover:text-pw-dark transition-all flex items-center justify-center backdrop-blur-sm"
            >
              Conocer Catálogo <FileText size={20} className="ml-2 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-28 animate-bounce text-white drop-shadow-md hidden md:block z-10">
        <ChevronDown size={40} strokeWidth={3} />
      </div>

      {/* Animated Wave Divider */}
      <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          {/* Colors match bg-slate-50 (#f8fafc) which is approx 248, 250, 252 */}
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(248, 250, 252, 0.7)" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(248, 250, 252, 0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(248, 250, 252, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#f8fafc" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;