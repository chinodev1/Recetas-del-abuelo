/* ═══════════════════════════════════════════════
   RECETAS DE CASA — app.js
   GSAP + ScrollTrigger + 49 Recipes
═══════════════════════════════════════════════ */

/* ──────────────────────────────────────────────
   1. RECIPE DATA
────────────────────────────────────────────── */
const RECETAS = [

  /* ── MASAS & PIZZAS ── */

  /* ── CARNES ── */

  {
    id: 'bondiola',
    titulo: 'Bondiola Desmenuzada',
    categoria: 'carnes',
    emoji: '🍖',
    img: 'https://images.pexels.com/photos/34495401/pexels-photo-34495401.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 días',
    porciones: '~4,4 kg de carne',
    dificultad: 'Media',
    descripcion: 'Bondiola cocida lenta en sus propios jugos y luego desmenuzada. La salsa BBQ va el día que se sirve — así la carne absorbe mejor sus jugos y el BBQ mantiene todo el sabor y la acidez sin perderlos.',
    ingredientes: [
      '— Condimentos (para ~4,4 kg de bondiola) —',
      '4 cdas. de sal',
      '2 cdas. de pimienta negra',
      '4 cdas. de pimentón ahumado',
      '2 cdas. de ajo en polvo',
      '4 cdas. de azúcar mascabo',
      '2 cebollas grandes',
      'Agua o caldo para la cocción',
      '— Día 2 —',
      '600 ml de salsa BBQ (300 ml por olla)',
      '300–400 ml de jugo de cocción reducido (150–200 ml por olla)'
    ],
    pasos: [
      {
        titulo: '🥩 DÍA 1 — Cocción',
        texto: 'Mezclá todas las especias secas (sal, pimienta, pimentón, ajo, azúcar mascabo) y cubrí la bondiola por todos lados.\n\nColocá en ollas con la cebolla cortada en trozos grandes + agua o caldo. Cociná a fuego mínimo, tapado, 3 a 4 horas. Está lista cuando los dedos separan las fibras fácilmente.'
      },
      {
        titulo: 'Desmenuzar y volver a la olla',
        texto: 'Sacá la carne y desmenuzá en caliente con dos tenedores. Retirá solo los pedazos de grasa excesiva que sean muy grandes.\n\nVolvé la carne desmenuzada al jugo de cocción y mezclá bien — así la carne absorbe sabor durante toda la noche.'
      },
      {
        titulo: 'Heladera overnight',
        texto: 'Dejá enfriar, tapá bien y metí en la heladera hasta el día siguiente.'
      },
      {
        titulo: '🔥 DÍA 2 — Preparar',
        texto: 'Sacá la olla de la heladera. Retirá la capa de grasa solidificada que se formó arriba — guardá el caldo que quedó debajo.\n\nSeparás la carne de los jugos y reservás ambos por separado.'
      },
      {
        titulo: 'Reducir el jugo',
        texto: 'Herví los jugos a fuego suave 10–20 min hasta que estén concentrados y sabrosos.'
      },
      {
        titulo: 'Mezclar con BBQ',
        texto: 'Por cada ~2,2 kg de carne: 300 ml de BBQ + 150–200 ml de jugo reducido. Mezclá bien — la carne tiene que quedar húmeda y brillante, no nadando en salsa.'
      },
      {
        titulo: 'Horno (opcional pero recomendado)',
        texto: 'Extendé la carne en una asadera. Horno a 200–220°C, 10–15 min, hasta que algunos bordes se caramelicen un poco.\n\nSi no querés usar el horno, también podés calentar todo en la misma olla — no cambia mucho el sabor.'
      },
      {
        titulo: 'Ajuste final',
        texto: 'Probá. Si necesita más humedad, agregá cucharadas del jugo reducido caliente y mezclá.\n\nGuardá el jugo reducido aparte: si la carne se seca sobre la mesa después de 20 min, unas cucharadas de jugo la vuelven a la vida al instante.'
      }
    ],
    tips: [
      'El BBQ va el día que se sirve, no durante la cocción: el sabor, la dulzura y la acidez se conservan mejor así.',
      'Guardá siempre jugo reducido aparte para rescatar la carne si se seca en la mesa.',
      'Queda ideal sobre polenta cremosa, arroz a la brasilera o en un sándwich con cebolla crispy.'
    ],
    errores: [
      'Agregar el BBQ durante la cocción del primer día',
      'Tirar el jugo de cocción — es oro líquido',
      'No dejar reposar overnight — la carne mejora enormemente'
    ],
    resumen: 'Día 1: condimentar → cocinar 3-4h → desmenuzar → volver al jugo → heladera. Día 2: sacar grasa → reducir jugo → mezclar con BBQ → horno 10-15 min → servir'
  },

  {
    id: 'matambre-arrollado',
    titulo: 'Matambre Arrollado',
    categoria: 'carnes',
    emoji: '🥩',
    img: 'https://images.pexels.com/photos/8148262/pexels-photo-8148262.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '3 h 30 min + heladera',
    porciones: '8–10 personas',
    dificultad: 'Media',
    descripcion: 'Matambre abierto, condimentado, relleno con huevos duros, morrón, zanahoria y aceitunas. Arrollado, atado y cocido lento en caldo. Se sirve frío en rodajas — ideal como entrada o fiambre.',
    ingredientes: [
      '1 matambre de cerdo o res (~1,5 kg)',
      '3 huevos duros',
      '1 morrón rojo en tiras',
      '2 zanahorias en bastones',
      '1 puñado de aceitunas verdes',
      'Ajo y perejil picados',
      'Sal, pimienta, orégano, ají molido, pimentón',
      '— Caldo para cocción —',
      'Agua, sal gruesa, laurel, pimienta en grano, zanahoria, cebolla'
    ],
    pasos: [
      {
        titulo: 'Condimentar',
        texto: 'Extendé el matambre bien abierto sobre la mesada. Por dentro: sal, pimienta, ajo picado, perejil, orégano, ají molido y pimentón. Masajeá bien para que penetre.'
      },
      {
        titulo: 'Rellenar',
        texto: 'Distribuí sobre toda la superficie: bastones de zanahoria, tiras de morrón, aceitunas partidas. Los huevos duros enteros van alineados en el centro — así cada rodaja queda con huevo.'
      },
      {
        titulo: 'Arrollar y atar',
        texto: 'Enrollá el matambre bien apretado desde un extremo. Atalo con hilo de cocina cada 2–3 cm. Tiene que quedar firme para que no se abra en la cocción.'
      },
      {
        titulo: 'Cocción en caldo',
        texto: 'En una olla grande: agua con sal gruesa, laurel, pimienta en grano, zanahoria y cebolla. Cuando hierva, sumergí el matambre. Fuego suave y tapado, 2,5 a 3 horas.'
      },
      {
        titulo: 'Prensar y enfriar — clave',
        texto: 'Sacá el matambre y envolvelo bien apretado en film o papel aluminio. Poné una tabla encima con algo pesado y llevá a la heladera mínimo 4 horas, mejor toda la noche.'
      },
      {
        titulo: 'Servir',
        texto: 'Quitá el hilo y cortá en rodajas de 1–1,5 cm con cuchillo bien afilado. Serví frío como fiambre, con pan casero o como entrada.'
      }
    ],
    tips: [
      'Los huevos enteros alineados en el centro dan la espiral perfecta en cada rodaja.',
      'Cuanto más tiempo prensado, mejor se sostiene al cortar.',
      'El caldo que sobra es muy sabroso — usalo para sopas o guisos.',
      'Se congela perfecto en rodajas hasta 2 meses.'
    ],
    errores: [
      'No prensar después de cocinar: se deshace al cortar',
      'Cortar caliente: tiene que estar bien frío para que salgan rodajas prolijas',
      'No atar bien: se abre durante la cocción'
    ],
    resumen: 'Condimentar → rellenar → arrollar → atar → caldo 2,5-3h → prensar → heladera → cortar frío'
  },

  {
    id: 'pollo-curry',
    titulo: 'Pollo a la Crema con Hongos',
    categoria: 'carnes',
    emoji: '🍗',
    img: 'https://images.pexels.com/photos/12916881/pexels-photo-12916881.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '45 min',
    porciones: '7 personas',
    dificultad: 'Fácil',
    descripcion: 'Pollo marinado en crema de leche con ajo y pimentón, dorado a fuego fuerte y terminado en salsa cremosa con hongos y cebolla. Simple y lleno de sabor.',
    ingredientes: [
      '1,5 kg de pollo (pechuga o muslo deshuesado)',
      '4 cebollas grandes',
      '1 bolsa de hongos',
      'Crema de leche (a gusto — para marinar y hacer la salsa)',
      'Ajo a gusto',
      'Sal, pimienta negra y pimentón dulce',
      'Aceite',
      'Perejil u orégano para decorar',
      'Morrón (opcional para acompañar)'
    ],
    pasos: [
      { texto: 'Cortá el pollo en cuadraditos parejos.' },
      { texto: 'En un bowl: crema de leche + ajo picado + sal + pimienta + pimentón. Tirá el pollo, cubrí con film y llevá a la heladera mínimo 30 min.' },
      { texto: 'Cortá la cebolla en pluma y picá el ajo.' },
      { texto: 'Calentá aceite en sartén grande a fuego alto. Tirá el pollo con el marinado y dejalo cocinar y dorar bien.' },
      { texto: 'Una vez dorado, sacá el pollo de la sartén y reservá.' },
      { texto: 'En la misma sartén sin lavar: dorá la cebolla y el ajo a fuego medio. Agregá pimentón y crema de leche hasta que quede una salsa cremosa.' },
      { texto: 'Si querés, agregá los hongos con la cebolla para que se doren juntos.' },
      { texto: 'Tirá el pollo encima de la salsa, revolvé y listo. Decorá con perejil u orégano.' }
    ],
    tips: [
      'Cuanto más tiempo marinás el pollo en la crema, más tierno queda.',
      'No laves la sartén después del pollo — el fondeo le da sabor a la salsa.',
      'Queda excelente sobre arroz a la brasilera o con polenta suave.'
    ]
  },

  /* ── PASTAS ── */

  {
    id: 'mac-cheese',
    titulo: 'Mac and Cheese',
    categoria: 'pastas',
    emoji: '🧀',
    img: 'https://images.pexels.com/photos/5107162/pexels-photo-5107162.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4–6 personas',
    dificultad: 'Fácil',
    descripcion: 'Pasta cremosa con cheddar y parmesano, gratinada al horno hasta que burbujea. Comfort food en estado puro.',
    ingredientes: [
      '300 g de coditos (macarrones)',
      '200 g de queso cheddar',
      '50 g de queso parmesano rallado',
      '4 cucharadas de manteca',
      '1 vaso de leche',
      '1 cucharadita de fécula de maíz (maizena)',
      'Sal y pimienta',
      'Orégano',
      'Albahaca fresca (opcional para decorar)'
    ],
    pasos: [
      { titulo: 'Precalentar', texto: 'Precalentá el horno a 200°C.' },
      { titulo: 'Cocinar la pasta', texto: 'Hervir los coditos en agua con sal 8 minutos (al dente). Escurrí y reservá.' },
      { titulo: 'Salsa de queso', texto: 'Calentá la leche en una olla a fuego medio. Antes de hervir, agregá el cheddar, la manteca, el parmesano, orégano y fécula de maíz. Revolvé hasta que quede una salsa cremosa y lisa.' },
      { titulo: 'Unir y gratinar', texto: 'Salpimentá la salsa. Tirá los fideos y revolvé. Volcá en una bandeja de horno y cubrí con parmesano extra.' },
      { titulo: 'Horno', texto: 'Gratinar 10 min a 200°C hasta que se dore la superficie. Decorá con albahaca.' }
    ],
    tips: [
      'La fécula de maíz evita que la salsa se corte y la hace más cremosa.',
      'Si no tenés cheddar, podés mezclar gouda + parmesano.',
      'Panceta crocante encima antes de gratinar: brutal.'
    ]
  },

  /* ── GUARNICIONES ── */

  {
    id: 'polenta',
    titulo: 'Polenta Cremosa',
    categoria: 'guarniciones',
    emoji: '🫕',
    img: 'https://images.pexels.com/photos/921362/pexels-photo-921362.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '20 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Suave, reconfortante y con sabor profundo. La guarnición perfecta para acompañar la bondiola desmenuzada o cualquier estofado.',
    ingredientes: [
      '1,5 tazas de leche',
      '1,5 tazas de agua',
      '1 taza de polenta instantánea',
      'Sal a gusto',
      'Manteca y queso rallado (opcional, para servir)'
    ],
    pasos: [
      { texto: 'Calentá la leche y el agua juntas en una olla a fuego medio, revolviendo de vez en cuando.' },
      { texto: 'Antes de que rompa el hervor, tirá la polenta en forma de lluvia fina mientras revolvés constantemente para que no se formen grumos.' },
      { texto: 'Seguí revolviendo a fuego medio-bajo 5–8 minutos hasta que se espese y quede cremosa.' },
      { texto: 'Ajustá la sal. Si querés, terminá con una nuez de manteca y queso rallado antes de servir.' }
    ],
    tips: [
      'Con leche queda mucho más cremosa que solo con agua.',
      'Si se espesa demasiado, agregá un chorrito de leche caliente.',
      'Es la base perfecta para la bondiola desmenuzada.'
    ]
  },

  {
    id: 'arroz-brasilero',
    titulo: 'Arroz a la Brasilera',
    categoria: 'guarniciones',
    emoji: '🍚',
    img: 'https://images.pexels.com/photos/5850339/pexels-photo-5850339.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '25 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'El arroz con ajo dorado que te cambia la vida. Suelto, aromático y con sabor real. El secreto es lavarlo bien y dorarlo antes del agua.',
    ingredientes: [
      '2 medidas de arroz (lavado 2–3 veces hasta que el agua salga clara)',
      '2 medidas de agua caliente',
      '4 dientes de ajo',
      'Aceite',
      '1 cucharada de sal'
    ],
    pasos: [
      { texto: 'Pelá los dientes de ajo: cortale las dos puntas, por la mitad y sacale la cáscara. Picálos fino. Fijate que no estén oscuros por dentro.' },
      { texto: 'Lavá el arroz 2–3 veces hasta que el agua salga clara. Por eso después solo necesitamos 2 medidas de agua.' },
      { texto: 'Calentá aceite en una sartén a fuego fuerte. Una vez caliente, dorá el ajo.' },
      { texto: 'Agregá el arroz escurrido y doralo también, removiendo, hasta que tome algo de color.' },
      { texto: 'Tirá el agua caliente, la cucharada de sal, y dejalo 20 minutos a fuego bajo sin tapar y sin revolver.' },
      { texto: 'Apagá el fuego, poné la tapa y en 5 min termina de cocinarse con el vapor.' }
    ],
    tips: [
      'El secreto es dorar bien el ajo antes de agregar el arroz.',
      'El agua tiene que estar caliente cuando la tirás.',
      'No lo revuelvas mientras se cocina.'
    ]
  },

  {
    id: 'arepas',
    titulo: 'Arepas Colombianas',
    categoria: 'guarniciones',
    emoji: '🫔',
    img: 'https://images.pexels.com/photos/37025260/pexels-photo-37025260.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '25 min',
    porciones: '4–6 arepas',
    dificultad: 'Fácil',
    descripcion: 'Crujientes por fuera, tiernas por dentro, rellenas de mozzarella fundida. Solo cuatro ingredientes y salen perfectas.',
    ingredientes: [
      '2 tazas de harina de maíz precocida blanca (ej. PAN)',
      '2 tazas de agua tibia',
      '150 g de mozzarella (para rellenar)',
      '1 cucharadita de sal',
      'Manteca para la sartén'
    ],
    pasos: [
      { texto: 'En un bowl mezclá el agua tibia con la sal y la harina de maíz. Revolvé con la mano hasta que quede una masa consistente que no se pegue.' },
      { texto: 'Hacé bolitas del tamaño de una mandarina y aplastalas con la palma, de 1 cm de grosor.' },
      { texto: 'Calentá una sartén a fuego medio con manteca. Cociná las arepas 10 min de cada lado hasta que estén doradas.' },
      { texto: 'Cortalas por la mitad, rellenalas con mozzarella y volvé a la sartén 2–3 min más hasta que se derrita el queso.' }
    ],
    tips: [
      'Si la masa queda muy seca, agregá agua tibia de a poco.',
      'Sin queso también quedan ricas, solo con manteca y sal.',
      'La harina PAN blanca precocida es la más fácil y da el mejor resultado.'
    ]
  },

  {
    id: 'papas-cuadradas',
    titulo: 'Papas Salteadas',
    categoria: 'guarniciones',
    emoji: '🥔',
    img: 'https://images.pexels.com/photos/34429560/pexels-photo-34429560.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '20 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Crocantes por fuera, jugosas por dentro. Con ajo, perejil y un chorrito de caldo que hace toda la diferencia.',
    ingredientes: [
      'Papas a gusto',
      'Aceite y manteca',
      'Ajo a gusto, picado',
      'Perejil fresco picado',
      'Caldo de verdura (un chorrito)',
      'Sal a gusto'
    ],
    pasos: [
      { texto: 'Pelá las papas y cortalas en cuadraditos parejos.' },
      { texto: 'Calentá una sartén a fuego fuerte con aceite y manteca. Tirá las papas.' },
      { texto: 'Una vez doradas de un lado (no las muevas antes), dalas vuelta.' },
      { texto: 'Una vez doradas del otro lado, agregá el ajo picado y el perejil.' },
      { texto: 'Tirá un chorrito de caldo de verdura — esto crea vapor que las cocina por dentro sin perder la costra.' },
      { texto: 'Salá y listo.' }
    ],
    tips: [
      'El caldo es el secreto: vapor que cocina por dentro sin ablandar la costra.',
      'No las muevas hasta que estén bien doradas — así se forma la costra.',
      'Sartén bien caliente desde el principio para que no se peguen.'
    ]
  },

  {
    id: 'papas-fritas',
    titulo: 'Papas Fritas Perfectas',
    categoria: 'guarniciones',
    emoji: '🍟',
    img: 'https://images.pexels.com/photos/5779487/pexels-photo-5779487.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '4 hs (con reposos)',
    porciones: '4 personas',
    dificultad: 'Media',
    descripcion: 'El método profesional de doble fritura con reposos en freezer. Crocantes por fuera, tiernas por dentro. Vale cada minuto de espera.',
    ingredientes: [
      'Papas a gusto',
      'Agua fría',
      'Hielo (bastante)',
      'Aceite neutro para freír (abundante)',
      'Sal a gusto'
    ],
    pasos: [
      { titulo: 'Preparar las papas', texto: 'Pelá las papas y lavá. Cortale las puntas para un cubo prolijo. Cortá en bastones finos y parejos.' },
      { titulo: 'Remojo helado — 1 hora', texto: 'Sumergí los bastones en un bowl con agua fría y hielo. Dejalos 1 hora. Esto saca el almidón y las hace más crocantes.' },
      { titulo: 'Primer freezer — 1,5 hs', texto: 'Sacalas del agua, escurrilas bien y secalas con papel de cocina. Ponelas en una bandeja en el freezer 1 hora y media.' },
      { titulo: 'Primera fritura — 3 min', texto: 'Freílas en aceite caliente por 3 min solamente. El objetivo no es que se doren, sino pre-cocinarlas. Escurrí el aceite.' },
      { titulo: 'Segundo freezer — 2 a 3 hs', texto: 'Ponelas de vuelta en el freezer 2–3 horas más. Podés pausar acá y terminarlas cuando quieras.' },
      { titulo: 'Fritura final', texto: 'Freí hasta que queden doradas y crocantes. Salá inmediatamente al sacarlas.' }
    ],
    tips: [
      'El truco del doble freezer es lo que las hace profesionales.',
      'Agua helada + sacar el almidón = costra perfecta.',
      'Siempre salá después de freír, nunca antes.'
    ]
  },

  /* ── POSTRES ── */

  {
    id: 'mousse-chocolate',
    titulo: 'Mousse de Chocolate',
    categoria: 'postres',
    emoji: '🍫',
    img: 'https://images.pexels.com/photos/17303221/pexels-photo-17303221.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min + 24 hs heladera',
    porciones: '6–8 personas',
    dificultad: 'Media',
    descripcion: 'Aireada, intensa y sin complicaciones. El truco está en batir bien las yemas hasta que blanqueen y no pasarse con las claras. Heladera 24 horas y listo.',
    ingredientes: [
      '14 barritas de chocolate Águila (~330 g)',
      '330 ml de crema de BATIR (no la de cocinar)',
      '4 huevos bien fríos',
      '6 cucharadas de postre de azúcar (4 para las yemas, 2 para las claras)'
    ],
    pasos: [
      {
        titulo: 'Derretir el chocolate',
        texto: 'En una olla a fuego lento: 330 ml de crema + 14 barras de chocolate partidas al medio. Revolvé hasta que quede completamente liso y brillante. Dejá entibiar — no lo usés caliente.'
      },
      {
        titulo: 'Separar los huevos (FRÍOS)',
        texto: 'Separar la yema de la clara con los huevos bien fríos — la yema no se rompe. Yemas en un bowl, claras en el vaso de la batidora.'
      },
      {
        titulo: 'Batir las yemas — clave',
        texto: 'Tirá las 4 cucharadas de azúcar a las yemas. Batí fuerte hasta que DUPLIQUEN su volumen y queden casi blancas. Este paso es esencial para la estructura del mousse.'
      },
      {
        titulo: 'Batir las claras — clave',
        texto: 'Tirá las 2 cucharadas de azúcar a las claras. Batí hasta punto SEMI-FIRME: tienen que sostener forma pero no estar rígidas. Este es el aire del mousse.'
      },
      {
        titulo: 'Integrar el chocolate a las yemas',
        texto: 'Volcá el chocolate tibio sobre las yemas batidas. Revolvé suavemente con el batidor de mano hasta que quede una mezcla lisa y homogénea.'
      },
      {
        titulo: 'Incorporar las claras',
        texto: 'Agregá las claras en partes a la mezcla de chocolate y yemas. Movimientos envolventes y lentos con espátula, de abajo hacia arriba. Sin apurarse — el aire es lo que hace el mousse.'
      },
      {
        titulo: 'Heladera 24 horas',
        texto: 'Volcá en un bowl grande o en copas individuales. Heladera mínimo 24 horas antes de servir.'
      }
    ],
    tips: [
      'Huevos fríos: la yema no se rompe al separar.',
      'Yemas hasta que blanqueen: dan estructura al mousse.',
      'Claras a punto semi-firme, no rígidas: así el mousse queda aireado.',
      'Si sobra, aguanta 3 días en la heladera perfectamente.'
    ]
  },

  /* ── BÁSICOS ── */

  {
    id: 'ghee',
    titulo: 'Ghee — Manteca Clarificada',
    categoria: 'basicos',
    emoji: '🧈',
    img: 'https://images.pexels.com/photos/7965898/pexels-photo-7965898.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '~1 hora',
    porciones: '~800 g (pierde 20%)',
    dificultad: 'Fácil',
    descripcion: 'Manteca sin agua ni sólidos lácteos. Dura meses, tiene punto de humeo mucho más alto que la manteca normal, y un sabor profundo a nuez.',
    ingredientes: [
      '1 kg de manteca sin sal'
    ],
    pasos: [
      { texto: 'Poné la manteca en un recipiente metálico sobre una olla con agua (baño María). Fuego fuerte. Revolvé mientras se derrite por completo.' },
      { texto: 'Una vez líquida, retirá el bowl del baño María y cociná el ghee directamente a fuego MÍNIMO durante 50 minutos.' },
      { texto: 'Revolvé cada 5 minutos para que se mezcle bien y no se pegue.' },
      { texto: 'Vas a ver una espuma blanca en la superficie y un sedimento dorado en el fondo. Eso es lo que separamos.' },
      { texto: 'Colá el ghee a través de un colador fino o gasa (cheesecloth). El líquido dorado que queda es el ghee puro.' },
      { texto: 'Dejá enfriar a temperatura ambiente hasta que se solidifique. Color amarillo dorado.' }
    ],
    tips: [
      'Pierde aproximadamente 20% del peso — con 1 kg te quedan ~800 g.',
      'A temperatura ambiente dura meses. En heladera, indefinidamente.',
      'Punto de humeo mucho más alto que la manteca: ideal para sellar carnes a fuego alto.'
    ]
  },

  {
    id: 'chipa',
    titulo: 'Chipa Casera',
    categoria: 'masas',
    emoji: '🟡',
    img: 'https://images.pexels.com/photos/5724144/pexels-photo-5724144.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '~20 chipas',
    dificultad: 'Fácil',
    descripcion: 'Chipas esponjosas por dentro y doraditas por fuera. Con la mezcla Lucchetti te quedan perfectas en 30 minutos, sin complicarte.',
    ingredientes: [
      '2 paquetes de mezcla para chipa Lucchetti (tipo caseros)',
      '4 huevos enteros (yema y clara)',
      '16 cucharadas soperas de agua (8 cucharadas por paquete)',
      'Fritolín o papel de horno para la bandeja'
    ],
    pasos: [
      { texto: 'Precalentá el horno a 200°C.' },
      { texto: 'Poné los dos paquetes de mezcla para chipa en la mezcladora.' },
      { texto: 'Agregá los 4 huevos enteros (con yema y clara) y empezá a batir.' },
      { texto: 'Mientras bate, agregá las 16 cucharadas de agua de a poco. Dejá batir todo junto unos minutos hasta que quede una masa homogénea.' },
      { texto: 'Con las manos hacé bolitas y ponelas en una bandeja con fritolín o papel de horno abajo para que no se peguen.' },
      { texto: 'Horno a 200°C por 20 minutos hasta que estén doraditas.' }
    ],
    tips: [
      'La mezcladora hace todo el trabajo — no necesitás amasar a mano.',
      'Precalentar bien el horno es clave para que queden esponjosas.',
      'Se guardan en bolsa hermética y se recalientan perfectas.'
    ]
  },

  {
    id: 'salsa-mostaza',
    titulo: 'Salsa Mostaza para Matambrito',
    categoria: 'salsas',
    emoji: '🥩',
    img: 'https://images.pexels.com/photos/1435901/pexels-photo-1435901.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '1 matambrito',
    dificultad: 'Fácil',
    descripcion: 'Dulce, picante y con profundidad. Para pincelar el matambrito generosamente antes del horno o la plancha. Simple y poderosa.',
    ingredientes: [
      '2 cucharadas de miel',
      '1 cucharada de mostaza tipo Dijon (o criolla)',
      '1 cucharada de manteca',
      '½ cucharadita de ají molido',
      '½ cucharadita de pimienta negra molida',
      '1 diente de ajo picado o rallado (opcional)',
      '1 cucharadita de vinagre de manzana o jugo de limón (opcional)',
      'Sal a gusto (empezar con ¼ cucharadita)'
    ],
    pasos: [
      { texto: 'Mezclá todos los ingredientes en un bowl pequeño hasta que quede una salsa homogénea.' },
      { texto: 'Pincelá generosamente el matambrito por toda la superficie.' },
      { texto: 'Llevá al horno o a la plancha. Si sobra salsa, serví de acompañamiento.' }
    ],
    tips: [
      'El ajo rallado da mucho más sabor que el picado.',
      'Podés hacerla con un día de anticipación — los sabores se integran mejor.',
      'Va excelente también en pechugas de pollo, costillas o cerdo a la plancha.'
    ]
  },

  {
    id: 'salsa-bolognesa',
    titulo: 'Salsa Bolognesa',
    categoria: 'salsas',
    emoji: '🍅',
    img: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '45 min',
    porciones: '4–6 personas',
    dificultad: 'Fácil',
    descripcion: 'La bolognesa clásica: carne picada, tomate, verduras y hierbas. Lenta y sabrosa. Va bien con cualquier pasta, como base de lasaña o para rellenar canelones.',
    ingredientes: [
      '500 g de carne picada',
      '1 lata de tomates triturados (400 g)',
      '1 cebolla picada',
      '1 zanahoria picada',
      '1 morrón rojo picado',
      '3 dientes de ajo',
      'Aceite de oliva',
      'Orégano, tomillo, ají molido',
      'Sal y pimienta',
      '1 hoja de laurel',
      '½ vaso de vino tinto (opcional)'
    ],
    pasos: [
      {
        titulo: 'Sofrito de verduras',
        texto: 'Calentá aceite en una olla o sartén grande a fuego medio. Agregá la cebolla, zanahoria y morrón. Cociná 8–10 min revolviendo hasta que ablanden y tomen color.'
      },
      {
        titulo: 'Dorar la carne',
        texto: 'Sumá el ajo picado, revolvé 1 min. Agregá la carne picada. Rompé los grumos con cuchara de madera y cociná hasta que pierda el color rosado y empiece a dorarse.'
      },
      {
        titulo: 'Desglasar (opcional)',
        texto: 'Si usás vino, agregalo ahora y dejá que se evapore el alcohol 2–3 min revolviendo.'
      },
      {
        titulo: 'Agregar tomate y cocinar lento',
        texto: 'Volcá los tomates triturados. Agregá orégano, tomillo, ají molido, laurel, sal y pimienta. Revolvé bien, bajá el fuego al mínimo y cociná tapado 25–30 min. Revolvé cada tanto.'
      },
      {
        titulo: 'Ajuste final',
        texto: 'Probá y ajustá sal. Si quedó ácida, agregá una pizca de azúcar. Si quedó muy espesa, un chorrito de agua caliente.'
      }
    ],
    tips: [
      'Cuanto más lenta la cocción, más profundo el sabor.',
      'Al día siguiente está mejor — hacela con anticipación.',
      'Sirve como base para lasaña, canelones o sobre cualquier pasta.',
      'Congelá en porciones: dura 3 meses perfecta.'
    ],
    resumen: 'Sofrito → dorar carne → vino → tomate → fuego mínimo 25-30 min'
  },

  {
    id: 'salsa-blanca-espinaca',
    titulo: 'Salsa Blanca con Espinaca',
    categoria: 'salsas',
    emoji: '🥬',
    img: 'https://images.pexels.com/photos/31329415/pexels-photo-31329415.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '15 min',
    porciones: '5 personas',
    dificultad: 'Fácil',
    descripcion: 'Salsa blanca cremosa con espinaca fresca. Perfecta para lasaña, canelones o como salsa de pasta. Lista en minutos.',
    ingredientes: [
      '1 litro de leche fría',
      '3 cucharaditas de sal',
      '100 g de manteca a temperatura ambiente',
      '100 g de fécula de maíz',
      '250 g de espinaca'
    ],
    pasos: [
      { texto: 'En una olla grande, volcá 1 litro de leche fría. Agregá la sal y la manteca a temperatura ambiente.' },
      { texto: 'Agregá los 100 g de fécula de maíz y empezá a revolver rápidamente con una cuchara de madera hasta integrar todo. Hacelo ANTES de encender el fuego para evitar grumos.' },
      { texto: 'Encendé el fuego a fuego fuerte y seguí revolviendo constantemente hasta que la mezcla empiece a espesar. Tarda 8–10 minutos.' },
      { texto: 'Cuando esté caliente y espese, bajá a fuego medio y seguí revolviendo rápido hasta que quede suave y cremosa. Si se espesa de más, agregá un poco más de leche.' },
      { texto: 'Para la versión con espinaca: agregá 250 g de espinaca cocida al vapor y picada. Revolvé hasta integrar bien.' }
    ],
    tips: [
      'Mezclar en frío es el truco: nada de grumos.',
      'Si se espesa demasiado, agregá leche de a poco.',
      'La espinaca se puede cocinar al vapor o en agua hirviendo y luego escurrida bien.'
    ]
  },

  /* ── MASAS & PIZZAS (nuevas) ── */

  {
    id: 'pan-arabe',
    titulo: 'Pan Árabe Casero',
    categoria: 'masas',
    emoji: '🫓',
    img: 'https://images.pexels.com/photos/7129382/pexels-photo-7129382.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '3 hs',
    porciones: 'Varios panes de 80 g',
    dificultad: 'Media',
    descripcion: 'Pan árabe inflado y suave. Con fermentación de 2–3 horas, queda con la bolsita de aire perfecta para rellenar con lo que quieras.',
    ingredientes: [
      '500 g de harina 000',
      '20 g de levadura',
      '10 g de sal',
      '300 ml de agua tibia',
      '30 g de aceite de oliva'
    ],
    pasos: [
      { texto: 'En la batidora, agregá el agua y frotá la levadura hasta que se disuelva completamente.' },
      { texto: 'Añadí la harina en tres partes, mezclando a velocidad baja cada vez hasta que se combine.' },
      { texto: 'Agregá el aceite de oliva y la sal. Batí a velocidad alta unos minutos hasta que la masa esté suave y elástica.' },
      { texto: 'Volcá la masa en una superficie enharinada, amasá unos minutos y colocala en un bol. Cubrí con film y dejá reposar 2–3 horas hasta que duplique su tamaño.' },
      { texto: 'Sacá el film y amasá un minuto. Cortá en bolas de 80 g y amasá cada una.' },
      { texto: 'Aplaná cada bola con un rodillo y cubrilas con harina por ambas caras para que no se quemen.' },
      { texto: 'Precalentá el horno a 220°C con la bandeja adentro. Colocá los panes en la bandeja caliente y horneá 6 minutos hasta que estén inflados. Dejá enfriar antes de servir.' }
    ],
    tips: [
      'La bandeja caliente es clave para que el pan se infle rápido.',
      'Cubrirlos con harina evita que se quemen en el horno caliente.',
      'Una vez fríos, se cortan por la mitad y se rellenan con lo que quieras.'
    ]
  },

  {
    id: 'masa-empanadas',
    titulo: 'Masa para Empanadas',
    categoria: 'masas',
    emoji: '🥟',
    img: 'https://images.pexels.com/photos/32912393/pexels-photo-32912393.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '45 min + 30 reposo',
    porciones: '~20 tapas',
    dificultad: 'Media',
    descripcion: 'La masa de empanadas clásica con grasa y aceite de oliva. Suave, manejable y lista para el repulgue. Rinde para unas 20 tapas.',
    ingredientes: [
      '1 kg de harina 0000',
      '150 g de grasa vacuna',
      '50 cc de aceite de oliva',
      '400 cc de agua caliente',
      '30 g de sal gruesa'
    ],
    pasos: [
      { texto: 'Derretí la grasa en un bol a fuego fuerte.' },
      { texto: 'En otro bol, mezclá el agua caliente, la sal, el aceite y la grasa derretida.' },
      { texto: 'Agregá la mitad de la harina y mezclá despacio. Luego agregá la otra mitad y mezclá de lento a rápido hasta integrar bien.' },
      { texto: 'Volcá la masa en una superficie enharinada y amasá hasta formar una bola grande. Cubrí con dos repasadores y dejá reposar 30 minutos.' },
      { texto: 'Formá bolitas de 50 g y guardalas en un recipiente tapado en la heladera hasta usar.' },
      { texto: 'Para armar las empanadas: amasá un poco cada bolita, estirá, rellenás y hacés el repulgue.' }
    ],
    tips: [
      'Bolitas de 50 g exactas para tapas uniformes.',
      'El reposo de 30 min es clave para que la masa sea elástica.',
      'Se pueden congelar las tapas ya estiradas con papel de horno entre cada una.'
    ]
  },

  {
    id: 'empanadas-carne',
    titulo: 'Empanadas de Carne',
    categoria: 'masas',
    emoji: '🥟',
    img: 'https://images.pexels.com/photos/36905236/pexels-photo-36905236.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 hs',
    porciones: '50 empanadas',
    dificultad: 'Avanzada',
    descripcion: 'El relleno clásico argentino: roast beef picado dos veces, cebolla, pimentón, comino y huevo duro. Para hacer 50 empanadas de verdad.',
    ingredientes: [
      '2 kg de carne roast beef picada dos veces',
      '2 kg de cebolla',
      '150 g de grasa o aceite',
      '8 cebollas de verdeo',
      '3 cucharadas de ají molido',
      '3 cucharadas de pimentón',
      '2 cucharadas de comino',
      '25 g de sal',
      '10 huevos duros',
      'Tapas de empanadas (ver receta Masa para Empanadas)'
    ],
    pasos: [
      { texto: 'Pelá y cortá en cuadrados pequeños los 2 kg de cebolla.' },
      { texto: 'En una cacerola grande a fuego lento, agregá la cebolla con la grasa o aceite. Cortá en tiras el tallo de las cebollas de verdeo y sumálas. Cociná 15–20 min revolviendo constantemente.' },
      { texto: 'Agregá el pimentón, mezclá bien y cociná unos minutos.' },
      { texto: 'Agregá la carne picada apretándola con las manos. Añadí el ají molido, comino y sal. Cociná 15 min revolviendo.' },
      { texto: 'Bajá el fuego, tapá 5 min para que la carne haga jugo. Retirá del fuego y dejá enfriar.' },
      { texto: 'Herví los 10 huevos 20 min. Enfriá, pelá y picá. Agregá la mitad a la carne junto al tallo de verdeo picado. Dejá enfriar en heladera medio día.' },
      { texto: 'Armá las empanadas: una cucharada de relleno en cada tapa, mojá el borde con agua, cerrá y sellá con tenedor o repulgue.' },
      { texto: 'Congelá sin tapar 1 hora, luego guardá en bolsa en el freezer. Para cocinar: horno a 180°C, bandeja precalentada con fritolín, 20–30 min hasta dorar.' }
    ],
    tips: [
      'Enfriar bien el relleno en heladera evita que se rompan las tapas.',
      'Congelar antes de bolsear las mantiene más firmes.',
      'La mitad del huevo picado va al relleno, la otra es para servir o guardar.'
    ]
  },

  {
    id: 'tarta-jamon-queso',
    titulo: 'Tarta de Jamón y Queso',
    categoria: 'masas',
    emoji: '🥧',
    img: 'https://images.pexels.com/photos/5419185/pexels-photo-5419185.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '40 min',
    porciones: '6–8 porciones',
    dificultad: 'Fácil',
    descripcion: 'Tarta casera rellena de jamón, mozzarella y huevo. Clásica, contundente y lista en menos de una hora.',
    ingredientes: [
      'Masa para tarta (comprada o casera)',
      '10 fetas de jamón cocido',
      '5 huevos',
      'Queso rallado a gusto',
      'Queso mozzarella a gusto',
      'Orégano, pimienta y sal fina',
      'Fritolín o aceite vegetal'
    ],
    pasos: [
      { texto: 'Precalentá el horno a 200°C.' },
      { texto: 'Enharinás la mesa y la tartera. Untá la tartera con fritolín o aceite.' },
      { texto: 'Estirá la masa hasta que sea más grande que la tartera. Colocala y presionala contra los bordes.' },
      { texto: 'Cortá el jamón en cuadraditos. Rallá la mozzarella.' },
      { texto: 'Batí los 5 huevos. Agregá orégano, pimienta y sal. Sumá el jamón y los quesos. Mezclá bien.' },
      { texto: 'Volcá el relleno sobre la masa en la tartera.' },
      { texto: 'Estirá la otra porción de masa, mojá los bordes con agua y cubrí la tarta. Doblá los bordes para sellar. Pinchá la superficie con un tenedor.' },
      { texto: 'Horneá a 200°C 10 min en la rejilla más baja. Bajá a 180°C y horneá 15 min más hasta que esté dorada.' }
    ],
    tips: [
      'Mojar el borde con agua hace que las dos capas de masa se peguen bien.',
      'Podés agregar huevo duro en rodajas al relleno.',
      'Pinchar la tapa evita que se infle durante la cocción.'
    ]
  },

  {
    id: 'pan-hamburguesa',
    titulo: 'Pan para Hamburguesa',
    categoria: 'masas',
    emoji: '🍔',
    img: 'https://images.pexels.com/photos/7497216/pexels-photo-7497216.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 hs',
    porciones: '~12 panes de 80 g',
    dificultad: 'Media',
    descripcion: 'Panes de hamburguesa blandos y dorados con un método especial de vapor en el horno. Quedan esponjosos por dentro y con poca corteza.',
    ingredientes: [
      '1 kg de harina 000',
      '20 g de sal',
      '10 g de levadura seca',
      '100 g de azúcar',
      '270 g de agua fría',
      '270 g de leche fría',
      '100 g de manteca fría'
    ],
    pasos: [
      { texto: 'Tamizá la harina en un bowl grande. Poné la sal en un borde y la levadura seca en el costado opuesto (que no se toquen). Añadí el azúcar.' },
      { texto: 'Vertí el agua fría de a poco revolviendo. Luego agregá la leche fría y seguí revolviendo.' },
      { texto: 'Una vez integrados los líquidos, amasá con las manos y volcá en la mesada.' },
      { texto: 'Agregá la manteca fría sobre la masa y seguí amasando con el método de la "V", alternando las manos, hasta incorporarla completamente.' },
      { texto: 'Pesá porciones de 80 g. Para bolear: presioná ligeramente, plegá los extremos hacia el centro cuatro veces, dá vuelta y mové con la palma en círculos hasta darle forma redonda.' },
      { texto: 'Colocá en bandeja, cubrí con repasador. Reposá 30 min o hasta que dupliquen su volumen.' },
      { texto: 'Precalentá el horno a 185–190°C. Cuando el horno esté caliente y la bandeja adentro, tirale un vasito de agua al piso y cerrá rápido (genera vapor). Horneá 12–13 min hasta dorar.' }
    ],
    tips: [
      'El vapor de agua es el secreto para la corteza suave.',
      'La manteca fría hace que la masa quede más hojaldrada.',
      'Se congelan perfectos una vez fríos.'
    ]
  },

  {
    id: 'quesadillas',
    titulo: 'Quesadillas',
    categoria: 'masas',
    emoji: '🫔',
    img: 'https://images.pexels.com/photos/32351725/pexels-photo-32351725.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '15 min',
    porciones: '4 porciones',
    dificultad: 'Fácil',
    descripcion: 'Tortillas de maíz o trigo rellenas de queso fundido y jamón. Crocantes por fuera, con el queso derretido que se estira por dentro. Listas en minutos.',
    ingredientes: [
      'Tortillas de maíz o de trigo (fajitas)',
      'Queso rallado (cheddar, mozzarella o el que funda bien)',
      'Jamón cocido (opcional)'
    ],
    pasos: [
      { texto: 'Calentá una sartén a fuego medio-alto.' },
      { texto: 'Colocá una tortilla y dorala ligeramente unos segundos de cada lado.' },
      { texto: 'Retirá la tortilla y colocala en una superficie limpia. Espolvoreá queso rallado sobre la mitad. Agregá jamón en trozos si querés.' },
      { texto: 'Doblá la tortilla por la mitad, cubriendo el relleno.' },
      { texto: 'Volvé la quesadilla a la sartén y cociná unos minutos de cada lado hasta que el queso se derrita y esté crocante y dorada. Presioná suavemente con una espátula.' },
      { texto: 'Retirá, dejá enfriar un momento, cortá en cuatro y serví con salsa de tomate, guacamole o crema.' }
    ],
    tips: [
      'No sobrecargues de relleno o se abre al darla vuelta.',
      'Presionar con espátula ayuda a que el queso se derrita parejo.',
      'Con salsa picante o guacamole son otra cosa.'
    ]
  },

  {
    id: 'pizza-italiana',
    titulo: 'Pizza Italiana (Fermentación Lenta)',
    categoria: 'masas',
    emoji: '🍕',
    img: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '24–48 hs fermentación',
    porciones: '~17 pizzas',
    dificultad: 'Avanzada',
    descripcion: 'Masa napolitana sin amasar nunca. Pliegues, fermentación lenta en frío y semolina para estirar. Borde inflado, aireado, sin resultar pesado.',
    ingredientes: [
      '3.360 g de harina 00 Caputo',
      '2.100 ml de agua tibia (apenas tibia)',
      '35 g de levadura fresca',
      '80 g de sal',
      'Semolina (para estirar — no harina)',
      'Aceite de oliva (muy poco, opcional, solo en el primer pliegue)'
    ],
    pasos: [
      {
        titulo: '1. Mezcla inicial (10–15 min)',
        texto: 'Palangana grande. Poné toda el agua apenas tibia. Disolvé la levadura apretándola con la mano o un utensilio hasta que no queden grumos.\n\nAgreguá toda la harina. Poné la sal ENCIMA de la harina — nunca en contacto directo con la levadura o no va a levar.\n\nMezclá con cuchara o a mano de los costados hacia adentro. Sin amasar. Si queda seco, agregá un poco más de agua. Objetivo: que todo se una, sin partes secas. Resultado: pegajosa y desprolija — eso es perfecto.'
      },
      {
        titulo: '2. Reposo inicial',
        texto: 'Tapá con trapo o film. Reposá 1 hora a temperatura ambiente.'
      },
      {
        titulo: '3. Pliegues — 4 rondas (30 min entre cada una)',
        texto: 'Rondas 1 y 2: manos mojadas, agarrás un lado de la masa → lo llevás al centro. Repetís en los otros 3 lados.\n\nRondas 3 y 4 (técnica diferente): manos mojadas, agarrás del centro con las dos manos, llevás hacia adelante para que el aire quede adentro. Solo 2 veces por ronda.\n\nSolo en el primer pliegue: unas gotitas de aceite de oliva.\n\nSecuencia: Pliegue 1 → 30 min → Pliegue 2 → 30 min → Pliegue 3 → 30 min → Pliegue 4 → 30 min (= ~2 horas total)'
      },
      {
        titulo: '4. Dividir y bolear',
        texto: 'Volcá la masa en la mesada con un poco de aceite. Cortá piezas de 280–300 g.\n\nPara bolear: doblá los bordes hacia adentro 3 o 4 veces, generá tensión en la superficie y formá una bola lisa. Sin amasar.'
      },
      {
        titulo: '5. Fermentación en frío — 24 a 48 hs',
        texto: 'Tupper o bowl grande con un poco de aceite. Poné los bollos bien separados. Tapá bien. Heladera 24 a 48 horas.'
      },
      {
        titulo: '6. Antes de cocinar',
        texto: 'Sacá los bollos 2–3 horas antes de hornear. Dejá a temperatura ambiente. Tienen que: crecer un poco, estar blandos, estar aireados.'
      },
      {
        titulo: '7. Horno al máximo',
        texto: 'Horno a máxima temperatura (250–300°C). Precalentá 30–40 min. Si tenés piedra de pizza, usala.'
      },
      {
        titulo: '8. Estirar — muy importante',
        texto: 'SEMOLINA en la mesada (no harina). Colocá el bollo y con los dedos presioná desde el centro hacia afuera. Dejá el borde sin tocar — eso es lo que se infla.\n\nNUNCA palo de amasar: saca el aire y arruina la masa.'
      },
      {
        titulo: '9. Toppings y cocción',
        texto: 'Tomate (simple) + mozzarella.\n\nHorno doméstico (~250°C): 6–8 min solo la base → agregás el queso → 3–5 min más.\nHorno muy caliente (300°C): todo junto, 6–7 min.\n\nResultado: borde inflado, aireado, estilo napolitano.'
      }
    ],
    tips: [
      'Con 1 kg de harina hacés 4–5 pizzas.',
      'La masa mejora con el tiempo — usada al día 3 o 4 está mejor que al día 1.',
      'La semolina evita que la masa se pegue y le da textura al fondo.',
      'Piedra bien precalentada: borde inflado garantizado.'
    ],
    errores: [
      'Poner mucha levadura',
      'Amasar la masa',
      'Usar mucho aceite',
      'No respetar los tiempos de reposo',
      'Estirar con palo de amasar'
    ],
    resumen: 'Mezclar → 1h reposo → 4 pliegues (30 min c/u) → bollos → heladera 24–48h → temperar 2–3h → semolina → dedos → hornear al máximo'
  },

  /* ── CARNES (nuevas) ── */

  {
    id: 'carne-cacerola-papa',
    titulo: 'Carne a la Cacerola con Papa',
    categoria: 'carnes',
    emoji: '🥩',
    img: 'https://images.pexels.com/photos/5531292/pexels-photo-5531292.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 h 30 min',
    porciones: '6 personas',
    dificultad: 'Fácil',
    descripcion: 'Roast beef a fuego lento con papas, zanahoria, cebolla y especias. Carne que se deshace sola después de 2 horas de cocción suave.',
    ingredientes: [
      '2,5 kg de roast beef',
      '2 cebollas',
      '2 zanahorias',
      '2 cubitos de caldo de gallina',
      '4 papas chicas o 2 grandes',
      'Aceite y sal',
      'Pimentón, tomillo, ají molido y curry',
      'Cerveza (opcional)',
      '2 cucharadas de fécula de maíz (opcional, para espesar)'
    ],
    pasos: [
      { texto: 'Cortá el roast beef en pedazos medianos y quitale grasa y nervios.' },
      { texto: 'Calentá una cacerola grande con aceite y sellá los pedazos de carne de todos los lados a fuego fuerte.' },
      { texto: 'Pelá y cortá las cebollas y zanahorias en trozos. Agregalas a la cacerola y cociná 2 min hasta dorar.' },
      { texto: 'Agregá sal y seguí cocinando 10–15 min revolviendo. Si querés, verte un vaso de cerveza y dejá evaporar a fuego fuerte.' },
      { texto: 'Prepará el caldo en otra olla. Vertelo en la cacerola grande y cociná a fuego lento 2 horas. Asegurate que siempre haya líquido.' },
      { texto: 'A la hora y 15 min, agregá las especias (tomillo, pimentón, ají molido, curry) y las papas peladas y cortadas. Cociná 45 min más o hasta que la papa esté blanda.' },
      { texto: 'Si querés la salsa más espesa, disolvé 2 cucharadas de fécula en agua fría y agregá a la cacerola. Cociná unos minutos más.' }
    ],
    tips: [
      'El sellado inicial de la carne es clave para concentrar el sabor.',
      'A fuego lento bien bajo la carne queda mucho más tierna.',
      'Las papas se agregan al final para que no se deshagan.'
    ]
  },

  {
    id: 'asado',
    titulo: 'Asado Argentino',
    categoria: 'carnes',
    emoji: '🥩',
    img: 'https://images.pexels.com/photos/37179553/pexels-photo-37179553.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2–3 hs',
    porciones: 'Varios',
    dificultad: 'Media',
    descripcion: 'Asado a la argentina con leña o carbón. Con mollejas, riñones, chorizos y morcilla. Los tiempos y el orden de cocción son el secreto.',
    ingredientes: [
      'Asado (tira o costillar)',
      'Mollejas',
      'Riñones',
      'Chorizos',
      'Morcilla',
      'Pan',
      'Sal gruesa y sal fina',
      'Aceite y limones',
      'Leña o carbón'
    ],
    pasos: [
      { titulo: 'Día anterior', texto: 'Limpiá riñón y molleja con agua, quitando la grasa. Colocalos en boles separados con agua y jugo de limón. Tapá y guardalos en la heladera.' },
      { titulo: 'Encender el fuego', texto: 'Con leña: formá un cuadrado con maderas finas, una en el centro. Enrollá papel de cocina con aceite, prendé en el centro y agregá leña de a poco. Con carbón: agregá sal gruesa para eliminar el monóxido de carbono.' },
      { titulo: 'Cocinar el asado', texto: 'Sacá riñón y molleja de la heladera, enjuagalos y poné en la parrilla. Agregá el asado salado con sal gruesa del lado del hueso. Tarda ~1 hora del lado del hueso y 30 min cuando das vuelta.' },
      { titulo: 'Chorizos y vísceras', texto: 'Agregá los chorizos a fuego medio sin salarlos, girando periódicamente. Poné los riñones a fuego fuerte, salándolos generosamente del lado de la abertura, ~15 min de cada lado.' },
      { titulo: 'Mollejas', texto: 'Salarlas poco y cocinarlas más tiempo. Una vez doradas, sacalas, cortalas en filetes y volvé a poner en la parrilla.' },
      { titulo: 'Orden de retiro', texto: 'Cuando retirés los riñones, colocalos en una tabla, cubrilos con un repasador y esperá a que se enfríen antes de cortar. La morcilla va al final: no tarda mucho.' }
    ],
    tips: [
      'Sal gruesa al carbón elimina el monóxido.',
      'Los chorizos nunca van con sal.',
      'Los riñones se sirven con rodajas de limón.',
      'La morcilla siempre al final: se cocina rápido.'
    ]
  },

  {
    id: 'salmon',
    titulo: 'Salmón al Horno con Miel',
    categoria: 'carnes',
    emoji: '🐟',
    img: 'https://images.pexels.com/photos/676560/pexels-photo-676560.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4–6 personas',
    dificultad: 'Fácil',
    descripcion: 'Salmón sellado en sartén con ajo y terminado al horno. El toque final de azúcar negra y miel lo carameliza y le da un sabor increíble.',
    ingredientes: [
      '2 lomos de salmón (~3 kg)',
      'Jugo de 3 limones o limas',
      '7 dientes de ajo',
      'Sal y pimienta',
      'Aceite',
      'Azúcar negra o rubia',
      'Miel'
    ],
    pasos: [
      { texto: 'Pasá los dedos por el salmón para detectar espinas y retiralas con pinza.' },
      { texto: 'Separás la parte fina de la gruesa. La fina va a la plancha, la gruesa al horno. Cortá en porciones de ~4 dedos de grosor.' },
      { texto: 'Exprimí el jugo de 3 limones sobre el salmón. Aplastá los ajos y salpimentá ambos lados.' },
      { texto: 'Precalentá el horno a 180°C. Calentá una sartén grande a fuego máximo con aceite.' },
      { texto: 'Poné 4 dientes de ajo en la sartén. Colocá los lomos gruesos con la carne hacia abajo ~1 min hasta dorar. Dá vuelta 1 min más. Pasalos a una bandeja para horno.' },
      { texto: 'Horneá 9 min a 180°C. Sacá del horno, espolvoreá azúcar negra o rubia y un poco de miel. Volvé al horno 3 min más.' },
      { texto: 'La parte fina: sartén pequeña con aceite y 2 dientes de ajo, menos de 1 min de cada lado.' }
    ],
    tips: [
      'La azúcar y miel al final hacen la diferencia: carameliza la superficie.',
      'Con espátula para manejarlo, es muy delicado.',
      'La parte fina se cocina mucho más rápido, ojo de no pasarla.'
    ]
  },

  {
    id: 'milanesas',
    titulo: 'Milanesas de Pollo',
    categoria: 'carnes',
    emoji: '🍗',
    img: 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h (con marinado)',
    porciones: '8–10 milanesas',
    dificultad: 'Fácil',
    descripcion: 'Supremas de pollo marinadas en huevo, ajo, orégano, comino y perejil. Empanadas y al horno quedan doradas y jugosas. Clásico que nunca falla.',
    ingredientes: [
      '2,5 kg de suprema de pollo (fileteadas finamente)',
      '1 diente de ajo',
      '4 huevos',
      '1 cucharadita colmada de sal fina',
      'Orégano',
      'Pimienta (10 giros)',
      'Comino (1 cucharadita)',
      'Medio ramo de perejil',
      'Pan rallado (para horno o para freír)'
    ],
    pasos: [
      { texto: 'Si querés milanesas más finas, colocá cada suprema entre dos láminas de film y golpeala suavemente con un martillo de cocina.' },
      { texto: 'En un tazón, machacá el ajo. Añadí los 4 huevos y batí. Agregá la sal, orégano, pimienta, comino y el perejil machacado. Mezclá bien.' },
      { texto: 'Cortá los nervios blancos de las supremas para que no se contraigan. Salá ambos lados y sumergilas en el tazón con la marinada. Cubrí con film y metelas en la heladera mínimo 30 min (mejor 2 horas).' },
      { texto: 'Precalentá el horno a 200°C.' },
      { texto: 'Cubrí una bandeja con fritolín. Colocá las milanesas y espolvorealas con pan rallado cubriéndolas completamente.' },
      { texto: 'Horneá 10 min, dalas vuelta y 10 min más hasta que estén doradas y crocantes.' },
      { texto: 'Opcional: hacé salsa de tomate con sal, aceite y orégano. Agregá encima de las milanesas y cubrí con mozzarella. Volvé al horno 5 min hasta que el queso se derrita.' }
    ],
    tips: [
      'Cuanto más tiempo marinen, más jugosas quedan.',
      'El perejil machacado da mucho más aroma que picado.',
      'Con salsa y queso arriba se convierten en milanesas napolitanas.'
    ]
  },

  {
    id: 'ribs-cerdo',
    titulo: 'Ribs de Cerdo',
    categoria: 'carnes',
    emoji: '🍖',
    img: 'https://images.pexels.com/photos/18824033/pexels-photo-18824033.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 h 30 min',
    porciones: '6 personas',
    dificultad: 'Media',
    descripcion: 'Ribs cocidas a fuego lento en caldo con laurel y leche, luego glaseadas con BBQ y miel en el horno o la parrilla. Se caen del hueso.',
    ingredientes: [
      '3 kg de ribs de cerdo',
      '2 cebollas y 1 zanahoria',
      '1 puñado de apio',
      '4 dientes de ajo',
      '15 g de sal gruesa',
      '2 hojas de laurel',
      '1 litro de leche',
      'Pimienta al gusto',
      'Salsa barbacoa',
      'Miel (opcional)'
    ],
    pasos: [
      { titulo: 'Preparación', texto: 'Retirá el cuero de las ribs y quitá parte de la grasa. Usá un repasador para ayudarte a arrancar el cuero.' },
      { titulo: 'Caldo y cocción', texto: 'Llenás una olla grande con agua. Antes de hervir, agregá laurel, apio, zanahoria, cebollas y ajos machacados. Añadí sal gruesa. Cuando el agua hierva, agregá 1 litro de leche y poné las ribs verticales en la olla. Cociná a fuego medio con tapa entreabierta 1 h 30 min (ribs finas) o 2 h 30 min (gruesas). El hueso debe levantarse un poco.' },
      { titulo: 'Horno', texto: 'Precalentá el horno a 250°C. Colocá las ribs con el hueso hacia arriba. Salpimentá y cubrí bien con salsa BBQ (opcional: miel tibia mezclada en la BBQ). Horneá a 200°C 10 min. Sacalas, dalas vuelta, poneles más BBQ en la carne y volvé al horno 15 min más.' },
      { titulo: 'Parrilla (alternativa)', texto: 'Salpimentá y poneles BBQ del lado del hueso. Cociná 25 min con el hueso hacia abajo. Aplicá más BBQ del lado de la carne con pincel, dá vuelta y cociná 30 min más hasta dorar y caramelizar.' }
    ],
    tips: [
      'El cuero se saca más fácil usando un repasador para agarrarlo.',
      'La leche en el caldo hace que la carne quede más tierna.',
      'El hueso que se levanta solo es señal de que están listas.'
    ]
  },

  {
    id: 'fajitas-pollo',
    titulo: 'Fajitas de Pollo',
    categoria: 'carnes',
    emoji: '🌮',
    img: 'https://images.pexels.com/photos/32371267/pexels-photo-32371267.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Tiritas de pollo salteadas con zanahoria, morrón y cebolla, condimentadas con tomillo, ají molido y orégano. Para armar en tortillas con lo que tengas.',
    ingredientes: [
      '1 kg de suprema de pollo',
      '3 zanahorias',
      '1 morrón',
      '4 cebollas',
      '4 dientes de ajo',
      'Tomillo, ají molido y orégano',
      'Aceite y manteca',
      'Sal'
    ],
    pasos: [
      { texto: 'Cortá la suprema en fetas y luego por la mitad. Desechá las partes con mucha sangre.' },
      { texto: 'Pelá y cortá las zanahorias en tiritas. Cortá el morrón en tiritas. Cortá las cebollas en tiritas. Picá los ajos chiquito.' },
      { texto: 'En una cacerola a fuego fuerte con un poco de aceite, salteá las zanahorias 2–3 min. Añadí el morrón y cociná 1 min más.' },
      { texto: 'Agregá todas las cebollas y un poco de sal. Revolvé 10–15 min hasta que las verduras estén tiernas. Añadí el tomillo, ají molido y orégano. Mezclá y apagá el fuego.' },
      { texto: 'En una sartén aparte con aceite y manteca, cociná todas las fetas de pollo a fuego fuerte ~8 min, revolviendo con pinza. Agregá sal durante la cocción.' },
      { texto: 'Serví el pollo con las verduras en la cacerola o mezclá todo junto. Armá en tortillas.' }
    ],
    tips: [
      'Las verduras en tiritas no caen de las fajitas (en cuadraditos sí).',
      'El pollo a fuego fuerte queda más dorado y menos hervido.',
      'Completá con crema agria, guacamole o salsa de tomate.'
    ]
  },

  {
    id: 'hamburguesas',
    titulo: 'Hamburguesas (Blend de Carnes)',
    categoria: 'carnes',
    emoji: '🍔',
    img: 'https://images.pexels.com/photos/36741809/pexels-photo-36741809.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h 30 min (con reposo)',
    porciones: '13 hamburguesas',
    dificultad: 'Fácil',
    descripcion: 'Blend de roast beef y bife de chorizo. Bolas de 100–120 g prensadas en film para lograr la forma perfecta. Reposo en heladera para que se mantengan firmes.',
    ingredientes: [
      '1 kg de carne picada de roast beef',
      '1 kg de carne picada de tapa de asado o bife de chorizo',
      'Sal al gusto (solo antes de cocinar)'
    ],
    pasos: [
      { texto: 'En una bandeja grande, mezclá las dos carnes picadas para crear el blend.' },
      { texto: 'Formá bolas de 100–120 g cada una.' },
      { texto: 'Envolvé cada bola en film transparente y usá un mortero o prensador para aplastarlas y darles forma de hamburguesa.' },
      { texto: 'Sazónalas con sal. Importante: la sal se agrega justo antes de cocinar para que la carne no se reseque.' },
      { texto: 'Dejalas en la heladera al menos 45 min antes de cocinar para que se mantengan firmes.' },
      { texto: 'Calentá una plancha o sartén grande a fuego medio sin aceite. La grasa de la carne evita que se peguen. Cociná ~15 min de cada lado o hasta el punto deseado.' },
      { texto: 'Reposá unos minutos antes de servir para que los jugos se redistribuyan. Si aplastás la hamburguesa en plancha bien caliente, el tiempo baja a ~3 min de cada lado.' }
    ],
    tips: [
      'El blend de dos carnes da más sabor y jugosidad.',
      'Nunca salar antes del reposo en heladera: reseca la carne.',
      'El film + prensador da una forma perfecta y compacta.'
    ]
  },

  {
    id: 'pollo-horno',
    titulo: 'Pollo al Horno con BBQ',
    categoria: 'carnes',
    emoji: '🍗',
    img: 'https://images.pexels.com/photos/13823350/pexels-photo-13823350.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h 45 min',
    porciones: '6 personas',
    dificultad: 'Fácil',
    descripcion: 'Pata y muslo de pollo marinados en limón, tomillo, comino y manteca, terminados con salsa BBQ caramelizada al calor superior del horno.',
    ingredientes: [
      '3 kg de pata y muslo de pollo',
      '4 limones',
      '1 cucharadita de tomillo',
      '1 cucharadita de pimienta',
      '2 cucharaditas de comino',
      '2 cucharaditas de ajo en polvo',
      'Manteca',
      'Sal',
      'Salsa barbacoa'
    ],
    pasos: [
      { texto: 'Descongelá el pollo si hace falta. Exprimí el jugo de los 4 limones en un bol grande.' },
      { texto: 'Agregá al bol el tomillo, pimienta, comino, ajo en polvo y sal. Mezclá para formar la marinada.' },
      { texto: 'Preparás el pollo retirando los huesos del medio (o que lo haga el carnicero). Secá con servilleta para eliminar humedad. Salá ambos lados.' },
      { texto: 'Colocá todo el pollo en una bandeja de horno con rejilla. Derretí 2 dedos de manteca y untá todo el pollo.' },
      { texto: 'Vertí la marinada sobre cada muslo y pata. Si querés, poné los limones exprimidos encima.' },
      { texto: 'Precalentá el horno a 180°C modo envolvente. Horneá 30 min. Sacá del horno, quitá los limones, cubrí con papel aluminio y volvé al horno.' },
      { texto: 'Subí la temperatura a 200°C con calor arriba y abajo. Cociná ~1 hora más. Sacá el aluminio, aplicá salsa BBQ y volvé al horno 10–15 min con solo calor superior hasta dorar.' }
    ],
    tips: [
      'El papel aluminio evita que se queme la piel mientras termina de cocinarse.',
      'El calor superior al final es lo que carameliza la BBQ.',
      'Queda jugosísimo por el tiempo de cocción largo a temperatura moderada.'
    ]
  },

  {
    id: 'paella',
    titulo: 'Paella de Pollo',
    categoria: 'carnes',
    emoji: '🥘',
    img: 'https://images.pexels.com/photos/13647484/pexels-photo-13647484.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h',
    porciones: '6 personas',
    dificultad: 'Media',
    descripcion: 'Arroz dorado con pollo, morrón, zanahoria y cebolla, perfumado con azafrán, pimentón y cúrcuma. El sofrito de verduras es el corazón de esta paella.',
    ingredientes: [
      '3 tazas grandes de arroz',
      '5 pechugas de pollo',
      '3 cebollas',
      '5 dientes de ajo',
      '1 morrón',
      '2 zanahorias',
      '2 cubitos de caldo',
      'Agua (3 vasos por cada vaso de arroz)',
      'Azafrán, tomillo, pimentón y cúrcuma o curry',
      'Aceite, manteca y sal'
    ],
    pasos: [
      { texto: 'Pelá y cortá en cuadraditos las cebollas, el ajo, el morrón y las zanahorias.' },
      { texto: 'En una cacerola a fuego medio, cociná las zanahorias, el morrón, la cebolla y el ajo revolviendo hasta que se doren ligeramente (unos 15 min).' },
      { texto: 'Cortá las pechugas en cuadraditos. En otra olla con aceite y manteca, cociná el pollo con sal hasta que esté dorado.' },
      { texto: 'Agregá el arroz a la cacerola con las verduras. Incorporá el pollo y seguí cocinando 15 min más.' },
      { texto: 'Prepará el caldo: 9 vasos de agua hirviendo con 2 cubitos disueltos.' },
      { texto: 'Añadí el caldo caliente a la cacerola. Mezclá para que el arroz tome sabor. Agregá azafrán, tomillo, pimentón y cúrcuma o curry.' },
      { texto: 'Poné los pedazos de pollo encima del arroz. Cociná a fuego mínimo 15 min. Tapá con tapa o papel aluminio y dejá reposar sin fuego otros 15 min.' }
    ],
    tips: [
      'El sofrito de verduras es lo que da profundidad de sabor.',
      'Guardá un poco de caldo extra por si el arroz absorbe demasiado.',
      'No revolvás el arroz durante la cocción para que quede suelto.'
    ]
  },

  {
    id: 'sushi',
    titulo: 'Sushi Casero',
    categoria: 'basicos',
    emoji: '🍣',
    img: 'https://images.pexels.com/photos/11064616/pexels-photo-11064616.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 hs',
    porciones: '10 personas',
    dificultad: 'Avanzada',
    descripcion: 'Sushi casero paso a paso: arroz especiado con vinagre y mirin, salmón fresco, langostinos, kanikama y queso Finlandia. Técnica completa para armar rolls en casa.',
    ingredientes: [
      '1 kg de arroz asahi (caja negra)',
      '100 ml de vinagre',
      '75 ml de mirin o sake',
      '180 g de azúcar y 1 cucharada de sal',
      '2 paquetes de algas (nori)',
      '2–3 lomos de salmón rosado',
      '10 langostinos chicos',
      'Kanikama y queso Finlandia',
      'Sésamo blanco y negro',
      'Palta (opcional)',
      'Panko (para calentitos)',
      '4 huevos, sal y aceite'
    ],
    pasos: [
      { titulo: 'Lavar el arroz', texto: 'Volcá todo el arroz en un bol, llenalo de agua fría, revolvé suavemente hasta que el agua salga clara. Colá y dejá reposar 15 min en el colador.' },
      { titulo: 'Preparar el líquido de sazón', texto: 'En un bol chiquito mezclá el vinagre, mirin, sake, azúcar y sal. Calentá a fuego fuerte revolviendo hasta que hierva. Dejá enfriar a un costado.' },
      { titulo: 'Cocinar el arroz', texto: 'Por cada kg de arroz, usás 1 litro de agua. Volcá 1,1 litros de agua fría en la cacerola con el arroz y un pedacito de alga. Fuego fuerte tapado 8 min. Bajá al mínimo 7 min más. Apagá y reposá 15 min sin levantar la tapa.' },
      { titulo: 'Enfriar el arroz', texto: 'Volcá el arroz en un bol grande (no metálico). Vertí el líquido de sazón tibio encima. Abánicá mientras envolvés con espátula hasta enfriar. Cubrí con repasador húmedo.' },
      { titulo: 'Preparar el salmón y langostinos', texto: 'Cortá los lomos por la mitad y quitales la piel. Dejá en bandeja tapada con film en la heladera junto a los langostinos.' },
      { titulo: 'Armar los rolls', texto: 'Con la esterilla y el alga, extendé arroz, rellenás con los ingredientes elegidos y enrollás firmemente. Cortá con cuchillo bien afilado y mojado.' }
    ],
    tips: [
      'El agua del arroz debe salir clara antes de cocinarlo.',
      'El repasador húmedo sobre el arroz evita que se seque.',
      'El cuchillo mojado en agua hace cortes limpios sin que se pegue el arroz.'
    ]
  },

  {
    id: 'tortilla-francesa',
    titulo: 'Tortilla Francesa',
    categoria: 'basicos',
    emoji: '🍳',
    img: 'https://images.pexels.com/photos/170849/pexels-photo-170849.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'La preparación más simple de la cocina y, bien hecha, una de las más elegantes. Tres huevos, manteca y sal. El secreto no está en los ingredientes sino en el fuego, la sartén y el movimiento — cremosa por dentro, apenas dorada por fuera.',
    ingredientes: [
      '3 huevos',
      '1 cda. de manteca',
      'Sal a gusto',
      'Pimienta negra (opcional)',
      '— Para rellenar (opcional) —',
      'Queso cremoso o en fetas',
      'Jamón cocido',
      'Ciboulette o perejil fresco picado',
    ],
    pasos: [
      {
        titulo: 'Batir los huevos',
        texto: 'Rompé los 3 huevos en un bol. Agregá sal (y pimienta si usás). Batí con un tenedor de forma enérgica durante 30–40 segundos hasta que las yemas y las claras estén completamente integradas y la mezcla sea de color uniforme. No tiene que formar espuma — solo una mezcla lisa y fluida.'
      },
      {
        titulo: 'Calentar la sartén',
        texto: 'Usá una sartén antiadherente de 20–22 cm. Calentala a fuego medio-alto durante 1 minuto. Para probar la temperatura: tirá una gotita de agua — si chisporrotea y se evapora de inmediato, está lista. Si humea demasiado, bajá el fuego.'
      },
      {
        titulo: 'La manteca espumante',
        texto: 'Agregá la manteca. Tiene que derretirse rápido y formar espuma pero sin ponerse marrón. Cuando la espuma empiece a bajar, ese es el momento exacto de agregar los huevos.'
      },
      {
        titulo: 'Cocinar con movimiento constante',
        texto: 'Vertí los huevos batidos de golpe. Con una espátula de silicona, hacé movimientos rápidos y continuos — como si estuvieras revolviendo en pequeños círculos o empujando desde los bordes hacia el centro. Mové la sartén también. El objetivo: que los huevos se cocinen de forma pareja y queden cremosos, no resecos. Todo este paso dura apenas 60–90 segundos.'
      },
      {
        titulo: 'El relleno y el pliegue',
        texto: 'Cuando la tortilla todavía está ligeramente húmeda en el centro (¡no la sobrecocines!), agregá el relleno sobre la mitad. Incliná la sartén y usá la espátula para plegar la mitad sin relleno sobre la mitad con relleno. Deslizá al plato con un movimiento suave — la tortilla tiene que quedar ovalada y cerrada.'
      }
    ],
    tips: [
      'La sartén tiene que estar caliente: si los huevos no chisporrotean al caer, la sartén está fría y la tortilla queda gomosa.',
      'No sobrecocinar: el interior tiene que quedar ligeramente húmedo y cremoso. Se termina de cocinar con el calor residual.',
      'Manteca, no aceite: la manteca aporta sabor y el punto espumante es la clave de la temperatura correcta.',
      'Batido enérgico: 30 segundos mínimo para romper bien la yema y obtener una mezcla uniforme.',
      'Para doble porción, mejor hacer dos tortillas de a una que una grande — es más fácil de manejar.'
    ]
  },

  {
    id: 'chimichurri',
    titulo: 'Chimichurri',
    categoria: 'salsas',
    emoji: '🌿',
    img: 'https://images.pexels.com/photos/8279862/pexels-photo-8279862.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '10 min + 24 hs reposo',
    porciones: '1 frasco',
    dificultad: 'Fácil',
    descripcion: 'El clásico argentino de la parrilla. Perejil, ajo, orégano, ají molido y vinagre. Indispensable para el asado — y mejora muchísimo después de 24 horas en la heladera.',
    ingredientes: [
      '1 atado de perejil fresco (hojas picadas finas)',
      '6–8 dientes de ajo picados finos',
      '2 cdas. de orégano seco',
      '1 cda. de ají molido (más si te gusta picante)',
      '1 cda. de pimentón dulce',
      '½ taza de vinagre blanco o de manzana',
      '½ taza de aceite de oliva o girasol',
      '1 cdita. de sal',
      'Pimienta negra a gusto'
    ],
    pasos: [
      {
        titulo: 'Picar a cuchillo',
        texto: 'Picá el perejil muy fino a cuchillo — nunca licuadora ni procesadora. Tiene que tener textura, no ser una pasta. Lo mismo con el ajo: picado muy fino.'
      },
      {
        titulo: 'Mezclar en frasco',
        texto: 'En un frasco de vidrio limpio: perejil + ajo + orégano + ají molido + pimentón + sal + pimienta. Mezclá bien.'
      },
      {
        titulo: 'Agregar vinagre y aceite',
        texto: 'Agregá el vinagre. Cerrá y agitá. Luego el aceite. Cerrá y volvé a agitar hasta que todo esté bien integrado.'
      },
      {
        titulo: 'Reposo mínimo 24 horas',
        texto: 'Llevá a la heladera. A las 24h está bueno, a los 3 días está perfecto — los sabores se funden y el ajo se suaviza.'
      }
    ],
    tips: [
      'Nunca procesadora: el chimichurri tiene que tener textura, no ser un puré.',
      'Para marinar carne: bañá con chimichurri 1–2h antes de llevar a la parrilla.',
      'Dura 2–3 semanas en la heladera bien tapado.',
      'Si preferís menos picante, reducí el ají molido o usá pimentón dulce solo.'
    ],
    resumen: 'Picar a cuchillo → mezclar en frasco → vinagre → aceite → heladera 24h mínimo'
  },

  /* ── PASTAS (nuevas) ── */

  {
    id: 'lasana',
    titulo: 'Lasaña con Panqueques',
    categoria: 'pastas',
    emoji: '🍝',
    img: 'https://images.pexels.com/photos/5724557/pexels-photo-5724557.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 h 30 min',
    porciones: '8–10 personas',
    dificultad: 'Avanzada',
    descripcion: 'Lasaña argentina con capas de panqueques caseros, bolognesa de 2 kg de carne y salsa blanca cremosa. Gratinada hasta que la superficie esté dorada.',
    ingredientes: [
      '— Panqueques —',
      '500 g de harina tamizada',
      '1 litro de leche',
      '6 huevos',
      '2 cucharadas de aceite',
      '2 cucharaditas de sal',
      'Manteca para la sartén',
      '— Bolognesa —',
      '2 kg de carne picada',
      '1 morrón, 1 zanahoria, 2 cebollas, 1 apio',
      '2 sobres de caldo',
      '1 lata de salsa de tomate',
      'Ají molido, orégano y tomillo',
      '— Salsa blanca —',
      '3 litros de leche fría',
      '6 cucharadas de sal',
      '150 g de manteca',
      '150 g de fécula de maíz',
      'Nuez moscada y pimienta blanca (opcional)'
    ],
    pasos: [
      { titulo: 'Panqueques', texto: 'En un bol tamizá la harina con la sal. Agregá la leche, los huevos y el aceite. Batí 5 min de velocidad baja a media-alta. Cubrí con film y refrigerá 2 horas. En una sartén rectangular con manteca a fuego lento, cociná los panqueques y apilá en un plato cubierto con film.' },
      { titulo: 'Bolognesa', texto: 'Calentá aceite en sartén grande. Agregá el morrón, zanahoria, cebollas y apio picados finamente. Revolvé 5 min. Agregá los sobres de caldo. Sumá los 2 kg de carne picada y cociná hasta dorar. Agregá la salsa de tomate, ají molido, orégano y tomillo. Cociná unos minutos más.' },
      { titulo: 'Salsa blanca', texto: 'En una olla mezclá la leche fría, sal, manteca y fécula en frío sin encender el fuego. Revolvé bien para integrar. Encendé el fuego fuerte y seguí revolviendo hasta espesar. Agregá nuez moscada y pimienta blanca si querés.' },
      { titulo: 'Armado y horno', texto: 'Precalentá el horno a 180°C. En una fuente honda, ponés una capa de panqueques, cubrís con bolognesa. Repetís hasta agotar ingredientes, terminando con panqueques. Cubrí la última capa con salsa blanca. Horno 30 min hasta que esté dorada y burbujeante.' }
    ],
    tips: [
      'Los panqueques se pueden hacer el día anterior y guardar tapados en la heladera.',
      'La salsa blanca en frío antes de encender el fuego es el truco anti-grumos.',
      'Dejar reposar 10 min antes de cortar para que no se deshaga.'
    ],
    resumen: 'Panqueques → bolognesa → salsa blanca → apilar y hornear 30 min'
  },

  {
    id: 'salsa-rosa',
    titulo: 'Salsa Rosa',
    categoria: 'salsas',
    emoji: '🍝',
    img: 'https://images.pexels.com/photos/16021282/pexels-photo-16021282.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '20 min',
    porciones: '3 personas',
    dificultad: 'Fácil',
    descripcion: 'Salsa cremosa de tomate con crema de leche y ajo. Lista en 20 minutos. Sirve para pasta, pizza o para acompañar milanesas y pollo. La versión argentina de la rosa.',
    ingredientes: [
      '2/3 de lata de salsa de tomate',
      '½ taza de crema de leche',
      '3–4 dientes de ajo',
      'Aceite de oliva',
      'Orégano y sal'
    ],
    pasos: [
      { texto: 'Calentá aceite de oliva en una olla a fuego medio.' },
      { texto: 'Pelá y picá los ajos. Agregalos con el aceite y revolvé para que no se quemen.' },
      { texto: 'Agregá 2/3 de la lata de salsa de tomate. Revolvé y dejá hervir un poco.' },
      { texto: 'Bajá el fuego al mínimo, dejá reposar unos minutos. Agregá orégano y sal. Revolvé.' },
      { texto: 'Añadí la crema de leche. Revolvé bien para integrar todo. Apagá el fuego.' },
      { texto: 'Serví sobre pasta recién escurrida, como base de pizza o tarta, o sobre pollo y milanesas a la plancha.' }
    ],
    tips: [
      'No quemes el ajo: apenas toma color, sumá el tomate.',
      'Más crema = más suave; más tomate = más ácida. Ajustá a gusto.',
      'Con panceta dorada encima queda increíble.'
    ]
  },

  {
    id: 'noquis-mozzarella',
    titulo: 'Ñoquis Rellenos de Mozzarella',
    categoria: 'pastas',
    emoji: '🧀',
    img: 'https://images.pexels.com/photos/9249364/pexels-photo-9249364.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h 30 min',
    porciones: '6 personas',
    dificultad: 'Media',
    descripcion: 'Ñoquis de papa condimentados con perejil, tomillo y especias, rellenos de cubitos de mozzarella que se derriten al cocinarse. El clásico del primer día de mes.',
    ingredientes: [
      '12 papas grandes',
      'Sal gruesa (para cocinar las papas)',
      '4 huevos',
      '10 ramitas de perejil',
      'Harina 0000 (cantidad necesaria)',
      'Tomillo, ají molido, pimentón dulce, pimienta, sal fina',
      'Un chorrito de aceite',
      'Mozzarella (en cubitos para rellenar)'
    ],
    pasos: [
      { texto: 'Hervís las papas enteras con cáscara en agua con sal. Cociná ~40 min hasta que pinchen fácilmente. Escurrí y esperá que se enfríen antes de pelar (absorben menos agua así).' },
      { texto: 'Pelá las papas raspando la cáscara y aplastá en una olla con tenedor sin grumos. Dejá enfriar.' },
      { texto: 'Volcá la papa en la mesada formando un círculo. Agregá el aceite y los 4 huevos. Picá las hojas de perejil y sumá junto al tomillo, ají molido, pimentón, pimienta y sal.' },
      { texto: 'Agregá harina alrededor del borde y un poco en el medio. Amasá desde los bordes hacia el centro, añadiendo harina hasta que la masa sea manejable. No amasar de más para que no quede pegajosa.' },
      { texto: 'Dejá reposar la masa mientras cortás la mozzarella en cubitos.' },
      { texto: 'Formá los ñoquis rellenando con un cubito de mozzarella adentro. Colocalos en superficie enharinada.' },
      { texto: 'Herví en agua con aceite y sal. Cuando suben a la superficie, cociná 1 minuto más y retirá.' }
    ],
    tips: [
      'Papas bien frías antes de pelar = menos agua absorbida = menos harina necesaria.',
      'No amasar de más: la masa queda pegajosa y se necesita más harina, lo que los endurece.',
      'Se pueden congelar crudos para tener siempre listos.'
    ]
  },

  {
    id: 'fideos-bolognesa',
    titulo: 'Fideos con Bolognesa',
    categoria: 'pastas',
    emoji: '🍝',
    img: 'https://images.pexels.com/photos/31637792/pexels-photo-31637792.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4–6 personas',
    dificultad: 'Fácil',
    descripcion: 'Fideos tirabuzón cocinados directamente en el caldo con la bolognesa. Una sola olla, sin escurrir. La pasta absorbe todos los sabores.',
    ingredientes: [
      '2 paquetes de fideos tirabuzón (500 g total)',
      '1 kg de carne picada',
      '1 morrón, 1 zanahoria, 2 cebollas',
      '2 sobrecitos de caldo',
      '1 lata de salsa de tomate (400 g)',
      '1,5 litros de caldo o agua caliente',
      'Aceite, sal, orégano, tomillo y ají molido'
    ],
    pasos: [
      { texto: 'Lavá y cortá en cubos pequeños el morrón, la zanahoria y las cebollas.' },
      { texto: 'Prepará 1,5 litros de caldo con los 2 sobrecitos en agua hirviendo.' },
      { texto: 'Calentá una olla grande a fuego medio con 3–4 cucharadas de aceite. Agregá las verduras, sal y revolvé 5 min.' },
      { texto: 'Sumá el ajo (opcional). Agregá 700 g de carne picada y revolvé hasta dorar. Más sal.' },
      { texto: 'Agregá la lata de salsa de tomate, orégano, tomillo y ají molido. Revolvé.' },
      { texto: 'Agregá los dos paquetes de fideos y el caldo hirviendo. Revolvé bien.' },
      { texto: 'Cociná 12 min a fuego medio con tapa. A los 5 min, bajá a fuego lento y revolvé de vez en cuando. Agregá más agua si es necesario.' }
    ],
    tips: [
      'El caldo tiene que estar bien caliente cuando lo agregás.',
      'Una olla gruesa evita que se queme el fondo.',
      'Si sobra pasta el día siguiente, agregá un chorrito de agua al calentar.'
    ]
  },

  {
    id: 'canelones-verdura',
    titulo: 'Canelones de Jamón y Queso',
    categoria: 'pastas',
    emoji: '🌯',
    img: 'https://images.pexels.com/photos/3569706/pexels-photo-3569706.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 h',
    porciones: '8 personas',
    dificultad: 'Avanzada',
    descripcion: 'Panqueques rellenos de jamón, mozzarella, queso de rallar y ricota, bañados en salsa de tomate con ajo y salsa blanca. Los canelones caseros que se hacen para ocasiones especiales.',
    ingredientes: [
      '— Masa de panqueques —',
      '6 huevos',
      '750 g de leche',
      '1,5 kg de harina 0000',
      '2 cucharadas de sal',
      'Manteca para la sartén',
      '— Relleno —',
      '250 g de mozzarella rallada',
      '125 g de queso de rallar',
      '300 g de jamón cocido en cuadraditos',
      '200 g de ricota',
      '— Salsa de tomate —',
      '4–5 dientes de ajo',
      'Aceite, manteca, tomate, sal, orégano y tomillo',
      '— Salsa blanca —',
      'Ver receta Salsa Blanca con Espinaca'
    ],
    pasos: [
      { titulo: 'Masa de panqueques', texto: 'En batidora mezclá los 6 huevos con 750 g de leche. Añadí 2 cucharadas de sal y medio kilo de harina 0000. Revolvé bien hasta que quede homogéneo. Refrigerá 1 hora.' },
      { titulo: 'Relleno', texto: 'Rallá la mozzarella y el queso de rallar. Cortá el jamón en cuadraditos. En un bol mezclá jamón, mozzarella, queso de rallar y ricota.' },
      { titulo: 'Salsa de tomate', texto: 'Picá 4–5 dientes de ajo. En olla con aceite y manteca, salteá el ajo sin quemarlo. Agregá el tomate, sal, orégano y tomillo. Cociná a fuego fuerte revolviendo. Enfriá en heladera. Una vez fría, agregá un poco al relleno para que tome sabor.' },
      { titulo: 'Panqueques', texto: 'Sacá la masa de la heladera. En sartén a fuego lento con un poco de manteca, cociná los panqueques. No muy gruesos. Apilalos.' },
      { titulo: 'Armado y horno', texto: 'Rellenás cada panqueque, enrollalo y colocalo en una fuente de horno con manteca. 30 min antes de servir, prepará la salsa blanca. Volcá sobre los canelones y agregá un poco de salsa de tomate. Llevá al horno para gratinar.' }
    ],
    tips: [
      'La masa de panqueques necesita 1 hora de reposo en heladera.',
      'Agregar salsa de tomate fría al relleno le da más sabor.',
      'Los canelones se pueden armar con antelación y gratinar al momento.'
    ]
  },

  /* ── GUARNICIONES (nuevas) ── */

  {
    id: 'bastoncitos-mozzarella',
    titulo: 'Bastoncitos de Mozzarella',
    categoria: 'guarniciones',
    emoji: '🧀',
    img: 'https://images.pexels.com/photos/31206989/pexels-photo-31206989.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Bastones de mozzarella con doble empanizado, congelados antes de freír para que no se derritan. Crocantes por fuera con el queso fundido que se estira por dentro.',
    ingredientes: [
      '500 g de queso mozzarella',
      '3 huevos',
      'Pan rallado',
      'Aceite abundante para freír'
    ],
    pasos: [
      { texto: 'Cortá la mozzarella en rectángulos de ~2 cm de ancho y 8 cm de largo.' },
      { texto: 'Batí los huevos en un plato hondo. Poné el pan rallado en otro plato.' },
      { texto: 'Tomá un bastón, pasalo por el huevo batido cubriendo bien, luego por el pan rallado presionando para que se adhiera.' },
      { texto: 'Repetí: volvé a pasar por huevo y luego por pan rallado para crear doble capa de empanizado.' },
      { texto: 'Hacé lo mismo con todos los bastones y colocalos en bandeja separados.' },
      { texto: 'Llevalos al freezer 20 minutos para que se endurezcan y no se deshagan al freír.' },
      { texto: 'Calentá aceite abundante a fuego medio-alto. Freí hasta que estén dorados y crocantes de ambos lados. No los cocines de más o el queso se sale. Secá en papel absorbente y serví caliente.' }
    ],
    tips: [
      'El congelado de 20 min es fundamental para que no se derrita el queso al freír.',
      'Doble empanizado = más protección y más crocante.',
      'Servir inmediatamente: el queso se endurece si se enfría.'
    ]
  },

  {
    id: 'tortilla-arroz',
    titulo: 'Tortilla de Arroz',
    categoria: 'guarniciones',
    emoji: '🍳',
    img: 'https://images.pexels.com/photos/14941249/pexels-photo-14941249.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '20 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Tortilla de arroz cocido con mozzarella, queso rallado y especias. Ideal para aprovechar arroz del día anterior. Dorada por fuera, cremosa por dentro.',
    ingredientes: [
      '7 huevos',
      '50 g de queso rallado',
      '1 pedazo de mozzarella rallada',
      '2 tazas de arroz blanco cocido',
      'Tomillo, orégano y pimienta al gusto',
      'Aceite para freír'
    ],
    pasos: [
      { texto: 'En un bol grande, batí los 7 huevos hasta que estén bien mezclados.' },
      { texto: 'Agregá el queso rallado y la mozzarella rallada. Revolvé bien.' },
      { texto: 'Añadí las 2 tazas de arroz cocido. Mezclá todo junto.' },
      { texto: 'Agregá tomillo, orégano y pimienta. Revolvé para incorporar las especias.' },
      { texto: 'Calentá una sartén grande a fuego medio-alto con aceite suficiente para cubrir el fondo. Vertí la mezcla, tapá y bajá el fuego al mínimo.' },
      { texto: 'Cociná 5 min. Movela con espátula para que no se pegue. Otros 5 min más.' },
      { texto: 'Una vez dorada, ponés un plato encima de la sartén, dás vuelta la tortilla sobre el plato y volvés a cocinar 5 min del otro lado.' }
    ],
    tips: [
      'Perfecta para aprovechar arroz sobrante del día anterior.',
      'El arroz tiene que estar bien cocido y frío para que no largue humedad.',
      'Tapada al principio ayuda a que se cocine el interior sin quemarse.'
    ]
  },

  {
    id: 'tortilla-papa',
    titulo: 'Tortilla de Papa',
    categoria: 'guarniciones',
    emoji: '🥔',
    img: 'https://images.pexels.com/photos/14941246/pexels-photo-14941246.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '30 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'La clásica tortilla española en versión casera. Papa y cebolla salteadas, mezcladas con huevo y cocinadas a fuego bajo hasta que quede dorada de los dos lados.',
    ingredientes: [
      '2 papas',
      '1 cebolla',
      '7 huevos',
      'Orégano y sal',
      'Aceite'
    ],
    pasos: [
      { texto: 'Pelá las papas y la cebolla. Cortalas en gajos pequeños con cuchillo o máquina.' },
      { texto: 'Calentá una olla con aceite a fuego medio. Agregá las papas y la cebolla. Revolvé 10 min agregando aceite si es necesario. Llevá al freezer para enfriar rápido.' },
      { texto: 'En un bol, batí los 7 huevos con orégano y sal.' },
      { texto: 'Agregá la mezcla de papas y cebolla a los huevos y mezclá todo bien.' },
      { texto: 'Calentá una sartén con aceite y vertí la mezcla. Mezclá bien para que no se pegue.' },
      { texto: 'Tapá la sartén y cociná a fuego lento.' },
      { texto: 'Cuando esté lista de un lado, ponés una tabla encima y dás vuelta la tortilla. Volvé a la sartén, tapá y cociná a fuego lento hasta que esté cocida del otro lado.' }
    ],
    tips: [
      'El truco del freezer enfría la papa rápido para que los huevos no se cuezan al mezclar.',
      'Fuego bajo y tapada: se cocina parejo sin quemarse.',
      'El vuelta se hace con una tabla o plato grande para no romperla.'
    ]
  },

  {
    id: 'pure-papa',
    titulo: 'Puré de Papa',
    categoria: 'guarniciones',
    emoji: '🥔',
    img: 'https://images.pexels.com/photos/30635680/pexels-photo-30635680.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '35 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'El acompañamiento más clásico de la cocina argentina. Papas pisadas en caliente con manteca generosa y leche entera tibia — cremoso, suave y sin un solo grumo. El secreto está en la temperatura y en nunca usar mixer.',
    ingredientes: [
      '1 kg de papas (Spunta o similares)',
      '80 g de manteca',
      '150–200 ml de leche entera',
      '1 cdita. de sal gruesa (para el agua de cocción)',
      'Sal fina y pimienta blanca a gusto',
      'Nuez moscada recién rallada (opcional)',
    ],
    pasos: [
      {
        titulo: 'Cocinar las papas',
        texto: 'Pelá las papas y cortalasen cuartos de tamaño similar para que se cocinen parejo. Ponelas en una olla, cubrí con agua fría y agregá la sal gruesa. Llevá a hervor a fuego fuerte, luego bajá a fuego medio-alto y cociná 18–22 minutos. Están listas cuando un tenedor entra sin resistencia.'
      },
      {
        titulo: 'Calentar la leche',
        texto: 'Mientras las papas se cocinan, calentá la leche en una ollita o en el microondas hasta que esté bien tibia (no hace falta que hierva). Esto es clave: la leche fría corta el calor y arruina la textura.'
      },
      {
        titulo: 'Escurrir y secar',
        texto: 'Colá las papas y volvelas a la olla caliente vacía. Dejá que reposen 1–2 minutos sobre el fuego apagado, moviéndolas suavemente. Este paso evapora el exceso de humedad y es lo que hace que el puré no quede aguado.'
      },
      {
        titulo: 'Pisar en caliente',
        texto: 'Con las papas todavía muy calientes, usá un pisapapas o un pasapurés. Agregá toda la manteca de una sola vez y pisá hasta integrar. La manteca se derrite dentro de la papa y crea la base cremosa. Nunca uses mixer ni licuadora — el almidón se activa y el puré queda chicloso.'
      },
      {
        titulo: 'Incorporar la leche',
        texto: 'Agregá la leche tibia de a poco, integrando con movimientos envolventes con una cuchara de madera o espátula. Ajustá la cantidad según la textura que preferís: menos leche para un puré más espeso, más para uno más fluido. Condimentá con sal fina, pimienta blanca y nuez moscada si usás.'
      }
    ],
    tips: [
      'NUNCA mixer ni licuadora: el almidón se vuelve pegajoso y el puré queda gomoso.',
      'Leche siempre tibia: la leche fría baja la temperatura y corta la cremosidad.',
      'Manteca de buena calidad hace toda la diferencia.',
      'Para un puré más rico todavía: reemplazá parte de la leche por crema de leche.',
      'Si el puré quedó demasiado espeso, agregá más leche tibia de a cucharadas.'
    ]
  },

  {
    id: 'pure-zapallo',
    titulo: 'Puré de Zapallo',
    categoria: 'guarniciones',
    emoji: '🎃',
    img: 'https://images.pexels.com/photos/5419032/pexels-photo-5419032.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '40 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Suave, dulce y con ese color naranja intenso que llena el plato. El zapallo anco asado concentra su sabor mejor que hervido, y con manteca, queso rallado y nuez moscada se convierte en un acompañamiento que le roba el show a la carne.',
    ingredientes: [
      '1 kg de zapallo anco (o coreano)',
      '50 g de manteca',
      '50 g de queso rallado tipo parmesano o sardo',
      '½ cdita. de nuez moscada rallada',
      'Sal y pimienta negra a gusto',
      '3–4 cdas. de leche entera (si fuera necesario)',
    ],
    pasos: [
      {
        titulo: 'Cocinar el zapallo',
        texto: 'Cortá el zapallo en trozos grandes, sacale las semillas y las fibras del centro. Tenés dos opciones:\n\n**Al horno (recomendado):** Poné los trozos con la piel hacia arriba en una asadera, sin agua ni aceite. Cociná a 200 °C durante 35–40 minutos hasta que estén completamente tiernos. El horno evapora el agua y concentra el sabor.\n\n**Hervido:** Si no tenés tiempo, pelá el zapallo, cortalo en cubos y herví en agua con sal 15–20 minutos. Colá muy bien y procedé a secarlo en la sartén antes de pisar.'
      },
      {
        titulo: 'Retirar la pulpa',
        texto: 'Una vez frío para poder manipularlo, separás la pulpa de la piel con una cuchara. La piel se descarta.'
      },
      {
        titulo: 'Secar en la sartén',
        texto: 'Ponés la pulpa en una sartén grande a fuego medio y la cocinás 4–5 minutos revolviendo constantemente. El zapallo tiene mucha agua — este paso es fundamental para que el puré no quede líquido. Cuando empiece a despegarse de la sartén y la textura sea más compacta, está listo.'
      },
      {
        titulo: 'Pisar y condimentar',
        texto: 'Fuera del fuego, pisá bien con un pisapapas o pasapurés hasta obtener una textura lisa. Agregá la manteca y el queso rallado. Mezclá con movimientos envolventes hasta que todo esté integrado y el queso se derrita. Condimentá con sal, pimienta y nuez moscada.'
      },
      {
        titulo: 'Ajustar textura',
        texto: 'Si el puré quedó demasiado espeso, agregá leche tibia de a cucharadas hasta la textura deseada. Probá y ajustá sal. Servilo caliente.'
      }
    ],
    tips: [
      'Horno > hervido: el horno evapora el agua y el sabor del zapallo se concentra muchísimo más.',
      'Secar en sartén antes de pisar es el paso que más diferencia hace — si lo salteás, el puré queda líquido.',
      'El queso sardo o parmesano le da profundidad; con cremoso queda más suave y lácteo.',
      'Combina perfecto con pollo al horno, carnes braseadas o milanesas.',
      'Aguanta bien en la heladera 2–3 días; recalentá con un chorrito de leche y manteca.'
    ]
  },

  /* ── POSTRES (nuevos) ── */

  {
    id: 'brownies',
    titulo: 'Brownies de Chocolate',
    categoria: 'postres',
    emoji: '🍫',
    img: 'https://images.pexels.com/photos/28159490/pexels-photo-28159490.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '35 min',
    porciones: '12 porciones',
    dificultad: 'Fácil',
    descripcion: 'Brownies con chocolate Águila, manteca y solo 50 g de harina. Húmedos, densos e intensos. El cacao amargo opcional los hace más profundos de sabor.',
    ingredientes: [
      '9 barritas de chocolate Águila (160 g)',
      '90 g de manteca',
      '2 huevos',
      '150 g de azúcar',
      '50 g de harina 0000',
      '1 cucharadita de esencia de vainilla',
      '1 cucharada de cacao amargo (opcional)'
    ],
    pasos: [
      { texto: 'Precalentá el horno a 180°C.' },
      { texto: 'En un bowl, derretí en microondas las 9 barritas de chocolate y la manteca durante 55 segundos. Revolvé y calentá 15 segundos más. Revolvé hasta que quede completamente derretido.' },
      { texto: 'En la batidora, batí los 2 huevos con 150 g de azúcar hasta que quede medio blanquecino.' },
      { texto: 'Agregá el chocolate derretido a la mezcla de huevo y azúcar. Revolvé un poco.' },
      { texto: 'Opcional: agregá 1 cucharada de cacao amargo y seguí revolviendo.' },
      { texto: 'Agregá los 50 g de harina y la esencia de vainilla. Revolvé hasta integrar bien.' },
      { texto: 'Enmantecá un molde y espolvorealo con harina. Vertí la mezcla y esparcí bien. Horneá 20–25 min modo envolvente.' },
      { texto: 'Pinchá con un cuchillo: si sale limpio, están listos. Dejá enfriar 5 min antes de servir.' }
    ],
    tips: [
      'Poco tiempo en el horno = brownies húmedos. Más tiempo = más secos.',
      'El cacao amargo opcional intensifica el sabor a chocolate.',
      'Con nueces o chips de chocolate adentro quedan increíbles.'
    ]
  },

  {
    id: 'creme-brulee',
    titulo: 'Crème Brûlée',
    categoria: 'postres',
    emoji: '🍮',
    img: 'https://images.pexels.com/photos/36782571/pexels-photo-36782571.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '2 h 30 min + 4 h heladera',
    porciones: '5 bowls',
    dificultad: 'Avanzada',
    descripcion: 'Crema de yemas con crema de leche y vainilla, cocinada a baño maría en el horno. La capa de caramelo quemado con soplete es el sello final.',
    ingredientes: [
      '5 yemas de huevo (sin claras)',
      '100 g de azúcar',
      '500 ml de crema de leche',
      '1 cucharadita de esencia de vainilla',
      'Papel aluminio',
      'Azúcar extra para el caramelo'
    ],
    pasos: [
      { texto: 'Precalentá el horno a 160°C.' },
      { texto: 'Separás las claras de las yemas de 5 huevos. Las claras no se usan (guardalas en un taper).' },
      { texto: 'En batidora, batí las 5 yemas con 100 g de azúcar hasta que estén bien mezcladas.' },
      { texto: 'En un bowl aparte, calentá a fuego medio 500 ml de crema con la esencia de vainilla. Cuando empiece a hervir, retirá del fuego, tapá y dejá reposar 10 min.' },
      { texto: 'Agregá 2 cucharadas grandes de crema caliente a las yemas en la batidora y batí. Luego sumá el resto de la crema y batí hasta que no haya grumos.' },
      { texto: 'Colar la mezcla en otro bowl. Vertí en 5 bowls de porcelana medianos. Tapá cada uno con papel aluminio.' },
      { texto: 'Colocalos en una bandeja de vidrio y vertí agua casi hirviendo para baño maría. Horneá a 160°C, sin ventilador, calor arriba y abajo, 1 hora 40 min.' },
      { texto: 'Apagá el horno, dejá los bowls con la puerta entreabierta 20 min. Sacalos y enfriá 10 min a temperatura ambiente. Cubrí con film y refrigerá 4 horas mínimo.' },
      { texto: 'Para servir: espolvoreá una capa de azúcar encima de cada crema y quemá con soplete hasta formar caramelo.' }
    ],
    tips: [
      'Los huevos bien fríos facilitan que la yema no se rompa al separarlos.',
      'Colar la mezcla elimina grumos y da una textura sedosa.',
      'El tiempo de cocción puede variar según el horno — revisá a las 90 min.'
    ]
  },

  {
    id: 'muffins-chocolate',
    titulo: 'Muffins de Chocolate',
    categoria: 'postres',
    emoji: '🧁',
    img: 'https://images.pexels.com/photos/34275127/pexels-photo-34275127.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '35 min',
    porciones: '12 muffins',
    dificultad: 'Fácil',
    descripcion: 'Muffins de chocolate suaves y esponjosos con chocolate Águila encima. Con harina leudante y cacao amargo, quedan perfectos para merendar.',
    ingredientes: [
      '100 g de manteca',
      '1 taza de azúcar',
      '1 huevo',
      '1 cucharadita de esencia de vainilla',
      '1½ taza de harina leudante',
      '1 taza de leche',
      '½ taza de cacao amargo o Nesquik',
      'Chocolate Águila o chips de chocolate'
    ],
    pasos: [
      { texto: 'Precalentá el horno a 175°C. Colocá pirotines en una bandeja para muffins.' },
      { texto: 'En batidora, batí los 100 g de manteca hasta que esté suave. Añadí el azúcar y mezclá.' },
      { texto: 'Agregá el huevo y la vainilla. Batí hasta que todos los ingredientes estén integrados.' },
      { texto: 'Añadí la harina leudante de forma gradual, alternando con la leche (un poco de harina, un poco de leche) para evitar grumos.' },
      { texto: 'Incorporá el cacao amargo o Nesquik y mezclá.' },
      { texto: 'Con espátula, raspar los bordes y el fondo del recipiente para integrar todo. No sobrebatir.' },
      { texto: 'Vertí la masa en los pirotines llenando ~2/3 de cada uno. Poné chips o trozos de chocolate Águila encima.' },
      { texto: 'Horneá ~20 min hasta que al pinchar con palillo salga limpio. Enfriá en la bandeja unos minutos, luego en rejilla.' }
    ],
    tips: [
      'Alternar harina y leche evita que la masa quede con grumos.',
      'No sobrebatir la masa final: los muffins quedan más esponjosos.',
      'Completamente fríos se guardan en recipiente hermético varios días.'
    ]
  },

  {
    id: 'crumbl-cookies',
    titulo: 'Crumbl Cookies',
    categoria: 'postres',
    emoji: '🍪',
    img: 'https://images.pexels.com/photos/28857425/pexels-photo-28857425.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h 30 min (con reposo)',
    porciones: '8 cookies grandes',
    dificultad: 'Media',
    descripcion: 'Cookies estilo Crumbl: altas, húmedas, con charcos de chocolate. Manteca derretida, dos azúcares y reposo en freezer para que queden gorditas y no se expandan demasiado.',
    ingredientes: [
      '225 g de manteca (a temperatura ambiente)',
      '200 g de azúcar rubia',
      '100 g de azúcar blanca',
      '1 huevo entero (~50 g)',
      '2 yemas (~35 g)',
      '10 ml de extracto de vainilla',
      '350 g de harina 0000',
      '15 g de maicena (opcional)',
      '5 g de bicarbonato de sodio',
      '5 g de polvo de hornear',
      '300 g de chocolate Águila'
    ],
    pasos: [
      { titulo: 'Batido', texto: 'Derretí la manteca en una olla. Colocala en un bowl y agregá los dos azúcares. Mezclá hasta que esté cremoso (3–5 min). Agregá el huevo, las dos yemas y la vainilla. Batí hasta que quede una mezcla espesa y homogénea.' },
      { titulo: 'Ingredientes secos', texto: 'En otro bowl mezclá la harina, maicena (opcional), bicarbonato y polvo de hornear.' },
      { titulo: 'Unir masa', texto: 'Integrar los secos al batido con espátula. No sobrebatir. Picá el chocolate en trozos y agregalos. Mezclá bien.' },
      { titulo: 'Formar', texto: 'Hacé bolitas de 110–120 g sin aplastar. Dejalas altas y rústicas. Colocá un disco grande de chocolate encima de cada bolita.' },
      { titulo: 'Reposo en frío (obligatorio)', texto: 'Freezer: 30 min a 2 horas (más tiempo = cookies más gorditas). O heladera: 1–24 horas (ideal para hornear al día siguiente).' },
      { titulo: 'Horneado', texto: 'Precalentá a 190°C. Horneá directamente del freezer/heladera 6–7 min a 190°C. Bajá a 170°C y horneá 6–7 min más. Total: 12–14 min. Dejá en bandeja 10 min antes de mover.' }
    ],
    tips: [
      '10 min: centro fundente. 15–20 min: textura óptima. 30 min: más crocantes.',
      'Se pueden freezar crudas hasta 2 meses. Lo mejor es 24 h en freezer y recién ahí cocinar.',
      'No sacarlas de la bandeja antes de 10 min: se siguen cocinando con el calor residual.'
    ],
    errores: [
      'Aplastar las bolitas antes de hornear',
      'Hornear sin reposo en frío previo',
      'Mover las cookies recién salidas del horno'
    ]
  },

  {
    id: 'volcan-chocolate',
    titulo: 'Volcán de Chocolate',
    categoria: 'postres',
    emoji: '🌋',
    img: 'https://images.pexels.com/photos/31868442/pexels-photo-31868442.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h (+ 6 h de ganache)',
    porciones: '6 volcanes',
    dificultad: 'Avanzada',
    descripcion: 'Volcán de chocolate con centro líquido de ganache. Bordes firmes, interior fundente. La ganache se hace horas antes y se congela para que funcione el efecto.',
    ingredientes: [
      '— Ganache (centro) —',
      '250 g de crema de leche',
      '190 g de chocolate Águila',
      '40 g de manteca',
      '— Volcán —',
      '300 g de chocolate Águila',
      '120 g de manteca a temperatura ambiente',
      '6 yemas y 6 claras de huevo',
      '100 g de azúcar',
      '40 g de harina 0000'
    ],
    pasos: [
      { titulo: 'Ganache (6 horas antes)', texto: 'En un recipiente mezcla la crema y el chocolate Águila derretido. Enfriá un poco y añadí la manteca. Mezclá hasta obtener una ganache suave. Colocala en manga pastelera y formá bolitas. Metelas al freezer 6 horas mínimo.' },
      { titulo: 'Masa del volcán', texto: 'Cortá el chocolate en barritas. Separás yemas de claras. Batí las yemas ligeramente. Agregá el azúcar y batí hasta que quede homogéneo.' },
      { titulo: 'Derretir el chocolate', texto: 'En microondas en intervalos cortos, derretí la manteca y el chocolate juntos, revolviendo cada vez. Una vez completamente derretido, integrá bien.' },
      { titulo: 'Preparar moldes', texto: 'Untá cada molde individual con manteca y espolvoreá harina 0000. Cubrí toda la superficie para que no se pegue.' },
      { titulo: 'Integrar', texto: 'Agregá la mezcla de chocolate a las yemas batidas y mezclá. Añadí la harina y revolvé hasta incorporar. Batí las claras a picos suaves. Agregalas de a poco a la mezcla con movimientos suaves.' },
      { titulo: 'Armar y hornear', texto: 'Vertí la masa en los moldes hasta la mitad. Colocá una bolita de ganache congelada en el centro. Cubrí con más masa hasta completar. Precalentá el horno a 180°C. Horneá ~15 min hasta que los bordes estén firmes pero el centro siga suave. Desmoldá y serví inmediatamente.' }
    ],
    tips: [
      'La ganache congelada es lo que forma el centro líquido: no salteés ese paso.',
      'Pasá un cuchillo por el borde antes de desmoldar.',
      'Servir inmediatamente: el efecto volcán dura poco tiempo.'
    ],
    resumen: 'Ganache → freezer 6h → preparar masa → armar moldes → hornear 15 min → desmoldar y servir al instante'
  },

  {
    id: 'panqueques',
    titulo: 'Panqueques Caseros',
    categoria: 'postres',
    emoji: '🥞',
    img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '20 min',
    porciones: '4 personas',
    dificultad: 'Fácil',
    descripcion: 'Panqueques finos y dorados con vainilla. La masa sin grumos es el secreto. Perfectos para rellenar con dulce de leche, mermelada o fruta.',
    ingredientes: [
      '300 g de harina 0000',
      '2 huevos',
      '2 cucharadas de azúcar',
      '1 chorrito de esencia de vainilla',
      '600 ml de leche',
      'Manteca para la sartén'
    ],
    pasos: [
      { texto: 'En un bowl, mezclá la harina con los dos huevos.' },
      { texto: 'Agregá leche de a poco mientras seguís mezclando continuamente.' },
      { texto: 'Seguí mezclando hasta que no queden grumos en la masa.' },
      { texto: 'Añadí el azúcar y la esencia de vainilla. Mezclá bien.' },
      { texto: 'Si querés, refrigerá la mezcla unos minutos para que se asiente.' },
      { texto: 'En una sartén caliente con un poco de manteca, vertí una porción de masa y extendela de manera uniforme.' },
      { texto: 'Cociná a fuego medio hasta que los bordes se vean dorados y la superficie esté ligeramente seca. Dá vuelta con espátula y cociná el otro lado hasta dorar. Repetí con el resto.' }
    ],
    tips: [
      'La manteca en la sartén es lo que les da el sabor característico.',
      'Extender rápido después de verter la masa para que queden finos y parejos.',
      'Perfecto con dulce de leche, frutas o azúcar y limón.'
    ]
  },

  {
    id: 'flan-casero',
    titulo: 'Flan Casero con Leche Condensada',
    categoria: 'postres',
    emoji: '🍮',
    img: 'https://images.pexels.com/photos/10918153/pexels-photo-10918153.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '1 h 30 min + 4 h heladera',
    porciones: '8 porciones',
    dificultad: 'Fácil',
    descripcion: 'Flan casero con leche condensada, sin azúcar añadida al flan. La condensada aporta todo el dulzor. Caramelo seco directo en el molde, baño maría en horno.',
    ingredientes: [
      '— Caramelo —',
      '90 g de azúcar (sin agua)',
      '— Flan —',
      '1 lata de leche condensada entera',
      '4 huevos',
      '2 medidas de leche común (usando el envase de la condensada ≈ 790 g)',
      '1 cucharadita de esencia de vainilla'
    ],
    pasos: [
      { titulo: 'Caramelo', texto: 'Colocá los 90 g de azúcar directamente en el molde para flan, sin agua. Llevá al fuego bajo o directo al horno. Cuando el azúcar empiece a derretirse, girá el molde en círculos (sin cuchara) para que el caramelo cubra la base y los bordes. Retirá y reservá.' },
      { titulo: 'Mezcla del flan', texto: 'En licuadora o batidora, agregá la leche condensada, los 4 huevos, la leche común y la esencia de vainilla. Licuá 30–60 segundos hasta integrar. No espumes de más.' },
      { titulo: 'Armado', texto: 'Volcá la mezcla del flan sobre el molde ya acaramelado. Tapá bien con papel aluminio.' },
      { titulo: 'Horneado', texto: 'Llevá al horno precalentado a 180°C en baño maría (ponés el molde dentro de otra asadera con agua caliente). Cociná 1 hora. Retirá el papel aluminio y dejá 30 min más para que tome un leve dorado.' },
      { titulo: 'Enfriado y desmolde', texto: 'Dejar enfriar a temperatura ambiente. Llevá a la heladera mínimo 4 horas (mejor de un día para el otro). Tapado con aluminio. El flan está listo cuando el borde se empieza a despegar del molde al moverlo con el cuchillo.' }
    ],
    tips: [
      'No añadir azúcar al flan: la leche condensada ya lo endulza.',
      'El borde que se despega solo es la señal de que está listo para desmoldar.',
      'Reposado de un día para el otro queda mucho más firme y sabroso.'
    ]
  },

  /* ── BEBIDAS ── */

  {
    id: 'clerico',
    titulo: 'Clericó',
    categoria: 'bebidas',
    emoji: '🍷',
    img: 'https://images.pexels.com/photos/6488938/pexels-photo-6488938.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '15 min + 2 hs heladera',
    porciones: '8–10 personas',
    dificultad: 'Fácil',
    descripcion: 'El clásico argentino para el verano. Vino blanco con frutas de estación, soda y un toque de azúcar. Fresco, frutado y perfecto para compartir en cantidad.',
    ingredientes: [
      '1 botella de vino blanco seco (750 ml)',
      '1 lata de durazno en almíbar (con su jugo)',
      '1 naranja en gajos',
      '1 manzana en cubitos',
      '1 taza de frutillas en mitades',
      '200 ml de soda o agua mineral con gas',
      '2 cucharadas de azúcar (opcional)',
      'Hielo al servir'
    ],
    pasos: [
      { texto: 'En una jarra grande, colocá las frutas cortadas: naranja en gajos, manzana en cubitos y frutillas.' },
      { texto: 'Agregá el durazno en almíbar con todo su jugo.' },
      { texto: 'Vertí el vino blanco sobre las frutas. Si querés más dulzor, agregá azúcar y revolvé hasta disolver.' },
      { texto: 'Cubrí con film y llevá a la heladera mínimo 2 horas para que las frutas marinen.' },
      { texto: 'Justo antes de servir, agregá la soda fría y revolvé suave. Servir en vasos con hielo.' }
    ],
    tips: [
      'Con 2 horas en heladera está rico, de un día para el otro está brutal.',
      'Podés usar cualquier fruta de estación: kiwi, ciruela, melón, durazno fresco.',
      'Versión más festiva: reemplazá la soda por espumante brut justo al servir.'
    ]
  },

  {
    id: 'daiquiri-fresa',
    titulo: 'Daiquiri de Fresa Frozen',
    categoria: 'bebidas',
    emoji: '🍓',
    img: 'https://images.pexels.com/photos/28902889/pexels-photo-28902889.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '2 personas',
    dificultad: 'Fácil',
    descripcion: 'Frutillas, ron blanco y limón licuados con hielo hasta que quede cremoso y helado. El frozen más fácil y más rico que podés hacer en casa.',
    ingredientes: [
      '200 g de frutillas frescas o congeladas',
      '90 ml de ron blanco (3 shots)',
      'Jugo de 1 limón o lima',
      '2 cucharadas de azúcar (o almíbar simple)',
      '2 tazas de hielo'
    ],
    pasos: [
      { texto: 'Lavá y cortá las frutillas en mitades.' },
      { texto: 'En licuadora: frutillas + ron + jugo de limón + azúcar + hielo.' },
      { texto: 'Licuá a máxima velocidad hasta que quede completamente cremoso, sin trozos de hielo.' },
      { texto: 'Servir inmediatamente en copas enfriadas.' }
    ],
    tips: [
      'Con frutillas congeladas queda más cremoso y más frío.',
      'Almíbar simple (azúcar + agua hervidos iguales partes) se integra mejor que azúcar sola.',
      'Sin alcohol: reemplazá el ron por jugo de naranja o agua de coco.'
    ]
  },

  {
    id: 'pina-colada',
    titulo: 'Piña Colada',
    categoria: 'bebidas',
    emoji: '🍍',
    img: 'https://images.pexels.com/photos/27275594/pexels-photo-27275594.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '2 personas',
    dificultad: 'Fácil',
    descripcion: 'Ron, leche de coco y ananá licuados con hielo. Cremosa, tropical y helada. Con ananá fresco el sabor es incomparablemente mejor.',
    ingredientes: [
      '90 ml de ron blanco (3 shots)',
      '120 ml de leche de coco',
      '200 ml de jugo de ananá (o 150 g de ananá fresco)',
      '2 tazas de hielo',
      '1 cucharada de azúcar (opcional)'
    ],
    pasos: [
      { texto: 'Poné en la licuadora: ron + leche de coco + jugo de ananá + hielo.' },
      { texto: 'Licuá a máxima velocidad hasta que quede cremoso y sin trozos de hielo.' },
      { texto: 'Probá y ajustá dulzor con azúcar si hace falta.' },
      { texto: 'Servir en vasos altos, decorar con rodaja de ananá o coco rallado.' }
    ],
    tips: [
      'Con ananá fresco en lugar de jugo el sabor es mucho más intenso.',
      'Crema de coco (más densa que leche de coco) la hace aún más cremosa.',
      'Sin ron: igualmente deliciosa como mocktail tropical.'
    ]
  },

  {
    id: 'mojito',
    titulo: 'Mojito Clásico',
    categoria: 'bebidas',
    emoji: '🌿',
    img: 'https://images.pexels.com/photos/37662775/pexels-photo-37662775.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Ron, menta fresca, limón, azúcar y soda. El trago refrescante por excelencia. El secreto es machacar suave la menta para liberar el aroma sin amargarla.',
    ingredientes: [
      '45 ml de ron blanco (1,5 shots)',
      '8–10 hojas de menta fresca',
      'Jugo de 1 lima o limón',
      '2 cucharaditas de azúcar',
      '100 ml de soda fría',
      'Hielo'
    ],
    pasos: [
      { texto: 'En un vaso, poné el azúcar y el jugo de limón. Agregá las hojas de menta.' },
      { texto: 'Con un muddler o el dorso de una cuchara, machacá suave la menta — liberá el aceite esencial sin triturarla.' },
      { texto: 'Llenás el vaso con hielo. Agregá el ron y revolvé.' },
      { texto: 'Completá con soda fría y revolvé una vez. Decorá con más menta y rodaja de lima.' }
    ],
    tips: [
      'No machaques la menta de más: se amarga y arruina el trago.',
      'La lima da más aroma que el limón, aunque cualquiera funciona.',
      'Siempre bien cargado de hielo: más frío = mejor trago.'
    ]
  },

  {
    id: 'aperol-spritz',
    titulo: 'Aperol Spritz',
    categoria: 'bebidas',
    emoji: '🍊',
    img: 'https://images.pexels.com/photos/34621094/pexels-photo-34621094.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '3 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Aperol, espumante y soda. El aperitivo europeo que conquistó Argentina. Amargo, cítrico y refrescante. La proporción 3-2-1 es la clave.',
    ingredientes: [
      '90 ml de espumante brut o prosecco',
      '60 ml de Aperol',
      '30 ml de soda',
      'Hielo',
      '1 rodaja de naranja'
    ],
    pasos: [
      { texto: 'Llenás una copa de vino grande con hielo.' },
      { texto: 'Agregá el espumante primero.' },
      { texto: 'Sumá el Aperol y la soda.' },
      { texto: 'Revolvé suave una sola vez. Decorá con rodaja de naranja.' }
    ],
    tips: [
      'Proporción clásica: 3 partes espumante, 2 Aperol, 1 soda.',
      'Primero el espumante, después el Aperol — queda bien estratificado.',
      'Sin prosecco: cualquier espumante brut o vino blanco con gas funciona.'
    ]
  },

  {
    id: 'gin-tonic',
    titulo: 'Gin Tonic Artesanal',
    categoria: 'bebidas',
    emoji: '🍸',
    img: 'https://images.pexels.com/photos/29319320/pexels-photo-29319320.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Gin premium con agua tónica de calidad y un garnish que lo eleva. La calidad de la tónica es tan importante como la del gin.',
    ingredientes: [
      '50 ml de gin (Hendricks, Bombay, Beefeater o el que tengas)',
      '150 ml de agua tónica premium (Fever Tree, Schweppes o Q)',
      'Hielo en cubos grandes',
      'Garnish a elección: pepino, romero, piel de limón o bayas de enebro'
    ],
    pasos: [
      { texto: 'Copa balón bien fría. Llenala con hielo en cubos grandes.' },
      { texto: 'Agregá el gin.' },
      { texto: 'Vertí la tónica fría lentamente por el borde de la copa para conservar las burbujas.' },
      { texto: 'Revolvé solo dos veces con cuchara larga. Colocá el garnish y servir.' }
    ],
    tips: [
      'Copa balón + hielo en cubos grandes = menos dilución, más frío.',
      'La tónica siempre por el borde, nunca directo al hielo: conserva las burbujas.',
      'Garnish según el gin: pepino para Hendricks, limón para Beefeater, romero para gins botánicos.'
    ]
  },

  {
    id: 'margarita',
    titulo: 'Margarita Clásica',
    categoria: 'bebidas',
    emoji: '🍋',
    img: 'https://images.pexels.com/photos/4051400/pexels-photo-4051400.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '5 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Tequila, Cointreau y jugo de lima con borde de sal. El cóctel más famoso de México. Shakeado bien frío, directo en copa escararchada.',
    ingredientes: [
      '50 ml de tequila blanco',
      '25 ml de Cointreau o triple sec',
      'Jugo de 1 lima (o limón)',
      'Sal gruesa para el borde',
      'Hielo'
    ],
    pasos: [
      { texto: 'Pasá un gajo de lima por el borde de la copa. Sumergí el borde en sal gruesa para el rimming.' },
      { texto: 'En coctelera con hielo: tequila + Cointreau + jugo de lima.' },
      { texto: 'Shakeá fuerte 10–15 segundos hasta que la coctelera esté muy fría.' },
      { texto: 'Colá sobre copa con hielo. Decorá con rodaja de lima.' }
    ],
    tips: [
      'Lima da mejor resultado que limón: más aromática y menos ácida.',
      'Tequila blanco para la clásica; reposado da un sabor más complejo.',
      'Versión frozen: licuá todo junto con 2 tazas de hielo.'
    ]
  },

  {
    id: 'tequila-sunrise',
    titulo: 'Tequila Sunrise',
    categoria: 'bebidas',
    emoji: '🌅',
    img: 'https://images.pexels.com/photos/8679426/pexels-photo-8679426.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '3 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Tequila con jugo de naranja y granadina que se hunde formando el degradé rojo-naranja que le da el nombre. Visual, dulce y siempre impresiona.',
    ingredientes: [
      '50 ml de tequila',
      '120 ml de jugo de naranja natural',
      '15 ml de granadina',
      'Hielo',
      'Rodaja de naranja y cereza para decorar'
    ],
    pasos: [
      { texto: 'Llenás el vaso con hielo.' },
      { texto: 'Agregá el tequila y el jugo de naranja. Revolvé.' },
      { texto: 'Con una cuchara invertida apoyada en el borde, vertí la granadina lentamente para que caiga al fondo por su peso.' },
      { texto: 'No revolver. Decorá con naranja y cereza. El degradé es la firma del trago.' }
    ],
    tips: [
      'La granadina al final sin revolver: ese gradiente es lo que le da el nombre.',
      'Jugo natural de naranja es incomparablemente mejor que en caja.',
      'Con vodka en lugar de tequila también queda perfecto.'
    ]
  },

  {
    id: 'moscow-mule',
    titulo: 'Moscow Mule',
    categoria: 'bebidas',
    emoji: '🫙',
    img: 'https://images.pexels.com/photos/16976669/pexels-photo-16976669.jpeg?auto=compress&cs=tinysrgb&w=980&h=500&fit=crop',
    tiempo: '3 min',
    porciones: '1 persona',
    dificultad: 'Fácil',
    descripcion: 'Vodka, ginger beer y lima. El picante del jengibre y el cítrico de la lima hacen que este trago sea imposible de tomar despacio.',
    ingredientes: [
      '50 ml de vodka',
      '150 ml de ginger beer (o ginger ale)',
      'Jugo de ½ lima',
      'Hielo',
      'Rodaja de lima y menta para decorar'
    ],
    pasos: [
      { texto: 'Llenás el vaso o taza con mucho hielo.' },
      { texto: 'Agregá el vodka y el jugo de lima.' },
      { texto: 'Completá con ginger beer bien fría. Revolvé suave.' },
      { texto: 'Decorá con rodaja de lima y ramita de menta.' }
    ],
    tips: [
      'Ginger beer tiene más picante que ginger ale — cualquiera funciona, pero ginger beer es la original.',
      'La taza de cobre es la presentación clásica pero con vaso alto y mucho hielo también va.',
      'Variantes: con tequila (Mexican Mule) o bourbon (Kentucky Mule).'
    ]
  }

];

