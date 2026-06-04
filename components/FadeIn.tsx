'use client';
import { useState, useEffect, useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * FadeIn — animation scroll via IntersectionObserver natif + CSS transitions.
 * Zéro dépendance framer-motion → fiable avec Next.js App Router.
 */
export default function FadeIn({ children, delay = 0, className = '', y = 28 }: FadeInProps) {
  const ref     = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '-40px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                     transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}