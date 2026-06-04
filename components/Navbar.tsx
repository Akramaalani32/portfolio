'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { C, FONTS } from '@/lib/theme';

const LINKS = [
  { label: 'Projets',  href: '#projets' },
  { label: 'À propos', href: '#propos'  },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Navbar — CSS animation, pas de initial opacity:0 framer-motion */}
      <nav
        className='anim-nav delay-0'
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          background: scrolled ? 'rgba(11,10,8,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
          transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 24px',
          height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: FONTS.heading, fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', color: C.text }}>
            Akram dev<span style={{ color: C.accent }}>.</span>portfolio
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className='hidden-mobile'>
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href}
                style={{ color: C.muted, fontFamily: FONTS.body, fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = C.text}
                onMouseLeave={e => (e.target as HTMLElement).style.color = C.muted}
              >
                {label}
              </a>
            ))}
            <a href='#contact' style={{
              background: C.accent, color: C.bg, padding: '8px 20px',
              borderRadius: 999, fontFamily: FONTS.body, fontWeight: 700,
              fontSize: '0.8rem', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.bg, display: 'inline-block' }} />
              Disponible
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', color: C.text, cursor: 'pointer', display: 'none', padding: 4 }}
            className='show-mobile'
          >
            {mobileOpen ? <X size={20} /> : <span style={{ fontSize: 22, lineHeight: 1 }}>&#9776;</span>}
          </button>
        </div>
      </nav>

      {/* Mobile drawer — framer-motion OK ici (pas d'opacity:0 initial au chargement) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{ opacity: 0, y: -8    }}
            transition={{ duration: 0.2  }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 49,
              background: C.s1, borderBottom: `1px solid ${C.border}`,
              padding: '24px', display: 'flex', flexDirection: 'column', gap: 16,
            }}
          >
            {LINKS.map(({ label, href }) => (
              <a key={label} href={href} onClick={() => setMobileOpen(false)}
                style={{ color: C.text, fontFamily: FONTS.body, fontSize: '1.1rem', textDecoration: 'none' }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}