/* ──────────────────────────────────────────────
   2. CATEGORY CONFIG
────────────────────────────────────────────── */
const CAT = {
  masas:        { label: 'Masas & Pizzas', color: '#C98C20' },
  carnes:       { label: 'Carnes',         color: '#A83232' },
  pastas:       { label: 'Pastas',         color: '#B8881A' },
  guarniciones: { label: 'Guarniciones',   color: '#3A7A46' },
  postres:      { label: 'Postres',        color: '#7A4A9A' },
  basicos:      { label: 'Básicos',        color: '#2A6A7A' },
  salsas:       { label: 'Salsas',         color: '#C44B1A' },
  bebidas:      { label: 'Bebidas',        color: '#1A6B8A' },
  'mis-recetas': { label: 'Mis Recetas',   color: '#7A6040' },
};

const DIF_CLASS = { 'Fácil': 'chip-facil', 'Media': 'chip-media', 'Avanzada': 'chip-avanzada' };
const DIF_ICON  = { 'Fácil': '🟢', 'Media': '🟡', 'Avanzada': '🔴' };

/* ──────────────────────────────────────────────
   3. DOM REFS
────────────────────────────────────────────── */
const gridEl      = document.getElementById('grid');
const emptyEl     = document.getElementById('empty');
const emptyReset  = document.getElementById('empty-reset');
const resultsEl   = document.getElementById('results-info');
const searchEl    = document.getElementById('search');
const searchClear = document.getElementById('search-clear');
const overlayEl   = document.getElementById('overlay');
const modalImg    = document.getElementById('modal-img');
const modalImgOverlay = document.getElementById('modal-img-overlay');
const modalImgContent = document.getElementById('modal-img-content');
const modalBody   = document.getElementById('modal-body');
const modalClose  = document.getElementById('modal-close');
const catBtns     = document.querySelectorAll('.cat-btn');

