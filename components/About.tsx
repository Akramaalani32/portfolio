'use client';
import { Github, Mail } from 'lucide-react';
import { C, FONTS } from '@/lib/theme';
import { STACK_CODE } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const VALUES = [
  {
    icon: '🌍',
    title: 'Ancré en Afrique',
    desc: 'Bénin-based. Je construis pour des marchés où les solutions standard n existent pas. KKiaPay, CinetPay, MTN MoMo — je connais l écosystème.',
  },
  {
    icon: '⚡',
    title: 'Builder, pas juste codeur',
    desc: 'Je livre des MVPs fonctionnels en quelques semaines. Pas de maquettes qui dorment — des produits que les gens utilisent vraiment.',
  },
  {
    icon: '🔧',
    title: 'Full-stack réel',
    desc: 'De l interface React jusqu au schéma PostgreSQL, sans déléguer la partie difficile. Un interlocuteur, une responsabilité.',
  },
];

const BIO = [
  'Je suis développeur full-stack avec une approche orientée produit. Mon quotidien : transformer des idées en applications concrètes — des interfaces React jusqu aux APIs Node.js, en passant par la modélisation de bases de données.',
  'Ce qui me distingue : je construis pour des marchés réels. Basé au Bénin, j ai appris à intégrer des solutions de paiement locales (KKiaPay, CinetPay, MTN Mobile Money), à naviguer dans des écosystèmes où les solutions clé en main n existent pas.',
  'Parmi mes projets actuels : QuickShop, une plateforme de social commerce pour les marchands d Afrique de l Ouest, et AfriStream, une plateforme de streaming live pensée pour la communauté africaine francophone.',
];

export default function About() {
  return (
    <section id='propos' style={{
      background: C.s1,
      borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`,
      padding: '100px 0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className='about-grid' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

          {/* ── Colonne gauche — Bio ─────────────────────────── */}
          <div>
            <FadeIn>
              <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.accent, letterSpacing: '0.1em' }}>
                03 / À PROPOS
              </span>
              <h2 style={{
                fontFamily: FONTS.heading, fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                color: C.text, lineHeight: 0.95, marginTop: 8, marginBottom: 28, letterSpacing: '-0.03em',
              }}>
                Développeur<br />
                <span style={{ color: C.accent }}>&amp; Builder</span>.
              </h2>
            </FadeIn>

            {BIO.map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p style={{
                  color: C.muted, fontFamily: FONTS.body, fontSize: '0.95rem',
                  lineHeight: 1.8, fontWeight: 300, marginBottom: 16,
                }}>
                  {text}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
                {/* ✏️ Remplace les href par tes vraies URLs */}
                <a href='https://github.com/akramaalani32' target='_blank' rel='noopener noreferrer' style={{
                  border: `1px solid ${C.border}`, color: C.text, padding: '10px 20px',
                  borderRadius: 8, fontFamily: FONTS.body, fontSize: '0.85rem',
                  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  <Github size={14} /> GitHub
                </a>
                <a href='mailto:alaniakram32@example.com' style={{
                  background: C.accent, color: C.bg, padding: '10px 20px',
                  borderRadius: 8, fontFamily: FONTS.body, fontWeight: 700,
                  fontSize: '0.85rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}>
                  <Mail size={14} /> Me contacter
                </a>
              </div>
            </FadeIn>
          </div>

          {/* ── Colonne droite — Values + Code card ─────────── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {VALUES.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{
                  background: C.bg, border: `1px solid ${C.border}`,
                  borderRadius: 14, padding: '20px 22px',
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                }}>
                  <span style={{ fontSize: '1.4rem', flexShrink: 0, lineHeight: 1 }}>{v.icon}</span>
                  <div>
                    <div style={{ fontFamily: FONTS.heading, fontWeight: 700, color: C.text, fontSize: '1rem', marginBottom: 6 }}>
                      {v.title}
                    </div>
                    <div style={{ fontFamily: FONTS.body, color: C.muted, fontSize: '0.83rem', lineHeight: 1.7 }}>
                      {v.desc}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Stack code card */}
            <FadeIn delay={0.35}>
              <div style={{
                background: C.bg, border: `1px solid ${C.border}`,
                borderRadius: 14, padding: '20px 24px',
                fontFamily: FONTS.mono, fontSize: '0.76rem',
              }}>
                <div style={{ color: C.muted, marginBottom: 14, fontSize: '0.68rem' }}>
                  <span style={{ color: C.accent }}>const</span>
                  <span style={{ color: C.text }}> stack </span>
                  <span style={{ color: C.muted }}>=</span>
                  <span style={{ color: C.text }}> {'{'}</span>
                </div>
                {STACK_CODE.map(({ key, val, color }) => (
                  <div key={key} style={{ marginBottom: 7, paddingLeft: 16 }}>
                    <span style={{ color: '#93C5FD' }}>{key}</span>
                    <span style={{ color: C.muted }}>: </span>
                    <span style={{ color }}>{val}</span>
                    <span style={{ color: C.muted }}>,</span>
                  </div>
                ))}
                <div style={{ color: C.text }}>{'}'}</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
