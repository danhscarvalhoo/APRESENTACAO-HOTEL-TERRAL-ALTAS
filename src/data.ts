export interface DJInfo {
  name: string;
  role: string;
  style: string;
  gradient: string;
  emoji: string;
}

export interface VenuePhoto {
  title: string;
  description: string;
  gradient: string;
  emoji: string;
}

export interface CardapioSector {
  title: string;
  items: string[];
  icon: string;
}

export const DJS: DJInfo[] = [
  {
    name: "DJ MOCHAKK",
    role: "HEADLINER PRINCIPAL • ALOHA BEATS",
    style: "Deep House / Tech House Internacional & Tribal Grooves",
    gradient: "from-sunset-orange via-sunset-yellow to-tropical-green",
    emoji: "🎧",
  },
  {
    name: "DJ MUS4O",
    role: "CO-HEADLINER • SUNSET LUAU",
    style: "Melodic Techno & EDM Tropical Anthems",
    gradient: "from-[#028090] via-pool-blue to-sunset-orange",
    emoji: "🌴",
  }
];

export const VENUE_PHOTOS: VenuePhoto[] = [
  {
    title: "Vista Aérea Resort",
    description: "Um resort espetacular cercado por exuberante natureza preservada de alto padrão e clima tropical.",
    gradient: "from-[#005f73] to-[#0a9396]",
    emoji: "🏝️",
  },
  {
    title: "Lounge Sunset & Cascata",
    description: "Espaço instagramável decorado com tochas nativas e vista panorâmica para curtir o pôr do sol.",
    gradient: "from-[#ca6702] to-[#bb3e03]",
    emoji: "🔥",
  },
  {
    title: "Piscina Principal Resort",
    description: "Mega piscina espetacular aquecida, integrada à natureza intocada e decorada com vegetação.",
    gradient: "from-pool-blue to-[#00b4d8]",
    emoji: "🏊",
  },
  {
    title: "Área de Lazer Integrada",
    description: "Dezenas de lounges rústicos com guarda-sóis e redes para o seu máximo conforto tropical.",
    gradient: "from-[#ee9b00] to-sunset-orange",
    emoji: "☀️",
  },
  {
    title: "Arena de Diversão",
    description: "Quadras esportivas de altíssimo padrão integradas perfeitamente ao verde do resort.",
    gradient: "from-tropical-green to-[#2a9d8f]",
    emoji: "🥥",
  }
];

export const WELCOME_KITS = [
  "Colar de Flores Havaianas Premium (Lei Polinésio) 🌺",
  "Óculos Escuros Retro Sunset Tropical 🕶️",
  "Pulseira Neon de Identificação VIP Holográfica 🎟️",
  "Leque Neon Tropical para se refrescar na pista 🪭",
  "Copo Fibra de Coco Beach Club Personalizado Exclusivo 🥥",
  "Toalha Havaiana de Alta Gramatura Personalizada 🏖️"
];

export const ATRACOES = [
  {
    title: "Piscina Climatizada Liberada",
    desc: "Com boias gigantes em formatos tropicais (flamingos, abacaxis) em nossa mega piscina cercada por natureza.",
    icon: "waves",
  },
  {
    title: "Dança do Limbo & Futsabão",
    desc: "Atividades divertidíssimas de praia com a tradicional travessia do limbo e futebol com sabão.",
    icon: "smile",
  },
  {
    title: "Karaokê Aloha Premium",
    desc: "Equipado com os melhores microfones e um catálogo enorme com hits tropicais e sucessos nacionais.",
    icon: "mic",
  },
  {
    title: "Sala de Jogos Hawaii Cup",
    desc: "Desafios de snooker, pebolim, ping-pong e arcades do próprio hotel com ambientação de Luau.",
    icon: "gamepad",
  },
  {
    title: "Fotógrafo & Filmagem Profissional",
    desc: "Registros de alta qualidade cobrindo toda a festa na praia, a piscina e a pista (100% grátis!).",
    icon: "camera",
  },
  {
    title: "Plataforma Câmera 360° Rotativa",
    desc: "Grave vídeos super lentos com seus colares havaianos e óculos escuros para bombar no Instagram.",
    icon: "video",
  }
];