/* ──────────────────────────────────────────────
   4. STATE + CUSTOM RECIPES (localStorage)
────────────────────────────────────────────── */
let currentCat    = 'todas';
let currentSearch = '';
let scrollTriggers = [];

const CUSTOM_KEY = 'recetas_custom_v1';
let CUSTOM = (() => {
  try { return JSON.parse(localStorage.getItem(CUSTOM_KEY) || '[]'); } catch { return []; }
})();

function persistCustom() {
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(CUSTOM));
}

/* ── Favorites ── */
const FAV_KEY = 'recetas_favoritas';
let FAVORITES = new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]'));

function persistFavorites() {
  localStorage.setItem(FAV_KEY, JSON.stringify([...FAVORITES]));
}

function toggleFav(id, btn) {
  if (FAVORITES.has(id)) {
    FAVORITES.delete(id);
    btn.classList.remove('is-fav');
    btn.setAttribute('aria-label', 'Agregar a favoritas');
  } else {
    FAVORITES.add(id);
    btn.classList.add('is-fav');
    btn.setAttribute('aria-label', 'Quitar de favoritas');
  }
  persistFavorites();
  if (currentCat === 'favoritas') render();
}

/* ── Serving scaler state ── */
let modalReceta   = null;
let scalerBase    = 1;
let scalerCurrent = 1;

