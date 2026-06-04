'use client';
import { Mail, Github, MessageCircle } from 'lucide-react';
import { C, FONTS } from '@/lib/theme';
import FadeIn from '@/components/FadeIn';

// ✏️ Remplace par ton vrai numéro (format international, sans +)
const WHATSAPP_NUMBER = '22997231137';
const WHATSAPP_MSG    = encodeURIComponent("Bonjour, j'ai vu ton portfolio et j'aimerais discuter d'un projet.");
const WHATSAPP_URL    = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Contact() {
  return (
    <section id='contact' style={{ background: C.bg, padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>

        {/* Titre */}
        <FadeIn>
          <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.accent, letterSpacing: '0.1em' }}>
            04 / CONTACT
          </span>
          <h2 style={{
            fontFamily: FONTS.heading, fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            color: C.text, lineHeight: 0.92,
            marginTop: 12, marginBottom: 24, letterSpacing: '-0.04em',
          }}>
            Travaillons<br />
            <span style={{ color: C.accent }}>ensemble</span>.
          </h2>
          <p style={{
            color: C.muted, fontFamily: FONTS.body, fontSize: '1rem', lineHeight: 1.75,
            maxWidth: 420, margin: '0 auto 48px',
          }}>
            Vous avez un projet, une mission freelance ou une opportunité ?
            Je réponds sous 24h. Toujours.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.1}>
          <div className='contact-btns' style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 80, flexWrap: 'wrap' }}>

            {/* Email */}
            <a href='mailto:alaniakram32@example.com' style={{
              background: C.accent, color: C.bg, padding: '14px 32px', borderRadius: 999,
              fontFamily: FONTS.body, fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <Mail size={18} /> alaniakram32@example.com
            </a>

            {/* GitHub */}
            <a href='https://github.com/akramaalani32' target='_blank' rel='noopener noreferrer' style={{
              border: `1px solid ${C.border}`, color: C.text, padding: '14px 32px', borderRadius: 999,
              fontFamily: FONTS.body, fontSize: '1rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <Github size={18} /> GitHub
            </a>

            {/* WhatsApp */}
            <a href={WHATSAPP_URL} target='_blank' rel='noopener noreferrer' style={{
              background: '#25D366', color: '#fff', padding: '14px 32px', borderRadius: 999,
              fontFamily: FONTS.body, fontWeight: 700, fontSize: '1rem',
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <MessageCircle size={18} /> WhatsApp
            </a>

          </div>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.2}>
          <div className='footer-bar' style={{
            borderTop: `1px solid ${C.border}`, paddingTop: 32,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
          }}>
            <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.muted }}>
              © 2025 — Cotonou, Bénin · Afrique de l Ouest
            </span>
            <span style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: '0.9rem', color: C.border, letterSpacing: '-0.02em' }}>
              dev<span style={{ color: C.accent }}>.</span>portfolio
            </span>
            <span style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.muted }}>
              Next.js · Tailwind · Framer Motion
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}