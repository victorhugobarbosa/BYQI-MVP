'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Zap, CheckCircle2, Instagram, Linkedin, Mail } from 'lucide-react';

/* -------------------------------------------------------------
 * Component: Navbar
 * ------------------------------------------------------------- */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Modelos", href: "#modelos" },
    { name: "Histórico", href: "#historico" },
    { name: "Contato", href: "#footer" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-deep-carbon/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo_nobg.png" alt="BYQI Logo" className="h-24 w-auto object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest text-gray-300 hover:text-neon-green transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#footer" className="px-6 py-2 border border-neon-green text-neon-green font-display uppercase text-xs tracking-widest hover:bg-neon-green hover:text-black transition-all shadow-[0_0_10px_rgba(204,255,0,0.2)] hover:shadow-[0_0_20px_rgba(204,255,0,0.6)] rounded-sm">
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-deep-carbon border-b border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg uppercase text-white hover:text-neon-green">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

/* -------------------------------------------------------------
 * Component: Hero
 * ------------------------------------------------------------- */
const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-deep-carbon z-0">
        {/* Abstract Grid/Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(26,26,26,1)_0%,_rgba(10,10,10,1)_100%)]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#ccff00 1px, transparent 1px), linear-gradient(90deg, #ccff00 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-xs uppercase tracking-[0.2em] text-neon-green backdrop-blur-sm">
            Tech Mobility V2.5
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            O FUTURO DA MOBILIDADE É<br />
            <span className="text-neon-green drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">VERDE</span> E <span className="text-bright-orange drop-shadow-[0_0_15px_rgba(255,102,0,0.5)]">ELÉTRICO</span>.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light tracking-wide">
            Performance, autonomia e design 100% brasileiro. Redefina o seu movimento.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a href="#modelos" className="flex items-center gap-3 px-8 py-4 bg-neon-green text-deep-carbon font-display font-bold uppercase tracking-wider rounded-sm hover:bg-[#bbe600] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.4)]">
              Ver Modelos <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-green rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

/* -------------------------------------------------------------
 * Component: Models (with Modal)
 * ------------------------------------------------------------- */
const Models = () => {
  const [selectedModel, setSelectedModel] = useState<any>(null);

  const models = [
    {
      id: 1,
      name: "S-3000 Sport",
      type: "Performance",
      speed: "160km/h",
      power: "Elétrica",
      image: "/new_model_1.jpg",
      color: "neon-green",
      details: {
        description: "A revolução em duas rodas. Potência instantânea e design agressivo para quem busca adrenalina sem emissões.",
        specs: [
          { label: "Potência", value: "3.000 watts" },
          { label: "Velocidade Máxima", value: "120 km/h" },
          { label: "Bateria", value: "45 Ah / 72 Volts (Lítio/ferro)" },
          { label: "Alcance", value: "700 km com SPR" },
          { label: "Recarga", value: "4 horas" },
          { label: "Freios", value: "Disco Dianteiro e Traseiro" }
        ]
      }
    },
    {
      id: 2,
      name: "C-500 Cargo",
      type: "Logística",
      speed: "80km/h",
      power: "Dual Battery",
      image: "/new_model_2.jpg",
      color: "bright-orange",
      details: {
        description: "A aliada perfeita para o seu negócio. Robusta, confiável e econômica.",
        specs: [
          { label: "Potência", value: "500 watts" },
          { label: "Velocidade Máxima", value: "50 km/h" },
          { label: "Bateria", value: "20 Ah / 60 Volts (Lítio/ferro)" },
          { label: "Autonomia", value: "60 km por carga" },
          { label: "Capacidade de Carga", value: "120 kg" },
          { label: "Recarga", value: "4 horas" }
        ]
      }
    },
    {
      id: 3,
      name: "Urban Scooter",
      type: "Cidade",
      speed: "60km/h",
      power: "Compacta",
      image: "/old_model_1.jpg",
      color: "neon-green",
      details: {
        description: "Agilidade para o dia a dia urbano. Compacta, leve e estilosa.",
        specs: [
          { label: "Status", value: "Em Breve" },
          { label: "Categoria", value: "Scooter Elétrica" }
        ]
      }
    },
    {
      id: 4,
      name: "Heritage Classic",
      type: "Legado",
      speed: "Vintage",
      power: "Híbrida",
      image: "/old_model_2.jpg",
      color: "gray-400",
      details: {
        description: "O charme do clássico com a tecnologia do futuro.",
        specs: [
          { label: "Status", value: "Em Breve" },
          { label: "Estilo", value: "Vintage / Híbrida" }
        ]
      }
    },
  ];

  return (
    <section id="modelos" className="py-24 bg-dark-gray relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="font-display text-4xl font-bold mb-4 flex items-center gap-3">
            <Zap className="text-neon-green" /> NOSSA FROTA
          </h2>
          <div className="h-1 w-20 bg-neon-green shadow-[0_0_10px_#ccff00]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {models.map((model) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-[400px] rounded-lg overflow-hidden border border-white/5 bg-deep-carbon"
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-carbon via-deep-carbon/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="flex gap-2 mb-2">
                  <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white border border-white/10">{model.speed}</span>
                  <span className={`px-3 py-1 rounded text-xs font-mono bg-${model.color === 'gray-400' ? 'white/20' : model.color} text-black font-bold uppercase`}>{model.power}</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">{model.name}</h3>
                <div className="w-full h-[1px] bg-white/20 group-hover:bg-neon-green transition-colors my-4"></div>
                <button
                  onClick={() => setSelectedModel(model)}
                  className="text-sm uppercase tracking-widest font-bold flex items-center gap-2 text-gray-300 group-hover:text-white hover:text-neon-green transition-colors"
                >
                  Ver Detalhes <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Model Detail Modal */}
      <AnimatePresence>
        {selectedModel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedModel(null)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-deep-carbon border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <img src={selectedModel.image} alt={selectedModel.name} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-carbon to-transparent md:bg-gradient-to-r"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="font-display text-3xl font-bold text-white mb-1">{selectedModel.name}</h2>
                      <span className="text-neon-green uppercase tracking-widest text-sm font-bold">{selectedModel.type}</span>
                    </div>
                    <button onClick={() => setSelectedModel(null)} className="text-gray-400 hover:text-white transition-colors">
                      <X size={24} />
                    </button>
                  </div>

                  <p className="text-gray-300 mb-8 font-light leading-relaxed">{selectedModel.details.description}</p>

                  <div className="space-y-4">
                    <h3 className="text-white font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">Especificações Técnicas</h3>
                    <div className="grid grid-cols-1 gap-y-3">
                      {selectedModel.details.specs.map((spec: any, index: number) => (
                        <div key={index} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0">
                          <span className="text-gray-500 font-medium">{spec.label}</span>
                          <span className="text-white font-mono text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button className="w-full py-3 bg-neon-green text-black font-display font-bold uppercase tracking-widest rounded-sm hover:bg-[#bbe600] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]">
                      Solicitar Orçamento
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* -------------------------------------------------------------
 * Component: History
 * ------------------------------------------------------------- */
const History = () => {
  return (
    <section id="historico" className="py-24 bg-deep-carbon">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="font-display text-4xl font-bold mb-6 text-white">HISTÓRICO & <span className="text-outline">LEGADO</span></h2>
            <div className="space-y-6 text-gray-400 leading-relaxed font-light text-lg">
              <p>
                <span className="text-neon-green font-bold">2004:</span> A STR, hoje “Motoland”, foi fundada em novembro de 2004, com o objetivo de prestar serviço de Consultoria e Assessoria na área de Engenharia. Desde o início, nosso DNA foi focado na inovação e na busca por soluções eficientes para o mercado de duas rodas.
              </p>
              <p>
                Ao longo dos anos, evoluímos de uma consultoria técnica para uma fabricante completa. Investimos pesadamente em P&D para criar plataformas elétricas que atendam às necessidades reais da mobilidade urbana no Brasil.
              </p>
              <p>
                Hoje, a BYQI representa o ápice dessa jornada: veículos elétricos robustos, inteligentes e, acima de tudo, autênticos. Nossos modelos não são apenas montados aqui; eles são pensados, desenhados e otimizados para as nossas cidades, garantindo que somos 100% projetos brasileiros.
              </p>
            </div>
          </motion.div>

          {/* Visual/Image content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-[500px] w-full border-l-2 border-neon-green pl-6">
              {/* Timeline Visual */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-neon-green rounded-full shadow-[0_0_15px_#ccff00]"></div>
              <div className="absolute left-[-9px] bottom-0 w-4 h-4 bg-dark-gray border border-white/20 rounded-full"></div>

              <div className="h-full bg-[#151515] p-8 rounded-r-xl border border-white/5 flex flex-col justify-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <CheckCircle2 size={40} className="text-neon-green" />
                </div>
                <h3 className="font-display text-2xl mb-4 text-white">Engenharia Brasileira</h3>
                <p className="text-gray-500 mb-8">Do esboço à linha de montagem, cada detalhe reflete nossa paixão pela engenharia.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded border border-white/5">
                    <span className="block text-2xl font-bold text-neon-green">20+</span>
                    <span className="text-xs uppercase text-gray-500">Anos de Experiência</span>
                  </div>
                  <div className="bg-black/30 p-4 rounded border border-white/5">
                    <span className="block text-2xl font-bold text-bright-orange">100%</span>
                    <span className="text-xs uppercase text-gray-500">Nacional</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------
 * Component: Footer
 * ------------------------------------------------------------- */
const Footer = () => {
  return (
    <footer id="footer" className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="font-display font-bold text-3xl tracking-wider text-white mb-6 block">BYQI</span>
            <p className="text-gray-500 max-w-sm">Revolucionando a forma como você se move. Tecnologia de ponta, alma sustentável.</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-sm tracking-widest">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-neon-green transition-colors cursor-pointer">
                <Mail size={16} /> info@byqi.com.br
              </li>
              <li className="flex items-center gap-2 hover:text-neon-green transition-colors cursor-pointer">
                <Mail size={16} /> vendas@byqi.com.br
              </li>
              <li className="flex items-center gap-2 hover:text-neon-green transition-colors cursor-pointer">
                <Mail size={16} /> tech@byqi.com.br
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-sm tracking-widest">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-neon-green hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-neon-green hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          &copy; 2025 BYQI Electric Mobility. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

/* -------------------------------------------------------------
 * Page: Home
 * ------------------------------------------------------------- */
export default function Home() {
  return (
    <main className="min-h-screen bg-deep-carbon text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      <Hero />
      <Models />
      <History />
      <Footer />
    </main>
  );
}
