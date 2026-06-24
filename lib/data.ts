export type ProjectStatus = 'completed' | 'in-progress' | 'coming-soon'

export type Project = {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  year: string
  role: string
  status: ProjectStatus
  description: string
  highlight: string
  overview: string
  challenge: string
  features: string[]
  stack: string[]
  live: string | null
  github: string | null
}

export const projects: Project[] = [
  // ─── 01 Narratix ────────────────────────────────────────
  {
    id: '01',
    slug: 'narratix',
    title: 'Narratix',
    subtitle: 'Blog & Publishing Platform',
    category: 'Web App',
    year: '2025',
    role: 'Full Stack Developer',
    status: 'coming-soon',
    description:
      'Plataforma de contenido con CMS headless (Sanity), posts en MDX y score Lighthouse 100. Dominio completo de SSG, SEO y performance.',
    highlight:
      'Score Lighthouse 100 en todas las métricas con ISR y optimización avanzada de assets.',
    overview:
      'Narratix es una plataforma de blog moderna construida con Next.js y Sanity como CMS headless. Los posts se escriben en MDX, permitiendo embeber componentes React directamente en el contenido. El objetivo fue alcanzar Lighthouse 100 en todas las métricas.',
    challenge:
      'El mayor reto fue implementar ISR (Incremental Static Regeneration) correctamente: regenerar solo el post editado sin afectar el resto del sitio, manteniendo tiempos de build bajos y el contenido siempre fresco.',
    features: [
      'CMS headless con Sanity Studio integrado',
      'Posts en MDX con componentes React embebidos',
      'Resaltado de código con Shiki (multi-lenguaje)',
      'Tabla de contenidos autogenerada con scroll spy',
      'ISR: revalidación por post sin full rebuild',
      'Lighthouse 100 en Performance, SEO, Accesibilidad y Best Practices',
      'RSS feed automático y sitemap dinámico',
      'Open Graph images generadas dinámicamente',
    ],
    stack: ['Next.js', 'Sanity CMS', 'MDX', 'TypeScript', 'Tailwind CSS', 'Shiki', 'ISR'],
    live: null,
    github: null,
  },

  // ─── 02 DevBoard ────────────────────────────────────────
  {
    id: '02',
    slug: 'devboard',
    title: 'DevBoard',
    subtitle: 'GitHub Productivity Dashboard',
    category: 'SaaS',
    year: '2025',
    role: 'Full Stack Developer',
    status: 'coming-soon',
    description:
      'Panel SaaS que conecta con la API de GitHub para visualizar métricas de productividad personal: commits, PRs, streak y lenguajes más usados.',
    highlight:
      'Autenticación OAuth con GitHub y gráficos interactivos en tiempo real con Recharts.',
    overview:
      'DevBoard es un dashboard personal para desarrolladores que conecta con la API de GitHub via OAuth y muestra métricas de productividad: actividad diaria, repositorios más activos, lenguajes utilizados y racha de commits.',
    challenge:
      'El reto principal fue manejar los límites de rate de la GitHub API eficientemente: implementé un sistema de caché con Redis que almacena los datos por usuario durante 5 minutos, reduciendo las llamadas a la API en un 90%.',
    features: [
      'OAuth con GitHub (NextAuth)',
      'Dashboard con gráficos de actividad (Recharts)',
      'Métricas: commits, PRs, issues, streak',
      'Top repositorios y lenguajes',
      'Caché inteligente con Redis',
      'Exportación de métricas a PDF',
    ],
    stack: ['Next.js', 'TypeScript', 'NextAuth', 'Recharts', 'Prisma', 'PostgreSQL', 'Redis'],
    live: null,
    github: null,
  },

  // ─── 03 SparkAI ─────────────────────────────────────────
  {
    id: '03',
    slug: 'sparkai',
    title: 'SparkAI',
    subtitle: 'AI Writing Assistant',
    category: 'AI Tool',
    year: '2025',
    role: 'Frontend Developer',
    status: 'coming-soon',
    description:
      'Asistente de escritura con IA y streaming de respuestas token a token. Modos de escritura, historial de conversaciones y rate limiting por usuario.',
    highlight:
      'Streaming de respuestas con AI SDK de Vercel y UX conversacional de alto impacto.',
    overview:
      'SparkAI es una herramienta de escritura asistida por IA que permite a los usuarios generar, mejorar y resumir texto en tiempo real. Las respuestas se transmiten token a token (como ChatGPT) para una experiencia fluida.',
    challenge:
      'Implementar el streaming correctamente en Next.js App Router fue el mayor desafío: usé Server Actions con ReadableStream para transmitir los tokens directamente al cliente sin necesidad de un endpoint de API separado.',
    features: [
      'Streaming de respuestas token a token (AI SDK)',
      'Modos: escritor, corrector, resumidor, brainstorm',
      'Historial de conversaciones persistente',
      'Rate limiting por usuario (Upstash)',
      'Exportar conversación a markdown',
      'Atajos de teclado para productividad',
    ],
    stack: ['Next.js', 'AI SDK', 'OpenAI API', 'TypeScript', 'Server Actions', 'Zustand', 'Upstash'],
    live: null,
    github: null,
  },

  // ─── 04 ShopForge ───────────────────────────────────────
  {
    id: '04',
    slug: 'shopforge',
    title: 'ShopForge',
    subtitle: 'Full-Stack E-commerce',
    category: 'E-commerce',
    year: '2025',
    role: 'Full Stack Developer',
    status: 'coming-soon',
    description:
      'Tienda online completa con checkout via Stripe, panel de administración, gestión de órdenes y emails transaccionales. El proyecto más completo del portfolio.',
    highlight:
      'Checkout real con Stripe Webhooks, carrito persistente con Zustand y emails con Resend.',
    overview:
      'ShopForge es una plataforma de e-commerce completa: catálogo de productos, carrito de compras, checkout con Stripe, panel admin para gestionar productos/órdenes, y emails transaccionales automáticos.',
    challenge:
      'La sincronización entre el estado del carrito en el cliente y las sesiones de Stripe fue compleja. Implementé Stripe Checkout Sessions con webhooks para actualizar el estado de la orden de forma confiable incluso si el usuario cierra el navegador.',
    features: [
      'Catálogo con filtros, búsqueda y paginación',
      'Carrito persistente con Zustand + localStorage',
      'Checkout real con Stripe (+ Apple/Google Pay)',
      'Webhooks de Stripe para manejo de órdenes',
      'Panel admin: productos, órdenes, analytics',
      'Emails transaccionales con Resend',
      'SEO dinámico por producto (metadata + JSON-LD)',
    ],
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'NextAuth', 'Zustand', 'Resend'],
    live: null,
    github: null,
  },

  // ─── 05 Syncboard ───────────────────────────────────────
  {
    id: '05',
    slug: 'syncboard',
    title: 'Syncboard',
    subtitle: 'Real-Time Collaborative Kanban',
    category: 'Productivity',
    year: '2025',
    role: 'Full Stack Developer',
    status: 'coming-soon',
    description:
      'Tablero Kanban con colaboración en tiempo real: drag & drop, presencia de usuarios y sincronización instantánea via Supabase Realtime.',
    highlight:
      'Colaboración multi-usuario en tiempo real con presencia y actualizaciones optimistas.',
    overview:
      'Syncboard es una herramienta de gestión de tareas colaborativa donde múltiples usuarios pueden trabajar en el mismo tablero simultáneamente, ver quién está conectado y mover tarjetas con drag & drop en tiempo real.',
    challenge:
      'El mayor reto fue el manejo de conflictos cuando dos usuarios mueven la misma tarjeta simultáneamente. Implementé actualizaciones optimistas con rollback automático usando Supabase Realtime y un sistema de versioning por tarjeta.',
    features: [
      'Drag & drop con dnd-kit (accesible)',
      'Sincronización en tiempo real (Supabase Realtime)',
      'Presencia: avatares de usuarios conectados',
      'Actualizaciones optimistas con rollback',
      'Workspaces y boards múltiples por equipo',
      'Historial de actividad por board',
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'dnd-kit', 'Zustand', 'Tailwind CSS'],
    live: null,
    github: null,
  },

  // ─── 06 Tripcraft ───────────────────────────────────────
  {
    id: '06',
    slug: 'tripcraft',
    title: 'Tripcraft',
    subtitle: 'AI Travel Planner + Maps',
    category: 'PWA',
    year: '2025',
    role: 'Frontend Developer',
    status: 'coming-soon',
    description:
      'Planificador de viajes con itinerarios generados por IA y mapas interactivos (Mapbox). Funciona offline como PWA instalable en móvil.',
    highlight:
      'Funcionalidad offline completa via Service Workers e itinerarios generados con IA.',
    overview:
      'Tripcraft permite planificar viajes completos: el usuario describe su destino, días disponibles y presupuesto, y la IA genera un itinerario día a día. Los puntos de interés aparecen en un mapa interactivo con Mapbox.',
    challenge:
      'Hacer que la app funcione offline fue el mayor desafío técnico. Usé Service Workers con una estrategia cache-first para assets y datos de viajes guardados, combinado con IndexedDB para persistir itinerarios sin conexión.',
    features: [
      'Itinerarios generados con IA (AI SDK)',
      'Mapa interactivo con Mapbox GL JS',
      'PWA: instalable, offline, push notifications',
      'Geolocalización para "cerca de mí"',
      'Guardar y compartir viajes',
      'Presupuesto estimado por día y categoría',
    ],
    stack: ['Next.js', 'TypeScript', 'Mapbox GL', 'AI SDK', 'PWA', 'IndexedDB', 'Tailwind CSS'],
    live: null,
    github: null,
  },

  // ─── 07 DataPulse ───────────────────────────────────────
  {
    id: '07',
    slug: 'datapulse',
    title: 'DataPulse',
    subtitle: 'Interactive Data Visualization',
    category: 'Dashboard',
    year: '2025',
    role: 'Frontend Developer',
    status: 'coming-soon',
    description:
      'Dashboard de visualización de datos financieros con gráficos complejos en D3.js: timelines, heatmaps, scatter plots y filtros dinámicos.',
    highlight:
      'Gráficos 100% custom con D3.js y animaciones SVG frame-perfect a 60fps.',
    overview:
      'DataPulse es un dashboard de análisis de datos que visualiza datasets financieros públicos con gráficos complejos construidos desde cero con D3.js. El usuario puede filtrar por rango de fechas, comparar activos y exportar vistas.',
    challenge:
      'Renderizar +10,000 puntos de datos en D3.js sin degradar el rendimiento fue el reto central. Implementé canvas rendering para los datasets grandes (>1000 puntos) y SVG para los pequeños, con transiciones suaves entre ambos.',
    features: [
      'Line charts, bar charts y heatmaps en D3.js',
      'Scatter plots interactivos con zoom y pan',
      'Filtros dinámicos por fecha y categoría',
      'Canvas rendering para datasets grandes',
      'Exportar gráficos como PNG/SVG',
      'Tooltips interactivos y crosshair',
    ],
    stack: ['Next.js', 'TypeScript', 'D3.js', 'Canvas API', 'React Query', 'Tailwind CSS'],
    live: null,
    github: null,
  },

  // ─── 08 MotionKit ───────────────────────────────────────
  {
    id: '08',
    slug: 'motionkit',
    title: 'MotionKit',
    subtitle: 'Animated Component Library',
    category: 'Open Source',
    year: '2025',
    role: 'Library Author',
    status: 'coming-soon',
    description:
      'Librería de componentes React con animaciones Framer Motion, accesibilidad WCAG completa, documentación interactiva y publicación en npm.',
    highlight:
      'Publicado en npm con TypeScript generics, accesibilidad WCAG 2.1 AA y docs en Storybook.',
    overview:
      'MotionKit es una librería open source de componentes React animados. Cada componente está construido con TypeScript estricto, respeta las preferencias de movimiento reducido (prefers-reduced-motion) y cumple con WCAG 2.1 AA. La documentación vive en Storybook.',
    challenge:
      'El reto más difícil fue diseñar una API de componentes lo suficientemente flexible para ser útil en proyectos diferentes, sin sacrificar type-safety. Usé TypeScript generics y discriminated unions para que los tipos se infieran automáticamente según las props.',
    features: [
      '20+ componentes animados (Modal, Toast, Accordion, Tabs...)',
      'TypeScript avanzado: generics y discriminated unions',
      'Accesibilidad WCAG 2.1 AA completa',
      'Respeta prefers-reduced-motion',
      'Documentación interactiva en Storybook',
      'Tests con Vitest + Testing Library',
      'Publicado en npm (tree-shakeable)',
    ],
    stack: ['React', 'TypeScript', 'Framer Motion', 'Vitest', 'Storybook', 'tsup', 'npm'],
    live: null,
    github: null,
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yankessel' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yankessel' },
  { label: 'Twitter', href: 'https://twitter.com/yankessel' },
]
