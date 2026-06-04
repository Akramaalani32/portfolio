import { StaticImport } from "next/dist/shared/lib/get-img-props";

// ─── PROJETS ──────────────────────────────────────────────────────────────────
export interface Challenge { q: string; a: string; }

export interface Project {
  statusColor?: any;
  screenshot?: string | StaticImport;
  accentColor?: string;
  id: string;
  num: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  challenges: Challenge[];
  status: string;
  sc: string;   // status color
  ac: string;   // accent color
  role: string;
  lines: string;
  endpoints: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'quickshop',
    num: '01',
    name: 'QuickShop',
    tagline: 'Social Commerce · Bénin',
    description:
      'Plateforme de commerce social permettant aux marchands béninois de lancer leur boutique en ligne avec paiement mobile money intégré — de zéro à live en moins de 10 minutes.',
    stack: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Supabase', 'KKiaPay'],
    challenges: [
      {
        q: 'Intégration KKiaPay',
        a: 'Documentation fragmentée → reverse engineering des endpoints + tests webhook en local avec ngrok. Gestion des timeouts et retry automatique.',
      },
      {
        q: 'Certification vendeur multi-étapes',
        a: 'Workflow : upload doc → review admin → validation paiement → activation badge. Transactions Prisma pour garantir l atomicité de chaque étape.',
      },
      {
        q: 'Architecture multi-tenant',
        a: 'Row Level Security Supabase sur chaque table. Chaque marchand ne voit que ses propres données — zero code de filtrage côté app.',
      },
    ],
    status: 'En production',
    sc: '#4ADE80',
    ac: '#E9C46A',
    role: 'Full-Stack Solo',
    lines: '~4 200 lignes TS',
    endpoints: '18 API endpoints',
  },
  {
    id: 'afristream',
    num: '02',
    name: 'AfriStream',
    tagline: 'Streaming Platform · Afrique Francophone',
    description:
      'Alternative africaine à Twitch/Kick combinant gaming, football et tournois esport pour les 50M+ francophones. Live, chat temps réel, rooms de tournois intégrées.',
    stack: ['React', 'Node.js', 'Socket.io', 'Mux', 'Express', 'Redis'],
    challenges: [
      {
        q: 'Chat temps réel multi-rooms',
        a: 'Socket.io avec namespaces par channel. Historique des 50 derniers messages en Redis avec TTL. Reconnexion automatique côté client.',
      },
      {
        q: 'Streaming vidéo adaptatif',
        a: 'Ingest RTMP via Mux → delivery HLS. Qualité automatique selon la bande passante — crucial pour les connexions africaines variables.',
      },
      {
        q: 'Latence Afrique de l Ouest',
        a: 'CDN edge nodes proches de l AOF + compression gzip aggressive + lazy loading des assets non-critiques au-dessus de la fold.',
      },
    ],
    status: 'En développement',
    sc: '#60A5FA',
    ac: '#60A5FA',
    role: 'Full-Stack Solo',
    lines: '~3 600 lignes',
    endpoints: '12 API endpoints',
  },
  {
    id: 'boostly',
    num: '03',
    name: 'Boostly',
    tagline: 'SMM Reseller Panel · SaaS',
    description:
      'Dashboard complet pour agences digitales : achat et revente de services social media automatisé, intégration CinetPay Mobile Money, sync temps réel des commandes.',
    stack: ['React', 'Node.js', 'Express', 'CinetPay', 'PostgreSQL', 'node-cron'],
    challenges: [
      {
        q: 'Sync automatique des commandes',
        a: 'Cron jobs node-cron toutes les 5 min pour polling API tierce. File d attente pour éviter les race conditions sur les statuts.',
      },
      {
        q: 'Intégration CinetPay',
        a: 'Webhooks de confirmation de paiement avec vérification de signature HMAC. Retry queue pour les callbacks manqués.',
      },
      {
        q: 'États asynchrones complexes',
        a: 'Loading states granulaires par commande avec polling optimiste. L UI se met à jour immédiatement, confirmation en arrière-plan.',
      },
    ],
    status: 'Livré client',
    sc: '#C084FC',
    ac: '#C084FC',
    role: 'Développeur freelance',
    lines: '~2 800 lignes',
    endpoints: '14 API endpoints',
  },
];

// ─── AUTRES PROJETS ───────────────────────────────────────────────────────────
export const OTHER_PROJECTS = [
  'SaveLock (Mobile Savings)',
  'GIDEON (AI Voice Assistant)',
  'ProBetExpert (Betting Platform)',
  'Prompt Lab (AI Community)',
  'Connecto (Networking App)',
];

// ─── TECH TICKER ──────────────────────────────────────────────────────────────
export const TECH_ITEMS = [
  'React', 'Next.js 14', 'TypeScript', 'Node.js',
  'Express', 'PostgreSQL', 'Supabase', 'Prisma ORM',
  'React Native', 'Socket.io', 'Tailwind CSS',
  'KKiaPay', 'CinetPay', 'REST API', 'Git',
];

// ─── STACK CODE (section About) ───────────────────────────────────────────────
export const STACK_CODE = [
  { key: 'frontend',  val: '["React", "Next.js", "TypeScript"]',    color: '#93C5FD' },
  { key: 'backend',   val: '["Node.js", "Express", "Prisma"]',       color: '#86EFAC' },
  { key: 'database',  val: '["PostgreSQL", "Supabase"]',             color: '#FCA5A5' },
  { key: 'mobile',    val: '["React Native", "Expo"]',               color: '#FCD34D' },
  { key: 'payments',  val: '["KKiaPay", "CinetPay", "MTN MoMo"]',   color: '#E9C46A' },
];
