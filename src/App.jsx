import React, { useState } from 'react';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Zap,
  BookOpen,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
} from 'lucide-react';

const App = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Función para scroll suave a la oferta
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    { title: "Módulo 1: Introducción a prompts efectivos", desc: "Entiende cómo 'piensa' la IA para darle instrucciones precisas." },
    { title: "Módulo 2: La mentalidad del Prompt Engineer", desc: "No busques respuestas, busca soluciones estratégicas." },
    { title: "Módulo 3: La Fórmula del Prompt Perfecto", desc: "Estructura universal de 4 pasos para cualquier tarea." },
    { title: "Módulo 4: Prompts para Marketing", desc: "Crea copys, anuncios y estrategias en minutos." },
    { title: "Módulo 5: Prompts para Ventas", desc: "Scripts de cierre, manejo de objeciones y prospección." },
    { title: "Módulo 6: Productividad Extrema", desc: "Automatiza reportes, resúmenes y organización de tareas." },
    { title: "Casos Prácticos y Bonus", desc: "Ejemplos reales aplicados a negocios digitales." }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1E1E1E] overflow-x-hidden">

      {/* --- NAVEGACIÓN --- */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-[#C7D3E3]">
        <div className="container mx-auto px-4 h-[96px] sm:h-[120px] lg:h-[140px] flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <img
              src="/logo-iaparaemprendedor-negro.png"
              alt="Logo IA para Emprendedor"
              className="h-[150px] w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const next = e.currentTarget.nextSibling;
                if (next && next.style) next.style.display = 'block';
              }}
            />
            <span className="font-black text-xl tracking-tighter hidden">
              IA PARA <span className="text-[#1F6FEB]">EMPRENDEDOR</span>
            </span>
          </div>
          <button
            onClick={scrollToOffer}
            className="bg-[#1F6FEB] text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-[#1F6FEB]/90 transition-all shadow-md shadow-[#1F6FEB]/20"
          >
            Comprar Ebook
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative bg-white pt-[120px] sm:pt-32 lg:pt-48 pb-16 lg:pb-36 overflow-hidden border-b border-[#C7D3E3]">
        {/* Fondo decorativo */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C7D3E3]/10 -skew-x-12 transform translate-x-1/2" />

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-[1.2] text-center lg:text-left">
              <span className="inline-block py-1.5 px-4 rounded-full bg-[#C7D3E3] text-[#1F6FEB] font-bold text-xs mb-6 uppercase tracking-[0.2em]">
                Contenido Digital 2024
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.05] text-[#1E1E1E] mb-6">
                Domina ChatGPT como un <span className="text-[#1F6FEB]">experto</span> hoy mismo.
              </h1>
              <p className="text-xl text-[#1E1E1E]/70 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                La guía práctica que todo emprendedor necesita para dejar de adivinar y empezar a obtener resultados reales con Inteligencia Artificial.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
                {[
                  "Fórmula de prompts Pro",
                  "Marketing y Ventas",
                  "Productividad Real",
                  "Acceso de por vida"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-[#FAFAFA] p-3 rounded-xl border border-[#C7D3E3]/50">
                    <CheckCircle className="text-[#9EFFA9] w-6 h-6 flex-shrink-0" />
                    <span className="text-[#1E1E1E] font-bold text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={scrollToOffer}
                className="w-full sm:w-auto bg-[#1F6FEB] hover:bg-[#1F6FEB]/90 text-white font-black py-5 px-12 rounded-xl text-xl transition-all transform hover:scale-[1.03] shadow-2xl shadow-[#1F6FEB]/30 flex items-center justify-center gap-3 uppercase tracking-tighter"
              >
                Comprar por $9 USD
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

            {/* MOCKUP 3D DE LA PORTADA */}
            <div className="flex-1 relative w-full max-w-sm lg:max-w-md">
              <div className="relative group" style={{ perspective: '1200px' }}>
                <div
                  className="relative transition-transform duration-700 ease-out"
                  style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-15deg) rotateX(5deg)' }}
                >
                  {/* Cuerpo del Libro */}
                  <div className="relative w-full aspect-[3/4.2] shadow-[30px_40px_60px_-15px_rgba(0,0,0,0.4)] rounded-r-lg flex bg-white">
                    {/* El Lomo (Spine) */}
                    <div className="w-[24px] sm:w-[32px] h-full bg-[#1F6FEB] relative z-20 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.4)] flex items-center justify-center">
                      <div className="w-[1px] h-1/2 bg-white/20" />
                    </div>

                    {/* La Portada Frontal */}
                    <div className="flex-1 bg-[#1E1E1E] relative z-10 overflow-hidden rounded-r-sm">
                      <img
                        src="/portada-ebook.png"
                        alt="Ebook Portada"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => { setImgLoaded(true); setImgError(false); }}
                        onError={() => { setImgError(true); }}
                      />
                      {/* Diseño de Respaldo si falla la imagen */}
                      {(!imgLoaded || imgError) && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white text-center bg-gradient-to-b from-[#1E1E1E] to-[#1F6FEB]/30">
                          <BookOpen className="w-16 h-16 mb-6 text-[#9EFFA9]" />
                          <h2 className="text-2xl font-black leading-tight uppercase mb-4 tracking-tighter">
                            EL CÓDIGO DEL PROMPT PERFECTO
                          </h2>
                          <div className="h-1.5 w-12 bg-[#9EFFA9] mb-6 rounded-full" />
                          <p className="font-bold tracking-[0.2em] text-[#C7D3E3] uppercase text-[10px]">
                            Cargando Portada...
                          </p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Grosor de páginas */}
                  <div
                    className="absolute top-[3px] bottom-[3px] -right-[12px] w-[15px] bg-[#E2E8F0] border-y border-r border-[#C7D3E3] z-0"
                    style={{ transform: 'rotateY(90deg)', transformOrigin: 'left' }}
                  >
                    <div
                      className="w-full h-full opacity-30"
                      style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, #1E1E1E 2px)' }}
                    />
                  </div>
                </div>

                {/* Sombra de suelo */}
                <div className="absolute -bottom-10 left-10 right-0 h-8 bg-black/25 blur-2xl rounded-full -z-10" />
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* --- EL PROBLEMA --- */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight uppercase">
            ¿ChatGPT te da respuestas genéricas?
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            La mayoría de las personas usan prompts mediocres y obtienen resultados mediocres. El secreto para ahorrar tiempo es saber exactamente qué pedir.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { icon: <MessageSquare className="w-8 h-8" />, text: "No sabes cómo estructurar las instrucciones." },
              { icon: <Zap className="w-8 h-8" />, text: "La IA no entiende el contexto de tu negocio." },
              { icon: <Clock className="w-8 h-8" />, text: "Pierdes horas corrigiendo textos robóticos." },
              { icon: <TrendingUp className="w-8 h-8" />, text: "Sientes que la IA es 'un juguete' y no una herramienta profesional." }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl flex items-start gap-5 shadow-sm border border-[#C7D3E3] hover:border-[#1F6FEB] transition-all group"
              >
                <div className="text-[#1F6FEB] mt-1 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="text-[#1E1E1E] font-bold text-lg leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MÓDULOS --- */}
      <section className="py-24 bg-white border-y border-[#C7D3E3]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-tighter italic">
            ¿Qué aprenderás dentro?
          </h2>
          <div className="space-y-4">
            {modules.map((m, i) => (
              <div
                key={i}
                className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#C7D3E3] flex items-center gap-6 group hover:border-[#1F6FEB] transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-[#1F6FEB] text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-[#1F6FEB]/20">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-black text-[#1E1E1E] text-lg">{m.title}</h4>
                  <p className="text-sm text-[#1E1E1E]/60 font-medium">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OFERTA --- */}
      <section id="oferta" className="py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#1E1E1E] rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(31,111,235,0.4)] border-b-8 border-[#1F6FEB]">
            <div className="relative z-10">
              <span className="bg-[#9EFFA9] text-[#1E1E1E] px-6 py-2 rounded-full font-black text-sm mb-8 inline-block uppercase tracking-[0.2em] shadow-lg shadow-[#9EFFA9]/20">
                Oportunidad Única
              </span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
                Toma el control
              </h2>
              <div className="flex flex-col items-center justify-center mb-12">
                <span className="text-[#C7D3E3]/40 line-through text-3xl font-bold mb-2">
                  USD $47.00
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-9xl font-black tracking-tighter text-[#9EFFA9]">
                    $9
                  </span>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-3xl font-black text-[#FAFAFA]">USD</span>
                    <span className="text-sm font-bold text-[#C7D3E3]">Acceso Vitalicio</span>
                  </div>
                </div>
              </div>

              {/* Link a Hotmart */}
              <a
                href="https://pay.hotmart.com/K103630276Q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-[#1F6FEB] text-white font-black py-6 px-20 rounded-2xl text-3xl transition-all transform hover:scale-[1.05] shadow-[0_20px_40px_rgba(31,111,235,0.4)] mb-10 uppercase tracking-tighter"
              >
                ¡OBTENER EL EBOOK!
              </a>

              <div className="flex flex-wrap justify-center gap-8 text-[#C7D3E3] text-xs font-black uppercase tracking-widest opacity-80">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9EFFA9]" /> Pago 100% Protegido
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#9EFFA9]" /> Descarga al Instante
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 bg-[#1E1E1E] text-[#C7D3E3] border-t border-white/5 font-bold uppercase tracking-widest text-[10px]">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <img
            src="/logo-iaparaemprendedor-negro.png"
            alt="Logo Footer"
            className="h-[150px] w-auto object-contain mb-8 mx-auto invert brightness-0 grayscale opacity-40"
          />
          <p className="mb-4">
            &copy; {new Date().getFullYear()} IA PARA EMPRENDEDOR. Todos los derechos reservados.
          </p>
          <div className="flex justify-center gap-8 mb-8 opacity-60">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a
              href="mailto:soporte@iaparaemprendedor.com"
              className="hover:text-white transition-colors tracking-normal lowercase text-sm font-medium"
            >
              hola@iaparaemprendedor.com
            </a>
          </div>
        </div>
      </footer>

      {/* Botón flotante para móvil */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-[#C7D3E3] z-50">
        <button
          onClick={scrollToOffer}
          className="w-full bg-[#1F6FEB] text-white font-black py-4 rounded-xl shadow-xl flex items-center justify-center gap-3 uppercase text-lg italic tracking-tighter"
        >
          ¡LO QUIERO POR $9!
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};

export default App;
