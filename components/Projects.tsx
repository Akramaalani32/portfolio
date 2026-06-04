'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { C, FONTS } from '@/lib/theme';
import { PROJECTS, OTHER_PROJECTS, type Project } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

// ─── Fake UI mockup (remplace par une vraie image avec next/image) ─────────────
function ProjectMockup({ ac }: { ac: string }) {
  return (
    <div style={{
      borderRadius: 12, overflow: 'hidden', marginBottom: 20,
      background: C.s2, border: `1px solid ${C.border}`,
      height: 168, position: 'relative',
    }}>
      {/* Fausse barre de navigateur */}
      <div style={{
        padding: '10px 14px', borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map(c => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, flexShrink: 0 }} />
        ))}
        <div style={{ flex: 1, height: 18, background: C.border, borderRadius: 4, marginLeft: 8 }} />
      </div>

      {/* Faux contenu UI */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <div style={{ width: '30%', height: 28, background: `${ac}20`, borderRadius: 6 }} />
          <div style={{ width: '20%', height: 28, background: C.border, borderRadius: 6 }} />
          <div style={{ flex: 1 }} />
          <div style={{ width: 28, height: 28, background: `${ac}30`, borderRadius: 6 }} />
        </div>
        {[80, 60, 70, 45].map((w, i) => (
          <div key={i} style={{ height: 8, width: `${w}%`, background: i === 0 ? `${ac}25` : C.border, borderRadius: 4, marginBottom: 7 }} />
        ))}
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          {[35, 25, 40].map((pw, i) => (
            <div key={i} style={{ height: 20, width: `${pw}%`, background: i === 0 ? `${ac}20` : C.border, borderRadius: 4 }} />
          ))}
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 8, right: 10,
        fontFamily: FONTS.mono, fontSize: '0.62rem', color: C.muted, opacity: 0.6,
      }}>
        aperçu UI
      </div>
    </div>
  );
}

// ─── Carte projet individuelle ────────────────────────────────────────────────
function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={idx * 0.08}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden' }}
      >
        {/* Barre de couleur signature */}
        <div style={{ height: 3, background: p.ac }} />

        <div style={{ padding: 28 }}>
          {/* En-tête */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '0.68rem', color: C.muted }}>{p.num}</span>
              <h3 style={{ fontFamily: FONTS.heading, fontWeight: 700, fontSize: '1.6rem', color: C.text, lineHeight: 1.05 }}>
                {p.name}
              </h3>
              <p style={{ fontFamily: FONTS.body, fontSize: '0.78rem', color: p.ac, marginTop: 2 }}>{p.tagline}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0, marginLeft: 12 }}>
              <span style={{
                background: `${p.sc}15`, color: p.sc,
                fontSize: '0.68rem', fontFamily: FONTS.body, fontWeight: 600,
                padding: '4px 10px', borderRadius: 999, border: `1px solid ${p.sc}35`,
              }}>
                {p.status}
              </span>
              <span style={{ fontSize: '0.68rem', color: C.muted, fontFamily: FONTS.body }}>{p.role}</span>
            </div>
          </div>

          {/* Mockup (remplace par: <Image src='/screenshots/quickshop.png' ...>) */}
          <ProjectMockup ac={p.ac} />

          {/* Description */}
          <p style={{ color: C.muted, fontSize: '0.9rem', fontFamily: FONTS.body, lineHeight: 1.75, marginBottom: 16 }}>
            {p.description}
          </p>

          {/* Métriques */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {[p.lines, p.endpoints].map(m => (
              <span key={m} style={{
                background: `${C.accent}12`, border: `1px solid ${C.accent}30`,
                color: C.accent, fontSize: '0.7rem', fontFamily: FONTS.mono,
                padding: '3px 10px', borderRadius: 4,
              }}>
                {m}
              </span>
            ))}
          </div>

          {/* Stack */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {p.stack.map(s => (
              <span key={s} style={{
                background: C.bg, border: `1px solid ${C.border}`,
                color: C.muted, fontSize: '0.7rem', fontFamily: FONTS.mono,
                padding: '3px 10px', borderRadius: 4,
              }}>
                {s}
              </span>
            ))}
          </div>

          {/* Toggle défis */}
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: p.ac, fontSize: '0.82rem', fontFamily: FONTS.body, fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 6, padding: 0,
          }}>
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              ↓
            </motion.span>
            {open ? 'Masquer' : 'Voir'} les défis techniques
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ overflow: 'hidden' }}
              >
                <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {p.challenges.map((c, i) => (
                    <div key={i} style={{
                      background: C.bg, border: `1px solid ${C.border}`,
                      borderLeft: `3px solid ${p.ac}`,
                      borderRadius: 8, padding: '12px 16px',
                    }}>
                      <div style={{ color: C.text, fontFamily: FONTS.body, fontWeight: 600, fontSize: '0.85rem', marginBottom: 4 }}>
                        ⚡ {c.q}
                      </div>
                      <div style={{ color: C.muted, fontFamily: FONTS.body, fontSize: '0.8rem', lineHeight: 1.65 }}>
                        {c.a}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </FadeIn>
  );
}

// ─── Section Projets ──────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id='projets' style={{ background: C.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* En-tête de section */}
        <FadeIn>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            marginBottom: 64, flexWrap: 'wrap', gap: 24,
          }}>
            <div>
              <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.accent, letterSpacing: '0.1em' }}>
                02 / PROJETS
              </span>
              <h2 style={{
                fontFamily: FONTS.heading, fontWeight: 800,
                fontSize: 'clamp(2rem, 5vw, 3.6rem)',
                color: C.text, lineHeight: 0.95, marginTop: 8, letterSpacing: '-0.03em',
              }}>
                Ce que<br />je construis.
              </h2>
            </div>
            <p style={{ color: C.muted, fontSize: '0.9rem', fontFamily: FONTS.body, maxWidth: 280, lineHeight: 1.7 }}>
              Projets réels pour marchés réels.
              Clique sur une carte pour voir
              les défis techniques résolus.
            </p>
          </div>
        </FadeIn>

        {/* Grille de projets */}
        <div className='projects-grid' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} idx={i} />)}
        </div>

        {/* Bande "autres projets" */}
        <FadeIn delay={0.25}>
          <div style={{
            marginTop: 32, border: `1px solid ${C.border}`, borderRadius: 16,
            padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center',
          }}>
            <span style={{ fontFamily: FONTS.body, fontSize: '0.82rem', color: C.muted, marginRight: 4 }}>
              Autres projets &#8594;
            </span>
            {OTHER_PROJECTS.map(name => (
              <span key={name} style={{
                background: C.s1, border: `1px solid ${C.border}`,
                color: C.text, fontSize: '0.78rem', fontFamily: FONTS.body,
                padding: '6px 14px', borderRadius: 999,
              }}>
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
