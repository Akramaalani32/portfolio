'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { C, FONTS } from '@/lib/theme';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

const STATS = [
  { n: '3+',  l: 'Années d expérience' },
  { n: '10+', l: 'Projets livrés'       },
  { n: '5',   l: 'Stacks maîtrisés'     },
];

export default function Hero() {
  return (
    <section style={{
      background: C.bg, minHeight: '100vh', position: 'relative',
      overflow: 'hidden', display: 'flex', alignItems: 'center', paddingTop: 64,
    }}>
      {/* Dot grid background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(circle at 1px 1px, ${C.border} 1px, transparent 0)`,
        backgroundSize: '36px 36px', opacity: 0.7,
      }} />

      {/* Gold ambient glow */}
      <div style={{
        position: 'absolute', top: '15%', left: '55%', transform: 'translateX(-50%)',
        width: 700, height: 350, pointerEvents: 'none',
        background: `radial-gradient(ellipse, ${C.accent}14 0%, transparent 70%)`,
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          className='hero-grid'
          style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 48, alignItems: 'flex-end' }}
        >
          {/* ── Left column ─────────────────────────────────── */}
          <div>
            {/* "Disponible" badge */}
            <motion.div {...fadeUp(0)} style={{
              display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 32,
              border: `1px solid ${C.border}`, borderRadius: 999, padding: '8px 16px', background: C.s1,
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', background: C.green,
                display: 'block', animation: 'pulse 2s infinite',
              }} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.08em' }}>
                DISPONIBLE POUR MISSIONS
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1 {...fadeUp(0.1)} style={{
              fontFamily: FONTS.heading, fontWeight: 800,
              fontSize: 'clamp(2.2rem, 10vw, 6.8rem)',
              lineHeight: 0.92, letterSpacing: '-0.04em', color: C.text,
              overflowWrap: 'break-word',
            }}>
              Full-Stack<br />
              <span style={{ color: C.accent }}>Developer</span>
              <span style={{ color: C.muted }}>.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p {...fadeUp(0.2)} style={{
              color: C.muted, maxWidth: 'min(520px, 100%)', lineHeight: 1.75,
              fontSize: '1.05rem', fontFamily: FONTS.body, fontWeight: 300, marginTop: 24,
            }}>
              Je construis des produits digitaux de A à Z —{' '}
              interfaces <span style={{ color: C.text, fontWeight: 500 }}>React</span>,
              APIs <span style={{ color: C.text, fontWeight: 500 }}>Node.js</span>,
              bases de données <span style={{ color: C.text, fontWeight: 500 }}>PostgreSQL</span>.
              Spécialisé dans les solutions adaptées aux marchés{' '}
              <span style={{ color: C.accent, fontWeight: 500 }}>d Afrique de l Ouest</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.3)} style={{ display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' }}>
              <a href='#projets' style={{
                background: C.accent, color: C.bg, padding: '12px 28px',
                borderRadius: 999, fontFamily: FONTS.body, fontWeight: 700,
                fontSize: '0.9rem', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                Voir mes projets <ArrowUpRight size={16} />
              </a>
              <a href='#contact' style={{
                border: `1px solid ${C.border}`, color: C.text, padding: '12px 28px',
                borderRadius: 999, fontFamily: FONTS.body, fontSize: '0.9rem',
                textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              }}>
                Me contacter
              </a>
            </motion.div>

            {/* Separator line */}
            <motion.div {...fadeUp(0.45)} style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 56 }}>
              <div style={{ height: 1, width: 48, background: C.border }} />
              <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.muted }}>scroll to explore</span>
            </motion.div>
          </div>

          {/* ── Right column — Stats card ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              border: `1px solid ${C.border}`, background: C.s1,
              borderRadius: 20, padding: 28, flexShrink: 0,
            }}
          >
            {STATS.map(({ n, l }, i) => (
              <div key={i} style={{
                borderBottom: i < STATS.length - 1 ? `1px solid ${C.border}` : 'none',
                paddingBottom: i < STATS.length - 1 ? 20 : 0,
                marginBottom:  i < STATS.length - 1 ? 20 : 0,
              }}>
                <div style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: '2.4rem', color: C.accent, lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: FONTS.body, fontSize: '0.78rem', color: C.muted, marginTop: 4 }}>{l}</div>
              </div>
            ))}

            <div style={{
              marginTop: 24, background: C.bg, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '10px 14px',
              fontFamily: FONTS.mono, fontSize: '0.7rem', color: C.muted,
            }}>
              📍 Cotonou, Bénin<br />
              <span style={{ color: C.text }}>UTC+1</span>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
