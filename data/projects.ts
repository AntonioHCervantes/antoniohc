import type { Project, ProjectDetail } from '@/lib/types/project';

export const projectDetails: ProjectDetail[] = [
  {
    slug: 'check-planner',
    title: 'CheckPlanner',
    description:
      'Planificador personal gratuito y open source para organizar tareas, priorizar el día y trabajar en local sin registro.',
    summary:
      'Planificador personal rápido y sin fricción, gratis y open source: sin registro y con datos en local. Organiza tu backlog en "Mis tareas" y planifica el día en "Mi día", con etiquetas, prioridades, tarea principal, timer de foco y avisos de jornada. Incluye exportación/importación y PWA instalable para trabajar offline.',
    imageUrl: '/images/checkplanner.png',
    heroImage: {
      src: '/images/checkplanner.png',
      alt: 'CheckPlanner, organiza tus tareas y mejora tu productividad',
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'dnd-kit', 'PWA'],
    liveUrl: 'https://checkplanner.com',
    liveCta: 'Abrir CheckPlanner',
    content: [
      {
        title: 'Qué es CheckPlanner',
        body: 'Planificador personal rápido y sin fricción para ganar claridad. Es gratis, open source y no requiere registro; todo se guarda en tu dispositivo y puedes empezar en segundos con plantillas demo.',
      },
      {
        title: 'Dos vistas para planificar',
        body: '"Mis tareas" concentra el backlog de ideas y tareas futuras; "Mi día" es el tablero para decidir qué harás hoy y en qué orden, moviendo tareas al día con un clic.',
      },
      {
        title: 'Foco y hábitos productivos',
        body: 'Etiqueta y prioriza (baja, media, alta), reordena por drag o teclado y marca tu tarea principal. Cuando algo está En progreso, activa un timer de foco y configura avisos de jornada, como el recordatorio 30 minutos antes de terminar.',
      },
      {
        title: 'Privacidad, portabilidad y offline',
        body: 'Local-first sin servidores: exporta e importa tus datos para backups o cambio de dispositivo. Además puedes instalar la PWA y trabajar offline para reducir distracciones.',
      },
      {
        title: 'Integración con VS Code + Copilot',
        body: 'Si trabajas en desarrollo, puedes activar la integración con VS Code: al poner una tarea En progreso aparece "Abrir en VS Code", que abre VS Code y lanza un chat con GitHub Copilot con el prompt listo.',
      },
    ],
    results: [
      {
        label: 'Modelo',
        value: 'Gratis + open source',
        description: 'Sin registro; datos en local para empezar rápido y sin cuentas.',
      },
      {
        label: 'Plan diario',
        value: 'Mis tareas + Mi día',
        description: 'Backlog claro y selección diaria con etiquetas, prioridades y tarea principal.',
      },
      {
        label: 'Foco',
        value: 'Timer + avisos',
        description: 'Bloques de concentración al poner una tarea En progreso y recordatorio antes de terminar la jornada.',
      },
    ],
  },
  {
    slug: 'keep-calm-keep-working',
    title: 'Keep Calm Keep Working',
    description:
      'Cree esta marca para diseñar y dar forma a ideas de productos interesantes para home office que fueran útiles para personas que trabajan con ordenador desde casa.',
    summary:
      'Sin duda esta es una de mis aventuras más locas. Me propuse crear un producto desde cero y ponerlo a la venta en Amazon. Creé la marca Keep Calm Keep Working para lanzar un pack de pelotas antiestrés diseñado para profesionales que trabajan desde casa. Gestioné todo el ciclo: diseño del producto, auditoría legal de certificados necesarios para su venta, fabricación en China, certificación en laboratorio, importación a España, gestión y almacenado de stock y venta en Amazon hasta agotar existencias.',
    imageUrl: '/images/keep-calm-keep-working.png',
    heroImage: {
      src: '/images/keep-calm-keep-working.png',
      alt: 'Mockup del pack Keep Calm Keep Working de pelotas antiestrés premium',
    },
    technologies: ['Branding', 'E-commerce', 'Amazon', 'Supply chain', 'WordPress'],
    liveUrl: 'https://keepcalmkeepworking.com/es/pack-pelotas-antiestres-premium/',
    liveCta: 'Ver producto',
    cta: 'Ver más',
    content: [
      {
        title: 'Origen y objetivo',
        body: 'El objetivo principal era aprender todo el ciclo del comercio internacional en primera persona. Además quería crear un accesorio que ayudara a mantener la calma durante largas jornadas frente al ordenador, así que diseñé un pack premium de pelotas antiestrés para home office y regalos corporativos.',
      },
      {
        title: 'Producción e importación',
        body: 'Localicé una fábrica en China, definí calidades y packaging y coordiné la logística internacional hasta España, gestionando control de calidad, trámites aduaneros y un millón de cosas que aprendí por el camino.',
      },
      {
        title: 'Lanzamiento y ventas',
        body: 'Construí la landing, publiqué el producto en Amazon con fotos y copies optimizados y vendí todo el lote inicial. Aprendí a fondo sobre comercio internacional y marketplaces.',
      },
    ],
    results: [
      {
        label: 'Ventas',
        value: 'Stock agotado',
        description: 'El primer lote se vendió por completo en Amazon tras el lanzamiento del producto. El producto fue bien acogido, aunque fue dificil posicionarlo en las palabras de búsqueda claves debido a la competencia, tuve que gestionar todo el proceso de publicidad en la plataforma para posicionarlo.',
      },
      {
        label: 'Cadena de valor',
        value: 'Fabricación a entrega',
        description: 'Negociación con fábrica china, control de calidad, certificado en laboratorio, producción supervisada, importación en Barco y distribución en España. Una auténtica aventura con mil problemas por el camino que tuve que ir resolviendo.',
      },
      {
        label: 'Aprendizaje',
        value: 'Ecommerce integral',
        description: 'Experiencia end-to-end: branding, landing, optimización de listings y gestión logística internacional.',
      },
    ],
  },
  {
    slug: 'gift-ideas-finder',
    title: 'Gift Ideas Finder',
    description:
      'GPT dentro de ChatGPT que actúa como personal shopper: pide datos del destinatario, gustos y presupuesto para recomendar regalos en Amazon.',
    summary:
      'Asistente conversacional conectado a la API de Productos de Amazon que guía al usuario por mercado, perfil del destinatario y presupuesto para devolver sugerencias reales con enlaces listos para comprar.',
    imageUrl: '/images/gift-ideas-finder.png',
    heroImage: {
      src: '/images/gift-ideas-finder.png',
      alt: 'Ilustración de un asistente de regalos mostrando ideas de Amazon en tarjetas de producto',
    },
    technologies: [
      'GPTs',
      'OpenAI Actions',
      'Amazon Product Advertising API',
      'TypeScript',
      'Next.js',
    ],
    liveUrl:
      'https://chatgpt.com/g/g-6797129ba91c819186e71417942cb9d2-gift-ideas-finder-birthday-gifts',
    liveCta: 'Probar en ChatGPT',
    cta: 'Ver más',
    content: [
      {
        title: 'Rol y objetivo',
        body:
          'Creé un GPT propio dentro de ChatGPT para actuar como personal shopper de regalos. El objetivo: reducir la fricción de buscar ideas y entregar opciones comprables sin salir del chat.',
      },
      {
        title: 'Flujo conversacional guiado',
        body:
          'El asistente pregunta primero en qué marketplace de Amazon comprar (ES, US, UK, DE, FR, IT, MX), luego quién recibe el regalo, sus gustos, ocasión y rango de presupuesto. Con esa información devuelve una lista breve de recomendaciones con descripciones claras y enlaces reales.',
      },
      {
        title: 'Integración técnica',
        body:
          'Conecté el GPT a la API de Productos de Amazon mediante una Action con autenticación propia para cada mercado. El sistema mapea respuestas a consultas parametrizadas (categoría, precio, valoraciones) y controla moneda y disponibilidad antes de mostrar el enlace acortado al usuario.',
      },
    ],
    results: [
      {
        label: 'Mercados',
        value: '7 Amazon locales',
        description: 'Compatible con ES, US, UK, DE, FR, IT y MX para devolver precios y disponibilidad correctos.',
      },
      {
        label: 'Recomendaciones',
        value: 'Top 5-7',
        description: 'Entrega una lista corta de ideas filtradas por gustos y presupuesto en menos de 10 segundos.',
      },
      {
        label: 'Enlaces',
        value: '100% comprobados',
        description: 'Cada sugerencia llega con URL final a Amazon y aviso de moneda para evitar sorpresas en la compra.',
      },
    ],
  },
  {
    slug: 'smieals',
    title: 'Smieals',
    description:
      'App para planificar menús semanales, organizar recetas y generar la lista de la compra automáticamente.',
    summary:
      'Diseñé Smieals como un planificador de comidas inteligente que conecta menú semanal, recetas personalizadas y lista de la compra en un solo flujo familiar. Permite crear recetas propias, usar recetas premium o compartidas y calcular ingredientes con actualización en tiempo real.',
    imageUrl: '/images/smieals.svg',
    heroImage: {
      src: '/images/smieals.svg',
      alt: 'Ilustración de una app de planificación de comidas con menú semanal y lista de la compra',
    },
    technologies: ['Next.js', 'React', 'MUI', 'Firebase', 'PWA'],
    cta: 'Ver más',
    content: [
      {
        title: 'Planificación semanal automática',
        body: 'Smieals organiza el menú por semanas, con categorías como desayuno, comida y cena. La interfaz muestra semana anterior, actual y siguiente para ajustar la planificación sin perder contexto.',
      },
      {
        title: 'Recetas conectadas a tu familia',
        body: 'Puedes crear tus propias recetas o reutilizar colecciones premium y compartidas entre familias. El sistema mantiene un espacio común donde cada miembro accede al menú, recetas y preferencias.',
      },
      {
        title: 'Lista de la compra inteligente',
        body: 'La lista se calcula automáticamente a partir del menú semanal y añade elementos personalizados. Cada ítem puede marcarse como comprado o listo, facilitando el control desde el móvil en la compra.',
      },
    ],
    results: [
      {
        label: 'Menú semanal',
        value: '3 semanas visibles',
        description: 'Vista de semana anterior, actual y siguiente para planificar sin fricciones.',
      },
      {
        label: 'Recetas',
        value: 'Premium + propias',
        description: 'Recetas curadas, familiares, compartidas y generadas con IA en un solo catálogo.',
      },
      {
        label: 'Compra',
        value: 'Lista automática',
        description: 'Ingredientes calculados desde el menú, con items personalizados y estado de compra.',
      },
    ],
  },
  {
    slug: 'kuicco',
    title: 'Kuicco',
    description:
      'Álbum digital privado para guardar fotos, vídeos y anécdotas de la infancia y compartirlos con la familia.',
    summary:
      'En 2016 lancé Kuicco con un grupo de amigos: una app web y móvil para crear álbumes de vida de los peques, mantenerlos organizados de forma automática y compartirlos solo con quien elijas.',
    imageUrl: '/images/kuicco.svg',
    logoBackgroundColor: '#3a7366',
    heroImage: {
      src: '/images/kuicco.svg',
      alt: 'Ilustración de álbum digital privado para familias',
    },
    technologies: ['PHP', 'jQuery', 'Bootstrap', 'MySQL'],
    liveUrl: 'https://www.kuicco.com',
    liveCta: 'Visitar kuicco.com',
    cta: 'Ver más',
    content: [
      {
        title: 'Recuerdos privados de la infancia',
        body: 'Kuicco permite crear un álbum de vida para cada hijo, con fotos, vídeos y anécdotas organizadas por fecha y etapa. Fue la forma que encontramos para guardar los momentos especiales y compartirlos de manera íntima con la familia.',
      },
      {
        title: 'Organización automática y recordatorios',
        body: 'La app envía recordatorios mensuales para capturar su sonrisa y mantiene todo ordenado por edades, álbumes y tipo de contenido. También ofrecía impresión de recuerdos en álbumes y regalos directamente desde el móvil.',
      },
      {
        title: 'Compartir con control total',
        body: 'Las invitaciones a familiares incluían permisos configurables para mantener la privacidad. Como responsable del desarrollo web, implementé la interfaz con un framework de PHP y jQuery para sincronizar álbumes entre web y apps iOS/Android.',
      },
    ],
    results: [
      {
        label: 'Familias',
        value: '+1.000',
        description: 'Más de 1.000 familias llegaron a usar Kuicco para guardar y compartir recuerdos.',
      },
      {
        label: 'Plataformas',
        value: 'Web, iOS y Android',
        description: 'Álbumes sincronizados y accesibles tanto desde la web como desde las apps móviles.',
      },
      {
        label: 'Modelo',
        value: 'Freemium',
        description: 'Prueba inicial de 30 días y plan premium con almacenamiento ampliado e invitaciones ilimitadas.',
      },
    ],
  },
  {
    slug: 'board-game-finder',
    title: 'Board Game Finder',
    description:
      'Buscador y recomendador de juegos de mesa que aprende de tus gustos para sugerir títulos relevantes en segundos.',
    summary:
      'Recomendador colaborativo que cruza tus preferencias con las valoraciones de BoardGameGeek para devolver partidas a tu medida. Lideré el front-end para crear una experiencia limpia y responsiva en la búsqueda y descubrimiento.',
    imageUrl: '/images/board-game-finder.ico',
    heroImage: {
      src: '/images/board-game-finder.ico',
      alt: 'Interfaz de Board Game Finder mostrando juegos de mesa recomendados',
    },
    technologies: ['CodeIgniter', 'MySQL', 'JavaScript', 'jQuery', 'Bootstrap', 'Machine Learning'],
    liveUrl: 'https://www.boardgamefinder.net/',
    liveCta: 'Probar Board Game Finder',
    cta: 'Ver más',
    content: [
      {
        title: 'Rol y objetivo',
        body:
          'Junto a un grupo de amigos construimos un recomendador capaz de acotar miles de títulos a unas pocas sugerencias afinadas. Me encargué del front-end completo: maqueté la búsqueda guiada, los listados y las transiciones para que el usuario percibiera velocidad y claridad desde el primer clic.',
      },
      {
        title: 'Cómo funciona',
        body:
          'El motor aplica filtrado colaborativo con factorizar matrices y embeddings de familia exponencial para predecir las valoraciones que un usuario daría a cada juego. Usa el histórico de ratings de BoardGameGeek y devuelve recomendaciones en función de similitud entre perfiles.',
      },
      {
        title: 'Stack y experiencia visual',
        body:
          'Desarrolle la capa frontend con CodeIgniter consumiendo el API que proveía la información necesaria para las recomendaciones. Utilicé JavaScript y jQuery para autocompletados, filtros dinámicos y paginación sin recargar. Diseñé la capa visual con Bootstrap y utilidades CSS para mantener la interfaz accesible y rápida en escritorio y móvil.',
      },
    ],
    results: [
      {
        label: 'Catálogo',
        value: '70k+ juegos',
        description: 'El sistema consume el dataset de BoardGameGeek para cubrir mecánicas, categorías y ediciones.',
      },
      {
        label: 'Experiencia',
        value: 'Recomendaciones en 3 pasos',
        description: 'Búsqueda inicial, afinado por gustos y entrega de sugerencias listas para explorar sin fricciones.',
      },
      {
        label: 'Contribución',
        value: 'Front-end lead',
        description: 'Fuí el responsable del desarrollo frontend y realizar la integración con el motor de recomendaciones.',
      },
    ],
  }
];

export const projects: Project[] = projectDetails.map(
  ({ slug, title, description, imageUrl, logoBackgroundColor, technologies, url, cta }) => ({
    slug,
    title,
    description,
    imageUrl,
    logoBackgroundColor,
    technologies,
    url: url ?? `/projects/${slug}`,
    cta: cta ?? 'Ver más',
  }),
);

export function getProjectDetail(slug: string) {
  return projectDetails.find((project) => project.slug === slug);
}