/* ── Scaler helpers ── */
function extractPorcNum(porciones) {
  const m = (porciones || '').match(/\d+/);
  return m ? parseInt(m[0]) : null;
}

function formatScaledNum(n) {
  if (n <= 0) return '0';
  n = Math.round(n * 100) / 100;
  if (n === Math.floor(n)) return String(n);
  const whole = Math.floor(n);
  const frac  = n - whole;
  const fracs = [[1,4,'¼'],[1,3,'⅓'],[1,2,'½'],[2,3,'⅔'],[3,4,'¾']];
  for (const [a, b, sym] of fracs) {
    if (Math.abs(frac - a/b) < 0.07) return whole > 0 ? `${whole}${sym}` : sym;
  }
  return n.toFixed(1).replace(/\.0$/, '');
}

function scaleIngredient(ing, ratio) {
  if (ratio === 1) return ing;
  const m = ing.match(/^(\d+(?:[,\.]\d+)?(?:\/\d+)?)/);
  if (!m) return ing;
  const raw = m[1];
  let value = raw.includes('/') ?
    parseInt(raw) / parseInt(raw.split('/')[1]) :
    parseFloat(raw.replace(',', '.'));
  return formatScaledNum(value * ratio) + ing.slice(raw.length);
}

function buildIngHTML(receta, ratio) {
  return receta.ingredientes.map(ing => {
    if (ing.startsWith('—')) {
      return `<li class="ing-separator">${ing.replace(/^—\s*/, '').replace(/\s*—$/, '')}</li>`;
    }
    const scaled   = scaleIngredient(ing, ratio);
    const changed  = scaled !== ing;
    return `<li class="ing-item">
        <div class="ing-box">✓</div>
        <span class="ing-text${changed ? ' ing-scaled' : ''}">${scaled}</span>
      </li>`;
  }).join('');
}

