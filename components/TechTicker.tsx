'use client';
import { motion } from 'framer-motion';
import { C, FONTS } from '@/lib/theme';
import { TECH_ITEMS } from '@/lib/data';

export default function TechTicker() {
  const items = [...TECH_ITEMS, ...TECH_ITEMS]; // duplicate for infinite loop

  return (
    <div style={{
      background: C.s1,
      borderTop:    `1px solid ${C.border}`,
      borderBottom: `1px solid ${C.border}`,
      padding: '14px 0', overflow: 'hidden',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: 28, whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {items.map((t, i) => (
          <span key={i} style={{ fontFamily: FONTS.mono, fontSize: '0.72rem', color: C.muted, letterSpacing: '0.04em' }}>
            <span style={{ color: C.accent, marginRight: 8 }}>&#8594;</span>{t}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
