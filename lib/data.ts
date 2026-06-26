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
  image?: string   // path relative to /public, e.g. "/images/syncboard.png"
}

export const projects: Project[] = [
  // ─── 01 Syncboard ───────────────────────────────────────
  {
    id: '01',
    slug: 'syncboard',
    title: 'Syncboard',
    subtitle: 'Real-Time Collaborative Kanban',
    category: 'SaaS',
    year: '2026',
    role: 'Full Stack Developer',
    status: 'completed',
    description:
      'Kanban board with real-time collaboration: drag & drop, live presence, threaded card comments, multi-tenant organizations and instant sync via Supabase Realtime.',
    highlight:
      'Sub-50ms sync with Supabase Realtime, multi-tenant orgs, invitation links and full card management — no refresh ever.',
    overview:
      'Syncboard is a collaborative task-management tool where multiple users work on the same board simultaneously, see who is connected and move cards with drag & drop in real time. It supports organizations, board-scoped membership, card priorities, assignees and threaded comments.',
    challenge:
      'The hardest part was eliminating infinite-recursion RLS policies that arise when boards check board_members and vice-versa. The fix was a pair of SECURITY DEFINER helper functions that bypass RLS internally, used by every policy instead of direct subqueries.',
    features: [
      'Real-time sync via Supabase Realtime postgres_changes',
      'Live presence — avatar strip shows who is online',
      'Drag & drop columns and cards with dnd-kit',
      'Multi-tenant organizations with slug-based URLs',
      'Token-based invitation links (no email required)',
      'Card detail modal: assignee, priority, due date, archive',
      'Threaded card comments with real-time updates',
      'GitHub OAuth — one-click sign-in, no passwords',
      'Row Level Security on every table via SECURITY DEFINER helpers',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Supabase', 'dnd-kit', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://syncboard-ten.vercel.app/',
    github: 'https://github.com/ykessel/Syncboard',
    image: '/images/syncboard.png',
  },

  // ─── 02 DevBoard ────────────────────────────────────────
  {
    id: '02',
    slug: 'devboard',
    title: 'DevBoard',
    subtitle: 'GitHub Productivity Dashboard',
    category: 'Dashboard',
    year: '2026',
    role: 'Full Stack Developer',
    status: 'completed',
    description:
      'Personal SaaS dashboard that connects to the GitHub API via OAuth to visualise your productivity: commits, PRs, streaks, top repos and language breakdown — all in one panel.',
    highlight:
      'GitHub OAuth with NextAuth, interactive commit heatmap, language chart and 30-day activity graph built with Recharts.',
    overview:
      'DevBoard is a productivity dashboard for developers. Once you sign in with GitHub, it pulls your contribution data and presents it as a clean visual overview: daily commit heatmap, PR count, active repo list and language distribution. Built with a minimal monochrome design that keeps the data front and centre.',
    challenge:
      'GitHub\'s REST API has tight rate limits per user. The solution was caching each user\'s aggregated stats in the session layer and serving stale-while-revalidate so the dashboard feels instant while refreshes happen in the background.',
    features: [
      'GitHub OAuth sign-in (NextAuth / Auth.js)',
      'Commit activity heatmap for the last 12 months',
      '30-day commit trend line chart (Recharts)',
      'Language distribution doughnut chart',
      'Top repositories by stars, forks and last push',
      'Recent events feed: pushes, PRs, issues',
      'Monochrome slate design with a single cyan accent point',
    ],
    stack: ['Next.js 16', 'TypeScript', 'NextAuth', 'GitHub API', 'Recharts', 'Tailwind CSS'],
    live: 'https://devboard-liard.vercel.app/',
    github: 'https://github.com/ykessel/DevBoard',
    image: '/images/devboard.png',
  },

  // ─── 03 Narratix ────────────────────────────────────────
  {
    id: '03',
    slug: 'narratix',
    title: 'Narratix',
    subtitle: 'Blog & Publishing Platform',
    category: 'Web App',
    year: '2026',
    role: 'Full Stack Developer',
    status: 'completed',
    description:
      'Modern blog platform with MDX posts, syntax-highlighted code blocks, auto-generated RSS feed and a clean editorial design. Articles cover Next.js, TypeScript, CSS and interface craft.',
    highlight:
      'MDX-powered posts with embedded React components, auto RSS feed, reading-time estimates and Open Graph images per article.',
    overview:
      'Narratix is a developer-focused blog built with Next.js App Router. Posts are written in MDX, enabling React components to be embedded directly in content. The design is deliberately minimal — editorial typography with a dark warm palette and generous whitespace — so the words stay centre stage.',
    challenge:
      'Getting Open Graph images to generate dynamically per post (using Next.js opengraph-image route) without referencing localhost in production required careful metadata configuration and verifying the canonical URL at build time.',
    features: [
      'MDX posts with embedded React components',
      'Syntax-highlighted code blocks',
      'Auto-generated RSS feed (/feed.xml)',
      'Reading-time estimates per post',
      'Category / tag filtering',
      'Featured post hero section',
      'Dynamic Open Graph images per article',
      'Dark editorial design with Tailwind Typography',
    ],
    stack: ['Next.js 16', 'TypeScript', 'MDX', 'Tailwind CSS', 'Tailwind Typography'],
    live: 'https://narratix-three.vercel.app/',
    github: 'https://github.com/ykessel/Narratix',
    image: '/images/narratix.png',
  },

  // ─── 04 Vortex ──────────────────────────────────────────
  {
    id: '04',
    slug: 'vortex',
    title: 'Vortex',
    subtitle: 'Digital Agency Website',
    category: 'Marketing Site',
    year: '2025',
    role: 'Frontend Developer',
    status: 'completed',
    description:
      'Bilingual (PT/EN) marketing site for a Brazilian digital agency. Services showcase, portfolio grid, team section, testimonials, multi-step contact form and animated scroll transitions.',
    highlight:
      'Full PT/EN internationalisation with Next.js i18n routing, marquee trust strip, animated section reveals and a conversion-focused contact form.',
    overview:
      'Vortex is the public-facing site for a Brazilian web & mobile agency. The site targets both local (Portuguese) and international (English) clients and is built around a clear narrative: services → portfolio → process → contact. Every section is animated on scroll to keep engagement high.',
    challenge:
      'Implementing bilingual routing cleanly in Next.js App Router — where each language has its own URL segment (/pt and /en) — required a custom i18n setup with locale-aware metadata, canonical tags and hreflang attributes for SEO.',
    features: [
      'Bilingual routing: /pt and /en with Next.js i18n',
      'Services grid with hover-reveal detail panels',
      'Portfolio case study cards with category filter',
      'Animated section reveals on scroll',
      'Marquee company trust strip',
      'Team & about section',
      'Star-rated testimonials carousel',
      'Multi-field contact form with project-type selector',
      'WhatsApp / Calendly / email CTA blocks',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'i18n'],
    live: 'https://vortex-site-zeta.vercel.app/en',
    github: 'https://github.com/ykessel/Vortex',
    image: '/images/vortex.png',
  },

  // ─── 05 Vela ────────────────────────────────────────────
  {
    id: '05',
    slug: 'vela',
    title: 'Vela',
    subtitle: 'Full-Stack E-commerce',
    category: 'E-commerce',
    year: '2025',
    role: 'Full Stack Developer',
    status: 'completed',
    description:
      'Full-stack e-commerce platform with product catalogue, cart, Stripe checkout, and a complete admin panel for managing products, orders and inventory.',
    highlight:
      'End-to-end Stripe integration with webhook-driven order management and a custom admin dashboard for full store control.',
    overview:
      'Vela is a production-ready e-commerce store built from scratch: product browsing, shopping cart, Stripe Checkout, Stripe Webhooks for reliable order state management, and a passwordless admin panel where the owner can create, edit and delete products and view order history.',
    challenge:
      'Keeping cart state consistent across server and client while running Stripe Checkout sessions required careful coordination: cart data is persisted server-side and Stripe Webhooks update order status asynchronously, even if the user closes the browser mid-checkout.',
    features: [
      'Product catalogue with image gallery and filtering',
      'Shopping cart with persistent state',
      'Stripe Checkout with card, Apple Pay and Google Pay',
      'Stripe Webhooks for reliable order lifecycle management',
      'Admin panel: create, edit and delete products',
      'Order management and status tracking',
      'Secure admin authentication',
      'Responsive design across all breakpoints',
    ],
    stack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    live: 'https://vela-pink.vercel.app/',
    github: 'https://github.com/ykessel/Vela',
    image: '/images/vela.png',
  },

  // ─── 06 Portfolio ───────────────────────────────────────
  {
    id: '06',
    slug: 'portfolio',
    title: 'Portfolio',
    subtitle: 'Personal Developer Portfolio',
    category: 'Portfolio',
    year: '2026',
    role: 'Designer & Developer',
    status: 'completed',
    description:
      'This portfolio — editorial dark design with warm tones, massive Archivo typography, staggered Framer Motion reveals and a case-study system for each project.',
    highlight:
      'Editorial "01 / Premium" aesthetic: 158px Archivo headings, Instrument Serif italic accents, JetBrains Mono labels and growX divider animations.',
    overview:
      'Built to showcase work and reflect a clear design voice. The site uses an editorial layout inspired by print design — oversized numerals, tight leading, a warm dark palette and a strict type system. Each project links to a full case study page with overview, challenge and feature breakdown.',
    challenge:
      'The main design challenge was achieving the editorial scale (158px headings) responsively without layout breaking on smaller screens. The solution was fluid type with clamp() — the heading scales between 72px and 158px based on viewport width with no breakpoint jumps.',
    features: [
      'Editorial hero: giant Archivo name, info table, growX divider',
      'Staggered riseIn entrance animations (Framer Motion)',
      'Case study pages per project with overview & challenge',
      'Instrument Serif italic accent in hero subtitle',
      'JetBrains Mono for all labels, metadata and nav',
      'Warm dark palette — radial-gradient background',
      'Fully responsive with fluid clamp() typography',
      'Custom cursor (desktop)',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Archivo', 'Vercel'],
    live: 'https://portfolio-ykessel.vercel.app/',
    github: 'https://github.com/ykessel/portfolio',
    image: '/images/portfolio.png',
  },

  // ─── 07 Prism ───────────────────────────────────────────────
  {
    id: '07',
    slug: 'prism',
    title: 'Prism',
    subtitle: 'Interactive Financial Dashboard',
    category: 'Dashboard',
    year: '2026',
    role: 'Full Stack Developer',
    status: 'completed',
    description:
      'Real-time stock market dashboard with D3.js charts, live data from the Finnhub API, sector heatmap, market treemap and a full watchlist with sparklines.',
    highlight:
      'Area & candlestick charts built with D3.js + React SVG, real-time prices via Finnhub, graceful fallback to demo data when API is unavailable.',
    overview:
      'Prism is a financial data dashboard tracking 8 major stocks (AAPL, MSFT, GOOGL, AMZN, NVDA, META, TSLA, NFLX). It pulls live quotes from the Finnhub API and renders them through a suite of custom D3.js charts — area, candlestick, volume bars, sector heatmap and a market-cap-weighted treemap. All charts are responsive via ResizeObserver.',
    challenge:
      'The Finnhub free tier blocks historical candle data (/stock/candle returns 403). The solution was a hybrid approach: live prices, P/E, 52W high/low and volume come from Finnhub; historical OHLCV for charts is served from seeded mock data that looks realistic. The API key never reaches the client — all calls go through a Next.js server route with a 60s in-memory cache.',
    features: [
      'Live prices, change % and key metrics from Finnhub API',
      'Area chart with gradient fill, crosshair and price tooltip',
      'Candlestick chart with OHLC tooltip',
      'Volume bars chart with green/red coloring',
      'Sector heatmap — 11 S&P 500 sectors, 1D/1W/1M periods',
      'Market treemap — market-cap weighted with change % color',
      'Watchlist table with inline sparklines per ticker',
      'Shimmer skeleton loading states',
      'Graceful fallback to demo data with retry banner',
      'Server-side API route with 60s in-memory cache',
    ],
    stack: ['Next.js 16', 'TypeScript', 'D3.js', 'Finnhub API', 'Tailwind CSS', 'Framer Motion'],
    live: 'https://prism-financial-woad.vercel.app/',
    github: 'https://github.com/ykessel/Prism',
    image: '/images/prism.png',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ykessel' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yankessel' },
  { label: 'Twitter', href: 'https://twitter.com/yankessel' },
]