function updateIngredientes(ratio) {
  const list = document.getElementById('modal-ing-list');
  if (!list || !modalReceta) return;
  list.innerHTML = buildIngHTML(modalReceta, ratio);
  list.querySelectorAll('.ing-item').forEach(item =>
    item.addEventListener('click', () => item.classList.toggle('done'))
  );
}

/* ──────────────────────────────────────────────
   5. FILTER
────────────────────────────────────────────── */
function filtrar() {
  const q = currentSearch.toLowerCase().trim();
  return [...RECETAS, ...CUSTOM].filter(r => {
    let matchCat;
    if      (currentCat === 'todas')     matchCat = true;
    else if (currentCat === 'favoritas') matchCat = FAVORITES.has(r.id);
    else                                 matchCat = r.categoria === currentCat;
    const matchQ = !q
      || r.titulo.toLowerCase().includes(q)
      || (r.descripcion || '').toLowerCase().includes(q)
      || r.ingredientes.some(i => i.toLowerCase().includes(q));
    return matchCat && matchQ;
  });
}

/* ──────────────────────────────────────────────
   6. RENDER GRID
────────────────────────────────────────────── */
function render() {
  // Kill existing ScrollTriggers
  scrollTriggers.forEach(t => t.kill());
  scrollTriggers = [];

  const lista = filtrar();

  // Results info
  if (currentSearch.trim()) {
    resultsEl.textContent = lista.length > 0
      ? `${lista.length} resultado${lista.length !== 1 ? 's' : ''} para "${currentSearch.trim()}"`
      : '';
  } else {
    resultsEl.textContent = `${lista.length} receta${lista.length !== 1 ? 's' : ''}`;
  }

  emptyEl.hidden = lista.length > 0;

  // Build cards HTML
  gridEl.innerHTML = lista.map(r => {
    const cat    = CAT[r.categoria] || {};
    const dCls   = DIF_CLASS[r.dificultad] || 'chip-facil';
    const dIco   = DIF_ICON[r.dificultad] || '🟢';
    return `
      <article
        class="card"
        data-id="${r.id}"
        tabindex="0"
        role="button"
        aria-label="Ver receta: ${r.titulo}"
      >
        <div class="card-img" data-cat="${r.categoria}">
          <img
            src="${r.img}"
            alt="${r.titulo}"
            loading="lazy"
            onerror="this.style.opacity=0; this.nextElementSibling.style.opacity=1;"
          />
          <div class="card-img-overlay"></div>
          <div class="card-img-fallback" style="background:linear-gradient(135deg, var(--${r.categoria.replace('-','_')}, #444), #111)">
            <span style="font-size:4rem">${r.emoji}</span>
          </div>
          <span class="card-cat-badge" style="background:${cat.color || '#555'};">${cat.label || r.categoria}</span>
          ${r.isCustom ? `<button class="card-edit-btn" onclick="event.stopPropagation();abrirEditor('${r.id}')" aria-label="Editar receta">✏️</button>` : ''}
          <button class="card-fav-btn${FAVORITES.has(r.id) ? ' is-fav' : ''}" onclick="event.stopPropagation();toggleFav('${r.id}',this)" aria-label="${FAVORITES.has(r.id) ? 'Quitar de favoritas' : 'Agregar a favoritas'}">★</button>
        </div>
        <div class="card-body">
          <h2 class="card-titulo">${r.titulo}</h2>
          <p class="card-desc">${r.descripcion}</p>
        </div>
        <div class="card-meta">
          <span class="chip chip-tiempo">⏱ ${r.tiempo}</span>
          <span class="chip chip-porciones">🍽 ${r.porciones}</span>
          <span class="chip ${dCls}">${dIco} ${r.dificultad}</span>
        </div>
      </article>
    `;
  }).join('');

  // Events on cards
  gridEl.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => abrirModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(card.dataset.id); }
    });
  });

  // GSAP scroll-reveal for cards (if GSAP loaded)
  if (typeof gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.utils.toArray('.card').forEach((card, i) => {
      const trigger = window.ScrollTrigger.create({
        trigger: card,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.fromTo(card,
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, ease: 'power3.out', delay: (i % 4) * 0.07 }
          );
        }
      });
      scrollTriggers.push(trigger);
    });
  }
}