export const CARDAPIO: CardapioSector[] = [
  {
    title: "Buffet Sunset Luau (Churrasco & Mar)",
    icon: "Utensils",
    items: [
      "Churrasco de Cortes Nobres Angus com Abacaxi Grelhado na brasa",
      "Buffet exclusivo do Mar (Paella gigante banqueteada, camarão à paulista)",
      "Mesa Tropical Exótica com frutas frescas fatiadas (Manga, Coco, Carambola)",
      "Ilha de petiscos frescos e leves para Vegetarianos & Veganos"
    ]
  },
  {
    title: "Sobremesas Luau Paradise",
    icon: "IceCream",
    items: [
      "Carrinho de sorvetes tropicais de frutas do nordeste e picolés refrescantes",
      "Estação de Açaí Havaiana em taças com toppings livres (leite ninho, granola, mel, castanha)",
      "Raspadinhas de sabores coloridos refrescantes feitas na hora por mixologistas",
      "Mesa de Doces Finos Decorada com Flores de Hibiscus totalmente liberada"
    ]
  },
  {
    title: "Open Bar Aloha Tropics",
    icon: "Beer",
    items: [
      "Drinks Tropicais Premium (Piña Colada no coco, Caipirinhas de frutas, Mojito Real)",
      "Mocktails autorais refrescantes sem álcool para todo mundo curtir",
      "Chopp artesanal trincando e Cervejas Corona/Heineken em baldes de gelo ilimitados",
      "Água de coco natural gelada, sucos de frutas da estação, refrigerantes e água com gás"
    ]
  }
];

export const SORTEIOS = [
  {
    id: "rj",
    title: "Mega Viagem: Rio de Janeiro",
    prize: "2 Passagens Aéreas + Hotel de Luxo na Praia",
    desc: "2 dias espetaculares na orla ensolarada da praia do Rio de Janeiro com TUDO PAGO (alimentação de luxo e passeios) para curtir com quem você ama!",
    icon: "plane",
    badge: "PRÊMIO MÁXIMO 🌴"
  },
  {
    id: "jbl",
    title: "Som Potente no Luau",
    prize: "3 Caixas de Som JBL Originais",
    desc: "Para animar qualquer praia! Modelos JBL Charge 5 e Boombox 3 originais de altíssima fidelidade sonora e à prova d'água.",
    icon: "volume",
    badge: "SORTEIO MULTIPLO 🔊"
  }
];

export const LEMBRANCINHA_FINAL = {
  title: "Mini Necessaire + Kit Luau Praia Master",
  items: [
    "Cooler térmico compacto para bebidas",
    "Chinelo personalizado Sunset Tropical Club",
    "Viseira de sol esportiva ajustável",
    "Óculos escuros premium de sol UV"
  ]
};

