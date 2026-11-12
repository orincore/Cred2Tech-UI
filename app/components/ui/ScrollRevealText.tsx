'use client';

import { useEffect, useRef, type ElementType } from 'react';
import './scroll-reveal-text.css';

/* A heading that lights up word by word as it scrolls into view (taste-skill "word-highlight"
   moment): each word lifts a little and sweeps from faint to full colour, driven by the scroll
   position, so scrolling back reverses it. Phones only (below 641px); elsewhere, under reduced
   motion and without script the heading simply stands as written. */

export interface RevealPart {
  text: string;
  /** Class for this part's wrapper (e.g. an accent line). */
  className?: string;
}

interface ScrollRevealTextProps {
  as?: ElementType;
  className?: string;
  parts: RevealPart[];
}

export function ScrollRevealText({ as: Tag = 'h2', className = '', parts }: ScrollRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const total = parts.reduce((n, p) => n + p.text.split(/\s+/).filter(Boolean).length, 0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const phone = window.matchMedia('(max-width: 640px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!phone.matches || reduced.matches) {
        delete el.dataset.reveal;
        el.style.removeProperty('--r');
        return;
      }
      const H = window.innerHeight;
      const top = el.getBoundingClientRect().top;
      // starts as the heading enters near the bottom, completes by the upper middle of the screen
      const r = Math.min(1, Math.max(0, (H * 0.95 - top) / (H * 0.5)));
      el.dataset.reveal = '';
      el.style.setProperty('--r', r.toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  let i = 0;
  return (
    <Tag ref={ref} className={`srt ${className}`} style={{ ['--n' as string]: total }}>
      {parts.map((part, pi) => {
        const words = part.text.split(/\s+/).filter(Boolean).map((w, wi, arr) => (
          <span key={wi}>
            <span className="srt__w" style={{ ['--i' as string]: i++ }}>{w}</span>
            {wi < arr.length - 1 ? ' ' : ''}
          </span>
        ));
        return part.className ? (
          <span key={pi} className={part.className}>{words}</span>
        ) : (
          <span key={pi}>{words}{pi < parts.length - 1 ? ' ' : ''}</span>
        );
      })}
    </Tag>
  );
}