/* ──────────────────────────────────────────────
   7. OPEN MODAL
────────────────────────────────────────────── */
function abrirModal(id) {
  const r = [...RECETAS, ...CUSTOM].find(rec => rec.id === id);
  if (!r) return;

  history.replaceState(null, '', `#${id}`);

  // Reset scaler state for this recipe
  modalReceta   = r;
  scalerBase    = extractPorcNum(r.porciones) || 1;
  scalerCurrent = scalerBase;

  const cat  = CAT[r.categoria] || {};
  const dIco = DIF_ICON[r.dificultad] || '🟢';

  // Hero image
  modalImg.src = r.img;
  modalImg.alt = r.titulo;
  modalImg.style.opacity = '1';
  modalImg.onerror = () => {
    modalImg.style.opacity = '0';
    document.getElementById('modal-img-wrap').style.background =
      `linear-gradient(135deg, ${cat.color || '#333'}, #111)`;
  };

  // Gradient overlay tinted with category color
  modalImgOverlay.style.background = `
    linear-gradient(to bottom,
      rgba(8,20,12,.15) 0%,
      rgba(8,20,12,.0) 25%,
      ${hexToRgba(cat.color || '#0D1F14', .8)} 100%)
  `;

  // Image content
  modalImgContent.innerHTML = `
    <span class="modal-cat-badge" style="background:${cat.color || '#555'};border-color:${cat.color || '#555'}">
      ${cat.label || r.categoria}
    </span>
    <h2 class="modal-titulo">${r.titulo}</h2>
    <div class="modal-chips-row">
      <span class="modal-chip">⏱ ${r.tiempo}</span>
      <span class="modal-chip">🍽 ${r.porciones}</span>
      <span class="modal-chip">${dIco} ${r.dificultad}</span>
    </div>
    <div class="modal-actions-row">
      <button class="modal-print-btn" onclick="window.print()" aria-label="Imprimir receta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
        Imprimir
      </button>
      <button class="modal-share-btn" onclick="compartirReceta('${r.id}','${r.titulo.replace(/'/g,"\\'")}','${(r.descripcion||'').replace(/'/g,"\\'").slice(0,80)}')" aria-label="Compartir receta">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Compartir
      </button>
    </div>
  `;

  // Steps HTML
  const pasosHTML = r.pasos.map((p, i) => `
    <div class="paso-item">
      <div class="paso-num">${i + 1}</div>
      <div class="paso-inner">
        ${p.titulo ? `<p class="paso-subtitulo">${p.titulo}</p>` : ''}
        <p class="paso-texto">${p.texto}</p>
      </div>
    </div>
  `).join('');

  const tipsHTML = r.tips?.length ? `
    <div class="tips-box">
      <span class="box-label">Consejos</span>
      <ul>${r.tips.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>` : '';

  const erroresHTML = r.errores?.length ? `
    <div class="errores-box">
      <span class="box-label">Errores que tenés que evitar</span>
      <ul>${r.errores.map(e => `<li>${e}</li>`).join('')}</ul>
    </div>` : '';

  const resumenHTML = r.resumen ? `
    <div class="resumen-box">
      <strong>Secuencia:</strong>${r.resumen}
    </div>` : '';

  // Build ingredient HTML using scaler helper
  const ingHTML = buildIngHTML(r, 1);

  // Modal body
  modalBody.innerHTML = `
    <p class="modal-desc">${r.descripcion}</p>
    ${scalerBase ? `
    <div class="scaler-row" id="scaler-row">
      <span class="scaler-label">🍽 Porciones</span>
      <div class="scaler-ctrl">
        <button class="scaler-btn" id="scaler-minus" aria-label="Menos">−</button>
        <span class="scaler-val" id="scaler-val">${scalerCurrent}</span>
        <button class="scaler-btn" id="scaler-plus" aria-label="Más">+</button>
      </div>
      <span class="scaler-hint" id="scaler-hint">Base: ${scalerBase} ${r.porciones.replace(/\d+\s*/, '')}</span>
    </div>` : ''}
    <div class="modal-cols">
      <div class="modal-ing">
        <span class="section-label">Ingredientes</span>
        <ul class="ing-list" id="modal-ing-list">${ingHTML}</ul>
      </div>
      <div class="modal-pasos">
        <span class="section-label">Preparación paso a paso</span>
        ${pasosHTML}
        ${tipsHTML}
        ${erroresHTML}
        ${resumenHTML}
      </div>
    </div>
  `;

  // Ingredient toggle
  modalBody.querySelectorAll('.ing-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('done'));
  });

  // Scaler events
  if (scalerBase) {
    const minusEl = document.getElementById('scaler-minus');
    const plusEl  = document.getElementById('scaler-plus');
    const valEl   = document.getElementById('scaler-val');
    const hintEl  = document.getElementById('scaler-hint');
    const rowEl   = document.getElementById('scaler-row');
    const suffix  = r.porciones.replace(/\d+\s*/, '').trim();

    minusEl.addEventListener('click', () => {
      if (scalerCurrent <= 1) return;
      scalerCurrent--;
      valEl.textContent = scalerCurrent;
      const ratio = scalerCurrent / scalerBase;
      updateIngredientes(ratio);
      const changed = scalerCurrent !== scalerBase;
      hintEl.textContent = changed
        ? `Original: ${scalerBase} ${suffix} (×${(ratio % 1 === 0 ? ratio : ratio.toFixed(2))})`
        : `Base: ${scalerBase} ${suffix}`;
      rowEl.classList.toggle('scaler-changed', changed);
    });

    plusEl.addEventListener('click', () => {
      if (scalerCurrent >= 24) return;
      scalerCurrent++;
      valEl.textContent = scalerCurrent;
      const ratio = scalerCurrent / scalerBase;
      updateIngredientes(ratio);
      const changed = scalerCurrent !== scalerBase;
      hintEl.textContent = changed
        ? `Original: ${scalerBase} ${suffix} (×${(ratio % 1 === 0 ? ratio : ratio.toFixed(2))})`
        : `Base: ${scalerBase} ${suffix}`;
      rowEl.classList.toggle('scaler-changed', changed);
    });
  }

  // Scroll modal to top
  document.getElementById('modal').scrollTop = 0;

  overlayEl.classList.add('open');
  document.body.style.overflow = 'hidden';

  setTimeout(() => modalClose.focus(), 60);
}