export const STATIC_HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sunset Tropical Club • Hotel Terras Altas</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
    
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #F9F8F5;
      color: #2D3748;
    }
    .font-display {
      font-family: 'Space Grotesk', sans-serif;
    }
    
    @keyframes pulse-neon {
      0%, 100% {
        text-shadow: 0 0 6px rgba(255, 84, 0, 0.2), 0 0 15px rgba(255, 84, 0, 0.1);
        box-shadow: 0 0 5px rgba(14, 165, 233, 0.15);
      }
      50% {
        text-shadow: 0 0 15px rgba(255, 190, 11, 0.5), 0 0 30px rgba(255, 190, 11, 0.3);
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.25);
      }
    }
    
    .btn-pulsing {
      animation: pulse-neon 2.5s infinite ease-in-out;
    }
    
    .shadow-orange { box-shadow: 0 0 25px rgba(255, 84, 0, 0.15); }
    .shadow-green { box-shadow: 0 0 25px rgba(16, 185, 129, 0.15); }
    .shadow-blue { box-shadow: 0 0 25px rgba(14, 165, 233, 0.15); }
    
    .bg-glass {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    .bg-glass-heavy {
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(0, 0, 0, 0.12);
    }
  </style>
</head>
<body class="text-neutral-700 min-h-screen bg-gradient-to-b from-[#F2EFE9] via-[#FCFAF7] to-[#FFFFFF] overflow-x-hidden pb-12">

  <!-- HERO SECTION -->
  <header class="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 md:px-8 py-24 overflow-hidden border-b border-neutral-200/60">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
    
    <!-- Sunset Pure Gradient Spheres -->
    <div class="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#ff5400] via-[#ffbe0b] to-[#10b981] opacity-10 blur-[100px] md:blur-[140px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    <div class="absolute w-[200px] md:w-[450px] h-[200px] md:h-[450px] rounded-full bg-gradient-to-br from-[#0e25e9] to-[#10b981] opacity-10 blur-[80px] bottom-10 left-10 pointer-events-none"></div>

    <div class="max-w-4xl relative z-10 flex flex-col items-center">
      <!-- Tag Premium -->
      <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-teal-700 bg-teal-50 border border-teal-200 mb-6 bg-glass">
        🌺 SUNSET TROPICAL CLUB • COMEMORAÇÃO DA META BATIDA! 🥥
      </span>
      
      <!-- Título Principal -->
      <h1 class="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none mb-6">
        <span class="text-[#1A1A1A] drop-shadow-sm block">SUNSET TROPICAL</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5400] via-[#ffbe0b] to-[#0ea5e9]">HOTEL TERRAS ALTAS 🌺</span>
      </h1>
      
      <!-- Texto de Agradecimento -->
      <p class="text-neutral-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mb-10 px-2 font-medium">
        Nossa equipe quebrou todos os recordes e alcançou o topo! Para comemorar esse resultado histórico, estamos levando vocês para o espetacular <strong class="text-[#1A1A1A] font-bold">Hotel Terras Altas – Interior de SP</strong>. Um resort espetacular cercado de natureza exuberante com uma mega piscina aquecida ao ar livre para este incrível Luau Havaiano de altíssimo nível. Preparem as camisas florais, trajes de banho e óculos escuros!
      </p>

      <!-- Botão Urgente Pulsante -->
      <a href="#confirmar-presenca" class="btn-pulsing inline-flex items-center justify-center px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-[#ff5400] via-[#ffbe0b] to-[#0ea5e9] text-white font-display text-lg sm:text-xl font-bold rounded-xl tracking-widest hover:brightness-110 active:scale-95 transition-all uppercase shadow-lg shadow-orange">
        CONFIRMAR PRESENÇA NO SUNSET CLUB AGORA
      </a>
    </div>
  </header>

  <!-- SEÇÃO 2: DJS LINE-UP -->
  <section class="max-w-4xl mx-auto px-4 py-20">
    <div class="text-center mb-16">
      <h2 class="font-display text-3xl md:text-5xl font-extrabold uppercase text-[#1A1A1A]">
        LINE-UP DOS DJS
      </h2>
      <p class="text-[#ff5400] font-bold uppercase font-mono tracking-widest text-xs mt-2">🎧 Vibe Sunset, Tribal House & Eletrônica Polinésia</p>
    </div>
    
    <div class="flex flex-col items-center justify-center space-y-14 text-center max-w-2xl mx-auto">
      <!-- DJ MOCHAKK -->
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-3xl">🎧</span>
          <span class="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-orange-50 text-[#ff5400] border border-orange-200">HEADLINER PRINCIPAL • ALOHA BEATS</span>
        </div>
        <h3 class="font-display text-4xl sm:text-6xl font-black uppercase tracking-wide text-sunset-orange">DJ MOCHAKK</h3>
        <p class="text-neutral-600 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold mt-3 max-w-lg">Deep House / Tech House Internacional & Tribal Grooves</p>
      </div>

      <!-- DJ MUS4O -->
      <div class="flex flex-col items-center">
        <div class="flex items-center gap-2 mb-3">
          <span class="text-3xl">🌴</span>
          <span class="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">CO-HEADLINER • SUNSET LUAU</span>
        </div>
        <h3 class="font-display text-4xl sm:text-6xl font-black uppercase tracking-wide text-teal-600">DJ MUS4O</h3>
        <p class="text-neutral-600 text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold mt-3 max-w-lg">Melodic Techno & EDM Tropical Anthems</p>
      </div>
    </div>
  </section>

  <!-- SEÇÃO 3: INFORMAÇÕES ESSENCIAIS -->
  <section class="max-w-6xl mx-auto px-4 py-16">
    <div class="bg-glass rounded-3xl p-8 md:p-12 border border-neutral-200 shadow-lg relative overflow-hidden">
      <div class="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- LOCAL -->
        <div class="flex flex-col items-start space-y-4">
          <div class="text-[#0ea5e9] text-3xl">📍</div>
          <h3 class="font-display text-xl font-bold uppercase text-[#1A1A1A] tracking-wider">LOCAL DO ENCONTRO</h3>
          <p class="text-neutral-600 leading-relaxed text-sm font-semibold">
            <strong class="text-teal-700 uppercase text-sm block">Hotel Terras Altas – Interior de SP</strong>
            Um resort espetacular cercado de natureza com uma mega piscina climatizada incrível integrada ao verde de forma paradisíaca. Fornece lazer privativo absoluto e infraestrutura cinco estrelas.
          </p>
        </div>

        <!-- HORARIO -->
        <div class="flex flex-col items-start space-y-4 border-t md:border-t-0 md:border-x border-neutral-200/80 pt-6 md:pt-0 pt-8 md:px-8">
          <div class="text-[#ff5400] text-3xl">⏰</div>
          <h3 class="font-display text-xl font-bold uppercase text-[#1A1A1A] tracking-wider">HORÁRIO SUNSET</h3>
          <p class="text-neutral-600 text-lg font-mono leading-none">
            Das <strong class="text-[#1A1A1A] text-xl">16h00</strong> às <strong class="text-[#1A1A1A] text-xl">01h00</strong>
          </p>
          <span class="text-xs text-neutral-500 uppercase tracking-widest mt-2 block font-extrabold">9 HORAS DE POOL PARTY & LUAU COCORICO</span>
        </div>

        <!-- DRESS CODE -->
        <div class="flex flex-col items-start space-y-4 border-t md:border-t-0 pt-6 md:pt-0 pt-8">
          <div class="text-emerald-600 text-3xl">🌺</div>
          <h3 class="font-display text-xl font-bold uppercase text-[#1A1A1A] tracking-wider">DRESS CODE LUAU</h3>
          <p class="text-neutral-600 leading-relaxed text-sm font-semibold">
            <strong class="text-emerald-700 font-extrabold">Traje Beach Club / Havaiano Floral (M/F):</strong> Venha com peças leves, camisas floridas rústicas, bermudas de banho confortáveis ou vestidos de praia para curtir a beira d'água!<br>
            <strong class="text-[#b45309] font-black">🏆 DESFILE COMPROMETIDO:</strong> Teremos premiação especial de brinde surpresa para quem apresentar o melhor look tropical!
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- GALERIA DO RESORT EM CSS GRADIENT TRÓPICOS -->
  <section class="max-w-6xl mx-auto px-4 py-16">
    <div class="text-center mb-10">
      <h2 class="font-display text-2xl md:text-4xl font-extrabold uppercase text-[#1A1A1A]">O Cenário: Hotel Terras Altas</h2>
      <p class="text-neutral-600 mt-2 text-xs uppercase font-mono tracking-widest text-[#10b981] font-bold">Resort Espetacular cercado de natureza com mega piscina</p>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <!-- 1 -->
      <div class="rounded-2xl border border-neutral-200 shadow bg-gradient-to-b from-[#005f73] to-[#0a9396] h-40 md:h-60 flex flex-col justify-between p-5 hover:scale-[1.02] transition-transform cursor-pointer">
        <span class="text-3xl">🏝️</span>
        <div>
          <h4 class="font-display text-sm font-bold uppercase text-white text-left tracking-wide">Vista Aérea Resort</h4>
          <p class="text-[10px] text-teal-100 mt-1 font-bold">Cercado de floresta nativa de alto padrão</p>
        </div>
      </div>
      <!-- 2 -->
      <div class="rounded-2xl border border-neutral-200 shadow bg-gradient-to-tr from-[#ca6702] to-[#bb3e03] h-40 md:h-60 flex flex-col justify-between p-5 hover:scale-[1.02] transition-transform cursor-pointer">
        <span class="text-3xl">🔥</span>
        <div>
          <h4 class="font-display text-sm font-bold uppercase text-white text-left tracking-wide">Lounge Sunset & Cascata</h4>
          <p class="text-[10px] text-orange-100 mt-1 font-bold">Decorado com tochas nativas e pôr do sol</p>
        </div>
      </div>
      <!-- 3 -->
      <div class="rounded-2xl border border-neutral-200 shadow bg-gradient-to-br from-[#00f5d4] to-[#00b4d8] h-40 md:h-60 flex flex-col justify-between p-5 hover:scale-[1.02] transition-transform cursor-pointer">
        <span class="text-3xl">🏊</span>
        <div>
          <h4 class="font-display text-sm font-bold uppercase text-white text-left tracking-wide">Mega Piscina Resort</h4>
          <p class="text-[10px] text-cyan-50 mt-1 font-bold">Piscina gigante integrada à exuberância local</p>
        </div>
      </div>
      <!-- 4 -->
      <div class="rounded-2xl border border-neutral-200 shadow bg-gradient-to-tl from-[#ee9b00] to-[#ff5400] h-40 md:h-60 flex flex-col justify-between p-5 hover:scale-[1.02] transition-transform cursor-pointer">
        <span class="text-3xl">☀️</span>
        <div>
          <h4 class="font-display text-sm font-bold uppercase text-white text-left tracking-wide">Área de Lazer</h4>
          <p class="text-[10px] text-yellow-50 mt-1 font-bold">Conforto absoluto com guarda-sóis e bangalôs</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WELCOME KIT -->
  <section class="max-w-6xl mx-auto px-4 py-16">
    <div class="text-center mb-12">
      <h2 class="font-display text-3xl md:text-5xl font-extrabold uppercase text-[#1A1A1A]">WELCOME KIT LUAU 🎁</h2>
      <p class="text-xs uppercase font-mono tracking-widest mt-2 text-[#10b981] font-bold">Entregue diretamente na recepção para você entrar no clima do Sunset Club</p>
    </div>
    
    <div class="bg-glass rounded-3xl p-8 border border-neutral-200 max-w-4xl mx-auto shadow-md">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex items-center justify-center p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
          <div class="text-center">
            <span class="text-6xl block mb-4">🌺</span>
            <h4 class="font-display text-2xl font-bold uppercase text-[#1A1A1A] mb-2">KIT ALOHA COOPER</h4>
            <p class="text-neutral-600 text-sm font-medium">Os acessórios perfeitos para você curtir a pista, a piscina e o desfile com o time do ano.</p>
          </div>
        </div>
        <div class="flex flex-col justify-center space-y-3.5">
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Colar de Flores Havaianas Premium 🌺</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Óculos Escuros Retro Sunset Tropical 🕶️</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Pulseira de Identificação Holográfica VIP 🎟️</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Leque Neon Tropical customizado 🪭</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Copo de Fibra de Coco Sustentável Beach 🥥</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[#10b981] font-bold text-lg">✦</span>
            <p class="text-neutral-700 text-sm font-semibold">Toalha de Banho Havaiana de Luxo 🏖️</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONFIRMAR PRESENÇA FORM -->
  <section id="confirmar-presenca" class="max-w-3xl mx-auto px-4 py-20">
    <div class="text-center mb-10">
      <h2 class="font-display text-3xl md:text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#ff5400] via-[#ffbe0b] to-[#0ea5e9] text-orange mb-4">
        PREENCHA E CONFIRME
      </h2>
      <p class="text-neutral-600 text-xs sm:text-sm font-mono uppercase tracking-widest font-bold">
        Inscrição vital para organizar os brindes sob medida e churrasco de alta linha!
      </p>
    </div>

    <div class="bg-glass p-8 md:p-12 rounded-3xl border border-neutral-200/60 shadow-lg relative">
      <form name="sunset-terras-altas-form" method="POST" netlify data-netlify="true" class="space-y-6">
        <input type="hidden" name="form-name" value="sunset-terras-altas-form" />

        <!-- Nome -->
        <div>
          <label class="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">Nome Completo *</label>
          <input type="text" name="nome" required placeholder="Digite seu nome completo" class="w-full bg-white border border-neutral-200 focus:border-[#ff5400] text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm">
        </div>

        <!-- Setor -->
        <div>
          <label class="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">Setor na Hamburgueria *</label>
          <select name="setor" required class="w-full bg-white border border-neutral-200 focus:border-[#0ea5e9] text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm">
            <option value="">Selecione...</option>
            <option value="Atendimento">Atendimento</option>
            <option value="Cozinha">Cozinha</option>
            <option value="Delivery/Logística">Delivery/Logística</option>
            <option value="Administração">Administração</option>
          </select>
        </div>

        <!-- Confirmação -->
        <div>
          <label class="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 font-bold">Confirmação de Presença *</label>
          <div class="flex flex-col sm:flex-row gap-4">
            <label class="flex items-center gap-3 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-3 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
              <input type="radio" name="confirmacao" value="Sim" required class="accent-[#ff5400]">
              <span class="text-sm text-neutral-700 font-bold">Sim, estarei no Sunset Club! 🌴🌺</span>
            </label>
            <label class="flex items-center gap-3 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-3 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
              <input type="radio" name="confirmacao" value="Não" required class="accent-[#ff5400]">
              <span class="text-sm text-neutral-700 font-bold">Infelizmente não poderei ir 😭</span>
            </label>
          </div>
        </div>

        <!-- Chinelo -->
        <div>
          <label class="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">Tamanho do seu Chinelo *</label>
          <select name="chinelo-tamanho" required class="w-full bg-white border border-neutral-200 focus:border-[#0ea5e9] text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm">
            <option value="">Selecione o tamanho para o seu brinde...</option>
            <option value="35-36">35-36</option>
            <option value="37-38">37-38</option>
            <option value="39-40">39-40</option>
            <option value="41-42">41-42</option>
            <option value="43-44">43-44</option>
          </select>
        </div>

        <!-- Acompanhante -->
        <div>
          <label class="block text-xs font-mono uppercase tracking-wider text-neutral-700 mb-3 font-bold">Você levará acompanhante? *</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-2.5 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
              <input type="radio" name="acompanhante" value="Sim" required class="accent-[#ff5400]" id="radio-acomp-sim" onclick="document.getElementById('acompanhante-campos').style.display = 'block';">
              <span class="text-sm text-neutral-750 font-bold">Sim (+1)</span>
            </label>
            <label class="flex items-center gap-2 bg-white hover:bg-neutral-50/50 border border-neutral-200 px-4 py-2.5 rounded-xl cursor-pointer flex-1 transition-colors shadow-sm">
              <input type="radio" name="acompanhante" value="Não" required class="accent-[#ff5400]" id="radio-acomp-nao" onclick="document.getElementById('acompanhante-campos').style.display = 'none';">
              <span class="text-sm text-neutral-750 font-bold">Não</span>
            </label>
          </div>
        </div>

        <div id="acompanhante-campos" style="display: none;" class="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 space-y-4 shadow-inner">
          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-teal-700 mb-2 font-bold">Nome Completo do Acompanhante</label>
            <input type="text" name="acompanhante-nome" placeholder="Nome do seu acompanhante" class="w-full bg-white border border-neutral-200 focus:border-[#ff5400] text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm">
          </div>
          <div>
            <label class="block text-xs font-mono uppercase tracking-wider text-teal-700 mb-2 font-bold">Tamanho do Chinelo do Acompanhante</label>
            <select name="acompanhante-chinelo" class="w-full bg-white border border-neutral-200 focus:border-[#0ea5e9] text-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors shadow-sm">
              <option value="">Selecione...</option>
              <option value="35-36">35-36</option>
              <option value="37-38">37-38</option>
              <option value="39-40">39-40</option>
              <option value="41-42">41-42</option>
              <option value="43-44">43-44</option>
            </select>
          </div>
        </div>

        <button type="submit" class="w-full py-4 bg-gradient-to-r from-[#ff5400] via-[#ffbe0b] to-[#0ea5e9] text-white font-display text-sm sm:text-base font-bold rounded-xl tracking-widest hover:brightness-110 transition-all uppercase shadow-md shadow-orange">
          CONFIRMAR INSCRIÇÃO SUNSET CLUB VIP 🌴🌺
        </button>
      </form>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="text-center py-12 border-t border-neutral-200 text-neutral-600 bg-neutral-50 text-xs">
    <p class="font-display tracking-[0.25em] uppercase text-neutral-800 text-sm mb-2 font-black">SUNSET TROPICAL CLUB</p>
    <p class="text-[10px] text-neutral-600 uppercase tracking-widest font-bold">Hotel Terras Altas – Interior de SP • Resort Espetacular cercado de Natureza com Mega Piscina</p>
    <p class="mt-1 font-semibold">© 2026 EVENTO EXCLUSIVO DE COMEMORAÇÃO DE META BATIDA. TODOS OS DIREITOS RESERVADOS.</p>
  </footer>

</body>
</html>`;
