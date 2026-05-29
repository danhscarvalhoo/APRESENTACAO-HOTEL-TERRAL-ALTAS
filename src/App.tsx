import React, { useState, useEffect } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Music, 
  MapPin, 
  Clock, 
  Sparkles, 
  Gift, 
  Beer, 
  Utensils, 
  Plane, 
  Volume2, 
  Check, 
  Calendar, 
  X, 
  ExternalLink,
  Crown,
  ChevronRight,
  Waves,
  Smile,
  Mic,
  Gamepad2,
  Camera,
  Video,
  Wine,
  PartyPopper
} from 'lucide-react';

import { 
  DJS, 
  VENUE_PHOTOS, 
  WELCOME_KITS, 
  ATRACOES, 
  CARDAPIO, 
  SORTEIOS, 
  LEMBRANCINHA_FINAL 
} from './data';

// Component state interface for local testing
interface FormState {
  nome: string;
  setor: string;
  confirmacao: 'Sim' | 'Não' | '';
  chinelo: string;
  acompanhante: 'Sim' | 'Não' | '';
  acompanhanteNome: string;
  acompanhanteChinelo: string;
  bebidasSelected: string[];
  restricao: string;
}

export default function App() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [acompanhanteSim, setAcompanhanteSim] = useState(false);
  
  // Timer calculations
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown to Dec 12, 2026 at 16:00
  useEffect(() => {
    const targetDate = new Date('2026-12-12T16:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Form submission handling for a simulated/real Netlify behavior in AI Studio page
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    nome: '',
    setor: '',
    confirmacao: '',
    chinelo: '',
    acompanhante: '',
    acompanhanteNome: '',
    acompanhanteChinelo: '',
    bebidasSelected: [],
    restricao: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (name: keyof FormState, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (bebidaName: string) => {
    setFormData(prev => {
      const list = prev.bebidasSelected;
      const isExist = list.includes(bebidaName);
      const updated = isExist ? list.filter(item => item !== bebidaName) : [...list, bebidaName];
      return {
        ...prev,
        bebidasSelected: updated
      };
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If we're hosting on Netlify, the standard form handles custom submission fine.
    // In React testing context, we show a gorgeous VIP entry pass modal confirmation.
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Helper function to map icons from names
  const renderAttractionIcon = (iconName: string) => {
    switch (iconName) {
      case 'waves': return <Waves className="w-8 h-8 text-cyan-400" />;
      case 'smile': return <Smile className="w-8 h-8 text-pink-500" />;
      case 'mic': return <Mic className="w-8 h-8 text-orange-400" />;
      case 'gamepad': return <Gamepad2 className="w-8 h-8 text-cyan-400" />;
      case 'camera': return <Camera className="w-8 h-8 text-pink-500" />;
      case 'video': return <Video className="w-8 h-8 text-orange-400" />;
      default: return <Sparkles className="w-8 h-8 text-pink-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F5] bg-gradient-to-b from-[#F2EFE9] via-[#FCFAF7] to-[#FFFFFF] text-[#2D3748] flex flex-col font-sans relative overflow-x-hidden selection:bg-sunset-orange selection:text-white">
      
      {/* GLOW SPHERES BACKGROUND */}
      <div className="absolute top-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-sunset-orange/10 via-sunset-yellow/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-pool-blue/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-sunset-orange/8 to-tropical-green/5 blur-[150px] pointer-events-none" />

      {/* FLOATING DECORATIONS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none -z-10" />

      {/* HEADER BAR */}
      <nav className="sticky top-0 z-40 bg-glass/80 backdrop-blur-md border-b border-neutral-200/50 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl font-display font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue text-neon-orange">
            SUNSET TROPICAL CLUB 🌴
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-xs uppercase font-mono tracking-widest text-neutral-600">
          <a href="#djs" className="hover:text-sunset-orange transition-colors font-semibold">DJs</a>
          <a href="#detalhes" className="hover:text-pool-blue transition-colors font-semibold">Informações</a>
          <a href="#kits" className="hover:text-sunset-orange transition-colors font-semibold">Kits</a>
          <a href="#cardapios" className="hover:text-tropical-green transition-colors font-semibold">Open Bar</a>
          <a href="#sorteios" className="hover:text-pool-blue transition-colors font-semibold">Sorteios</a>
        </div>
        <div>
          <a 
            href="#confirmar-presenca" 
            className="px-4 py-2 text-xs font-display font-bold uppercase border border-sunset-orange rounded-lg bg-sunset-orange/10 hover:bg-sunset-orange hover:text-white transition-all text-sunset-orange shadow-sm"
          >
            Confirmar Presença
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 md:px-8 py-20 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl flex flex-col items-center relative z-10"
        >
          {/* Badge de comemoração */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-teal-800 bg-teal-50 border border-teal-200/70 bg-glass mb-8 animate-pulse shadow-sm">
            <Crown className="w-3.5 h-3.5 text-teal-600" /> 🌺 SUNSET TROPICAL CLUB • COMEMORAÇÃO DA META BATIDA! 🥥
          </span>

          {/* Título Principal */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase leading-none mb-8">
            <span className="text-[#1A1A1A] drop-shadow-sm block">SUNSET TROPICAL</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue text-[#ff5400]">
              TERRAS ALTAS 🌺🌊
            </span>
          </h1>

          {/* Mensagem de agradecimento */}
          <p className="text-[#4A5568] text-sm sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-12 px-2">
            Nossa equipe quebrou todos os recordes e alcançou o topo! Para comemorar esse resultado histórico, estamos levando vocês para o espetacular <strong className="text-[#1A1A1A] font-extrabold">Hotel Terras Altas – Interior de SP</strong>. Um resort espetacular cercado de natureza exuberante com uma mega piscina aquecida ao ar livre para este incrível Luau Havaiano de altíssimo nível. Preparem as camisas floriais, trajes de banho e óculos de sol!
          </p>

          {/* CTA Button */}
          <a 
            href="#confirmar-presenca"
            className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue rounded-xl text-white font-display text-lg sm:text-xl font-extrabold tracking-widest hover:brightness-110 active:scale-95 transition-all uppercase shadow-lg shadow-sunset-orange/20"
          >
            CONFIRMAR PRESENÇA NO SUNSET CLUB AGORA
            <ChevronRight className="w-6 h-6 ml-1.5 transition-transform group-hover:translate-x-1" />
          </a>

          {/* COUNTDOWN TIMER COLLAPSED IN A GLOW BOX */}
          <div className="mt-16 w-full max-w-lg bg-glass rounded-2xl p-6 border border-neutral-200/60 shadow-md">
            <div className="text-xs uppercase font-mono tracking-widest text-sunset-orange mb-4 flex items-center justify-center gap-2 font-bold">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" /> CONTAGEM REGRESSIVA PARA O SUNSET
            </div>
            
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="p-3 bg-white/60 rounded-xl border border-neutral-200/70 shadow-sm">
                <span className="block font-display font-bold text-2xl sm:text-4xl text-neutral-800">{timeLeft.days}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-bold">Dias</span>
              </div>
              <div className="p-3 bg-white/60 rounded-xl border border-neutral-200/70 shadow-sm">
                <span className="block font-display font-bold text-2xl sm:text-4xl text-teal-600">{timeLeft.hours}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-teal-600 font-bold">Horas</span>
              </div>
              <div className="p-3 bg-white/60 rounded-xl border border-neutral-200/70 shadow-sm">
                <span className="block font-display font-bold text-2xl sm:text-4xl text-sunset-orange">{timeLeft.minutes}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-sunset-orange font-bold">Mins</span>
              </div>
              <div className="p-3 bg-white/60 rounded-xl border border-neutral-200/70 shadow-sm">
                <span className="block font-display font-bold text-2xl sm:text-4xl text-[#D97706]">{timeLeft.seconds}</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#D97706] font-bold">Segs</span>
              </div>
            </div>
            
            <p className="text-[11px] font-mono tracking-wide text-neutral-600 uppercase mt-4 font-semibold">
              12 DE DEZEMBRO DE 2026 • HOTEL TERRAS ALTAS – INTERIOR DE SP
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2: LINE-UP DOS DJS (FESTIVAL THEMED POSTER) */}
      <section id="djs" className="py-24 max-w-4xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#ff5400] font-bold uppercase">🎧 Vibe Sunset, Tribal House & Eletrônica Polinésia</span>
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase text-[#1A1A1A] tracking-tight mt-2">
            LINE-UP DOS DJS
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-tropical-green via-sunset-orange to-sunset-yellow mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col items-center justify-center space-y-14 sm:space-y-16 text-center">
          {DJS.map((dj, idx) => (
            <motion.div
              key={dj.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-col items-center max-w-2xl"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl sm:text-4xl">{dj.emoji}</span>
                <span className={`font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  idx === 0 ? 'bg-orange-50 text-[#ff5400] border border-orange-200/60' : 'bg-teal-50 text-teal-700 border border-teal-200/60'
                }`}>
                  {dj.role}
                </span>
              </div>
              <h3 className={`font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-wide leading-none ${
                idx === 0 ? 'text-sunset-orange animate-pulse' : 'text-teal-600'
              }`}>
                {dj.name}
              </h3>
              <p className="text-neutral-600 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold mt-3 max-w-lg">
                {dj.style}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 3: INFORMAÇÕES ESSENCIAIS */}
      <section id="detalhes" className="py-16 max-w-6xl mx-auto px-4 w-full">
        <div className="bg-glass rounded-3xl p-8 md:p-14 border border-neutral-200/50 shadow-lg relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-pool-blue/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* LOCAL */}
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-flex items-center justify-center p-3.5 bg-cyan-50 rounded-2xl border border-cyan-200 text-[#028090]">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-black uppercase text-[#1A1A1A] tracking-widest">LOCAL</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                <strong className="text-teal-700 block mb-1">Hotel Terras Altas – Interior de SP</strong>
                Um resort espetacular rodeado de verde nativo com uma mega piscina climatizada perfeita para relaxar e dançar à vontade, além de conforto de altíssimo padrão.
              </p>
            </div>

            {/* HORARIO */}
            <div className="flex flex-col items-start space-y-4 border-t md:border-t-0 md:border-x border-neutral-200/70 pt-8 md:pt-0 md:px-8">
              <div className="inline-flex items-center justify-center p-3.5 bg-orange-50 rounded-2xl border border-orange-200 text-sunset-orange">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-black uppercase text-[#1A1A1A] tracking-widest">HORÁRIO SUNSET</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Das <strong className="text-[#ff5400] text-lg font-extrabold animate-pulse">16h00</strong> do sábado até à <strong className="text-[#ff5400] text-lg font-extrabold">01h00</strong> da madrugada. 
                <span className="block text-xs text-neutral-500 font-mono tracking-wider uppercase mt-2 font-semibold">
                  9 horas de pool party & luau cocorico
                </span>
              </p>
            </div>

            {/* DRESS CODE */}
            <div className="flex flex-col items-start space-y-4 border-t md:border-t-0 pt-8 md:pt-0">
              <div className="inline-flex items-center justify-center p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 text-tropical-green">
                <Wine className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-black uppercase text-[#1A1A1A] tracking-widest">DRESS CODE LUAU</h3>
              <p className="text-neutral-600 leading-relaxed text-sm">
                <strong className="text-emerald-700 block mb-1">Traje Beach Club / Havaiano Floral (M/F)</strong>
                Venha com camisas florais rústicas, bermudas de banho leve ou vestidos floridos confortáveis para curtir a mega piscina e a tradicional dança do limbo!
                <span className="block mt-2 font-semibold text-emerald-800 bg-emerald-50 text-xs px-2 py-1 rounded border border-emerald-200/60">
                  🏆 Teremos um Desfile com Competição para premiar quem estiver com o melhor look!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA INTERATIVA - VENUE FOTOS */}
      <section className="py-20 max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-[#1A1A1A]">
            CONHEÇA O HOTEL TERRAS ALTAS
          </h2>
          <p className="text-xs uppercase font-mono tracking-widest text-teal-600 mt-2 font-bold">
            Explore as dependências de lazer e a belíssima piscina do resort
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {VENUE_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              onClick={() => setActivePhotoIndex(index)}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden h-36 sm:h-52 cursor-zoom-in border border-neutral-200/60 shadow-md group"
            >
              {/* Pure CSS gradient representing venue card - Image Free */}
              <div className={`w-full h-full bg-gradient-to-br ${photo.gradient} flex flex-col items-center justify-center text-5xl p-4`}>
                <span className="group-hover:scale-110 transition-transform duration-300 select-none">{photo.emoji}</span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-white block mt-3 font-extrabold text-center leading-tight [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
                  {photo.title}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#1A1A1A]/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center">
                <p className="text-xs font-bold uppercase font-display text-white">{photo.title}</p>
                <p className="text-[9px] text-[#00f5d4] mt-1 uppercase font-mono tracking-widest">VER DETALHES 🔍</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* LIGHTBOX FOR ZOOMED PHOTOS */}
        <AnimatePresence>
          {activePhotoIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePhotoIndex(null)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
            >
              <button 
                onClick={() => setActivePhotoIndex(null)}
                className="absolute top-6 right-6 p-2 bg-neutral-100 text-neutral-800 rounded-full hover:bg-neutral-200 shadow-md"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="max-w-xl w-full flex flex-col justify-center items-center bg-white p-8 rounded-3xl border border-neutral-200 text-center shadow-2xl"
              >
                <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${VENUE_PHOTOS[activePhotoIndex].gradient} flex items-center justify-center text-7xl shadow-xl mb-6 select-none`}>
                  <span>{VENUE_PHOTOS[activePhotoIndex].emoji}</span>
                </div>
                <div className="text-center">
                  <h4 className="font-display text-2xl font-black text-[#1A1A1A] uppercase">{VENUE_PHOTOS[activePhotoIndex].title}</h4>
                  <p className="text-neutral-600 text-sm mt-3.5 leading-relaxed">{VENUE_PHOTOS[activePhotoIndex].description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* SEÇÃO 4: RECEPÇÃO E WELCOME KIT */}
      <section id="kits" className="py-20 max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-sunset-orange uppercase font-bold">WELCOME PACK EXCLUSIVO</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1A1A1A] mt-1">
            RECEPÇÃO & WELCOME KIT 🎁
          </h2>
          <p className="text-neutral-600 text-sm max-w-lg mx-auto mt-2 font-medium">
            Entregue diretamente na recepção do resort para equipar você com estilo para a pista
          </p>
        </div>

        <div className="bg-glass rounded-3xl p-8 md:p-12 border border-neutral-200/50 max-w-4xl mx-auto shadow-lg relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-pool-blue/10 rounded-full blur-[80px]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col items-center justify-center p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center relative overflow-hidden shadow-sm">
              <span className="text-7xl block mb-4 animate-bounce">🌺</span>
              <h3 className="font-display text-2xl font-black text-neutral-800 uppercase tracking-tight">KIT ALOHA COOPER</h3>
              <p className="text-xs text-emerald-700 font-mono uppercase tracking-widest mt-1 mb-4 font-bold">Vibe Luau de Praia Exclusivo</p>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
                Acessórios imperdíveis para te transformar em um verdadeiro polinésio na pista de dança, celebrando essa meta implacável!
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              {WELCOME_KITS.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-800 font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: ATRAÇÕES E ENTRETENIMENTO SPLIT GRID */}
      <section className="py-20 max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#0ea5e9] uppercase font-bold">DIVERSÃO COMPLETA GARANTIDA</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1A1A1A] mt-1">
            ATRAÇÕES & ENTRETENIMENTO
          </h2>
          <p className="text-neutral-600 text-sm max-w-lg mx-auto mt-2 font-medium">
            Preparamos uma seleção exclusiva de jogos modernos e dinâmicos para a nossa equipe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATRACOES.map((att) => (
            <div 
              key={att.title}
              className="bg-glass p-6 rounded-2xl border border-neutral-200/50 hover:border-pool-blue hover:shadow-lg transition-all"
            >
              <div className="p-3 bg-neutral-100 rounded-xl inline-block mb-4">
                {renderAttractionIcon(att.icon)}
              </div>
              <h4 className="font-display text-lg font-bold text-[#1A1A1A] uppercase mb-2">{att.title}</h4>
              <p className="text-sm text-neutral-600 leading-relaxed font-semibold">{att.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 6: CARDÁPIO OPEN FOOD & OPEN BAR */}
      <section id="cardapios" className="py-20 max-w-6xl mx-auto px-4 w-full bg-orange-50/40 rounded-3xl border border-orange-200/50 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sunset-orange/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-sunset-orange uppercase font-bold">GASTRONOMIA PREMIUM LIBERADA</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1A1A1A] mt-1">
            CARDÁPIO OPEN FOOD & BAR 🍖🍹
          </h2>
          <p className="text-neutral-600 text-sm max-w-lg mx-auto mt-2 font-medium">
            Uma fartura gastronômica digna dos grandes banquetes com opções para todos os gostos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDAPIO.map((sector) => (
            <div 
              key={sector.title}
              className="bg-glass p-8 rounded-3xl border border-neutral-200/60 relative flex flex-col justify-between hover:border-sunset-orange transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  {sector.title.includes("Principal") && <span className="text-3xl">🍖</span>}
                  {sector.title.includes("Sobremesas") && <span className="text-3xl">🍦</span>}
                  {sector.title.includes("Bar") && <span className="text-3xl">🍹</span>}
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#1A1A1A]">
                    {sector.title}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {sector.items.map((item, id) => (
                    <li key={id} className="flex gap-2.5 items-start text-xs sm:text-sm text-neutral-700">
                      <span className="text-sunset-orange font-bold mt-0.5">•</span>
                      <span className="font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 7: OS MEGA SORTEIOS */}
      <section id="sorteios" className="py-24 max-w-6xl mx-auto px-4 w-full relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-[#D97706] uppercase font-bold">A EQUIPE MERECE O MELHOR</span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-[#1A1A1A] mt-1">
            OS MEGA SORTEIOS 🎉
          </h2>
          <p className="text-sunset-orange text-xs uppercase font-mono tracking-widest mt-2 font-bold select-none text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue">
            VOCÊ PODE LEVAR PRÊMIOS IMPAGÁVEIS PARA CASA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SORTEIOS.map((item) => (
            <div 
              key={item.id}
              className="bg-glass-heavy p-8 rounded-3xl border border-yellow-500/30 shadow-lg relative flex flex-col justify-between hover:border-yellow-500 transition-all"
            >
              <div className="absolute top-4 right-4 bg-yellow-50 border border-yellow-200 text-yellow-800 font-display text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                {item.badge}
              </div>
              
              <div>
                <span className="text-5xl block mb-6">
                  {item.icon === 'plane' ? '✈️' : '🔊'}
                </span>
                
                <h3 className="font-display text-xl sm:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#D97706] font-mono text-sm uppercase mt-1.5 mb-4 font-black">
                  {item.prize}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO 8: LEMBRANCINHA FINAL */}
      <section className="py-16 max-w-4xl mx-auto px-4 w-full">
        <div className="bg-glass p-8 md:p-14 rounded-3xl border border-emerald-200 shadow-md relative overflow-hidden text-center items-center flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-44 h-44 bg-tropical-green/5 rounded-full blur-2xl" />
          
          <span className="text-6xl block mb-4 animate-pulse">🎒</span>
          <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-[#1A1A1A] mb-4">
            MAIS PRESENTE NO FINAL DO EVENTO!
          </h3>
          <p className="select-none text-neutral-600 text-sm max-w-2xl mx-auto mb-8 font-medium">
            Nenhum esforço heróico passa em branco na nossa equipe. Ao ir embora do Resort, todos os integrantes ganharão o <strong className="text-[#1A1A1A] font-bold">Kit Praia Master + Mini Necessaire</strong> personalizado:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {LEMBRANCINHA_FINAL.items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-emerald-50/75 p-4 rounded-xl border border-emerald-200 flex flex-col items-center justify-center text-center"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-tropical-green mb-2" />
                <span className="text-[11px] sm:text-xs text-emerald-800 uppercase font-mono tracking-widest font-extrabold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 9: NETLIFY FORMULÁRIO DE CONFIRMAÇÃO DE PRESENÇA */}
      <section id="confirmar-presenca" className="py-24 max-w-3xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <PartyPopper className="w-12 h-12 text-[#ff5400] mx-auto mb-4 animate-bounce" />
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue text-sunset-orange">
            CONFIRME SUA PRESENÇA VIP 🌴🔥
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mt-2 uppercase font-mono tracking-wide font-semibold">
            Sua inscrição é hiper necessária para planejarmos os chinelos sob medida, kits praia ideais, drinks fresquinhos e cortes de grelhados à exatidão. Responda abaixo!
          </p>
        </div>

        <AnimatePresence mode="wait">
          {(!isSubmitted) ? (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-glass p-8 md:p-12 rounded-3xl border border-neutral-200/55 shadow-lg relative"
            >
              {/* Form real com atributos do Netlify */}
              <form 
                name="ibiza-beach-form" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                {/* Atributo oculto do Netlify Forms */}
                <input type="hidden" name="form-name" value="ibiza-beach-form" />

                {/* Nome Completo */}
                <div>
                  <label htmlFor="nome" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                    Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    id="nome"
                    name="nome" 
                    required 
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Ex: Amanda Silva Oliveira" 
                    className="w-full bg-white border border-neutral-200 focus:border-sunset-orange text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                  />
                </div>

                {/* Setor na Hamburgueria */}
                <div>
                  <label htmlFor="setor" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                    Setor na Hamburgueria *
                  </label>
                  <select 
                    id="setor"
                    name="setor" 
                    required 
                    value={formData.setor}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-200 focus:border-pool-blue text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                  >
                    <option value="">Selecione o seu setor...</option>
                    <option value="Atendimento">Atendimento</option>
                    <option value="Cozinha">Cozinha</option>
                    <option value="Delivery/Logística">Delivery/Logística</option>
                    <option value="Administração">Administração</option>
                  </select>
                </div>

                {/* Confirmação de Presença */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 font-bold">
                    Confirmação de Presença *
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <label className="relative flex items-center gap-3 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-3 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
                      <input 
                        type="radio" 
                        name="confirmacao" 
                        value="Sim" 
                        required 
                        checked={formData.confirmacao === 'Sim'}
                        onChange={() => handleRadioChange('confirmacao', 'Sim')}
                        className="accent-sunset-orange"
                      />
                      <span className="text-sm text-neutral-700 font-bold">Sim, estarei no Sunset Club! 🌴🌺</span>
                    </label>
                    
                    <label className="relative flex items-center gap-3 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-3 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
                      <input 
                        type="radio" 
                        name="confirmacao" 
                        value="Não" 
                        required 
                        checked={formData.confirmacao === 'Não'}
                        onChange={() => handleRadioChange('confirmacao', 'Não')}
                        className="accent-sunset-orange"
                      />
                      <span className="text-sm text-neutral-700 font-bold">Infelizmente não poderei ir 😭</span>
                    </label>
                  </div>
                </div>

                {/* Tamanho do seu Chinelo */}
                <div>
                  <label htmlFor="chinelo" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                    Tamanho do seu Chinelo *
                  </label>
                  <select 
                    id="chinelo"
                    name="chinelo" 
                    required 
                    value={formData.chinelo}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-neutral-200 focus:border-pool-blue text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                  >
                    <option value="">Selecione o tamanho para o seu brinde...</option>
                    <option value="35-36">35-36</option>
                    <option value="37-38">37-38</option>
                    <option value="39-40">39-40</option>
                    <option value="41-42">41-42</option>
                    <option value="43-44">43-44</option>
                  </select>
                </div>

                {/* Você levará acompanhante? */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 font-bold">
                    Você levará acompanhante? (Limite de +1) *
                  </label>
                  <div className="flex gap-4">
                    <label className="relative flex items-center gap-2 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-2.5 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
                      <input 
                        type="radio" 
                        name="acompanhante" 
                        value="Sim" 
                        required 
                        checked={formData.acompanhante === 'Sim'}
                        onChange={() => {
                          handleRadioChange('acompanhante', 'Sim');
                          setAcompanhanteSim(true);
                        }}
                        className="accent-sunset-orange"
                      />
                      <span className="text-sm text-neutral-700 font-bold">Sim (+1)</span>
                    </label>
                    <label className="relative flex items-center gap-2 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-2.5 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
                      <input 
                        type="radio" 
                        name="acompanhante" 
                        value="Não" 
                        required 
                        checked={formData.acompanhante === 'Não'}
                        onChange={() => {
                          handleRadioChange('acompanhante', 'Não');
                          setAcompanhanteSim(false);
                        }}
                        className="accent-sunset-orange"
                      />
                      <span className="text-sm text-neutral-700 font-bold">Não</span>
                    </label>
                  </div>
                </div>

                {/* ACOMPANHANTE SUBFIELD WRAPPER ANIMATED */}
                <AnimatePresence>
                  {acompanhanteSim && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden space-y-4"
                    >
                      <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-4 shadow-inner">
                        <div>
                          <label htmlFor="acompanhanteNome" className="block text-xs font-mono uppercase tracking-wider text-teal-700 mb-2 font-bold">
                            Nome Completo do Acompanhante *
                          </label>
                          <input 
                            type="text" 
                            id="acompanhanteNome"
                            name="acompanhanteNome" 
                            required={acompanhanteSim}
                            value={formData.acompanhanteNome}
                            onChange={handleInputChange}
                            placeholder="Nome Completo do seu acompanhante" 
                            className="w-full bg-white border border-neutral-200 focus:border-sunset-orange text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                          />
                        </div>

                        <div>
                          <label htmlFor="acompanhanteChinelo" className="block text-xs font-mono uppercase tracking-wider text-teal-700 mb-2 font-bold">
                            Tamanho do Chinelo do Acompanhante *
                          </label>
                          <select 
                            id="acompanhanteChinelo"
                            name="acompanhanteChinelo" 
                            required={acompanhanteSim}
                            value={formData.acompanhanteChinelo}
                            onChange={handleInputChange}
                            className="w-full bg-white border border-neutral-200 focus:border-pool-blue text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                          >
                            <option value="">Selecione o tamanho para o acompanhante...</option>
                            <option value="35-36">35-36</option>
                            <option value="37-38">37-38</option>
                            <option value="39-40">39-40</option>
                            <option value="41-42">41-42</option>
                            <option value="43-44">43-44</option>
                          </select>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Preferência de Bebida MULTIPLE CHECKBOX */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 font-bold">
                    Preferência de Bebida (Escolha o que consome)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Drinks com Álcool", "Drinks sem Álcool", "Cerveja ou Chopp", "Suco / Refri / Água"].map((bebida) => (
                      <label 
                        key={bebida} 
                        className="flex items-center gap-2.5 bg-white hover:bg-neutral-50/80 border border-neutral-200 px-3 py-2.5 rounded-xl cursor-pointer text-xs sm:text-sm text-neutral-750 transition-all font-semibold shadow-sm"
                      >
                        <input 
                          type="checkbox" 
                          checked={formData.bebidasSelected.includes(bebida)}
                          onChange={() => handleCheckboxChange(bebida)}
                          className="accent-sunset-orange w-4 h-4" 
                        />
                        {bebida}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Restrição Alimentar ou Alergia */}
                <div>
                  <label htmlFor="restricao" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                    Restrições Alimentares ou Alergias (Opcional)
                  </label>
                  <input 
                    type="text" 
                    id="restricao"
                    name="restricao" 
                    value={formData.restricao}
                    onChange={handleInputChange}
                    placeholder="Ex: Alergia a camarão, intolerância a glúten, vegano..." 
                    className="w-full bg-white border border-neutral-200 focus:border-sunset-orange text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm"
                  />
                </div>

                {/* Submit Action */}
                <button 
                  type="submit" 
                  className="w-full py-4 bg-gradient-to-r from-sunset-orange via-sunset-yellow to-pool-blue rounded-xl text-white font-display text-sm sm:text-base font-extrabold tracking-widest hover:brightness-110 active:scale-95 transition-all uppercase shadow-md shadow-sunset-orange/20 cursor-pointer"
                >
                  CONFIRMAR CONFIRMAÇÃO VIP & ENVIAR 🌴🌊
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div 
              key="confirmation"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-glass-heavy border border-yellow-500/30 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden shadow-xl"
            >
              {/* Confete aesthetic backgrounds */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-sunset-orange/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-pool-blue/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-md mx-auto flex flex-col items-center">
                <span className="text-7xl block mb-6 animate-bounce">🎟️</span>
                <span className="px-3.5 py-1 bg-yellow-50 text-yellow-800 font-mono text-[10px] rounded-full uppercase tracking-widest border border-yellow-200 mb-4 inline-block font-semibold">
                  ENTRADA LIBERADA VIP • SUNSET LUAU 🌺
                </span>
                
                <h3 className="font-display text-3xl font-extrabold text-[#1A1A1A] uppercase tracking-tight">
                  PRESENÇA CONFIRMADA!
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-2.5 font-medium">
                  Prepare seu melhor visual beach e óculos escuros! Seu nome já consta na Portaria VIP para o Resort Hotel Terras Altas.
                </p>

                {/* PASSPOORT TICKET CONTAINER */}
                <div className="w-full bg-neutral-50 rounded-2xl p-6 border border-neutral-200 text-left mt-8 space-y-4 relative shadow-md">
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-[#F2EFE9] rounded-full border border-neutral-200" />
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-[#F2EFE9] rounded-full border border-neutral-200" />
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#F2EFE9] rounded-full border border-neutral-200" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-[#F2EFE9] rounded-full border border-neutral-200" />

                  <div className="border-b border-neutral-200 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-teal-700 block font-bold">Convidado</span>
                    <strong className="text-neutral-800 text-base tracking-wide uppercase font-display font-extrabold">{formData.nome || "Convidado Especial"}</strong>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-[10px] text-[#A0AEC0] uppercase tracking-wider block font-bold">Setor Hamburgueria</span>
                      <strong className="text-neutral-800 font-bold">{formData.setor || "Atendimento"}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#A0AEC0] uppercase tracking-wider block font-bold">Tamanho Chinelo</span>
                      <strong className="text-neutral-800 font-bold">{formData.chinelo || "39-40"}</strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-neutral-200">
                    <div>
                      <span className="text-[10px] text-[#A0AEC0] uppercase tracking-wider block font-bold">Acompanhante (+1)</span>
                      <strong className="text-neutral-800 font-bold">
                        {formData.acompanhante === "Sim" ? "Sim: " + (formData.acompanhanteNome || "Convidado") : "Não"}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#A0AEC0] uppercase tracking-wider block font-bold">Kit Praia Reservado</span>
                      <strong className="text-[#b45309] font-black uppercase">MASTER VIP</strong>
                    </div>
                  </div>

                  <div className="text-center pt-4 select-none">
                    <span className="font-mono text-[9px] text-sunset-orange tracking-widest uppercase font-bold">
                      ID REGISTRATION: #SST-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-xs font-mono underline uppercase tracking-widest text-[#4A5568] hover:text-[#1A1A1A] transition-colors font-bold"
                >
                  Fazer nova confirmação ou editar dados
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>



      {/* FOOTER */}
      <footer className="bg-neutral-150 text-neutral-600 text-xs text-center py-12 px-4 border-t border-neutral-200 mt-auto">
        <p className="font-display tracking-[0.3em] font-black uppercase text-neutral-800 text-sm mb-2">
          SUNSET TROPICAL CLUB
        </p>
        <p className="mb-1 uppercase tracking-wider text-[10px] text-neutral-600 font-bold">
          Hotel Terras Altas – Resort de Comemoração de Metas Batidas com Estilo Havaiano
        </p>
        <p className="uppercase tracking-wider text-[9px] text-neutral-500 font-semibold">
          © 2026 CORPORATE EXCLUSIVE SUNSET PARTY & ALOHA LUAU • ALL RIGHTS RESERVED.
        </p>
      </footer>
      
    </div>
  );
}