/* ──────────────────────────────────────────────
   8. CLOSE MODAL
────────────────────────────────────────────── */
function cerrarModal() {
  overlayEl.classList.remove('open');
  document.body.style.overflow = '';
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

function compartirReceta(id, titulo, descripcion) {
  const url = `${window.location.origin}${window.location.pathname}#${id}`;
  if (navigator.share) {
    navigator.share({ title: titulo, text: descripcion || `Mirá esta receta: ${titulo}`, url });
  } else {
    navigator.clipboard.writeText(url).then(() => mostrarToast('¡Link copiado!')).catch(() => mostrarToast('Copiá el link: ' + url));
  }
}

function mostrarToast(msg) {
  let toast = document.getElementById('share-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'share-toast';
    toast.className = 'share-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('visible'), 2500);
}

/* ──────────────────────────────────────────────
   9. UTILITY
────────────────────────────────────────────── */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ──────────────────────────────────────────────
   10. EVENTS
────────────────────────────────────────────── */
// Search
searchEl.addEventListener('input', () => {
  currentSearch = searchEl.value;
  searchClear.classList.toggle('visible', currentSearch.length > 0);
  render();
});

searchClear.addEventListener('click', () => {
  searchEl.value = '';
  currentSearch = '';
  searchClear.classList.remove('visible');
  searchEl.focus();
  render();
});

// Empty reset
emptyReset.addEventListener('click', () => {
  searchEl.value = '';
  currentSearch = '';
  currentCat = 'todas';
  searchClear.classList.remove('visible');
  catBtns.forEach(b => b.classList.remove('active'));
  catBtns[0].classList.add('active');
  render();
});

// Category buttons
catBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    catBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    render();
  });
});

