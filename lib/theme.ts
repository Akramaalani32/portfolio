// ─── Palette de couleurs ──────────────────────────────────────────────────────
export const C = {
  bg:       '#0B0A08',   // fond principal
  s1:       '#141210',   // surface 1 (cards)
  s2:       '#1C1917',   // surface 2 (nested)
  border:   '#2A2420',   // bordures
  accent:   '#E9C46A',   // or chaud (couleur signature)
  accentLo: 'rgba(233,196,106,0.10)', // accent très transparent
  text:     '#EDE8DF',   // texte principal
  muted:    '#7A7265',   // texte secondaire
  green:    '#4ADE80',   // vert "disponible"
} as const;

// ─── Polices (CSS variables injectées par next/font dans layout.tsx) ───────────
export const FONTS = {
  heading: 'var(--font-syne)',        // Titres — Syne 700/800
  mono:    'var(--font-space-mono)',  // Code, badges — Space Mono
  body:    'var(--font-outfit)',      // Corps de texte — Outfit 300-700
} as const;
