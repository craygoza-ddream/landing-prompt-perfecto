import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Clock,
  Zap,
  BookOpen,
  ShieldCheck,
  ChevronDown,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Target,
  FileText
} from 'lucide-react';

const HOTMART_LINK = 'https://pay.hotmart.com/K103630276Q';

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToHotmart = () => {
    window.open(HOTMART_LINK, '_blank');
  };

  const modules = [
    { title: "Introducción a prompts efectivos", desc: "Cómo piensa la IA y cómo darle instrucciones claras." },
    { title: "Mentalidad del Prompt Engineer", desc: "Dejar de pedir respuestas y empezar a pedir soluciones." },
    { title: "La Fórmula del Prompt Perfecto", desc: "Framework universal de 4 pasos." },
    { title: "Prompts para Marketing", desc: "Copys, anuncios y estrategias listas." },
    { title: "Prompts para Ventas", desc: "Cierres, objeciones y prospección." },
    { title: "Productividad Extrema", desc: "Automatización y organización diaria." },
    { title: "Casos prácticos y bonus", desc: "Aplicaciones reales para negocios." }
  ];

  const faqs = [
    {
      q: "¿Necesito saber de IA o programación?",
      a: "No. Está diseñado para emprendedores. Copias, pegas y aplicas."
    },
    {
      q: "¿Funciona para cualquier negocio?",
      a: "Sí. Los prompts se adaptan a servicios, productos y creadores."
    },
    {
      q: "¿Cómo recibo el ebook?",
      a: "Después del pago Hotmart te envía el acceso automático."
    },
    {
      q: "¿Puedo usar los prompts comercialmente?",
      a: "Sí. Están pensados para usarse con clientes y proyectos reales."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E1E1E] overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur z-50 border-b border-[#C7D3E3]">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {!logoError ? (
            <img
              src="/logo-iaparaemprendedor-negro.png"
              alt="IA para Emprendedor"
              className="h-8 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          ) : (
            <span className="font-black text-sm tracking-tight">
              IA PARA <span className="text-[#1F6FEB]">EMPRENDEDOR</span>
            </span>
          )}
          <button
            onClick={scrollToOffer}
            className="bg-[#1F6FEB] text-white px-5 py-2 rounded-lg font-bold"
          >
            Comprar Ebook
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="pt-36 pb-24 bg-white border-b border-[#C7D3E3]">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              Domina ChatGPT como un <span className="text-[#1F6FEB]">experto</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              La guía práctica para dejar de improvisar y obtener resultados reales con IA.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {["Prompts Pro", "Marketing y Ventas", "Productividad", "Acceso vitalicio"].map((t, i) => (
                <div key={i} className="flex gap-3 bg-white p-3 rounded-xl border">
                  <CheckCircle className="text-[#1F6FEB]" />
                  <span className="font-bold">{t}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToOffer}
              className="bg-[#1F6FEB] text-white px-10 py-5 rounded-xl font-black text-xl flex gap-2 items-center"
            >
              Obtener por $9 USD <ArrowRight />
            </button>
          </div>

          {/* PORTADA */}
          <div className="relative">
            <div className="bg-[#1E1E1E] rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              <img
                src="/portada-ebook.png"
                alt="Portada Ebook"
                className={`w-full h-full object-cover ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
              />
              {(imgError || !imgLoaded) && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <BookOpen size={48} />
                  <p className="mt-4 font-bold">EL CÓDIGO DEL PROMPT PERFECTO</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8">El problema no es ChatGPT</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              ["Prompts vagos", <MessageSquare />],
              ["Respuestas genéricas", <Zap />],
              ["Mucho tiempo perdido", <Clock />],
              ["Poca claridad", <TrendingUp />]
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border flex gap-4">
                <div className="text-[#1F6FEB]">{item[1]}</div>
                <p className="font-bold">{item[0]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="py-24 bg-white border-y">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Contenido del Ebook</h2>
          <div className="space-y-4">
            {modules.map((m, i) => (
              <div key={i} className="p-6 bg-[#FAFAFA] rounded-xl border flex gap-6">
                <div className="w-10 h-10 bg-[#1F6FEB] text-white flex items-center justify-center font-black rounded-full">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-black">{m.title}</h4>
                  <p className="text-slate-600 text-sm">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ LOGRAS EN 30 MIN */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-[#1E1E1E] text-white rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#1F6FEB]/20 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-black mb-10">
              Lo que vas a poder hacer <span className="text-[#9EFFA9]">en 30 minutos</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[ 
                { icon: <Sparkles className="text-[#9EFFA9]" />, title: 'Prompts reutilizables', desc: 'Crea instrucciones claras que puedes usar una y otra vez sin fallar.' },
                { icon: <Target className="text-[#9EFFA9]" />, title: 'Respuestas accionables', desc: 'Obtén listas, pasos y scripts listos para ejecutar en tu negocio.' },
                { icon: <TrendingUp className="text-[#9EFFA9]" />, title: 'IA para marketing y ventas', desc: 'Haz que ChatGPT trabaje como tu asistente de marketing y ventas.' },
                { icon: <Zap className="text-[#9EFFA9]" />, title: 'Cero improvisación', desc: 'Deja de “probar suerte” y empieza a dirigir a la IA con autoridad.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-black text-xl mb-1">{item.title}</h3>
                    <p className="text-slate-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black">¿Qué incluye exactamente?</h2>
            <p className="text-lg text-slate-600 mt-3">Sin relleno. Herramientas prácticas para aplicar hoy.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              '+20 prompts listos para copiar y pegar',
              'La fórmula universal de 4 pasos (plantilla)',
              'Ejemplos reales por tipo de negocio',
              'Plantillas reutilizables para tu día a día',
              'Bonus: prompts para Reels y TikTok',
              'Bonus: atención al cliente y respuestas rápidas',
            ].map((text, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border flex items-center gap-4">
                <div className="bg-[#1F6FEB]/10 p-2 rounded-lg">
                  <FileText className="text-[#1F6FEB] w-5 h-5" />
                </div>
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTES / DESPUÉS */}
      <section className="py-24 bg-white border-y border-[#C7D3E3]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">Antes vs. Después</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h3 className="text-2xl font-black mb-6 text-slate-400 flex items-center gap-3">
                <XCircle className="w-6 h-6" /> Antes
              </h3>
              <ul className="space-y-4">
                {[
                  'Prompts vagos e incompletos',
                  'Respuestas genéricas que no sirven',
                  'Mucha edición manual y pérdida de tiempo',
                  'Sientes que la IA no entiende tu negocio',
                ].map((t, i) => (
                  <li key={i} className="font-bold text-slate-500 line-through decoration-slate-300">{t}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1F6FEB]/5 p-8 rounded-2xl border border-[#1F6FEB]/20 relative">
              <div className="absolute top-4 right-4 bg-[#9EFFA9] text-[#1E1E1E] text-xs font-black py-1 px-3 rounded-full uppercase">Recomendado</div>
              <h3 className="text-2xl font-black mb-6 text-[#1F6FEB] flex items-center gap-3">
                <CheckCircle className="w-6 h-6" /> Después
              </h3>
              <ul className="space-y-4">
                {[
                  'Prompts estructurados con contexto y objetivo',
                  'Respuestas listas para usar (listas, pasos, scripts)',
                  'Menos correcciones, más acción',
                  'Resultados más rápido y con mejor calidad',
                ].map((t, i) => (
                  <li key={i} className="font-bold flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-[#1F6FEB]" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MINI DEMO */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black">Mira la diferencia en acción</h2>
            <p className="text-lg text-slate-600 mt-3">Un ejemplo rápido para que lo sientas de inmediato.</p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl border-l-8 border-red-400 overflow-hidden shadow-sm">
              <div className="p-4 bg-red-50 text-red-700 font-black text-sm uppercase flex items-center gap-2">
                <XCircle className="w-4 h-4" /> Prompt vago (error común)
              </div>
              <div className="p-6 italic text-slate-500 font-medium">"Dame ideas para mi negocio."</div>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="rotate-90 text-[#1F6FEB] w-8 h-8" />
            </div>

            <div className="bg-white rounded-2xl border-l-8 border-[#1F6FEB] overflow-hidden shadow-xl">
              <div className="p-4 bg-[#1F6FEB] text-white font-black text-sm uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9EFFA9]" /> Prompt perfecto (estructura)
              </div>
              <div className="p-6">
                <p className="font-black mb-2">[ROL]</p>
                <p className="text-slate-600 mb-4">Actúa como experto en marketing para negocios locales…</p>
                <p className="font-black mb-2">[TAREA]</p>
                <p className="text-slate-600 mb-4">Crea 10 ideas de ofertas + 10 copies cortos para Instagram…</p>
                <p className="font-black mb-2">[FORMATO]</p>
                <p className="text-slate-600">Entrégalo en tabla: Oferta | Copy | CTA.</p>
              </div>
              <div className="p-4 bg-[#9EFFA9]/20 border-t border-[#1F6FEB]/10 text-[#1F6FEB] font-black text-xs uppercase">
                Resultado: respuestas claras, accionables y listas para copiar.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN ES */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-4xl font-black mb-8 text-[#1F6FEB]">Para quién SÍ es</h2>
              <ul className="space-y-5">
                {[
                  'Emprendedores y dueños de negocio',
                  'Freelancers y consultores',
                  'Creadores de contenido',
                  'Negocios locales que quieren ahorrar tiempo',
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle className="text-[#1F6FEB] mt-0.5" />
                    <span className="font-bold">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border">
              <h2 className="text-4xl font-black mb-8 text-slate-400">Para quién NO es</h2>
              <ul className="space-y-5">
                {[
                  'Programadores buscando código avanzado',
                  'Personas que quieren teoría académica',
                  'Quien no piensa aplicar lo aprendido',
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 items-start opacity-80">
                    <XCircle className="text-red-400 mt-0.5" />
                    <span className="font-bold text-slate-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#1E1E1E] text-white p-16 rounded-3xl text-center">
            <h2 className="text-5xl font-black mb-8">Obtén el ebook hoy</h2>

            <div className="mb-10">
              <span className="line-through text-slate-400 text-2xl">USD $47</span>
              <div className="text-[#9EFFA9] text-8xl font-black">$9</div>
            </div>

            <button
              onClick={goToHotmart}
              className="bg-[#1F6FEB] px-20 py-6 rounded-2xl text-3xl font-black"
            >
              COMPRAR AHORA
            </button>

            <div className="flex justify-center gap-8 mt-8 text-xs uppercase">
              <span className="flex gap-2"><ShieldCheck /> Pago Seguro</span>
              <span className="flex gap-2"><CheckCircle /> Acceso Inmediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Preguntas Frecuentes</h2>
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-xl mb-4">
              <button
                className="w-full p-6 flex justify-between font-bold"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                {f.q}
                <ChevronDown className={activeFaq === i ? 'rotate-180' : ''} />
              </button>
              {activeFaq === i && (
                <div className="p-6 bg-slate-50">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#1E1E1E] text-slate-400 text-center text-xs">
        © {new Date().getFullYear()} IA PARA EMPRENDEDOR
      </footer>

    </div>
  );
};

export default App;