// Modal close
modalClose.addEventListener('click', cerrarModal);
overlayEl.addEventListener('click', e => { if (e.target === overlayEl) cerrarModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') cerrarModal(); });

/* ──────────────────────────────────────────────
   11. GSAP HERO ANIMATIONS
────────────────────────────────────────────── */
function initHeroAnimations() {
  if (typeof gsap === 'undefined') {
    // Fallback: show everything if GSAP doesn't load
    ['#hero-alfredo','#hero-h1','#hero-sub','#hero-stats','#hero-search','#hero-scroll'].forEach(sel => {
      const el = document.querySelector(sel);
      if (el) el.style.opacity = '1';
    });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo('#hero-alfredo', { opacity: 0, y: 20, scale: 0.92 }, { opacity: 1, y: 0, scale: 1, duration: .90 }, .1)
    .fromTo('#hero-h1',      { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: .90 }, .42)
    .fromTo('#hero-sub',     { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .75 }, .66)
    .fromTo('#hero-stats',   { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .65 }, .80)
    .fromTo('#hero-search',  { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: .75 }, .92)
    .fromTo('#hero-scroll',  { opacity: 0 },         { opacity: 1, duration: .6  }, 1.35);
}

/* ──────────────────────────────────────────────
   12. CATEGORY NAV SCROLL INDICATOR
────────────────────────────────────────────── */
function initNavShadow() {
  const nav = document.getElementById('cats-bar');
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 80
      ? '0 2px 16px rgba(13,31,20,.10)'
      : 'none';
  }, { passive: true });
}

/* ──────────────────────────────────────────────
   13. INIT
────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initNavShadow();
  render();
  const hash = window.location.hash.slice(1);
  if (hash) setTimeout(() => abrirModal(hash), 400);
});

// Fallback if DOMContentLoaded already fired
if (document.readyState !== 'loading') {
  initHeroAnimations();
  initNavShadow();
  render();
  const hash = window.location.hash.slice(1);
  if (hash) setTimeout(() => abrirModal(hash), 400);
}

/* ══════════════════════════════════════════════
   MIS RECETAS — editor de recetas propias
══════════════════════════════════════════════ */

const editorOverlayEl = document.getElementById('editor-overlay');
const editorFormEl    = document.getElementById('editor-form');
const editorHeadEl    = document.getElementById('editor-heading');
const editorDeleteEl  = document.getElementById('ef-delete');
const fabAddEl        = document.getElementById('fab-add');

let editorId = null;

/* ── Escape HTML helper ── */
function eHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ── Add a row to a dynamic list ── */
function addListItem(listId, value, isTextarea) {
  const list = document.getElementById(listId);
  const item = document.createElement('div');
  item.className = 'editor-list-item';
  const val = eHtml(value);

  if (isTextarea) {
    const num = list.children.length + 1;
    item.innerHTML = `
      <span class="editor-step-num">${num}</span>
      <textarea class="editor-textarea" rows="2" placeholder="Describí el paso...">${val}</textarea>
      <button type="button" class="editor-remove-btn" aria-label="Eliminar paso">×</button>
    `;
    item.querySelector('.editor-remove-btn').addEventListener('click', () => {
      item.remove();
      updateStepNums();
    });
  } else {
    const ph = listId === 'ef-ing-list' ? 'Ej: 200 g de harina' : 'Ej: Se puede hacer un día antes';
    item.innerHTML = `
      <input class="editor-input" type="text" value="${val}" placeholder="${ph}">
      <button type="button" class="editor-remove-btn" aria-label="Eliminar">×</button>
    `;
    item.querySelector('.editor-remove-btn').addEventListener('click', () => item.remove());
  }

  list.appendChild(item);
}

function updateStepNums() {
  document.querySelectorAll('#ef-paso-list .editor-step-num').forEach((el, i) => {
    el.textContent = i + 1;
  });
}

function resetEditorForm() {
  ['ef-emoji','ef-titulo','ef-tiempo','ef-porciones','ef-descripcion','ef-img'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('ef-dificultad').value = 'Fácil';
  ['ef-ing-list','ef-paso-list','ef-tip-list'].forEach(id => {
    document.getElementById(id).innerHTML = '';
  });
}

/* ── Open editor ── */
function abrirEditor(id) {
  editorId = id || null;
  editorHeadEl.textContent = id ? 'Editar Receta' : 'Nueva Receta';
  editorDeleteEl.hidden = !id;
  resetEditorForm();

  if (id) {
    const r = CUSTOM.find(c => c.id === id);
    if (r) {
      document.getElementById('ef-emoji').value       = r.emoji        || '';
      document.getElementById('ef-titulo').value      = r.titulo       || '';
      document.getElementById('ef-tiempo').value      = r.tiempo !== '—' ? (r.tiempo || '') : '';
      document.getElementById('ef-porciones').value   = r.porciones !== '—' ? (r.porciones || '') : '';
      document.getElementById('ef-dificultad').value  = r.dificultad   || 'Fácil';
      document.getElementById('ef-descripcion').value = r.descripcion  || '';
      document.getElementById('ef-img').value         = r.img          || '';
      (r.ingredientes || []).forEach(v => addListItem('ef-ing-list', v, false));
      (r.pasos        || []).forEach(p => addListItem('ef-paso-list', p.texto || p, true));
      (r.tips         || []).forEach(v => addListItem('ef-tip-list', v, false));
    }
  } else {
    addListItem('ef-ing-list', '', false);
    addListItem('ef-ing-list', '', false);
    addListItem('ef-ing-list', '', false);
    addListItem('ef-paso-list', '', true);
    addListItem('ef-paso-list', '', true);
  }

  editorOverlayEl.classList.add('open');
  editorOverlayEl.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('ef-titulo').focus(), 80);
}

/* ── Close editor ── */
function cerrarEditor() {
  editorOverlayEl.classList.remove('open');
  editorOverlayEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ── Save recipe ── */
editorFormEl.addEventListener('submit', e => {
  e.preventDefault();

  const titulo = document.getElementById('ef-titulo').value.trim();
  if (!titulo) {
    const input = document.getElementById('ef-titulo');
    input.focus();
    input.style.borderColor = 'var(--accent)';
    setTimeout(() => { input.style.borderColor = ''; }, 2000);
    return;
  }

  const ingredientes = [...document.querySelectorAll('#ef-ing-list input')]
    .map(el => el.value.trim()).filter(Boolean);

  const pasos = [...document.querySelectorAll('#ef-paso-list textarea')]
    .map(el => ({ texto: el.value.trim() })).filter(p => p.texto);

  const tips = [...document.querySelectorAll('#ef-tip-list input')]
    .map(el => el.value.trim()).filter(Boolean);

  const receta = {
    id:          editorId || `custom-${Date.now()}`,
    isCustom:    true,
    titulo,
    categoria:   'mis-recetas',
    emoji:       document.getElementById('ef-emoji').value.trim() || '🍽',
    img:         document.getElementById('ef-img').value.trim(),
    tiempo:      document.getElementById('ef-tiempo').value.trim()    || '—',
    porciones:   document.getElementById('ef-porciones').value.trim() || '—',
    dificultad:  document.getElementById('ef-dificultad').value,
    descripcion: document.getElementById('ef-descripcion').value.trim(),
    ingredientes: ingredientes.length ? ingredientes : ['Sin ingredientes'],
    pasos:        pasos.length ? pasos : [{ texto: 'Sin pasos.' }],
    tips,
  };

  if (editorId) {
    const idx = CUSTOM.findIndex(c => c.id === editorId);
    if (idx >= 0) CUSTOM[idx] = receta; else CUSTOM.push(receta);
  } else {
    CUSTOM.push(receta);
  }

  persistCustom();
  cerrarEditor();

  // Switch to "Mis Recetas" tab so user sees the new/edited recipe
  catBtns.forEach(b => b.classList.remove('active'));
  const miBtn = document.querySelector('[data-cat="mis-recetas"]');
  if (miBtn) miBtn.classList.add('active');
  currentCat = 'mis-recetas';
  render();
});

/* ── Delete recipe ── */
editorDeleteEl.addEventListener('click', () => {
  if (!editorId) return;
  if (!confirm('¿Eliminar esta receta? Esta acción no se puede deshacer.')) return;
  CUSTOM = CUSTOM.filter(c => c.id !== editorId);
  persistCustom();
  cerrarEditor();
  currentCat = 'mis-recetas';
  render();
});

/* ── Add row buttons ── */
document.getElementById('ef-ing-add').addEventListener('click',  () => addListItem('ef-ing-list',  '', false));
document.getElementById('ef-paso-add').addEventListener('click', () => addListItem('ef-paso-list', '', true));
document.getElementById('ef-tip-add').addEventListener('click',  () => addListItem('ef-tip-list',  '', false));

/* ── FAB opens editor ── */
fabAddEl.addEventListener('click', () => abrirEditor(null));

/* ── Close editor ── */
document.getElementById('editor-close').addEventListener('click', cerrarEditor);
editorOverlayEl.addEventListener('click', e => { if (e.target === editorOverlayEl) cerrarEditor(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && editorOverlayEl.classList.contains('open')) cerrarEditor();
});

/* ══════════════════════════════════════════════
   DARK MODE TOGGLE
══════════════════════════════════════════════ */
const THEME_KEY = 'recetas_theme';
const themeToggleEl = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Default a modo oscuro — el inline script en <head> ya lo aplicó,
// aquí sólo sincronizamos el estado si fuera necesario
if (!localStorage.getItem(THEME_KEY)) {
  setTheme('dark');
}

themeToggleEl.addEventListener('click', () => {
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

