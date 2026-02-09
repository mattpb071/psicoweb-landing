import React from 'react';
import { CheckCircle, Globe, Zap, FileText, Layout, Target, User, Video } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <>
      {/* Part 1: PsicoWeb PLUS (Science/Tech Background) */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-pw-dark">
        {/* Tech Background Image with strong overlay */}
        <div className="absolute inset-0 bg-tech-pattern bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-pw-dark/95 via-pw-dark/90 to-[#1A3038]/80"></div>
        
        {/* Animated Particles/Grid */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] animate-pulse-slow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white drop-shadow-lg leading-tight">
              Conoce <span className="text-pw-light font-extrabold font-sans text-5xl md:text-6xl ml-2 drop-shadow-[0_0_10px_rgba(77,208,225,0.8)] tracking-tight">PsicoWeb PLUS</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Features List */}
              <div className="space-y-8">
                {[
                  { text: "28 Test Científicamente validados", icon: <CheckCircle className="text-pw-light w-8 h-8" /> },
                  { text: "Aplicables desde cualquier parte del mundo", icon: <Globe className="text-pw-light w-8 h-8" /> },
                  { text: "No necesitas ninguna configuración de TI", icon: <Zap className="text-pw-light w-8 h-8" /> },
                  { text: "Informes inmediatos en 5 diferentes formatos", icon: <FileText className="text-pw-light w-8 h-8" /> },
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-center space-x-6 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-pw-light/50 transition-all duration-300 transform hover:translate-x-2">
                    <div className="flex-shrink-0 p-3 bg-pw-light/10 rounded-full group-hover:bg-pw-light group-hover:text-pw-dark transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xl font-medium text-slate-100 group-hover:text-white">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Holographic Card Effect */}
              <div className="relative perspective-1000">
                 {/* Glowing blob behind */}
                 <div className="absolute inset-0 bg-pw-light rounded-full blur-[80px] opacity-20 animate-pulse-slow"></div>
                 
                 <div className="glass-dark p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-pw-light/20 relative transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-pw-light to-cyan-600 text-pw-dark font-extrabold px-6 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                    RESULTADOS INMEDIATOS
                  </div>
                  <h3 className="text-2xl font-bold mb-8 text-center text-white">Reportes Disponibles</h3>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="text-center p-5 bg-white/5 rounded-2xl hover:bg-pw-light/20 transition-colors border border-white/5 cursor-pointer group">
                        <Layout className="mx-auto text-pw-light mb-3 group-hover:scale-110 transition-transform" size={40} />
                        <p className="text-sm font-bold text-slate-200">Clásico Psicométrico</p>
                     </div>
                     <div className="text-center p-5 bg-white/5 rounded-2xl hover:bg-pw-light/20 transition-colors border border-white/5 cursor-pointer group">
                        <FileText className="mx-auto text-pw-light mb-3 group-hover:scale-110 transition-transform" size={40} />
                        <p className="text-sm font-bold text-slate-200">Reporte Integrado</p>
                     </div>
                     <div className="text-center p-5 bg-white/5 rounded-2xl hover:bg-pw-light/20 transition-colors border border-white/5 cursor-pointer group">
                        <Target className="mx-auto text-pw-light mb-3 group-hover:scale-110 transition-transform" size={40} />
                        <p className="text-sm font-bold text-slate-200">Psicométrico Por Competencia</p>
                     </div>
                     <div className="text-center p-5 bg-white/5 rounded-2xl hover:bg-pw-light/20 transition-colors border border-white/5 cursor-pointer group">
                        <User className="mx-auto text-pw-light mb-3 group-hover:scale-110 transition-transform" size={40} />
                        <p className="text-sm font-bold text-slate-200">Resumen Ejecutivo</p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Wave Divider */}
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
          <defs>
            <path id="gentle-wave-features" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave-features" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlinkHref="#gentle-wave-features" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlinkHref="#gentle-wave-features" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlinkHref="#gentle-wave-features" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </section>

      {/* Part 2: Modules (Clean White Background) */}
      <section className="py-24 bg-white text-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-pw-light font-bold tracking-widest uppercase text-sm">Ecosistema Integral</span>
            <h3 className="text-3xl md:text-5xl font-bold mt-2 text-pw-dark">Módulos Complementarios</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            
            <div className="group bg-white p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-blue-200">
              <div className="h-20 w-20 mx-auto flex items-center justify-center mb-6 bg-blue-50 rounded-full group-hover:bg-blue-600 transition-colors duration-500">
                 <span className="text-2xl font-bold text-blue-600 group-hover:text-white">TPS</span>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">Test de Honestidad</h4>
              <p className="text-center text-sm text-slate-500 leading-relaxed">Evaluación de ética e integridad personal para puestos de confianza.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-blue-900/30">
              <div className="h-20 w-20 mx-auto flex items-center justify-center mb-6 bg-blue-50 rounded-full group-hover:bg-blue-900 transition-colors duration-500">
                 <span className="text-xl font-bold text-blue-900 group-hover:text-white">LPC</span>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">Perfil por Competencias</h4>
              <p className="text-center text-sm text-slate-500 leading-relaxed">Módulo de evaluación y entrevistas por competencias personalizadas.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-cyan-200">
              <div className="h-20 w-20 mx-auto flex items-center justify-center mb-6 bg-cyan-50 rounded-full group-hover:bg-cyan-500 transition-colors duration-500">
                 <Video size={32} className="text-cyan-500 group-hover:text-white" />
              </div>
              <h4 className="text-center font-bold text-lg mb-2">Video Entrevista</h4>
              <p className="text-center text-sm text-slate-500 leading-relaxed">Optimiza recursos y tiempo con entrevistas pre-grabadas y asíncronas.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-xl shadow-slate-200/60 border border-slate-100 hover:border-blue-400">
              <div className="h-20 w-20 mx-auto flex items-center justify-center mb-6 bg-blue-50 rounded-full group-hover:bg-blue-400 transition-colors duration-500">
                 <span className="text-xl font-bold text-blue-400 group-hover:text-white">WEB</span>
              </div>
              <h4 className="text-center font-bold text-lg mb-2">ConociWeb</h4>
              <p className="text-center text-sm text-slate-500 leading-relaxed">Evalúa el conocimiento técnico específico con datos claros y objetivos.</p>
            </div>

          </div>
          
          {/* Quote Section */}
          <div className="relative text-center max-w-5xl mx-auto mt-12 px-8 py-12 bg-slate-50 rounded-3xl border border-slate-100 shadow-inner">
             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pw-light text-pw-dark p-3 rounded-full shadow-lg">
                <Target size={24} />
             </div>
             <p className="text-xl md:text-3xl font-light text-slate-700 italic leading-relaxed">
              "¿Necesitas evaluar a tus candidatos de forma más precisa y detallada para identificar el talento adecuado?"
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;