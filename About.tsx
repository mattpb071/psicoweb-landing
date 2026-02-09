import React from 'react';
import { Brain, UserCheck, Target, Heart, Briefcase, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="que-es" className="py-24 relative bg-fixed bg-about-pattern bg-cover bg-center">
      {/* Light overlay to ensure text contrast inside the glass card, but keeping the image visible */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass rounded-3xl p-8 md:p-16 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col items-center text-center">
            
            <div className="inline-block px-4 py-1 rounded-full bg-pw-light/20 text-pw-dark font-bold text-sm mb-4 tracking-wider uppercase">
              ¿Por qué elegirnos?
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-2">
              Facilitamos el proceso de selección
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-pw-light mb-8 drop-shadow-sm tracking-widest uppercase font-sans">
              ¡A TRAVÉS DE PRUEBAS PSICOMÉTRICAS!
            </h3>

            <p className="text-lg text-slate-700 mb-12 leading-relaxed max-w-3xl font-medium">
              PsicoWeb es una aplicación web que le facilita a su empresa el proceso de selección de personal a través de pruebas psicométricas diseñadas para medir con <span className="font-bold text-pw-dark">precisión científica</span>:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mb-12">
              {[
                { icon: <Briefcase className="w-8 h-8 text-white" />, text: "Adaptación persona-puesto", color: "bg-blue-500" },
                { icon: <Brain className="w-8 h-8 text-white" />, text: "Inteligencia (IQ, IE)", color: "bg-purple-500" },
                { icon: <UserCheck className="w-8 h-8 text-white" />, text: "Personalidad", color: "bg-teal-500" },
                { icon: <Heart className="w-8 h-8 text-white" />, text: "Valores e Intereses", color: "bg-red-500" },
                { icon: <Users className="w-8 h-8 text-white" />, text: "Comportamiento", color: "bg-orange-500" },
                { icon: <Target className="w-8 h-8 text-white" />, text: "Competencias", color: "bg-indigo-500" },
              ].map((item, idx) => (
                <div key={idx} className="group flex flex-col items-center p-6 bg-white/80 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className={`mb-4 p-4 rounded-full shadow-md ${item.color} transform group-hover:rotate-12 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="font-bold text-slate-700 text-lg">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 text-6xl text-pw-light opacity-30 font-serif">"</div>
              <p className="text-slate-600 text-xl italic font-light max-w-3xl px-8">
                Cada uno de estos test proyectan información detallada sobre los candidatos haciendo más fácil, completa y efectiva la elección de su personal.
              </p>
              <div className="absolute -right-4 -bottom-4 text-6xl text-pw-light opacity-30 font-serif">"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;