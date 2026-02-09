import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2, Loader2, ArrowDown } from 'lucide-react';
import { Logo } from './Logo';

// IMPORTANTE: Reemplaza esta URL con la URL de tu Webhook de Antigravity
const ANTIGRAVITY_WEBHOOK_URL = "https://mattpb071--pce-webhook-receive-form-data.modal.run";

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  
  const initialFormState = {
    nombre: '',
    email: '',
    telefono: '',
    puesto: '',
    empresa: '',
    domicilio: '',
    comentarios: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Limpiar el teléfono: Eliminar todo lo que no sea número (guiones, espacios, parentesis)
      const cleanPhone = formData.telefono.replace(/\D/g, '');
      
      // 2. Formatear datos finales con el prefijo +506
      const payload = {
        ...formData,
        telefono: `+506 ${cleanPhone}`, // Agregamos el prefijo automáticamente
        origen: 'Landing Page PsicoWeb',
        fecha: new Date().toISOString()
      };

      // Enviar datos al workflow de Antigravity
      const response = await fetch(ANTIGRAVITY_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok || response.status === 200 || response.status === 201) {
        // Éxito
        setFormData(initialFormState); // Limpiar formulario
        
        // Mostrar notificación Toast
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000); // 3 segundos

      } else {
        throw new Error('Error al conectar con el servidor');
      }

    } catch (error) {
      console.error("Error enviando formulario:", error);
      alert("Hubo un error al enviar su solicitud automáticamente. Por favor intente nuevamente o contáctenos directamente por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contacto" className="relative pt-24 pb-12 bg-fixed bg-city-pattern bg-cover bg-center">
      {/* Dark Blue/Slate Overlay */}
      <div className="absolute inset-0 bg-pw-dark/90 z-0"></div>
      
      {/* Urgency Banner */}
      <div className="bg-red-500/90 backdrop-blur text-white font-bold text-center py-3 px-4 absolute top-0 w-full animate-pulse shadow-lg z-10">
        ¡Cupos limitados para nuevos clientes este mes! ¡No se quede sin su espacio!
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Left Column: Information */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Acierta en cada contratación con <span className="text-pw-light relative inline-block">
                  Psicoweb Plus
                  <svg className="absolute w-full h-2 bottom-1 left-0 text-pw-light opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                </span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-xl text-slate-100 leading-relaxed font-light">
                  <strong className="text-white block text-2xl mb-2">¿Contratar al candidato ideal?</strong>
                  Ahora es más fácil que nunca. Con Psicoweb Plus, optimiza tu proceso de selección con evaluaciones en línea precisas y eficientes.
                </p>
                
                <p className="text-lg text-pw-light font-bold italic bg-white/5 p-4 rounded-xl border-l-4 border-pw-light">
                  ¡Prueba gratis nuestra herramienta por 7 días y descubre cómo mejorar tu reclutamiento!
                </p>

                <div className="text-sm text-slate-400 font-medium tracking-wide">
                  Evaluaciones personalizadas · Reportes automáticos y detallados · Selección rápida y sin sesgos.
                </div>

                <div className="flex items-center gap-4 group">
                  <p className="text-2xl text-white font-bold flex items-center gap-3">
                    <span className="w-12 h-1 bg-pw-light rounded-full"></span>
                    Solicita tu prueba gratuita ahora.
                  </p>
                  <ArrowDown className="text-pw-light animate-bounce" size={32} strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Form */}
          <div className="glass rounded-3xl p-8 lg:p-10 shadow-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">Formulario de Solicitud</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Nombre Completo</label>
                <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="Su nombre" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">E-Mail</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="correo@empresa.com" />
                </div>
                
                {/* Custom Phone Input Structure */}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">TELÉFONO (WHATSAPP)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
                      <span className="text-slate-500 font-bold bg-white/80 py-1 pr-2 border-r border-slate-200">+506</span>
                    </div>
                    <input 
                      required 
                      type="tel" 
                      name="telefono" 
                      value={formData.telefono} 
                      onChange={handleChange} 
                      disabled={isSubmitting} 
                      className="w-full pl-20 pr-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70 font-medium" 
                      placeholder="8888-8888" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Empresa</label>
                  <input required type="text" name="empresa" value={formData.empresa} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="Nombre de su empresa" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Puesto</label>
                  <input required type="text" name="puesto" value={formData.puesto} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="Su cargo actual" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Domicilio</label>
                <input required type="text" name="domicilio" value={formData.domicilio} onChange={handleChange} disabled={isSubmitting} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="Provincia, Cantón, Distrito" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Comentarios</label>
                <textarea name="comentarios" value={formData.comentarios} onChange={handleChange} disabled={isSubmitting} rows={2} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/80 focus:ring-2 focus:ring-pw-light focus:border-transparent outline-none transition-all disabled:opacity-70" placeholder="¿Alguna duda específica?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pw-dark to-[#1A3038] text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-70 transition-all flex justify-center items-center group text-lg"
              >
                {isSubmitting ? (
                  <>ENVIANDO... <Loader2 size={20} className="ml-2 animate-spin" /></>
                ) : (
                  <>ENVIAR SOLICITUD <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom with Contact Info */}
        <div className="border-t border-white/10 pt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 animate-fade-in-up">
          <div className="flex flex-col">
            <Logo className="mb-4 scale-75 origin-left text-white [&>span]:text-white [&>span.text-pw-light]:text-pw-light" />
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} PsicoWeb Costa Rica. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex flex-col sm:items-end w-full lg:w-auto">
            <h4 className="text-pw-light font-bold text-lg mb-4 uppercase tracking-wider flex items-center">
              <span className="w-8 h-0.5 bg-pw-light mr-3 inline-block sm:hidden"></span>
              ¡Contáctenos!
            </h4>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-300 sm:justify-end">
               <a href="tel:+50621015160" className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer">
                 <div className="p-2 bg-white/5 rounded-full group-hover:bg-pw-light group-hover:text-pw-dark transition-colors"><Phone size={16} /></div> <span>+506 2101-5160</span>
               </a>
               <a href="https://wa.me/50662498790" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer">
                 <div className="p-2 bg-white/5 rounded-full group-hover:bg-pw-light group-hover:text-pw-dark transition-colors">
                   {/* WhatsApp Logo Corrected */}
                   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="text-current">
                     <path d="M12.012 2.016c-5.505 0-9.982 4.477-9.982 9.982 0 1.76.46 3.42 1.259 4.887l-1.332 4.862 4.977-1.306c1.405.766 2.992 1.17 4.606 1.17h.004c5.503 0 9.98-4.477 9.98-9.981 0-5.506-4.477-9.982-9.98-9.982h-.005zm0 18.291h-.003c-1.488 0-2.946-.4-4.218-1.156l-.302-.18-3.134.822.837-3.054-.197-.313a8.272 8.272 0 0 1-1.267-4.428c0-4.57 3.719-8.289 8.29-8.289 4.568 0 8.287 3.717 8.287 8.288 0 4.572-3.719 8.29-8.29 8.29zm4.542-6.205c-.248-.124-1.472-.726-1.7-.81-.227-.083-.393-.124-.559.124-.165.248-.641.81-.786.975-.145.165-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.734-.654-1.23-1.462-1.375-1.709-.145-.248-.016-.382.108-.506.111-.111.248-.29.372-.434.124-.145.166-.248.248-.413.083-.166.042-.31-.02-.434-.062-.124-.559-1.347-.766-1.844-.202-.486-.407-.42-.559-.427-.145-.008-.31-.008-.476-.008-.165 0-.434.062-.661.31-.228.248-.869.849-.869 2.07 0 1.221.889 2.4 1.013 2.566.124.166 1.75 2.672 4.24 3.738.592.253 1.054.404 1.414.519.596.19 1.138.163 1.565.1.476-.07 1.472-.601 1.679-1.181.207-.58.207-1.076.145-1.181-.062-.104-.227-.166-.476-.29z"/>
                   </svg>
                 </div> <span>+506 6249-8790</span>
               </a>
               <a href="mailto:info@efhcr.com" className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer">
                 <div className="p-2 bg-white/5 rounded-full group-hover:bg-pw-light group-hover:text-pw-dark transition-colors"><Mail size={16} /></div> <span>info@efhcr.com</span>
               </a>
            </div>
          </div>
        </div>
        
        {/* Toast Notification */}
        <div className={`fixed bottom-0 left-0 w-full z-50 flex justify-center pb-0 md:pb-6 transition-transform duration-500 ease-in-out ${showToast ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-t-2xl md:rounded-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.2)] flex items-center gap-4 max-w-lg w-full md:w-auto mx-4 border-t border-white/20">
            <div className="bg-white/20 p-2 rounded-full shrink-0">
               <CheckCircle2 className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div>
              <h4 className="font-bold text-lg leading-tight">¡Su solicitud ha sido enviada!</h4>
              <p className="text-emerald-50 text-sm font-medium">Será contactado/a vía WhatsApp lo más pronto posible</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Contact;