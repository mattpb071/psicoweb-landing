import React, { useState } from 'react';
import { TEST_DATA } from '../constants';
import { Clock, User, Layers, Search, BarChart } from 'lucide-react';
import { TestCategory } from '../types';

const TestCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(TEST_DATA[0].id);

  const activeData: TestCategory | undefined = TEST_DATA.find(c => c.id === activeCategory);

  return (
    <section id="catalogo" className="py-24 bg-slate-50 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100 rounded-full blur-[120px] opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-pw-dark mb-4 tracking-tight">Nuestro Catálogo</h2>
          <div className="w-24 h-1 bg-pw-light mx-auto rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-600 font-medium mt-6">
             <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl border-b-4 border-pw-light w-full md:w-48 transform hover:-translate-y-1 transition-transform">
               <span className="text-5xl font-bold text-pw-dark mb-2">23</span>
               <span className="text-sm uppercase tracking-wider font-bold text-slate-400">Psicométricas</span>
             </div>
             <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl border-b-4 border-blue-500 w-full md:w-48 transform hover:-translate-y-1 transition-transform">
               <span className="text-5xl font-bold text-blue-500 mb-2">1</span>
               <span className="text-sm uppercase tracking-wider font-bold text-slate-400">Clínica</span>
             </div>
             <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl border-b-4 border-purple-500 w-full md:w-48 transform hover:-translate-y-1 transition-transform">
               <span className="text-5xl font-bold text-purple-500 mb-2">4</span>
               <span className="text-sm uppercase tracking-wider font-bold text-slate-400">Competencias</span>
             </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-24 z-30 py-4">
          {TEST_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 shadow-md ${
                activeCategory === cat.id
                  ? 'bg-pw-dark text-pw-light ring-4 ring-pw-light/30 transform scale-105'
                  : 'bg-white text-slate-500 hover:bg-slate-100 hover:text-pw-dark'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        {activeData && (
          <div className="animate-fade-in-up">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-pw-dark mb-2">{activeData.title}</h3>
              <p className="text-slate-500 text-lg">{activeData.description}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {activeData.tests.map((test, index) => (
                <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] flex-grow-0 group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col border border-slate-100 relative">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pw-light/20 to-transparent rounded-bl-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-pw-light/10 transition-colors">
                            <BarChart size={24} className="text-pw-dark group-hover:text-pw-light transition-colors" />
                        </div>
                    </div>

                    <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-pw-light transition-colors">{test.name}</h4>
                    {test.subtitle && <p className="text-xs text-slate-500 font-bold mb-4 uppercase tracking-wider">{test.subtitle}</p>}
                    
                    <div className="space-y-4 mt-6">
                      <div className="relative pl-4 border-l-2 border-slate-200">
                        <span className="flex items-center text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">
                          <Search size={12} className="mr-1" /> Evalúa
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">{test.evaluates}</p>
                      </div>

                      <div className="relative pl-4 border-l-2 border-slate-200">
                        <span className="flex items-center text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">
                          <User size={12} className="mr-1" /> Autor
                        </span>
                        <p className="text-sm text-slate-600">{test.author}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 px-8 py-5 border-t border-slate-100 mt-auto group-hover:bg-pw-dark/5 transition-colors">
                    <div className="flex justify-between items-start text-xs text-slate-500 mb-3">
                       <span className="flex items-center font-bold bg-white px-3 py-1 rounded-full shadow-sm"><Clock size={14} className="mr-1 text-pw-light" /> {test.time}</span>
                    </div>
                    <div className="text-xs text-slate-500">
                        <span className="flex items-center font-bold mb-1 text-pw-dark"><Layers size={14} className="mr-1" /> Niveles Recomendados:</span>
                        <p className="line-clamp-2 hover:line-clamp-none transition-all cursor-help">{test.levels}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestCatalog;